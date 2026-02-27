const User = require('../models/user.model');

class UserRepository {

  async create(data) {
    return User.create(data);
  }

  async findAll() {
    return User.findAll()
  }

  async findById(id) {
    return User.findById(id);
  }

  async findByPhone(phone) {
    return User.findOne({ phone }).select('+password');
  }

  async update(id, data) {
    return User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async delete(id) {
    return User.findByIdDelete(id)
  }

  async active(id) {
    return User.findByIdAndUpdate(id , {active : false});
  }

  async deActive(id) {
    return User.findByIdAndUpdate(id , {active : false});
  }

  async changeRole(id , role) {
    return User.findByIdAndUpdate(id , {role : role});
  }

  async softDeleteUser(id) {
    return User.findByIdAndUpdate(id , {active : false});
  }

}

module.exports = UserRepository;