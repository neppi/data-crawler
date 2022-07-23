/* eslint-disable guard-for-in */
import fs from 'fs';
import yaml from 'js-yaml';

const vers = JSON.parse(fs.readFileSync('./.version', 'utf8'));
const pack = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const devYML = yaml.load(fs.readFileSync('./docker-compose.yml', 'utf8'));

if (vers != null && vers.prefix != null && pack.version != null) {
  const currVersion = pack.version;
  const newVersion = vers.prefix;

  console.log(`Try to replace \x1b[91m${currVersion}\x1b[0m in package.json with ${newVersion}\x1b[0m`);

  pack.version = newVersion;

  if (pack.scripts != null) {
    for (const key in pack.scripts) {
      const value = pack.scripts[key];
      if (value.includes(currVersion)) {
        console.log(`|-> Try to replace \x1b[91m${currVersion}\x1b[0m in ${key} with \x1b[32m${newVersion}\x1b[0m`);
        pack.scripts[key] = pack.scripts[key].replace(new RegExp(currVersion, 'g'), newVersion);
      }
    }
  }
  fs.writeFileSync('./package.json', JSON.stringify(pack, null, 2));

  if (devYML != null && devYML.services != null && devYML.services['device-manager-8k'] != null) {
    console.log(
      `Try to replace \x1b[91m${currVersion}\x1b[0m in ./docker-compose.yml with \x1b[32m${newVersion}\x1b[0m`,
    );
    const DM8k = devYML.services['device-manager-8k'];
    if (DM8k.image != null) {
      console.log(
        `|-> Try to replace ${currVersion}\x1b[0m in services.device-manager-8k.image with \x1b[32m${newVersion}\x1b[0m`,
      );
      DM8k.image = DM8k.image.replace(currVersion, newVersion);
    }
  }
  fs.writeFileSync('./docker-compose.yml', yaml.dump(devYML));

  console.log('Done');
}
