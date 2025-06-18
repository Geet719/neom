import { CiLocationOn } from "react-icons/ci";
import "/src/index.css";
import store from "../../../Store";
import { eventFilter } from "../../Features/User/UserSlice";
import { useEffect, useState } from "react";

module.exports function UpcommingButton2() {
  const [date, setDate] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  function handlechangeDate(e) {
    const newDate = e.target.value || null;
    setDate(newDate);
    store.dispatch(eventFilter("date", newDate));

    console.log(date);
  }

  function handlechangeCity(e){
    const newLoc=e.target.value || null;
    setCurrentCity(newLoc);
    console.log("currentcity in upbtn",currentCity);
    store.dispatch(eventFilter("city",newLoc));

  }
  useEffect(() => {
    console.log("useEffect city", currentCity);

  }, [date,currentCity]);

  return (
    <div className="flex flex-col">
      <h1
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left font-normal text-[13px] leading-[34px] tracking-[0px] text-[#222222] opacity-100"
      >
        What suits your schedules?
      </h1>
      <div className="w-[354px] flex  gap-[8px]">
        <div className="relative w-[180px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-80 h-[40px] flex  items-center gap-[5px] ">
          <input
            type="date"
            onChange={handlechangeDate}
            className="z-50  flex w-[110px]  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-80 outline-none"
          />
          {/* <FaCalendar className="absolute right-[11px] top-[10px] w-[45px] text-[#FF385C]" /> */}
        </div>
        <div className="w-[260px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-80 h-[40px] flex  items-center gap-[5px]">
          <CiLocationOn className="text-[#FF385C]" />
        
            <input
              type="text"
              list="cities"
              value={currentCity}
              onChange={handlechangeCity}
              placeholder="Pick a location"
              className="text-left  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-80 outline-none"
            />
            <datalist id="cities">
              <option value="Sindalah City, Dubai" />
              <option value="Sind City, Dubai" />
              <option value="AbuDhabi City, Dubai" />
              <option value="Mumbai City, India" />
              <option value="Delhi City, India" />
              <option value="Jaipur City, India" />
              <option value="Chandigarh City, India" />
              <option value="Haridwar City, India" />
              <option value="Kasol City, India" />
            </datalist>
          
        </div>
      </div>
    </div>
  );
}
