import { TServiceSettings } from '../lib/types';
import { TCrawlerServiceVersion } from '../lib/version';

type TInfo = {
  description: string;
};

class APIClient {
  constructor() {}

  async getInfo(): Promise<TInfo> {
    return fetch('/api/v0/info').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  async geTCrawlerServiceVersion(): Promise<TCrawlerServiceVersion> {
    return fetch('/api/v0/version').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  async getSettings(): Promise<TServiceSettings> {
    return fetch('/api/v0/settings').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

export const apiClient = new APIClient();
