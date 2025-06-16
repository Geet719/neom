import { GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import store from "../../../Store";
import {  handleFavouriteCard, handleRemoveCard } from "../../Features/User/UserSlice";
import { useSelector } from "react-redux";


export default function Image({ value, card3,notify1 ,notify2,notify3}) {
  const navigate=useNavigate();
  
  const favouriteEvents = useSelector((state) => state.user.favouriteEvents);

  // Check if this card is a favorite
  const isFavorite = favouriteEvents.some((event) => event.id === card3.id);
 
  console.log(isFavorite);

  function handleFavorite(card){
    console.log("clicked card",card);
    store.dispatch(handleFavouriteCard(card));
    if(isFavorite){
      notify3();
    }else{
      notify1();
    }

  }

  function handleRemove(card){
    store.dispatch(handleRemoveCard(card));
    notify2();
  }

  if (value === 1) {
    return (
      <div className="flex items-center justify-center relative">
        <GoHeartFill 
          onClick={()=>handleFavorite(card3)}
          className={`absolute size-6 cursor-pointer opacity-80 top-3 right-3 ${isFavorite?"text-red-600":"text-white"}` }
          style={{
            stroke: "white", 
            strokeWidth: "2px", 
            fill: isFavorite?"red":"black", 
          }}
        />

        <div
          onClick={() =>
            navigate(`/details2/eventId/${card3.id}`, { state: { data: card3 } })
          }
          style={{
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "rgba(156, 163, 175, 0.5)",
          }}
          className="absolute right-1 text-[6rem] cursor-pointer  mb-[-18px] font-extrabold bottom-0 text-gray-400 opacity-90  "
        >
          {card3.top_event_id}
        </div>
        <img
        // YHA SE REMOVE KRNA CHECK
          onClick={()=>(navigate(`/details2/eventId/${card3.id}`,{state:{data:card3}}))}
          className="w-[220px] h-[280px] object-cover cursor-pointer rounded-[8px]"
          src={card3.image_main}
        />
      </div>
    );
  }

  if (value === 2) {
    
    return (
      <div className="flex items-center justify-center relative">
        <GoHeartFill onClick={()=>handleFavorite(card3)} className={`absolute cursor-pointer size-6 top-3 right-3 ${isFavorite?"text-red-600":"text-black"}`}  />
        <img
          // YHA SE REMOVE KRNA CHECK
         onClick={()=>(navigate(`/details2/eventId/${card3.id}`,{ state: { data:card3 } }))}
          className="w-[220px] h-[280px] object-cover rounded-[8px] cursor-pointer"
          src={card3.image_main}
        />
      </div>
    );
  }

  if (value === 3) {
    return (
      <div className="flex items-center justify-center relative">
        <button
          onClick={()=>handleRemove(card3)}
          style={{ fontFamily: "Brown, sans-serif" }}
          className="cursor-pointer text-[10px] absolute flex items-center  justify-center  top-3 right-2 text-[#FF385C] bg-white py-1 px-3 tracking-wide rounded-2xl"
        >
          Remove
        </button>
        <img
          // YHA SE REMOVE KRNA CHECK
          onClick={()=>(navigate(`/details2/eventId/${card3.id}`,{ state: { data:card3 } }))}
          className="w-[220px] h-[280px] object-cover cursor-pointer rounded-[8px]"
          src={card3.image_main}
        />
      </div>
    );
  }
}
