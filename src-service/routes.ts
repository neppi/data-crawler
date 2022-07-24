import { settings } from './settings';
import { Express, Request, Response } from 'express';
import { CrawlerServiceVersion } from '../lib/version';

export function defineAllRoutes(app: Express): void {
  app.get('/api/v0/info', (req: Request, res: Response) => {
    res.json({
      description: 'To pull personal data from foreign services (hart rate, speed, vitamin d level).',
      version: CrawlerServiceVersion,
    });
  });

  app.get('/api/v0/version', (req: Request, res: Response) => {
    res.json(CrawlerServiceVersion);
  });

  app.get('/api/v0/settings', (req: Request, res: Response) => {
    res.json(settings);
  });
}
