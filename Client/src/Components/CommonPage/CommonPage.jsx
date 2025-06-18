import { MdOutlineStar } from "react-icons/md";
import CommonPageCard from "./CommonPageCard";
import DashBoardCard3 from "../DashboardCards/DashBoardCard3";
import { useLocation } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import CommonAbout from "./CommonAbout";
import ReserveCard from "./ReserveCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useSelector } from "react-redux";
import { useState } from "react";
import MyModal from "../Modals/MyModal";


module.exports function CommonPage() {
  const [feebackModal, setFeedbackModal] = useState(false);

  function handleReview() {
    setFeedbackModal(true);
  }
  
  function closeModal(){
    setFeedbackModal(false);
  }
  var mainCommonPageData = null;

  // COMMENT OUT CHECK

  const value = useLocation();

  const userDetails = useSelector((store) => store.user);
  console.log(userDetails);

  const {authorized,fullName, totalCards } = userDetails;

  // // YE SHI KRNA HAI
  // if (value.state.text !== null) {
  //   mainCommonPageData = value.state.data;
  //   check = value.state.text;
  // }
  // if (value.state.text === null) {
  //   console.log("attended page");
  //   mainCommonPageData = value.state.data;
  //   check = null;
  // }

  mainCommonPageData = value.state.data;


  const stars = mainCommonPageData.star_review;


  return (
    <>
      <section>
        <Header />
        {mainCommonPageData.status==="Completed" && mainCommonPageData.reviewstatus===false? (
          <div className="flex mt-[20px] items-center justify-between pl-[28px] pr-[15px] py-[20px] w-full border border-[#222222] rounded-[12px]">
            <div className="flex w-[775px] flex-col justify-between">
              <h1
                style={{ fontFamily: "IvyMode, sans-serif" }}
                className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
              >
                Hey {authorized === true ? fullName : "Charlie"}
              </h1>
              <h1
                style={{ fontFamily: "IvyMode, sans-serif" }}
                className="mt-[5px] text-left tracking-[1px] font-normal text-[16px]  text-[#222222] opacity-100"
              >
                We are sure that you have enjoyed this event a lot. Would you
                like to share your feedback with us. It helps us to improve and
                serve you better.
              </h1>
            </div>
            <button
              onClick={handleReview}
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" text-[#ffffff] cursor-pointer text-[12px] rounded-[4px]  px-[30px] py-3 bg-[#222222] flex items-center justify-center text-center"
            >
              Add a review
            </button>
          </div>
        ) : null}

        <div className="mt-[20px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            {mainCommonPageData.name}
          </h1>

          <div className="flex mt-[8px] items-center gap-[10px]">
            <div className="flex items-center justify-center">
              {(Array.isArray(stars)
                ? stars
                : Array.from({ length: Number(stars) || 0 })
              ).map((_, index) => (
                <MdOutlineStar
                  key={index}
                  className="text-[#FF385C] w-[13px] h-[13px]"
                />
              ))}
            </div>
            <span
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
            >
              {mainCommonPageData.star_review} .{" "}
              <span className="border-b">
                {mainCommonPageData.no_of_review} reviews
              </span>
            </span>
            <span
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
            >
              . {mainCommonPageData.city}, {mainCommonPageData.country}
            </span>
          </div>

             {/* YHA PR V KAAM KRNA HAI IMAGE GRID MAI */}
          <ImageGrid
            val={mainCommonPageData.image_main}
            status={mainCommonPageData.status}
          />

          <div className="px-[80px] flex justify-between mt-[25px] ">
            <CommonAbout datadetailedEvent={mainCommonPageData} />
             {/* REMOVE CHECK AND STATUS K BASIS PR RESERVE VALA SHOW HOGA SCHEDULE AND COMPLETED --> NO RESERVE SEAT, NULL --> RESERVE MY */}
            <ReserveCard datadetailedEvent={mainCommonPageData} />
          </div>

          <div className="flex px-[80px] flex-col w-[650px]">
            <h1
              style={{ fontFamily: "IvyMode, sans-serif" }}
              className="mt-[20px] text-left font-normal text-[20px]  tracking-[1.19px] text-[#222222] opacity-100"
            >
              Operator River Stone
            </h1>
            <div className="flex items-start mt-[10px]  justify-start">
              {(Array.isArray(stars)
                ? stars
                : Array.from({ length: Number(stars) || 0 })
              ).map((_, index) => (
                <MdOutlineStar
                  key={index}
                  className="text-[#FF385C] w-[13px] h-[13px]"
                />
              ))}
              <span
                style={{ fontFamily: "Brown, sans-serif" }}
                className=" text-left text-[10px] ml-[10px] tracking-[0.31px] text-[#222222]"
              >
                4.9
              </span>
            </div>
            <p
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="w-[650px] text-left mt-[20px] leading-5 opacity-90  tracking-wide  text-[12px] text-[#222222]  "
            >
              {mainCommonPageData.description}
            </p>
          </div>

          <CommonPageCard />

          <div className="mt-[45px]">
            <h1
              style={{ fontFamily: "IvyMode, sans-serif" }}
              className="text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
            >
              Some more recommandation for you, {authorized === true ? fullName : "Charlie"}
            </h1>

            <div className="flex flex-col justify-center">
              <div className="mt-[20px] grid grid-cols-5 items-center gap-[15px]">
                {totalCards.slice(0, 10).map((card3) => (
                  <DashBoardCard3 key={card3.id} card3={card3} up={1} />
                ))}
              </div>
            </div>
          </div>
        </div>

      
        <Footer />
       
        {feebackModal && <MyModal detailedData={mainCommonPageData} closeModal={closeModal}/>}
      </section>
    </>
  );
}
