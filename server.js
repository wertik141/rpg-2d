const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;
const path = process.env.PEER_PATH || '/myapp';

const server = PeerServer({
  port: port,
  path: path,
  allow_discovery: true
});

server.on('connection', (client) => {
  console.log('✓ Peer connected:', client.getId());
});

server.on('disconnect', (client) => {
  console.log('✗ Peer disconnected:', client.getId());
});

console.log(`PeerJS server running on port ${port}, path ${path}`);
