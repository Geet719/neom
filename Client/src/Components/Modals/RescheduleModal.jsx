import { useEffect, useState } from "react";
import { MdNotificationsActive  } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import "../../index.css";

module.exports function RescheduleModal({ notificationRef, handleReschedule, handleCancel2 }) {
  const [showModal, setShowModal] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [modalOffset, setModalOffset] = useState(0); 
  const [isHidden, setIsHidden] = useState(false); 
  const loc = useLocation();

  const userDetails=useSelector((store)=>store.user);
  const {authorized,fullName}=userDetails;
  useEffect(() => {
    const interval = setInterval(() => {
      if (loc.pathname === "/dashboard") {
        setShowModal(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const modalHeight = 200; 

 
      if (currentScrollPos > prevScrollPos) {
        setModalOffset(-100); 
      } else {
        setModalOffset(0); 
      }

      
      if (currentScrollPos > modalHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && loc.pathname === "/dashboard" && (
        <div
          className={`fixed bg-[#222222] text-white p-5 z-40 rounded-lg shadow-lg transition-transform duration-500 ${
            isHidden ? "opacity-0 translate-y-[-50px]" : "opacity-100 translate-y-0"
          }`}
          style={{
            top: `calc(60px + ${modalOffset}px)`,
            right: "200px",
            width: "50%",
            maxWidth: "320px",
            transition: "top 0.3s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          <IoIosCloseCircleOutline onClick={handleCancel} className="text-white float-right text-[25px]" />
          <div className="flex mt-[10px] items-center space-x-2">
            <h2 style={{ fontFamily: "IvyMode, sans-serif" }} className="text-[20px] opacity-75 text-[#EEFF00]">
              Hey {authorized!==null?fullName:"Charlie"},
            </h2>
            <MdNotificationsActive style={{ color: "#EEFF00", fontSize: "24px" }} className="opacity-75" />
          </div>

          <p style={{ fontFamily: "BrownLight, sans-serif" }} className="my-3 text-[12px] tracking-wider opacity-75">
            "We regret to inform you that the current weather conditions are not conducive for a golf session.
            Would you like to reschedule or cancel your golf session for today?"
          </p>

          <div className="flex gap-[30px] mt-5">
            <button
              onClick={handleReschedule}
              className="bg-white text-[12px] text-black py-2 px-6 opacity-90 rounded cursor-pointer"
            >
              Reschedule
            </button>
            <button
              onClick={handleCancel2}
              className="text-white text-[12px] border-b-2 border-white opacity-90 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}



