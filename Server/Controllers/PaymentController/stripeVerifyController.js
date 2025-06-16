const stripe = require("stripe")(process.env.STRIPE_SCERET_KEY);


const stripeVerifyController = async (req, res) => {
  try {
    const { sessionId } = req.body;

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      res.json({ success: true, session });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports=stripeVerifyController;