const pool = require("../../Config/database");

const getAllCardDetails = async (userID) => {
  const query = `
        SELECT 
    c.*,  
    re.review_desc, 
    le.location_title, 
    le.location_desc, 
    et.event_type_title, 
    et.event_type_desc, 
    ee.experience_title,
    ee.experience_desc,  
    COALESCE(usev.status, uatev.status) AS status,  
    COALESCE(usev.guest, uatev.guest) AS guest  
    FROM carddetails c
    LEFT JOIN reviewevents re ON c.id = re.review_event_id
    LEFT JOIN locationevents le ON c.id = le.location_event_id
    LEFT JOIN eventtypes et ON c.id = et.event_type_id
    LEFT JOIN experienceevents ee ON c.id = ee.experience_id
    LEFT JOIN user_schedule_events usev 
    ON c.id = usev.card_id AND usev.user_id = $1  
    LEFT JOIN user_attended_events uatev 
    ON c.id = uatev.card_id AND uatev.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getFavoriteEvents = async (userID) => {
  const query = `
        SELECT 
    c.*, 
    r.*, 
    l.*, 
    e.*, 
    ex.*, 
    COALESCE(s.status, a.status) AS status, 
    COALESCE(s.guest, a.guest) AS guest
    FROM user_favorite_events ufe
    JOIN carddetails c ON ufe.card_id = c.id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    LEFT JOIN user_schedule_events s ON c.id = s.card_id AND ufe.user_id = s.user_id
    LEFT JOIN user_attended_events a ON c.id = a.card_id AND ufe.user_id = a.user_id
    WHERE ufe.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getAttendedEvents = async (userID) => {
  const query = `
     SELECT 
    c.*, 
    usev.status,  
    usev.guest, 
    usev.reviewstatus,
    r.*, 
    l.*, 
    e.*, 
    ex.*, 
    CASE 
        WHEN usev.reviewstatus = TRUE 
        THEN to_jsonb(f)  -- Convert the feedback row into JSON format
        ELSE NULL 
    END AS feedback_data  
    FROM user_attended_events usev
    JOIN carddetails c ON usev.card_id = c.id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    LEFT JOIN feedback f ON usev.card_id = f.card_id AND usev.user_id = f.user_id
    WHERE usev.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getScheduledEvents = async (userID) => {
  const query = `
           SELECT 
    c.*, 
    usev.status,  
    usev.guest, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
    FROM user_schedule_events usev
    JOIN carddetails c ON usev.card_id = c.id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    WHERE usev.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getServerRecommendedEvents = async () => {
  const query = `
        SELECT 
            c.*,  
            r.id AS recommend_event_id, 
            re.review_desc, 
            le.location_title, 
            le.location_desc, 
            et.event_type_title, 
            et.event_type_desc, 
            ee.experience_title,
            ee.experience_desc
        FROM recommenddata_events r
        JOIN carddetails c ON r.card_id = c.id
        LEFT JOIN reviewevents re ON c.id = re.review_event_id
        LEFT JOIN locationevents le ON c.id = le.location_event_id
        LEFT JOIN eventtypes et ON c.id = et.event_type_id
        LEFT JOIN experienceevents ee ON c.id = ee.experience_id;
    `;
  return await pool.query(query);
};

const getServerTopEvents = async (userID) => {
  const query = `
 SELECT 
    c.*,  
    r.id AS top_event_id,  
    re.review_desc, 
    le.location_title, 
    le.location_desc, 
    et.event_type_title, 
    et.event_type_desc, 
    ee.experience_title,
    ee.experience_desc,
    COALESCE(s.status, a.status) AS status, 
    COALESCE(s.guest, a.guest) AS guest
    FROM top_events r
    JOIN carddetails c ON r.card_id = c.id
    LEFT JOIN reviewevents re ON c.id = re.review_event_id
    LEFT JOIN locationevents le ON c.id = le.location_event_id
    LEFT JOIN eventtypes et ON c.id = et.event_type_id
    LEFT JOIN experienceevents ee ON c.id = ee.experience_id
    LEFT JOIN user_schedule_events s ON c.id = s.card_id AND s.user_id = $1
    LEFT JOIN user_attended_events a ON c.id = a.card_id AND a.user_id = $1
    ORDER BY r.id ASC;  -- Sorting by top_event_id (r.id)

    `;
  return await pool.query(query, [userID]);
};

const getProfileQuestions = async () => {
  const query = `SELECT * FROM profile_questions;`;
  return await pool.query(query);
};

const getFeedBackPageData = async (userID) => {
  const feedbackquery = `SELECT 
    c.*, 
    usev.status,  
    usev.guest, 
    usev.reviewstatus,
    r.*, 
    l.*, 
    e.*, 
    ex.*, 
    f.*  
    FROM feedback f
    JOIN carddetails c ON f.card_id = c.id
    LEFT JOIN user_attended_events usev ON f.card_id = usev.card_id AND f.user_id = usev.user_id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    WHERE f.user_id = $1;`;

  return await pool.query(feedbackquery, [userID]);
};

module.exports = {
  getAllCardDetails,
  getFavoriteEvents,
  getAttendedEvents,
  getScheduledEvents,
  getServerRecommendedEvents,
  getServerTopEvents,
  getProfileQuestions,
  getFeedBackPageData,
};
