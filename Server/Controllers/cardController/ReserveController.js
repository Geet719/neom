const pool = require("../../Config/database");
require("dotenv").config();

const ReserveController = async (req, res) => {
  try {
    const { cardId, userId, seat } = req.body;

    console.log("Reserve Controller:", cardId, userId, seat);

    const userIdInt = parseInt(userId, 10);
    const cardIdInt = parseInt(cardId, 10);
    const seatInt = parseInt(seat, 10);

    if (isNaN(userIdInt) || isNaN(cardIdInt) || isNaN(seatInt)) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    const query = `
      INSERT INTO user_schedule_events (user_id, card_id, status, guest) 
      VALUES ($1, $2, $3, $4) 
      ON CONFLICT (user_id, card_id) DO NOTHING;
    `;

    await pool.query(query, [userIdInt, cardIdInt, "Scheduled", seatInt]);

    res.status(201).json({ success: true, message: "Entry added to scheduled card" });
  } catch (error) {
    console.error("Error in ReserveController:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

module.exports = ReserveController;
