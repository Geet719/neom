import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import getEmojiImage from "../../util/emojiFinder";

module.exports function CommonAbout({datadetailedEvent}) {


  return (

    <div>
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left font-normal text-[22px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        About the event
      </h1>

      <div className="flex flex-col items-start justify-between w-full mt-[30px]">
        <div className=" flex flex-col border-b  w-[650px] border-gray-200">
          <div className="flex gap-[10px] w-[490px] h-[60px] items-start">
            <BiCategory className="w-[20px] h-[20px] opacity-70" />
            <div className="flex flex-col justify-between items-start">
              <p
                style={{ fontFamily: "Brown, sans-serif" }}
                className="text-left font-medium tracking-[.50px]  text-[14px] text-[#222222] opacity-90 "
              >
                {datadetailedEvent.event_type_title}
              </p>
              <p
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="text-left opacity-90  tracking-[.30px]  text-[12px] text-[#222222]  "
              >
                {datadetailedEvent.event_type_desc}
              </p>
            </div>
          </div>

          <div className="flex gap-[15px] w-[490px] h-[60px] items-start ">
            <CiLocationOn className="w-[20px] h-[20px] text-black  opacity-70" />
            <div className="flex flex-col justify-between items-start">
              <p
                style={{ fontFamily: "Brown, sans-serif" }}
                className="text-left font-medium tracking-[.50px] opacity-90  text-[14px] text-[#222222] "
              >
                {datadetailedEvent.location_title}
              </p>
              <p
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="text-left opacity-90  tracking-[.30px]  text-[12px] text-[#222222]  "
              >
                {datadetailedEvent.location_desc}
              </p>
            </div>
          </div>

          <div className="flex gap-[15px] w-[490px] h-[60px]   items-start">
            <img src={getEmojiImage(datadetailedEvent.star_review)} className="w-[20px] h-[20px]" />
            <div className="flex flex-col justify-between items-start">
              <p
                style={{ fontFamily: "Brown, sans-serif" }}
                className="text-left font-medium  tracking-[.30px] opacity-90  text-[14px] text-[#222222] "
              >
                {datadetailedEvent.experience_title}
              </p>
              <p
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="text-left opacity-90  tracking-[.50px]  text-[12px] text-[#222222]  "
              >
                {datadetailedEvent.experience_desc}
              </p>
            </div>
          </div>


          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="w-[650px] text-left border-t border-gray-200  leading-5 opacity-90   tracking-wide pt-[20px]  text-[12px] text-[#222222]  "
          >
            {datadetailedEvent.description}
          </p>

          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="w-[650px] border-b leading-5 pb-[15px] border-gray-200 text-left mt-[15px] opacity-90  tracking-wide  text-[12px] text-[#222222]  "
          >
            {datadetailedEvent.description}
          </p>
        </div>
      </div>
    </div>

  );
}
