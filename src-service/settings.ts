import { TServiceSettings } from '../lib/types';

export let settings: TServiceSettings;

export function setSettings(newSettings: TServiceSettings) {
  settings = newSettings;
}
