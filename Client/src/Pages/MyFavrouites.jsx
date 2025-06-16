import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer,toast } from "react-toastify";
import "react-toastify/ReactToastify.css";


import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import { dataMyFavoritesCard} from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import MyFavoritesCard from "../Components/MyFavorites/MyFavoritesCard";
import Slider from "../Components/Slider/Slider";


export default function MyFavrouites() {
   
  const Navigate=useNavigate();

  const userDetails=useSelector((store)=>store.user);

  const {authorized,fullName,favouriteEvents,serverTopEventLists}=userDetails;

  useEffect(()=>{
  },[favouriteEvents])

  const [currentIndexCard3, setCurrentIndexCard3] = useState(0);

  const itemsPerViewCard3 = 1.5;

  const notify2=()=>toast.warn("Event removed from favourites Events",{
    className:"text-[12px] w-[250px]!"
  });

  const goToPrevImageCard3 = () => {
    if (currentIndexCard3 > 0) {
      setCurrentIndexCard3(currentIndexCard3 - 1);
    }
  };

  const goToNextImageCard3 = () => {
    if (currentIndexCard3 <= dataMyFavoritesCard.length - itemsPerViewCard3) {
      setCurrentIndexCard3(currentIndexCard3 + 1);
    }
  };

  return (
    <>
      <Header />
      <section className="mt-[29px]">
        <h2
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[475px] h-[52px] text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Good morning {authorized===true?fullName:"Charlie"}!
        </h2>
        <ToastContainer />
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-left text-[18px] font-medium opacity-80 text-[#000000]"
        >
          You have short listed {favouriteEvents.length} events to join later.
        </p>

        {favouriteEvents.length>0?<div className="mt-[36px]">
          <div className="mt-[20px] grid grid-cols-5 gap-[15px]">
            {favouriteEvents.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} fav={1} notify1="null" notify2={notify2} notify3="null" />
            ))}
          </div>
        </div>:<p className="flex items-center justify-center mt-[30px]">No favourite Events, add events to favourite by clicking heart icon in <span className="text-[#FF385C] ml-2 cursor-pointer " onClick={()=>Navigate("/events")}>UpComming Events</span> </p>}

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[45px] text-left text-[26px] leading-[44px] tracking-[1px] text-[#222222] opacity-100"
        >
          {authorized===true?fullName:"Charlie"}, we have find some recommendation for you
        </h1>

        <div className="relative">
          <div
            style={{
              transform: `translateX(-${
                currentIndexCard3 * (100 / itemsPerViewCard3)
              }%)`,
            }}
            className="mt-[30px] flex items-center gap-[20px] transition-transform duration-300 ease-in-out"
          >
            {dataMyFavoritesCard.map((favCard) => (
              <MyFavoritesCard key={favCard.id} favCard={favCard} />
            ))}
          </div>
        </div>

        <Slider
          value={3}
          goToPrevImageCard3={goToPrevImageCard3}
          goToNextImageCard3={goToNextImageCard3}
          currentIndexCard3={currentIndexCard3}
          itemsPerViewCard3={itemsPerViewCard3}
        />

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[55px] text-left font-normal text-[30px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          Top 5 activities on this island today
        </h1>

        <div className="mt-[20px]">
          <div className="mt-[20px] flex items-center gap-[15px]">
            {serverTopEventLists.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
