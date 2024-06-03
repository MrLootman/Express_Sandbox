const tables = require("../tables");

const browse = async (req, res) => {
  try {
    // Fetch all video games from the database
    const getAllVideoGames = await tables.video_game.readAll();

    // Respond with video games in JSON format
    res.json(getAllVideoGames);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

module.exports = { browse };