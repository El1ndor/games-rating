const { createRating, updateRating } = require("./calculations");
const { WEIGHT, PATH_TO_RATTING_FILE } = require("./config");

const makeRatingFile = require ("./rating-file");

module.exports = {
    WEIGHT,
    PATH_TO_RATTING_FILE,
    makeRatingFile,
    createRating,
    updateRating,
};