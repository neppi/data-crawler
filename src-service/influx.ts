import { delay } from '../lib/utils';
import { TValue } from '../lib/types';
import { InfluxDB, WriteApi, Point } from '@influxdata/influxdb-client';

const org = 'novum';
const bucket = 'testrig';

export let client: InfluxDB;
export let writeApi: WriteApi;

export async function initInfluxClient(url: string, token: string) {
  await delay(3500);
  client = new InfluxDB({ url, token });
  writeApi = client.getWriteApi(org, bucket);
}

export function writeChannelStateToInflux(
  userId: string,
  dataTypeId: string,
  variantId: string,
  values: Array<TValue>,
) {
  if (writeApi != null) {
    values.forEach((item) => {
      const point = new Point('readings')
        .timestamp(new Date())
        .tag('userId', userId)
        .tag('dataTypeId', dataTypeId)
        .tag('variantId', variantId)
        .timestamp(item.timestamp)
        .floatField('value', item.value);
      writeApi.writePoint(point);
    });
    writeApi.flush();
  }
}
