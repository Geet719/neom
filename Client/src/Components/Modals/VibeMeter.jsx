import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import FeedbackSpeedometer from "../Speedometer/feedbackSpeedometer";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";
import joy from "../../assets/img/joy.svg";

import { useState } from "react";

const reactions = [
  { min: -1, max: -5, src: over, alt: "Segment 1" },
  { min: -6, max: -10, src: joy, alt: "Segment 2" },
  { min: -11, max: -15, src: appre, alt: "Segment 3" },
  { min: -16, max: -20, src: bore, alt: "Segment 4" },
  { min: -21, max: -25, src: disapp, alt: "Segment 5" },
  { min: -26, max: -30, src: anger, alt: "Segment 6" },
];

export default function VibeMeter({ closeVibeModal, handleVibeSubmit,txt,totalRating }) {
  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName } = userDetails;

  const [rec, setRec] = useState(-totalRating);
  // const [clickedImage,setClickcedImage]=useState(null);
  
  // const getRandomReactionValue = (min,max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  
  // const handleReaction = (reaction) => {
  //   const randomValue = getRandomReactionValue(reaction.min,reaction.max);
  //   console.log("randomvalue",randomValue);
  //   setRec(randomValue);
  //   setClickcedImage(reaction.alt);
  //   console.log("clickedimage",clickedImage);
  //   console.log("rec",rec);
  // };



  return (
    <div className="fixed inset-0 flex items-center justify-center  ">
      <div className="w-[550px] h-[590px] bg-white p-[25px] rounded-lg shadow-lg relative">
        <IoIosCloseCircleOutline
          onClick={closeVibeModal}
          className="absolute cursor-pointer top-[10px] right-[10px]"
        />
        <h2
          className=" text-left text-[20px] leading-[16px] tracking-[0.19px] font-[IvyMode] text-[#222222]
"
        >
          Vibe-o-meter
        </h2>
        <p
          className="mt-[15px] text-left text-[12px] leading-[18px] tracking-[0.45px] font-[BrownLight] text-[#222222] opacity-100
  "
        >
          Hi {authorized === true ? fullName : "Charlie"}, we would love know
          the vibes you got from this event. It helps us to improve us and serve
          you best for the next time.
        </p>
        <div className="flex  flex-col items-center justify-center">
          <FeedbackSpeedometer down={150} rec={rec} />
          {/* <div className="flex z-[100] justify-evenly cursor-pointer items-center gap-5">
            <p className="text-[12px]">Click Emojis</p>
            {reactions.map((reaction, index) => (
              <img
                key={index}
                onClick={() => handleReaction(reaction)}
                className={`cursor-pointer ${reaction.alt===clickedImage?"w-[40px] h-[40px]":"w-[30px] h-[30px]"}`}
                src={reaction.src} 
                alt={reaction.alt}
              />
            ))}
          </div> */}
        </div>
        <div className="mt-[18px]">
          <textarea
            value={txt}
            placeholder="Share your experience with us..."
            className="outline-gray-700 text-black  placeholder: pl-[10px] text-left placeholder:text-[#000000] text-[14px] leading-6 tracking-[0.35px] opacity-90 w-full h-[150px] outline-none bg-white border border-gray-600 pt-1  rounded-lg "
          />
        </div>
        <button
          onClick={handleVibeSubmit}
          className="mt-[12px] text-[12px] cursor-pointer px-8 py-2 bg-[#222222] text-white rounded-[6px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
