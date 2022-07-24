// Setting app mode - this has to happen before anything else
// import fs from 'fs';
import http from 'http';
import morgan from 'morgan';
import express from 'express';
import { info } from '../lib/utils';
import { defineAllRoutes } from './routes';
// import { updateSettingsOnClients } from './settings';
// import { updateStateOnClients } from './state';
import { MessageTypes, TServiceSettings, TWebSocketMessage } from '../lib/types';
import { initWebSocketServer, WebsocketServerEvents } from './setupWebSocket';

export const initWebserver = (host: string, port: number, publicPath: string): void => {
  info('initWebserver');

  const app = express();

  const webServer = http.createServer(app);

  /*
  const socketServer = initWebSocketServer(webServer);

  socketServer.on(WebsocketServerEvents.onNewClientConnected, () => {
    updateStateOnClients();
    updateSettingsOnClients();
  });

  socketServer.on(WebsocketServerEvents.onNewClientMessage, (message: TWebSocketMessage) => {
    switch (message.type) {
      // process messages from clients
      case MessageTypes.CommandForService: {
        const scpiCommand = message.payload as TSCPIQuestion;
        const controller = controllers.find((c: SCPIClient) => c.id === scpiCommand.id);
        if (controller != null) {
          controller.sendQuestion(scpiCommand);
        }
        break;
      }

      default: {
        console.log('socketServer.on.onNewClientMessage', message);
      }
    }
  });
  */

  app.use(morgan(':date[iso] Log: :method :url for :remote-addr :response-time ms'));
  app.use(express.static(publicPath));

  defineAllRoutes(app);

  app.use((req, res) => res.sendFile(`${publicPath}/index.html`));

  webServer.listen(port, host, () => {
    info(`The monitoring interface is listening on [32m${host}[0m:[35m${port}[0m`);
    info(`|-> Serving content from: [35m${publicPath}[0m`);
  });
};
