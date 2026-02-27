const initUserModule = require('./user.module');
const UserService = require('../services/user.service');

const userService = new UserService();

module.exports = {
  initUserModule,
  userService
};