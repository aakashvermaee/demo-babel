import Users from '../controllers/users.controller';

export default function(fastify, opts, done) {
  fastify.get('/api/users', (req, res) => {
    new Users(req, res).getUsers();
  });

  done();
}
