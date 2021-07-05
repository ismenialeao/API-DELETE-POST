const express = require("express");
const app = express();

const index = require("./routes/index")
const tasks = require("./routes/toDoRoutes");

app.use(express.json()) //pegar a informação e manda em json

app.use("/", index)
app.use("/tarefas", tasks);

module.exports = app;


