const pool = require("../../Config/database");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SCERET_KEY);

const StripeController = async (req, res) => {

    console.log("stripe controller");
  try {
    const { products, pay, guest } = req.body;
    console.log("Controller Route Hit");
    console.log("Products:", products, "Pay:", pay, "Guest:", guest);

    if (!products || !pay || !guest) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "USD",
        product_data: {
          name: product.name,
          images: [product.image_main],
        },
        unit_amount: pay, 
      },
      quantity: guest, 
    }));

    console.log(products[0].id);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://neom-sgf7.onrender.com/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://neom-sgf7.onrender.com/fail",
      metadata: {
        card_id:products[0].id,
        guestCount: guest,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = StripeController;
