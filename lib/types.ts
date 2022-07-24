export type TWebSocketMessage = {
  type: string;
  payload: unknown;
};

export type TValue = {
  value: number;
  timestamp: Date;
};

export type TServiceSettings = {
  LISTEN_HOST: string;
  LISTEN_PORT: number;
  PUBLIC_PATH: string;
  INFLUX_URL: string;
  INFLUX_TOKEN: string;
};
