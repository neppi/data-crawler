import _get from 'lodash/get';
import React from 'react';
import { useEffect } from 'react';
import { apiClient } from '../apiClient';
import { TServiceSettings } from '../../lib/types';
import { Container, Table } from 'react-bootstrap';

export default function SettigsTable(): React.ReactElement {
  const [settings, setSettings] = React.useState<TServiceSettings>({} as TServiceSettings);

  useEffect(() => {
    (async () => {
      setSettings(await apiClient.getSettings());
    })();
  }, [settings]);

  return (
    <Container>
      <h3 className="mt-5">Settings</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Listen host</td>
            <td>{_get(settings, 'LISTEN_HOST', '-')}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Listen port</td>
            <td>{_get(settings, 'LISTEN_PORT', '-')}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
