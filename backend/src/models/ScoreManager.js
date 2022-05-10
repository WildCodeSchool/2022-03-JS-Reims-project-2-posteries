const AbstractManager = require("./AbstractManager");

class ScoreManager extends AbstractManager {
  static table = "score";

  insert(score) {
    return this.connection.query(
      `insert into ${ScoreManager.table} (username, userscore) values (?, ?)`,
      [score.username, score.userscore]
    );
  }

  update(score) {
    return this.connection.query(
      `update ${ScoreManager.table} set userscore = ? where id = ?`,
      [score.userscore, score.id]
    );
  }
}

module.exports = ScoreManager;
