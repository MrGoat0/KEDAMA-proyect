const User = require("../models/users");

// Get an user
exports.authUser = (req, res) => {
  const email = req.userData.email;
  User.findOne({ email: email })
    .then((userRes) => {
      if (userRes) {
        res.status(200).json({
          email: userRes.email,
          state: userRes.state,
          role: userRes.role,
        });
      } else {
        const newUser = new User({
          name: req.userData.name,
          email: req.userData.email,
          state: false,
          role: "",
        });
        newUser.save().then((user) => {
          res.status(200).json(user);
        });
      }
    })
    .catch((err) => {
      res.status(504).json({ error: err });
    });
};

exports.authRole = (req, res) => {
  const email = req.userData.email;
  User.findOne({ email: email })
    .then((validationRes) => {
      if (validationRes.role === "admin") {
        res.status(200).json({ isValidated: true });
      } else if (validationRes.role === "vendedor") {
        res.status(200).json({ isValidated: false });
      }
    })
    .catch((err) => {
      res.status(504).json({ error: err });
    });
};
