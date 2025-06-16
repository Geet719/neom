const pool = require("../../Config/database");
require("dotenv").config();
const cloudinary = require("../../Config/Cloudinary.js");
const upload = require("../../Middleware/Multer.js");

const ProfileUpdateController = async (req, res) => {
  const { userId, email, mobileNo, name, intersets } = req.body;

  console.log("Profile update request:", req.body, req.file);

  let profilePic = null; 

  if (req.file) {
    console.log("Uploading Profile Pic to Cloudinary...");

    try {
      profilePic = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "profile_pictures" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Upload Error:", error);
              reject(error);
            } else {
              console.log("Cloudinary Upload Successful:", result.secure_url);
              resolve(result.secure_url);
            }
          }
        );
        stream.end(req.file.buffer);
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Profile image upload failed" });
    }
  }

  // Fetch current user data to keep the existing profile pic if none is uploaded
  const userQuery = `SELECT profile_pic FROM users WHERE user_id = $1`;
  const userResult = await pool.query(userQuery, [userId]);

  if (userResult.rows.length === 0) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const existingProfilePic = userResult.rows[0].profile_pic;
  profilePic = profilePic || existingProfilePic; 

  const updateQuery = `UPDATE users SET 
    email_id = COALESCE($2, email_id),
    mobile_no = COALESCE($3, mobile_no),
    name = COALESCE($4, name),
    profile_pic = COALESCE($5, profile_pic),
    interests = COALESCE($6, interests)
    WHERE user_id = $1
    RETURNING *;`;

  try {
    const updatedUser = await pool.query(updateQuery, [
      userId,
      email,
      mobileNo,
      name,
      profilePic,
      intersets,
    ]);

    return res.json({ success: true, message: "Profile updated successfully", user: updatedUser.rows[0] });
  } catch (error) {
    console.error("Database Update Error:", error);
    return res.status(500).json({ success: false, message: "Database update failed" });
  }
};

module.exports = ProfileUpdateController;
