const express = require("express");
const routes = express.Router();
const userServices = require("../services/user.services");

routes.post("/user", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await userServices.saveUser({ name, email });
  res.status(201).json(newUser);
});
routes.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userServices.getUserById(id);
  res.status(200).json(user);
});
routes.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userServices.deleteUserById(id);
  res.status(200).json({ message: `users deleted = ${user}` });
});
routes.get("/user", async (req, res) => {
  const users = await userServices.getUsers();
  res.status(200).json(users);
});
routes.put("/user/:id", async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  const response = await userServices.updateUser(user, id);
  res.status(200).json({ message: `users updated = ${response}` });
});
module.exports = routes;
