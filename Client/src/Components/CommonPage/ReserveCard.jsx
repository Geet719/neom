import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { formatDate, formatEventTime } from "../../util/DateFormatter";
import store from "../../../Store";
import { handleReserve, stripePayment } from "../../Features/User/UserSlice";

module.exports function ReserveCard({  datadetailedEvent }) {
  const userDetails = useSelector((store) => store.user);
  console.log(userDetails);
  const { scheduledEvents } = userDetails;
  const userSeats = useRef(null);
  const [loader,setLoader]=useState(false);
  const [seat, setSeat] = useState(datadetailedEvent.available_seats);
  const [amount, setAmount] = useState(datadetailedEvent.price);

  const notify1 = () =>
    toast.success("Event is already scheduled", {
      className: "text-[12px] w-[250px]!",
  });


  function handleUser() {
    const no_of_reserveSeat = userSeats.current.value;
    if (no_of_reserveSeat === "") {
      setSeat(datadetailedEvent.available_seats);
      setAmount(datadetailedEvent.price);
      return;
    }
    if(no_of_reserveSeat<0){
      setSeat(datadetailedEvent.available_seats);
      setAmount(datadetailedEvent.price);
      return;
    }
    const updatedSeat = datadetailedEvent.available_seats - no_of_reserveSeat;
    if(updatedSeat<=0){
      setSeat(0);
      setAmount(datadetailedEvent.price);
    }else{
      setSeat(updatedSeat);
      setAmount(
        no_of_reserveSeat * datadetailedEvent.price + datadetailedEvent.price
      );
    }
  }


  async function handleReserveMySeat(card) {
    
    try {
      console.log("Reserve button clicked");

      let no_of_reserveSeat = userSeats.current.value || 0;
      const cardCheck = scheduledEvents.findIndex(
        (data) => data.id === card.id
      );

      if (cardCheck !== -1) {
        notify1();
        store.dispatch(handleReserve(card, no_of_reserveSeat));
      } else {
        setLoader(true);
        store.dispatch(stripePayment(card.id,card.name,card.image_main,amount,no_of_reserveSeat));
        setLoader(false);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  }

  return (
    <div
      className={`${
        datadetailedEvent.status===null
          ? "h-[260px]"
          : "h-[200px]"
      } w-[275px] mt-[10px] p-5 flex flex-col  bg-white bg-[0%_0%] bg-no-repeat bg-padding-box shadow-[0px_3px_16px_rgba(0,0,0,0.14)] border border-[#DDDDDD] rounded-[12px] opacity-100`}
    >
      <h1
        style={{ fontFamily: "Brown, sans-serif" }}
        className="text-left opacity-80 font-normal text-[16px]  tracking-[1.19px] text-[#222222]"
      >
        {formatEventTime(
          datadetailedEvent.start_date,
          datadetailedEvent.end_date
        )}
      </h1>
      <ToastContainer />
      <div className="mt-3  flex flex-col">
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  rounded-[4px] text-left   opacity-90  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            From<br></br>
            {formatDate(datadetailedEvent.start_date)}
          </p>
          <p>
            To<br></br>
            {formatDate(datadetailedEvent.end_date)}
          </p>
        </div>
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  text-left   opacity-80  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            {datadetailedEvent?.guest != null ? "Guests" : "Enter No of Guest"}
            <br></br>
            {datadetailedEvent?.guest != null ? (
              datadetailedEvent.guest
            ) : (
              <input
                min="0"
                onChange={handleUser}
                ref={userSeats}
                className="outline-none border border-gray-400 pl-[4px] py-[2px] mr-1 mt-1"
                type="number"
                placeholder="Guest"
                onKeyDown={(e) => {
                  if (e.key === '-') {
                    e.preventDefault();
                  }
                }}
                onInput={(e) => {
                  const maxSeats = datadetailedEvent.available_seats;
                  if (e.target.value > maxSeats) {
                    e.target.value = "";
                  }
                }}
              />
            )}{" "}
            Adults
          </p>
        </div>
        {datadetailedEvent.status===null ? (
          <div className="flex flex-col">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="   text-left   opacity-60  tracking-[.50px]  text-[14px] text-[#222222] flex justify-between mt-[8px] "
            >
              {seat} seats available <span>${amount}</span>
            </p>
           <button
              onClick={() => handleReserveMySeat(datadetailedEvent)}
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="w-full text-[#ffffff] cursor-pointer rounded-[4px] text-[14px] mt-[10px] px-[24px] py-[8px] bg-[#222222] flex items-center justify-center text-center"
            >
             {loader===false? "Reserve my seat":"Payment Processing......"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
