import { useSelector } from "react-redux";

export default function RescheduleNow({ show,handleShow,handleReschedule1,handleCancelEvent }) {

  const userDetails=useSelector((store)=>store.user);
  const {authorized,fullName}=userDetails;

  



  if (show[0] == true)
    return (
      <div className="fixed inset-0 z-50 pt-[150px] flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20 ">
        <div className="w-[470px] flex flex-col justify-around tracking-wider h-[200px] bg-white p-[25px] rounded-lg shadow-lg relative">
          <h1 style={{fontFamily:"IvyMode, sans-serif"}} className="text-[28px] font-medium opacity-80">Hey {authorized!==null?fullName:"Charlie"},,</h1>
          <h2 style={{fontFamily:"IvyMode, sans-serif"}} className="text-[18px] font-medium opacity-80">{show[1]===1?"Are you sure you want to reschedule this event?":"Are you sure you want to Cancel this event?"}</h2>
          <div className="flex gap-[30px] mt-5">
            <button onClick={show[1]===1?()=>handleReschedule1(show[1]):()=>handleCancelEvent(1,show[1])} className="bg-black cursor-pointer opacity-80 text-[12px] text-white py-2 px-6 rounded">
              Yes, I am sure
            </button>
            <button onClick={handleShow} className="text-black cursor-pointer text-[10px] border-b border-gray-500 ">
              No Thanks
            </button>
          </div>
        </div>
      </div>
    );
}
