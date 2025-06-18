import FeedBackIcons from "./FeedBackIcons";
import { formatDate } from "../../util/DateFormatter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

module.exports function FeedBackCard({ feed, handleReview }) {
  const userDetails = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { authorized, fullName } = userDetails;

  console.log(feed);

  return (
    <div className=" flex w-[680px] pb-[25px] border-b border-[#c0bdb3] ">
      <div className="relative w-[220px] h-[240px]">
        <img
          className="w-[full] cursor-pointer h-full rounded-[8px]"
          src={feed.image_main}
          alt="Holiday"
        />
        <div
          onClick={() =>
            navigate(`/details2/eventId/${feed.id}`, { state: { data: feed } })
          }
          className="absolute  cursor-pointer inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[8px]"
        ></div>
        <p
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute text-left text-[14px] font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[62px]"
        >
          {feed.name}
        </p>
        <p className="absolute text-left text-[12px] font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[40px]">
          {formatDate(feed.end_date)}
        </p>
        <p className="absolute text-left text-[12px] underline font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[20px]">
          {feed.no_of_review} reviews
        </p>
     { feed.feedback_data!==null? <p className="w-[50px] h-[20px] absolute flex gap-1 justify-end items-center text-[12px]  font-normal leading-[20px] tracking-[0.4px] text-yellow-200   opacity-100 right-[9px] bottom-[20px]">
          <IoMdStar className="w-[15px]" />
          <span className="text-[12px]  font-normal leading-[20px] tracking-[0.4px] !text-white">
           {feed.feedback_data.rating}
          </span>
        </p>:null}
      </div>

      <div className="w-[460px] pl-[30px] flex flex-col">
        <p
          style={{ fontFamily: "Brown, sans-serif" }}
          className="text-left text-[12px] leading-[28px] tracking-[0.60px] text-[#222222]  opacity-70"
        >
          {formatDate(feed.end_date)}
        </p>
        {feed.feedback_data === null ? (
          <p
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[450px] text-left text-[18px] leading-[28px] font-medium tracking-[0.60px] text-[#222222]  opacity-100"
          >
            Hey {authorized === true ? fullName : "Charlie"} , you haven't added
            you feedback yet. Please share your experience with us to serve you
            better next time.
          </p>
        ) : (
          <p
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[450px] text-left text-[18px] leading-[28px] font-medium tracking-[0.60px] text-[#222222]  opacity-100"
          >
            {feed.experience_title}
          </p>
        )}

        {feed.feedback_data === null ? (
          <button
            onClick={() => handleReview(feed.id)}
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className=" text-[#ffffff] cursor-pointer rounded-[4px] text-[14px] w-[147px] mt-[30px] px-[28px] py-[10px] bg-[#222222] flex items-center justify-center text-center"
          >
            Add a Review
          </button>
        ) : (
          <>
            <p
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="mt-[10px] w-[550px]  text-justify text-[14px]  tracking-[0.15px] text-[#222222]  opacity-100"
            >
              {feed.feedback_data.user_feedback}
            </p>

            <FeedBackIcons val={feed.feedback_data.rating} />
          </>
        )}
      </div>
    </div>
  );
}
