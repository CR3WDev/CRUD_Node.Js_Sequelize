const User = require("../models/user.model");

exports.saveUser = (user) => {
  return User.create(user);
};
exports.getUserById = (id) => {
  return User.findOne({
    where: {
      id,
    },
  });
};
exports.deleteUserById = (id) => {
  return User.destroy({
    where: {
      id,
    },
  });
};
exports.getUsers = () => {
  return User.findAll();
};
exports.updateUser = (user, id) => {
  return User.update({ name: user.name, email: user.email }, { where: { id } });
};
