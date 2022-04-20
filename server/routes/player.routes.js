const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.findAllPlayers);
  app.post("/api/players", PlayerController.createNewPlayer);
  app.get("/api/players/:id", PlayerController.findOnePlayer);
  app.delete("/api/players/:id", PlayerController.deleteOnePlayer);
  app.put("/api/players/:id", PlayerController.updatePlayer);
};
