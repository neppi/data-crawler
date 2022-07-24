import React from 'react';
import ReactJson from 'react-json-view';
import { TServiceSettings } from '../../lib/types';
import { CrawlerServiceVersion } from '../../lib/version';

type ExpertTabProps = {
  settings: TServiceSettings;
};

export default function ExpertTab({ settings }: ExpertTabProps): React.ReactElement {
  return (
    <div style={{ paddingLeft: '30px', paddingTop: '20px' }}>
      <ReactJson name="Version" src={CrawlerServiceVersion} collapsed={1} />
      <hr />
      <ReactJson name="Settings" src={settings} collapsed={1} />
    </div>
  );
}
