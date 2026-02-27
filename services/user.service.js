const UserRepository = require('../repositories/user.repository');

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(payload) {
    return this.userRepository.create(payload);
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async getUserByPhone(phone) {
    return this.userRepository.findByPhone(phone);
  }

  async getUserById(id) {
    return this.userRepository.findById(id);
  }

  async updateUserById(id) {
    return this.userRepository.update(id, data);
  }

  async deleteUserById(id) {
    return this.userRepository.delete(id);
  }

  async softDeleteUser(id) {
    return this.userRepository.softDeleteUser(id);
  }

  async activeUser(id) {
    return this.userRepository.active(id);
  }

  async deActiveUser(id) {
    return this.userRepository.deActive(id);
  }

  async changeRoleUser(id, role) {
    return this.userRepository.changeRole(id, role);
  }



}

module.exports = UserService;