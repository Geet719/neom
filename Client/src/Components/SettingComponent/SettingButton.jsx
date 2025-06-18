import { useState } from "react";
import { FaCircle } from "react-icons/fa";

module.exports function SettingButton({ value = null, text }) {
  const [select, setSelected] = useState(null);

  function handleSelect(value) {
    if (select === value) {
      setSelected(null);
    }
    if (select !== value) {
      setSelected(value);
    }
  }

  if (value === null) {
    return (
      <button
        onClick={() => handleSelect(1)}
        className={`mb-[15px] mr-[130px] cursor-pointer flex items-start justify-between w-[40px] px-1 py-1 border border-[#707070] rounded-[15px] ${
          select === 1 ? " bg-[#FF385C] border-[#FF385C]" : "bg-white"
        }`}
      >
        <FaCircle
          className={`w-[15px] transition-all duration-400 h-[15px] text-[#9A9A9A] ${
            select === 1 ? "translate-x-4 text-white" : "text-[#9A9A9A]"
          }`}
        />
      </button>
    );
  }
  if (value === 1) {
    return (
      <div className="flex items-center  justify-center">
        <button
          onClick={() => handleSelect(2)}
          className={`mb-[20px] cursor-pointer  flex items-start justify-between w-[40px] px-1 py-1 border border-[#707070] rounded-[15px] ${
            select === 2 ? " bg-[#FF385C] border-[#FF385C]" : "bg-white"
          }`}
        >
          <FaCircle
            className={`w-[15px] transition-all duration-400 h-[15px] text-[#9A9A9A] ${
              select === 2 ? "translate-x-4 text-white" : "text-[#9A9A9A]"
            }`}
          />
        </button>
        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
  if (value === 2) {
    return (
      <div className="flex items-center justify-center">
        <input
          onClick={() => handleSelect(3)}
          type="radio"
          className={`appearance-none mb-[20px] flex cursor-pointer items-center justify-center w-[20px] h-[20px] border-2 rounded-full transition-all duration-300 relative
    ${
      select === 3
        ? "border-[#FF385C] bg-white after:content-[''] after:w-[11px] after:h-[11px] after:bg-[#FF385C] after:rounded-full after:absolute after:transition-all"
        : "border-[#707070] bg-white"
    }
  `}
        />

        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
}
