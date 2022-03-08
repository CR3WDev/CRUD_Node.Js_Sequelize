const userData = require("../database/user.data");

exports.saveUser = (user) => {
  return userData.saveUser(user);
};
exports.getUserById = (id) => {
  const user = userData.getUserById(id);
  if (!user) throw new Error("User not found");
  return user;
};
exports.deleteUserById = (id) => {
  return userData.deleteUserById(id);
};
exports.getUsers = () => {
  return userData.getUsers();
};
exports.updateUser = (user, id) => {
  return userData.updateUser(user, id);
};
