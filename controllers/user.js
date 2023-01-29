const User = require('../models');

module.exports = {
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  },
};
