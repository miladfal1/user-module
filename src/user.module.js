const userApiRoutes = require('../routes/user.api.routes');
const userWebRoutes = require('../routes/user.web.routes');

const initUserModule = (app) => {

  app.use('/api/users', userApiRoutes);
  app.use('/users', userWebRoutes);

};

module.exports = initUserModule;