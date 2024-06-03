const AbstractManager = require("./AbstractManager");

class VideoGameManager extends AbstractManager {
  constructor() {
    super({ table: "video_game" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all video games from the "video_game" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of video_games
    return rows;
  }
}

module.exports = VideoGameManager;
