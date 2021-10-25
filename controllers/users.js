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
          role: null,
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
      } else {
        res.status(200).json({ isValidated: false });
      }
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};

exports.getAllUsers = (req, res) => {
  User.find()
    .then((userResult) => {
      res.status(200).json(userResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Update an user by email
exports.updateUser = (req, res) => {
  const filterEmail = req.body.email;
  User.updateOne({ email: filterEmail }, req.body)
    .then((updateResult) => {
      res.status(200).json(updateResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get an user by email
exports.getByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((searchResult) => {
      res.status(200).json(searchResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get an user by mongo id
exports.getByID = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((searchResult) => {
      res.status(200).json(searchResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
