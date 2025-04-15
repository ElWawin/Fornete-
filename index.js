const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
  console.log('Nuevo jugador conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Jugador desconectado:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
