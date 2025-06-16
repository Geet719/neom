require("dotenv").config();
const passport = require("passport");
const pool = require("../../Config/database");
const jwt = require("jsonwebtoken");
const cloudinary = require("../../Config/Cloudinary.js");
const upload = require("../../Middleware/Multer.js");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
console.log("this is controller file");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("Access Token:", accessToken);
      console.log("User Profile:", profile);

      try {
        const email_id = profile.emails[0].value;
        const name = profile.displayName;
        const dob = "2003-03-11";
        const mob = 9045111609;
        const pic=profile.photos[0].value;

        let profilePic="";
        
        // Check the user exists
        const query1 = `SELECT * FROM users WHERE email_id = $1;`;
        let user = await pool.query(query1, [email_id]);

        

        if (user.rows.length === 0) {
          // console.log("User not found,new entry...");

          if(pic!==null){
            const result = await cloudinary.uploader.upload(pic, {
              folder: "profile_pictures",
            });
      
            profilePic = result.secure_url;
          }


          // Insert new user
          const query2 = `INSERT INTO users (name, email_id, date_of_birth, mobile_no,profile_pic) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
          user = await pool.query(query2, [name, email_id, dob, mob, profilePic]);
        }

        // console.log("User found:", user.rows[0]);

        return done(null, user.rows[0]);
      } catch (error) {
        console.error("Error in Google authentication:", error);
        return done(error, null);
      }
    }
  )
);

module.exports.googleAuthController = passport.authenticate("google", {
  scope: ["profile", "email"],
  session: false,
});

module.exports.googleAuthControllerCallback = (req, res, next) => {
  passport.authenticate(
    "google",
    { failureRedirect: "/", session: false },
    (err, user) => {
      // console.log("callback", user);

      if (err || !user) {
        return res.redirect("/");
      }

      const token = jwt.sign(
        { id: user.user_id, email: user.email_id },
        process.env.JWT_SECRET,
        { expiresIn: "14d" }
      );

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 55 * 55 * 1000,
        })
        .redirect(`${process.env.FRONTEND_URL}/`);
    }
  )(req, res, next);
};

