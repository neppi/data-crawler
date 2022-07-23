#! /usr/bin/node

import fs from 'fs';
import path from 'path';
import child from 'child_process';
const re = /\r\n|\n\r|\n|\r/g;

const folderToVersion = process.argv[2];
const versionFilePath = path.resolve(path.normalize(folderToVersion + '/.version'));
const templateFileName = process.argv[3];

const getFolderHash = (folder) => {
  const command = folder ? `git log -n 1 --format="%H" -- ${folder}` : `git log -n 1 --format="%H"`;
  return child.execSync(command).toString('utf8').replace('\n', ' ').trim().slice(0, 7);
};

const countHashForFolder = (folder, oldHash, currentHash) => {
  // const command = folder ? `git rev-list --ancestry-path ${oldHash}..${currentHash} -- ${folder}` : `git rev-list --ancestry-path ${oldHash}..${currentHash}`;
  let currenthashIndex = 0;
  let oldHashIndex = 0;
  const command = folder ? `git log --format="%H" -- ${folder}` : `git log --format="%H"`;
  const hashes = child.execSync(command).toString('utf8').split('\n');
  for (let a = 0; a < hashes.length; a++) {
    if (hashes[a].indexOf(currentHash) > -1) {
      currenthashIndex = a;
    }
    if (hashes[a].indexOf(oldHash) > -1) {
      oldHashIndex = a;
    }
  }
  return oldHashIndex - currenthashIndex;
};

const ReplaceWithValue = (someLines, nameOfVar, dataToSet) => {
  let replaced = false;
  someLines.forEach((aLine, index) => {
    if (someLines[index].includes(nameOfVar)) {
      replaced = true;
      someLines[index] = aLine.replace(nameOfVar, dataToSet);
    }
  });
  if (replaced) {
    console.log(`=> \x1b[35m ${nameOfVar} \x1b[0m has been filled with \x1b[33m ${dataToSet} \x1b[0m`);
  }
};

const buildTag = (versionInfos) => {
  const currentGlobalHash = getFolderHash();
  const currentFolderHash = getFolderHash(path.dirname(versionFilePath));

  const folderBehind = countHashForFolder(path.dirname(versionFilePath), versionInfos.folderHash, currentFolderHash);
  const globalBehind = countHashForFolder(null, versionInfos.globalHash, currentGlobalHash);

  return `${versionInfos.prefix}_F${folderBehind}|${currentFolderHash}_G${globalBehind}|${currentGlobalHash}`;
};

const DoCommand = (someLines, aCommand, aVarToReplace, cb) => {
  let dataToSet = '';
  try {
    dataToSet = child.execSync(aCommand).toString('utf8').replace(re, ' ').trim();
    if (cb && typeof cb === 'function') {
      dataToSet = cb(dataToSet);
    }
  } catch (e) {
    console.error('\x1b[31m', "Error when doing '" + aCommand + "'!", '\x1b[0m');
  }
  ReplaceWithValue(someLines, aVarToReplace, dataToSet);
};

if (folderToVersion == null || !fs.existsSync(versionFilePath)) {
  console.error(`There must exist a .version versionFilePath in the folderToVersion ${folderToVersion}`);
  process.exit(1);
} else {
  if (templateFileName == undefined || templateFileName.indexOf('.template') === -1) {
    console.error(`You have to provide a *.template versionFilePath to inject the version information.`);
    process.exit(1);
  } else {
    const versionInfos = JSON.parse(fs.readFileSync(versionFilePath));

    const Lines = fs.readFileSync(templateFileName).toString('utf8').replace(re, '\n').split('\n');
    const versionFileName = process.argv[4] || templateFileName.split('.template')[0];

    console.log('Embedding GIT stats into file: ' + versionFileName);

    if (Lines != null) {
      const gitBuildDate = new Date().toISOString();
      ReplaceWithValue(Lines, 'GIT_BUILD_DATE', gitBuildDate);
      ReplaceWithValue(Lines, 'GIT_TAG', buildTag(versionInfos));
      ReplaceWithValue(Lines, 'GIT_PROJECT_NAME', versionInfos.name);
      DoCommand(Lines, 'git rev-parse HEAD', 'GIT_HEAD_HASH');
      DoCommand(Lines, 'git branch', 'GIT_BRANCHES');
      DoCommand(Lines, 'git branch', 'GIT_CURRENT_BRANCH', (someBranches) => {
        let result = someBranches;
        const splittedBranches = someBranches.split(' ');
        splittedBranches.map((aBranch, index) => {
          if (aBranch === '*') {
            result = splittedBranches[index + 1];
          }
        });
        return result;
      });
    }

    const aFile = fs.createWriteStream(versionFileName);
    aFile.write(Lines.join('\n'));
    aFile.end();

    console.log(versionFileName + ' was rewritten.');
  }
}
