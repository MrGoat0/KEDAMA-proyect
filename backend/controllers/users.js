const User = require("../models/users");

// Get an user
exports.authUser = (req, res) => {
  const email = req.params.email;
  User.find({ email: email })
    .then((userRes) => {
      if (userRes.length !== 0) {
        console.log(userRes);
        if (userRes.state) {
          res.status(200).json({ msg: "Usuario activo", userdata: userRes });
        } else {
          res.status(500).json({ msg: "Usuario inactivo", userdata: userRes });
        }
      } else {
        const newUser = new User({
          name: req.userData.name,
          email: req.params.email,
          state: false,
        });
        newUser.save().then((user) => {
          res.status(200).json({ msg: "¡Usuario creado!" });
        });
      }
    })
    .catch((err) => {
      res.status(504).json({ error: err });
    });
};
