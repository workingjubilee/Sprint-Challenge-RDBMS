const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectRouter.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json())

server.use("/api/projects", projectsRouter);

server.listen(5000, () => {
  console.log('\nThe sleeper has awakened')
})