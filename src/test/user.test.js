const axios = require("axios");
const crypto = require("crypto");
const { user } = require("pg/lib/defaults");
const userServices = require("../services/user.services");
require("../infra");

const url = "http://localhost:3000";
const request = (url, method, data) => {
  return axios({ url, method, data });
};
const generate = () => {
  return crypto.randomBytes(20).toString("hex");
};

test("Should Create User and Delete", async () => {
  const user1 = {
    name: generate(),
    email: generate(),
  };
  const response = await userServices.saveUser(user1);
  expect(user1.name).toBe(response.name);
  expect(user1.email).toBe(response.email);
  await userServices.deleteUserById(response.id);
});
