import { TWebSocketMessage } from './types';

const isBrowserFunction = new Function('try {return this === window;}catch(e){ return false;}');
const isBrowser = isBrowserFunction();

const now = () => {
  return new Date().toISOString().split('T')[1].split('Z')[0];
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type TBufferObject = {
  buffer: Buffer;
  lastTime: number;
  name: string;
};

const logTypes = {
  log: 'Log',
  info: 'Info',
  warn: 'Warn',
  error: 'Error',
  success: 'Success',
  time: 'Time',
  timeEnd: 'TimeEnd',
};

const colors = {
  Log: '#1F1F1F',
  Info: '#2D60B4',
  Warn: '#FF6C22',
  Error: '#ff0000',
  Success: '#00A800',
};

const replacers = ['[0m', '[31m', '[32m', '[33m', '[34m', '[35m', '[91m'];

const prepareForChrome = (logType, ...args) => {
  const cssRules = [`color: ${colors[logType]}`];
  let stuff = `%c${logType}: `;
  for (let a = 0; a < args.length; a++) {
    let arg = args[a].toString();
    replacers.forEach((repl) => {
      while (arg.indexOf(repl) > -1) arg = arg.replace(repl, '');
    });
    stuff += `%c${arg}`;
    cssRules.push(`color: ${colors[logType]}`);
  }
  console.log(stuff, ...cssRules);
};

export let log = (...args: Array<any>): void => {
  if (isBrowser) {
    prepareForChrome(logTypes.log, args);
  } else {
    console.log(now(), 'Log:', ...args);
  }
};

export let info = (...args: Array<any>): void => {
  if (isBrowser) {
    prepareForChrome(logTypes.info, args);
  } else {
    console.log(now(), 'Info:\x1b[34m', ...args, '\x1b[0m');
  }
};

export let warn = (...args: Array<any>): void => {
  if (isBrowser) {
    prepareForChrome(logTypes.warn, args);
  } else {
    console.log(now(), 'Warning:\x1b[91m', ...args, '\x1b[0m');
  }
};

export let error = (...args: Array<any>): void => {
  if (isBrowser) {
    prepareForChrome(logTypes.error, args);
  } else {
    console.log(now(), 'Error:\x1b[31m', ...args, '\x1b[0m');
  }
};

export let success = (...args: Array<any>): void => {
  if (isBrowser) {
    prepareForChrome(logTypes.success, args);
  } else {
    console.log(now(), 'Success:\x1b[32m', ...args, '\x1b[0m');
  }
};

export function deserializeBuffers(jsonObject: Record<string, unknown>): void {
  if (jsonObject != null) {
    Object.entries(jsonObject).forEach(([key, value]) => {
      if (typeof value === 'object') {
        if (
          value != null &&
          Object.keys(value).length === 2 &&
          value.type != null &&
          value.data != null &&
          value.type === 'Buffer'
        ) {
          jsonObject[key] = Buffer.from(value.data);
        } else {
          deserializeBuffers(value);
        }
      }
    });
  }
}

export const checkMessage = (message: TWebSocketMessage): boolean => {
  return message != null && message.type != null && message.payload != null;
};

export const toMessage = (type: string, payload: unknown): TWebSocketMessage => {
  return {
    type,
    payload,
  };
};

export const toStringMessage = (type: string, payload: unknown = ''): string => {
  return JSON.stringify(toMessage(type, payload));
};
