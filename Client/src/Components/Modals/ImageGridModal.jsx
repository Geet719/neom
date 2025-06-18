import { IoIosCloseCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

module.exports function ImageGridModal({ closeModal, val }) {
  const images = [val, val, val, val];
  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20 ">
        <div className="w-[1050px]  h-[500px] bg-white p-[25px] rounded-lg shadow-lg relative">
          <IoIosCloseCircleOutline
            onClick={closeModal}
            className="cursor-pointer absolute top-[10px] right-[10px]"
          />
          <div className="flex cursor-grab mt-[20px] items-center justify-center gap-[20px] overflow-hidden">
            <Swiper spaceBetween={20} slidesPerView={2} loop={true}>
              {images.map((image, index) => (
                <SwiperSlide>
                  <img
                    key={index}
                    src={image}
                    className="w-[550px] h-[420px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
