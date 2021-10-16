const jwt = require("jsonwebtoken");
const User = require("../models/users");

// in the parameter req we send the authentication token
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.decode(token);
  req.userData = { email: decodedToken.email, name: decodedToken.name };

  // next() allows to continue to the controller execution
  next();
};
