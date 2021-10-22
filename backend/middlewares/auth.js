const jwt = require("jsonwebtoken");

// in the parameter req we send the authentication token
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.decode(token);
  if (decodedToken) {
    req.userData = { email: decodedToken.email, name: decodedToken.name };
    next();
  }
};

