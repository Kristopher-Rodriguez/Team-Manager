const Player = require("../models/player.model");

module.exports = {
  findAllPlayers: (req, res) => {
    Player.find({})
      .then((allPlayers) => {
        console.log(allPlayers);
        res.json(allPlayers);
      })
      .catch((err) => {
        console.log("findAllPlayers has failed!");
        console.log(err);
        res.json(err);
      });
  },

  createNewPlayer: (req, res) => {
    console.log("Body", req.body);
    Player.create(req.body)
      .then((newPlayer) => {
        console.log(newPlayer);
        res.json(newPlayer);
      })
      .catch((err) => {
        console.log("createNewPlayer has failed!");
        res.status(400).json(err);
      });
  },

  findOnePlayer: (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then((onePlayer) => {
        console.log(onePlayer);
        res.json(onePlayer);
      })
      .catch((err) => {
        console.log(err);
        console.log("findOnePlayer has failed!");
        res.json(err);
      });
  },

  deleteOnePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then((deletedPlayer) => {
        console.log(deletedPlayer);
        res.json(deletedPlayer);
      })
      .catch((err) => {
        console.log(err);
        console.log("deleteOnePlayer has failed!");
        res.json(err);
      });
  },

  updatePlayer: (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedPlayer) => {
        console.log(updatedPlayer);
        res.json(updatedPlayer);
      })
      .catch((err) => {
        console.log(err);
        console.log("updatePlayer has failed!");
        res.status(400).json(err);
      });
  },
};
