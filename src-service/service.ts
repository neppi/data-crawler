import path from 'path';
import { initInfluxClient } from './influx';
import { setSettings } from './settings';
import { initWebserver } from './web-server';

const LISTEN_HOST = process.env.LISTEN_HOST || '0.0.0.0';
const LISTEN_PORT = parseInt(process.env.LISTEN_PORT || '3000');
const INFLUX_URL = process.env.INFLUX_URL || 'http://127.0.0.1:8086';
const INFLUX_TOKEN =
  process.env.INFLUX_TOKEN ||
  'MvkXpPm-8-E9qplBb9Y-F84U4NQ6iqkr1hJZGjiKchGM6ZNq9oHE9Wdux3r3KYNgj84gLGtq4oobUc_38xWzBw==';
const PUBLIC_PATH = process.env.PUBLIC_PATH || path.resolve(path.normalize(__dirname + '/../public'));

setSettings({
  LISTEN_HOST,
  LISTEN_PORT,
  PUBLIC_PATH,
  INFLUX_URL,
  INFLUX_TOKEN,
});

initWebserver(LISTEN_HOST, LISTEN_PORT, PUBLIC_PATH);
initInfluxClient(INFLUX_URL, INFLUX_TOKEN);
