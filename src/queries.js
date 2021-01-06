const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "example",
  port: 3001
});

const getHouses = (req, res) => {
  pool.query("SELECT * FROM houses ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getHouses
  // getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
};
