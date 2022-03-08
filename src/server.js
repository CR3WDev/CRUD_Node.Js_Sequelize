const express = require("express");
const routes = require("./routes/user.router");
const app = express();

require("./infra");

app.use(express.json());
app.use(routes);

app.listen(3000);
