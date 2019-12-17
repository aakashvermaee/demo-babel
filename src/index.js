import fastify from 'fastify';
import Config from './config/config';
import routes from './routes/routes';

const server = fastify({
  logger: true,
});

const {port, host} = new Config();

server.listen(port, host, (err, address) => {
  if (err) throw err;

  console.log(`Server Running on '${address}'`);
});

server.register(routes);
