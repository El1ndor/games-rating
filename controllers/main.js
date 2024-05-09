const staticFile = require("../appModules/http-utils/static-file");
const { getData, endpoints } = require("../appModules/api");
const { makeRatingFile, PATH_TO_RATTING_FILE } = require("../appModules/rating")


async function mainRouteController(res, publicUrl, extname) {
  const data = await getData (endpoints.games);
  await makeRatingFile(PATH_TO_RATTING_FILE, data);

    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }

  module.exports = mainRouteController;