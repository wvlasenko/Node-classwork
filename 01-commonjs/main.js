const { info, logger } = require("./module");
const My = require("./moduleClass");

info("Test info");
logger("Test logger");

const message = new My()
message.info("Test info class")
message.logger("Logger info class")