const {  take  } = require('rxjs/operators');
const WebSocketServer = require('websocket').server;
const server = require('http').createServer(function(request, response) {
});
server.listen(1337, function() { });

const wsServer = new WebSocketServer({
  httpServer: server
});

const connections = [];
const Sync = require('sync_ot');
const handler = new Sync.ServerHandler();
const res = new Sync.SyncableResource(handler, 'Test');

console.log('Demo Server listening on Port 1337');
wsServer.on('request', function(request) {
  let connection = request.accept(null, request.origin);

  console.log('connected from: ' + request.origin);
  connections.push(connection);

  res.getTree$().pipe(take(1)).subscribe(v => {
    let init = {
      range: {
        start: -1,
        end: -1
      },
      type: 'INIT',
      data: v.toNonRecursive(),
      objectPath: []
    };

    connection.send(JSON.stringify(init));

    connection.on('message', function(message) {
      res.queueOperation(JSON.parse(message.utf8Data));
      connections.forEach((c) => c.send(message.utf8Data));
    });
  });

  connection.on('close', function(connection) {
    console.log('connection closed');
  });
});
