import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { dataDashBoardCard2 } from "../../assets/Dummy_Data/data";
import { dataMyFavoritesCard } from "../../assets/Dummy_Data/data";

module.exports function Slider({value,scheduledEvents,goToPrevImage,goToNextImage,goToNextImageCard2,goToPrevImageCard2,currentIndex,currentIndexCard2,itemsPerView,itemsPerViewCard2,currentIndexCard3,itemsPerViewCard3,goToNextImageCard3,goToPrevImageCard3}) {

  

  if(value===1) return (
    <div className="w-[126px] h-[46px] mt-[15px] flex items-center gap-[15px]">
      <IoIosArrowRoundBack
        className={
          currentIndex === 0
            ? "mx-2 my-2  rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
            : "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
        }
        onClick={goToPrevImage}
        disabled={currentIndex === 0}
      />

      <IoIosArrowRoundForward
        className={
          currentIndex < (scheduledEvents?.length || 0) - itemsPerView
            ? "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
            : "mx-2 my-2  rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
        }
        onClick={goToNextImage}
        disabled={currentIndex >= (scheduledEvents?.length || 0) - itemsPerView}
      />
    </div>
  );
  if(value===2)return(
    <div className="w-[126px] h-[46px] mt-[10px] flex items-center gap-[15px]">
          <IoIosArrowRoundBack
            className={
              currentIndexCard2 === 0
                ? "mx-2 my-2  rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
                : "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
            }
            onClick={goToPrevImageCard2}
            disabled={currentIndexCard2 === 0}
          />

          <IoIosArrowRoundForward
            className={
              currentIndexCard2 < dataDashBoardCard2.length - itemsPerViewCard2
                ? "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
                : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
            }
            onClick={goToNextImageCard2}
            disabled={
              currentIndexCard2 >= dataDashBoardCard2.length - itemsPerViewCard2
            }
          />
        </div>
  );
  if(value===3)return(
    <div className="w-[126px] h-[46px] mt-[10px] flex items-center gap-[15px]">
          <IoIosArrowRoundBack
            className={
              currentIndexCard3 === 0
                ? "mx-2 my-2  rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
                : "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
            }
            onClick={goToPrevImageCard3}
            disabled={currentIndexCard3 === 0}
          />

          <IoIosArrowRoundForward
            className={
              currentIndexCard3 < dataMyFavoritesCard.length - itemsPerViewCard3
                ? "mx-2 my-2 cursor-pointer rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
                : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
            }
            onClick={goToNextImageCard3}
            disabled={
              currentIndexCard3 >= dataMyFavoritesCard.length - itemsPerViewCard3
            }
          />
        </div>
  )
}

