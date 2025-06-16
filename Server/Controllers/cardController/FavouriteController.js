const pool = require("../../Config/database");
require("dotenv").config();

const FavouriteController = async (req, res) => {

  const { cardId, userId } = req.body;

  const deleteQuery = `DELETE FROM user_favorite_events WHERE user_id = $1 AND card_id = $2 RETURNING *;`;

  const { rowCount } = await pool.query(deleteQuery, [userId, cardId]);

  if (rowCount === 0) {
    // If no rows were deleted new event add 

    const insertQuery = `INSERT INTO user_favorite_events (user_id, card_id) VALUES ($1, $2);`;

    await pool.query(insertQuery, [userId, cardId]);

    return res.json({ success: true, message: "Favorite added" });

  } else {

    return res.json({ success: true, message: "Favorite removed" });

  }
};

module.exports = FavouriteController;
