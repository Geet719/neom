import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { handleReserve } from "../Features/User/UserSlice";
import store from "../../Store";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function PaymentSuccessful() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          "https://neom-sgf7.onrender.com/payment/verify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
          }
        );

        const data = await res.json();

        if (data.success && data.session.metadata) {
          console.log("Payment verified, updating Redux...");
          console.log(
            data.session.metadata.card_id,
            data.session.metadata.guestCount
          );
          await store.dispatch(
            handleReserve(
              data.session.metadata.card_id,
              data.session.metadata.guestCount
            )
          );
        } else {
          console.log("Payment verified error, updating Redux...");
          console.error("Payment verification failed or missing metadata");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    };

    verifyPayment();
  }, [sessionId]);

  return (
    <>
      <Header />
      <div className="bg-gray-100 h-[80vh] mx-[-160px] flex items-center justify-center">
        <div className="bg-white p-6 md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-12 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
