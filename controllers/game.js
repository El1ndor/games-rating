const fs = require("fs").promises;
const { PATH_TO_RATTING_FILE } = require('../appModules/rating')
const { getRandomGame } = require("../appModules/api");


async function gameRouteController(res) {
    try {
      const ratingFile = await fs.readFile(PATH_TO_RATTING_FILE);
      const data =  JSON.parse(ratingFile);
      const game = getRandomGame(data);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(game));
    } catch (error) {
      console.log(error)
      res.statusCode= 500;
      res.end("Internal Server Error")
    }
    }

  module.exports = gameRouteController;