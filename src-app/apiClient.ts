import { ControllerTypes } from '../lib/commands';
import { TLatencyHistogram } from '../lib/types';
import { TSCPIServiceVersion } from '../lib/version';

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

  async getSCPIServiceVersion(): Promise<TCrawlerServiceVersion> {
    return fetch('/api/v0/version').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

export const apiClient = new APIClient();
