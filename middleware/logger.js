// @desc Logs the request to the console
const logger = (req, res, next) => {
  // this middle ware is for logging
  console.log(`${req.method} ${req.protocol}:/${req.get('host')}${req.url}`);
  // have to call next to move on to the next middleware
  next();
};

module.exports = logger;
