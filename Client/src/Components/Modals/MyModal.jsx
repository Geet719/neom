import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import HomePage from "../../Pages/DashBoard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VibeMeter from "./VibeMeter";
import { useRef, useState } from "react";
import { feedbackData, getAllUserData } from "../../Features/User/UserSlice";
import store from "../../../Store";

module.exports function MyModal({ detailedData, closeModal, cardid = null }) {
  var card_id;
  const userfeedback = useRef(null);
  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName } = userDetails;
  const [vibe, setVibe] = useState(false);
  const [text,setTxt]=useState("");
  const [starcolor, setStarColor] = useState({});
  // const [msg,setMsg]=useState(true);
  const navigate = useNavigate();

  function handleVibeSubmit() {
    store.dispatch(getAllUserData());
    navigate("/dashboard");
  }
  function handleModalSubmit() {
    console.log("handle submit call");
    const feedback = userfeedback.current.value;
    setTxt(feedback);
    if (cardid === null) {
      card_id = detailedData.id;
      console.log(card_id);
    } else {
      card_id = cardid;
      console.log(card_id);
    }

    store.dispatch(feedbackData(card_id, totalRating / 5, feedback));
    setVibe(true);
  }

  const totalRating = Object.values(starcolor).reduce(
    (sum, rating) => sum + rating,
    0
  );
  console.log(totalRating / 5);

  function closeVibeModal() {
    setVibe(false);
  }

  function handleStars(label, key) {
    setStarColor((prev) => ({ ...prev, [label]: key + 1 }));
  }

  return (
    <>
      <HomePage />
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20 ">
        <div className="w-[550px] h-[527px] bg-white p-[25px] rounded-lg shadow-lg relative">
          <IoIosCloseCircleOutline
            onClick={closeModal}
            className="cursor-pointer absolute top-[10px] right-[10px]"
          />
          <h2
            className=" text-left text-[20px] leading-[16px] tracking-[0.19px] font-[IvyMode] text-[#222222]
"
          >
            Add a review
          </h2>
          <p
            className="mt-[15px] text-left text-[12px] leading-[18px] tracking-[0.45px] font-[BrownLight] text-[#222222] opacity-100
"
          >
            Hi {authorized === true ? fullName : "Charlie"}, If you're here on
            this page, we bet you enjoy this event fully. Would you mind to
            share your valuable feedback review with us?
          </p>

          <div className="mt-[20px] grid grid-cols-2 gap-[15px]">
            <div className="flex flex-col items-start justify-start">
              <span
                className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222] 
"
              >
                Quality of Event
              </span>
              <div className="flex justify-start gap-[5px] items-center mt-[10px]">
                {[...Array(5)].map((__, i) => (
                  <LiaStarSolid
                    className={
                      i < (starcolor["Quality of Event"] ?? -1)
                        ? "text-red-500"
                        : "text-gray-500"
                    }
                    size={20}
                    key={i}
                    onClick={() => handleStars("Quality of Event", i)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <span
                className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
              >
                Facilities of Event
              </span>
              <div className="flex justify-start gap-[5px] items-center mt-[10px]">
                {[...Array(5)].map((__, i) => (
                  <LiaStarSolid
                    className={
                      i < (starcolor["Facilities of Event"] ?? -1)
                        ? "text-red-500"
                        : "text-gray-500"
                    }
                    size={20}
                    key={i}
                    onClick={() => handleStars("Facilities of Event", i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-start">
              <span
                className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
              >
                Staff Politeness
              </span>
              <div className="flex justify-start gap-[5px] items-center mt-[10px]">
                {[...Array(5)].map((__, i) => (
                  <LiaStarSolid
                    className={
                      i < (starcolor["Staff Politeness"] ?? -1)
                        ? "text-red-500"
                        : "text-gray-500"
                    }
                    size={20}
                    key={i}
                    onClick={() => handleStars("Staff Politeness", i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-start">
              <span
                className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
              >
                Operator of Event
              </span>
              <div className="flex justify-start gap-[5px] items-center mt-[10px]">
                {[...Array(5)].map((__, i) => (
                  <LiaStarSolid
                    className={
                      i < (starcolor["Operator of Event"] ?? -1)
                        ? "text-red-500"
                        : "text-gray-500"
                    }
                    size={20}
                    key={i}
                    onClick={() => handleStars("Operator of Event", i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-start">
              <span
                className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
              >
                Services at Event
              </span>
              <div className="flex justify-start gap-[5px] items-center mt-[10px] ">
                {[...Array(5)].map((__, i) => (
                  <LiaStarSolid
                    className={
                      i < (starcolor["Services at Event"] ?? -1)
                        ? "text-red-500"
                        : "text-gray-500"
                    }
                    size={20}
                    key={i}
                    onClick={() => handleStars("Services at Event", i)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <textarea
              ref={userfeedback}
              placeholder="Share your feedback and suggestions about this event..."
              className="outline-gray-700 text-black  placeholder: pl-[10px] text-left placeholder:text-[#000000] text-[14px] leading-6 tracking-[0.35px]  w-full h-[150px] outline-none bg-white border border-gray-600 pt-1  rounded-lg "
            />
          </div>
          <button
            onClick={handleModalSubmit}
            className="mt-4 cursor-pointer text-[12px] px-8 py-2 bg-[#222222] text-white rounded-[6px]"
          >
            Submit
          </button>
        </div>
      </div>

      {vibe && (
        <VibeMeter
          handleVibeSubmit={handleVibeSubmit}
          closeVibeModal={closeVibeModal}
          txt={text}
          totalRating={totalRating/5}
        />
      )}
    </>
  );
}
