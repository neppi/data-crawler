import React, { useEffect, useState } from 'react';
import Readme from './Readme';
import ExpertTab from './ExpertsTab';
import SCPINavBar from './SCPINavBar';
import classNames from 'classnames';
import StatusTable from './StatusTable';
import SettingsTable from './SettingsTable';
import ControllersView from './ControllersView';
import { AllIcons } from './IconsAvail';
import { Container } from 'react-bootstrap';
import { useWebSocket } from './WebSocketHook';
import { toStringMessage } from '../../lib/utils';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MessageTypes, TWebSocketMessage, TServiceSettings, TServiceState } from '../../lib/types';
import { CrawlerLogo } from './CrawlerLogo';

type SideBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Content = ({ toggle, isOpen }: SideBarProps): React.ReactElement => {
  const [state, setState] = useState<TServiceState>({} as TServiceState);
  const [settings, setSettings] = useState<TServiceSettings>({} as TServiceSettings);

  const webSocket = useWebSocket({});

  const checkMessage = (message: TWebSocketMessage): boolean => {
    return message != null && message.type != null && message.payload != null;
  };

  useEffect(() => {
    if (webSocket.data != null) {
      const { message } = webSocket.data;
      if (checkMessage(webSocket.data.message)) {
        switch (message.type) {
          case MessageTypes.SettingsUpdate: {
            if (typeof message.payload === 'object') {
              setSettings(message.payload as TServiceSettings);
            }

            break;
          }
        }
      }
    }
  }, [webSocket.data]);

  function sendSCPICommand(id: string, command: string) {
    webSocket.send(toStringMessage(MessageTypes.CommandForService, { id, command }));
  }

  return (
    <div className={classNames('content')}>
      <SCPINavBar toggle={toggle} isOpen={isOpen} />
      <Container fluid className={classNames('innerContent', { 'is-open': isOpen })}>
        <div>
          <Routes>
            <Route
              path="controllers"
              element={<ControllersView settings={settings} handleNewSCPICommand={sendSCPICommand} />}
            />
            <Route path="settings" element={<SettingsTable settings={settings} />} />
            <Route path="status" element={<StatusTable state={state} />} />
            <Route path="expert" element={<ExpertTab settings={settings} state={state} />} />
            <Route path="readme" element={<Readme />} />
            <Route path="icons" element={<AllIcons />} />
            <Route path="logo" element={<CrawlerLogo />} />
            <Route path="*" element={<Navigate to="/logo" replace />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default Content;
