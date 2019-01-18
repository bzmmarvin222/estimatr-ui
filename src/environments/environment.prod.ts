export const environment = {
  production: true,
  getWebsocketUrl: (path: string = '') => `wss://${location.host.trim()}${path}`
};
