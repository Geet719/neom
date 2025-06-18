import { useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

module.exports function PaymentFailed() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-gray-100 h-[80vh] mx-[-160px] flex items-center justify-center">
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-red-400 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586 7.05 5.636a1 1 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 1 0 1.414 1.414L12 13.414l4.95 4.95a1 1 0 1 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z"
            />
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Failed ☹!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for using this secure online payment.
            </p>
            <p> Have a great day! </p>
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
