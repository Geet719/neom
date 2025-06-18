import { useState } from "react";
import ImageGridModal from "../Modals/ImageGridModal";


module.exports function ImageGrid({val,status}) {

  const [showall,setShowall]=useState(false);

  function closeModal(){
    setShowall(false);
  }

  return (
    <>
    <div className="flex justify-between  w-full gap-2 mt-[15px] ">
      <div className="grid grid-cols-2  w-1/2 gap-2 ">
        <img className="h-[225px] object-cover rounded-tl-md" src={val} />
        <img className="h-[225px] object-cover" src={val} />
        <img className="h-[225px] object-cover rounded-bl-md" src={val} />
        <img className="h-[225px] object-cover " src={val} />
      </div>
      <div className="flex w-1/2 relative ">
        <img className="h-[460px] object-cover rounded-r-md" src={val} />
        <button
          onClick={()=>setShowall(true)}
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute cursor-pointer bottom-3 right-3 font-medium text-white rounded-[4px] text-[12px] px-[18px] py-[10px] border border-white  flex items-center justify-center text-center hover:bg-[#ffffff] hover:text-black"
        >
          Show all
        </button>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute top-[-20px] right-0  text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          {/* SHOW ON THE BASIS OF COMPLETED , SCHEDULED, NULL */}
         {status===null?null:status}
        </span>
      </div>
    </div>
    {showall && <ImageGridModal closeModal={closeModal} val={val}/> }
    </>
  );
}
