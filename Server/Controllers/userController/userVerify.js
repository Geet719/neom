require("dotenv").config();
const pool = require("../../Config/database");
const jwt = require("jsonwebtoken");

const { getAllCardDetails, getFavoriteEvents, getAttendedEvents, getScheduledEvents, getServerRecommendedEvents, getServerTopEvents, getProfileQuestions, getFeedBackPageData } = require("./userdataQuery");

console.log("in user verify controller file");

const verifyUserController =async (req, res) => {
    const token = req.cookies.token;
    console.log("userverifytoken",token);
    if (!token) {
      return res.json({ authenticated: false, message: "token not found" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const getUserQuery = `SELECT * FROM users WHERE email_id = $1;`;
      const loggedUser = await pool.query(getUserQuery, [decoded.email]);
  
      if (loggedUser.rows.length === 0) {
        return res.json({ authenticated: false, message: "User not found" });
      }
  
      const userID = loggedUser.rows[0].user_id;
      console.log("inside userid", userID);
  
      const fullData=await getAllCardDetails(userID);
      const favouriteEvents = await getFavoriteEvents(userID);
      const attendedEvents = await getAttendedEvents(userID);
      const scheduledEvents = await getScheduledEvents(userID);
      const serverRecommandData = await getServerRecommendedEvents();
      const topData = await getServerTopEvents(userID);
      const profile=await getProfileQuestions();
      const feedbackEvents=await getFeedBackPageData(userID);
  
      return res.json({
        authenticated: true,
        user: loggedUser.rows[0],
        cardData: fullData.rows,
        attendedData: attendedEvents.rows,
        scheduledData: scheduledEvents.rows,
        favouriteData: favouriteEvents.rows,
        feedbackEvents: feedbackEvents.rows,
        serverRecommandEventData: serverRecommandData.rows,
        serverTopEventsData:topData.rows,
        serverProfileQuestion:profile.rows
      });
    } catch (error) {
      console.error("Error executing query:", error);
      return res.json({ authenticated: false, message: "internal error" });
    }
  };
  
  module.exports=verifyUserController;