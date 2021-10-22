const jwt = require("jsonwebtoken");
const User = require("../models/users");

// in the parameter req we send the authentication token
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.decode(token);
  req.userData = { email: decodedToken.email, name: decodedToken.name };
  const email = req.userData.email;
  User.findOne({ email: email })
    .then((validationRes) => {
      if (validationRes.role === "admin") {
        req.validation = { pass: true };
      } else if (validationRes.role === "vendedor") {
        req.validation = { pass: false };
      }
    })
    .catch((err) => {
      res.status(504).json({ error: err });
    });
  next();
};
