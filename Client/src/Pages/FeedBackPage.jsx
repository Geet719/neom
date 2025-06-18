import { useState } from "react";
import { useSelector } from "react-redux";

import FeedBackCard from "../Components/FeedBackCard.jsx/FeedBackCard";
import over from "../assets/img/overwhelmed.svg";
import Speedometer from "../Components/Speedometer/Speedometer";
import MyModal from "../Components/Modals/MyModal";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function FeedBackPage() {

  const [feebackModal,setFeedbackModal]=useState(false);
  const [cardid,setCardId]=useState(null);
   
  const userDetails = useSelector((store) => store.user);

  const {authorized,fullName,attendedEvents} = userDetails;
   


  function handleReview(id){
    setCardId(id);
    setFeedbackModal(true);
  }
  function closeModal(){
    setFeedbackModal(false);
  }

  return (
    <>
      <Header />
      <div className="w-[1370px] h-[320px]  justify-between flex flex-row-reverse gap-[60px] bg-[linear-gradient(116deg,#fee8a6_0%,#f1d9ff_86%)] items-center px-[110px] ml-[-110px] bg-white shadow-md shadow-black/5 opacity-100 backdrop-blur-[30px] p-4 rounded-lg">
        <div className=" mt-[110px]">
          <Speedometer />
        </div>
        <div className="flex mt-[45px] h-[250px] flex-col gap-[8px]">
          <img className="w-[55px] h-[55px]" src={over} />
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="font-normal text-left text-[26px] leading-[54px] tracking-[1.19px] text-[#222222] "
          >
            Overwhelmed experience
          </h1>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="font-normal text-left text-[25px] leading-[24px] tracking-[1.19px] text-[#222222] "
          >
            Your Vibe-O-Meter reading exits us too
          </h1>
          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="font-normal text-left w-[550px]  text-[18px] text-[#222222] "
          >
            We are happy too because we successfully keep you happy during this
            visit to Sindalah City.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center  mr-[100px] ">
        <div className="mt-[40px] ml-[40px]  flex flex-col items-center justify-start">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left mr-[17px] text-[26px] leading-[35px] font-medium tracking-[1.19px] text-[#161616] opacity-100"
          >
            Hi {authorized === true ? fullName : "Charlie"},<br></br> here are the glimpse of your feedback shared
            with us.
          </h1>

          <div className="mt-[45px] flex flex-col gap-[20px]">
            {attendedEvents.map((feed) => (
              <FeedBackCard key={feed.id} feed={feed} handleReview={handleReview}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
       {feebackModal && <MyModal closeModal={closeModal} cardid={cardid} />}
    </>
  );
}
