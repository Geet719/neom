import { useSelector } from "react-redux";
import store from "../../../Store";
import { eventFilter} from "../../Features/User/UserSlice";

module.exports function UpcommingButtons() {

  const {categoryValue,categoryCheck}=useSelector((store)=>store.user);
  console.log(categoryCheck,categoryValue);

  const check = `${categoryValue ?? ""} mins ${categoryCheck ?? ""}`;
  console.log(check);
  
  var category,number;

  function handlebuttons(option){
    const len=option.option.length;
     number=+option.option.slice(0,2);
    if(len===15){
        category=option.option.slice(-7);
    }else{
        category=option.option.slice(-5);
    }
    
    store.dispatch(eventFilter(category,number));

  }

  const buttonGroups = [
    {
      label: "Walking",
      options: ["10 mins walking", "20 mins walking", "30 mins walking"],
    },
    {
      label: "Driving",
      options: ["10 mins drive", "20 mins drive", "30 mins drive"],
    },
  ];

  const TimeButtonGroup = ({ options }) => (
    <div
      style={{ fontFamily: "BrownLight, sans-serif" }}
      className={`border cursor-pointer border-[#222222] bg-[#F9F7F2]  rounded-[24px] opacity-80 flex`}
    >
      {options.map((option,index) => (
        <button
        onClick={()=>handlebuttons({option})}
        key={index}
        className={`${
          index === 0
            ? "rounded-l-[24px]"
            : index === options.length - 1
            ? "rounded-r-[24px]"
            : ""
        } tracking-wider cursor-pointer  px-[10px] border-r border-[#222222] ${(option===check) ? "bg-black text-white transition-all duration-300":null} leading-[38px] text-left font-normal text-[11px] text-[#222222] opacity-80 `}
      >
        {option}
      </button>
      
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      <h1
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left font-normal text-[12px] leading-[34px] tracking-[0px] text-[#222222] opacity-80"
      >
        How far are you willing to travel?
      </h1>
      <div className="flex gap-[10px]">
        {buttonGroups.map((group, index) => (
          <div key={index} className="flex gap-[15px] ">
            <TimeButtonGroup options={group.options} />
          </div>
        ))}
      </div>
    </div>
  );
}
