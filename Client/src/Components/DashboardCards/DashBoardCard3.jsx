import {
  formatEventShortDate,
  formatEventTime,
} from "../../util/DateFormatter";
import getEmojiImage from "../../util/emojiFinder";
import truncateName from "../../util/truncateName";
import Image from "../Img_Component/Image";

module.exports function DashBoardCard3({
  card3,
  fav = null,
  up = null,
  notify1,
  notify2,
  notify3,
}) {
  return (
    <div
      
      className="w-[217px] h-[350px] flex flex-col items-start"
    >
      {fav === null && up === null ? (
        <Image
          value={1}
          card3={card3}
          notify1="null"
          notify2="null"
          notify3="null"
        />
      ) : (
        <>
          {fav !== null && (
            <Image
              value={3}
              card3={card3}
              notify1="null"
              notify2={notify2}
              notify3="null"
            />
          )}
          {up !== null && (
            <Image
              value={2}
              card3={card3}
              notify1={notify1}
              notify2="null"
              notify3={notify3}
            />
          )}
        </>
      )}

      <p className="w-[220px] flex gap-[40px] items-center mt-[6px]">
        <div className="flex items-center gap-1.5">
          <img
            className="w-[10px] h-[10px] "
            src={getEmojiImage(card3.star_review)}
          />
          <span
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left text-[#222222] font-medium  text-[10px] leading-[18px]"
          >
            {truncateName(card3?.experience_title || "", 25)}
          </span>
        </div>
        <span
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-right text-[#222222] text-[10px] tracking-[.79px] leading-[18px]  opacity-70"
        >
          {formatEventShortDate(card3.start_date, card3.end_date)}
        </span>
      </p>
      <p
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left text-[#222222] mt-[5px]  text-[12px] leading-[20px] tracking-[0.80px] "
      >
        {truncateName(card3.name, 13)}
      </p>
      <p
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left text-[#222222]  text-[10px]  tracking-[0.62px] opacity-100"
      >
        {formatEventTime(card3.start_date, card3.end_date)}
      </p>
    </div>
  );
}
