const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectRouter.js');
const actionsRouter = require('./actions/actionRouter.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json())

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.listen(5000, () => {
  console.log('\nThe sleeper has awakened')
})