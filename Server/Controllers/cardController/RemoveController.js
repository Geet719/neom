const pool = require("../../Config/database");
require("dotenv").config();


const RemoveController = async (req, res) => {
  const {cardId ,userId } = req.body;
  const query=`DELETE FROM user_favorite_events WHERE user_id = $1 AND card_id = $2;`;
  await pool.query(query,[userId,cardId]);
  res.status(201).json({success:true,message:"entry renove from fav card"});
};

module.exports = RemoveController;