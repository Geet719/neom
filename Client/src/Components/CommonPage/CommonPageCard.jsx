import { dataDetailedCard } from "../../assets/Dummy_Data/data";
import { MdOutlineStar } from "react-icons/md";
const stars = [1, 2, 3, 4, 5];
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export default function CommonPageCard() {

  const navigate=useNavigate();

  return (
    <>
      <div className="flex gap-[20px] cursor-grab  mt-[30px]">
        <Swiper spaceBetween={30} slidesPerView={4} loop={true} >
            {dataDetailedCard.map((user) => (
            <SwiperSlide>
              <div className="mt-[30px] p-6 flex border border-[#222222] flex-col rounded-[8px] w-[280px] h-[250px]">
                <div className="flex gap-[10px]">
                  <img className="w-[35px] h-[35px]" src={user.image} />
                  <p
                    style={{ fontFamily: "Brown, sans-serif" }}
                    className="text-left font-semibold tracking-[.50px] opacity-80  text-[14px] text-[#222222]  "
                  >
                    {user.name}
                    <br></br>
                    <span className="!text-[12px] !font-normal">Nov, 2022</span>
                  </p>
                </div>
                <p
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="w-[250px] text-left mt-[10px] leading-5 opacity-90   tracking-[.50px]  text-[12px] text-[#222222]  "
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo...
                </p>

                <div className="flex items-start mt-[10px]  justify-start">
                  {stars.map((star, index) => (
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

                <span
                  onClick={()=>navigate("/feedback")}
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className=" text-[#f10c36] cursor-pointer text-[12px] mt-[10px] opacity-80 underline"
                >
                  Read more
                </span>
              </div>
          </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
