import _get from 'lodash/get';
import React, { useEffect, useState } from 'react';
import { apiClient } from '../apiClient';
import { TDataSource } from '../../lib/types';
import { Card, Container } from 'react-bootstrap';

export default function DataSourcesView(): React.ReactElement {
  const [dataSources, setDataSources] = useState<Array<TDataSource>>([]);

  useEffect(() => {
    (async () => {
      setDataSources(await apiClient.getDataSources());
    })();
  }, [dataSources]);

  return (
    <Container>
      <h3 className="mt-5">Data Sources</h3>
      {dataSources.map((dataSource) => {
        return <DataSource key={dataSource.id} dataSource={dataSource} />;
      })}
    </Container>
  );
}

type DataSourceProps = {
  dataSource: TDataSource;
};

function DataSource({ dataSource }: DataSourceProps): React.ReactElement {
  return (
    <Card style={{ marginTop: '30px' }}>
      <Card.Header>
        <Card.Title>ID: {dataSource.name}</Card.Title>
      </Card.Header>
      <Card.Body>Here we can show some stats.</Card.Body>
    </Card>
  );
}
