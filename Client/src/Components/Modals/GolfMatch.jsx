import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, formatEventTime } from "../../util/DateFormatter";

export default function GolfMatch({ closeModal, carddata ,cardtime}) {
  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName } = userDetails;

  const navi = useNavigate();
  function handleSeats(val) {
    closeModal();
    navi("/schedule", { state: { text: val } });
  }
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20 ">
      <div className="w-[500px] mt-[20px] bg-white p-[25px] rounded-lg shadow-lg relative">
        <IoIosCloseCircleOutline
          onClick={closeModal}
          className="absolute top-[10px] right-[10px]"
        />

        <div className="flex flex-col justify-start items-start">
          <h2
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-[28px]"
          >
            Hey {authorized !== null ? fullName : "Charlie"},
          </h2>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-[18px] mt-[5px]"
          >
            You have chosen a new "{carddata.name}" event on{" "}
            {formatDate(carddata.start_date)}, at {cardtime}. Have a great day
            ahead and enjoy your new round of {carddata.category}!
          </h1>

          <div className="grid grid-cols-2 mt-[20px] gap-3">
            <div className="flex flex-col gap-[5px]">
              <label
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[174px] text-left text-[14px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
              >
                Select a day
              </label>
              <input
                defaultValue={formatDate(carddata.start_date)}
                type="text"
                className=" outline-gray-300 w-[185px] h-[35px] border border-[#DDDDDD] rounded-[4px] placeholder:text-left text-[12px] pl-2  tracking-[0.31px] text-[#222222]"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[174px] text-left text-[14px]  tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
              >
                Select a time slots
              </label>
              <input
                defaultValue={cardtime}
                type="text"
                className=" outline-gray-300 w-[185px] h-[35px] border border-[#DDDDDD] rounded-[4px] placeholder:text-left text-[12px] pl-2  tracking-[0.31px] text-[#222222]"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <label
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[185px] text-left text-[14px]  tracking-[0.31px] text-[#222222] opacity-100"
              >
                Select your seats
              </label>
              <input
                defaultValue={carddata.guest}
                type="text"
                className=" outline-gray-300 w-[185px] h-[35px] border border-[#DDDDDD] rounded-[4px] placeholder: text-left text-[12px] pl-2  tracking-[0.31px] text-[#222222]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] mt-5">
          <button
            onClick={() => handleSeats(2)}
            className="text-white text-[12px] bg-[#222222] py-2 px-7 rounded cursor-pointer"
          >
            Reserve my seats
          </button>
          <button
            onClick={closeModal}
            className="text-black text-[12px]  border-b-1 border-black cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
