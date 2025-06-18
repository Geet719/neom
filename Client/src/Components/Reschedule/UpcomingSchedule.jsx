import TimeCircle from "./TimeCircle";
import { formatDate, formatEventTime } from "../../util/DateFormatter";
import { useNavigate } from "react-router-dom";


module.exports function UpcomingSchedule({ event }) {
  const navigate=useNavigate();
  return (
  
      <div className="relative flex mt-[30px] items-center justify-center w-[1129px] ">
        <img
          className=" rounded-[14px] h-[430px] object-center w-full"
          src={event.image_main}
        />

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="top-[40px] text-[30px] tracking-widest absolute  font-extrabold  text-center mx-auto text-[#ffffff]"
        >
          {event.category}
        </h1>

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-[30px] tracking-widest absolute  font-extrabold top-[80px] text-center mx-auto text-[#ffffff]"
        >
          {event.name}
        </h1>

        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="top-[140px] font-medium text-[17px] tracking-wide absolute   text-center mx-auto text-[#ffffff]"
        >
          {event.city} {event.country}
        </h1>

        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="top-[180px] text-[17px] tracking-wide absolute  font-medium  text-center mx-auto text-[#ffffff]"
        >
          {formatDate(event.start_date)} at {formatEventTime(event.start_date,event.end_date)}
        </h1>

        <TimeCircle />

        <button
          onClick={()=>navigate(`/details2/eventId/${event.id}`,{ state: { text: "top",data:event } })}
          className="bottom-[50px] cursor-pointer absolute text-[14px] tracking-wider mx-auto  bg-[#ffffff] text-black px-6 py-3 rounded-[8px] flex justify-evenly items-center"
        >
          Yes I am in
        </button>
      </div>
   
  );
}
