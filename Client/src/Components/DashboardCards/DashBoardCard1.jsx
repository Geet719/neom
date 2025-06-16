import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import getEmojiImage from "../../util/emojiFinder";
import { CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import formatEventDate from "../../util/DateFormatter";
import truncateName from "../../util/truncateName";

export default function DashBoardCard1({ list }) {
  const navigate = useNavigate();

  const stars = list.star_review;
  console.log(stars);
 
  return (
    <div  onClick={() => navigate(`/details2/eventId/${list.id}`,{state:{text:"sch",data:list}})} className="w-[37.5rem] h-[15.5rem] cursor-pointer mt-[1.875rem] border border-[#222222] rounded-[0.75rem] opacity-100 flex justify-center items-center">
      <div className="w-[13.1875rem] h-[15.375rem] relative ">
        <img
          className="w-[13.1875rem] h-full rounded-l-[0.75rem] object-cover cursor-pointer"
          src={list.image_main}
          alt={list.event_type_title}
        />
        <img
          className="absolute bottom-[0.575rem] opacity-80 right-[1.975rem] h-[2.275rem] z-[70]"
          src={list.image_cloud}
        />
        <p  style={{ fontFamily: "BrownLight, sans-serif" }}  className="absolute bottom-[1.125rem] z-[100] right-[.35rem] text-white font-[900] text-[12px]">{list.temp}°C</p>
      </div>
      <div className="w-[19.5rem] h-full rounded-r-[0.75rem] pt-[0.625rem] flex flex-col items-start pl-[0.7875rem] ">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[10.1125rem] text-left text-[1.125rem] leading-[1.9875rem] tracking-[0.049375rem] text-[#222222] opacity-100"
        >
          {truncateName(list.name,13)}
        </h1>

        <div className="flex items-center gap-[0.625rem] w-[12.5rem] text-[0.75rem] tracking-[0.019375rem] text-[#222222] opacity-100">
          <div className="flex items-center gap-0 text-[0.8375rem]">
            {(Array.isArray(stars) ? stars : Array.from({ length: Number(stars) || 0 })).map((_, index) => (
              <MdOutlineStar
                key={index}
                className="text-[#FF385C] w-[13px] h-[13px]"
              />
            ))}

          </div>
          <span
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="pt-[0.0585rem] text-[.610rem]"
          >
            {list.star_review}.0 ({list.no_of_review} Reviews)
          </span>
        </div>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[18.125rem] h-[3.3125rem] tracking-[.011875rem] text-left text-[#222222] text-[0.75rem] leading-[0.7675rem] mt-[1rem] opacity-100"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…{" "}
          <span className="text-[#FF385C] cursor-pointer">read more</span>
        </p>

        <ul className="w-[18.125rem] h-[3.5rem] mt-[0.170rem] flex flex-col gap-[0.49375rem]">
          <li className="flex items-center gap-[0.325rem]">
            <CiCalendar className=" w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.035375rem] text-[#222222] "
            >
              {formatEventDate(list.start_date,list.end_date)}
            </span>
          </li>
          <li className="flex items-center gap-[0.325rem]">
            <CiLocationOn className="w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.035375rem] text-[#222222] "
            >
              {list.city}<span className="ml-[5px]">{list.country}</span>
            </span>
          </li>
          <li className="flex items-center gap-[0.325rem]">
            <CiGrid41 className="w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.035375rem] text-[#222222]"
            >
              {list.event_type_title}
            </span>
          </li>
          <li className="flex items-center gap-[0.225rem] pt-[0.5rem]">
            <img src={getEmojiImage(list.star_review)} className="w-[0.645rem] text-[#55BF3B]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="pt-[0.125rem] w-[14.375rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.059375rem] text-[#222222] "
            >
              {list.review_desc}
            </span>
            <span
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" text-left text-[0.61875rem] leading-[1.0625rem] tracking-[0.019375rem] text-[#222222]  pr-[0.625rem]"
            >
              {list.status}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
