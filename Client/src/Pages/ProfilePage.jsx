import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { FiEdit3 } from "react-icons/fi";
import { BsHandThumbsUp } from "react-icons/bs";

import serverData from "../assets/Dummy_Data/serverData";
import { formatDobDate } from "../util/DateFormatter";
import store from "../../Store";
import { HandleProfile, interestedFunction } from "../Features/User/UserSlice";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


export default function ProfilePage() {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userMobile = useRef(null);
  const [toggle, setToggle] = useState(true);

  const notify = () =>
    toast.success("User updated profile section", {
      className: "text-[12px] w-[250px]!",
    });

  const userDetails = useSelector((store) => store.user);
  const {
    ProfilePic,
    authorized,
    fullName,
    birthDate,
    mobileNo,
    email,
    user_id,
    interestArray,
    interests,
  } = userDetails;

  const [pic, setPic] = useState(ProfilePic);
  const [formPic, setFormPic] = useState(null);
  const dob = formatDobDate(birthDate);

  function handleEditProfile(e) {
    e.preventDefault();
    setToggle(false);
  }

  useEffect(() => {
    setPic(ProfilePic);
  }, [ProfilePic]);




  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPic(URL.createObjectURL(file));
      setFormPic(file);
    }
  };


  const x = interests?.split(",") || [];

  let initlikearray = [];

  for (let i = 0; i < interestArray.length; i++) {
    const val = x.includes(interestArray[i][0]);
    initlikearray.push([interestArray[i][0], val]);
  }


  const [likeArray, setLikeArray] = useState(initlikearray);
  const [inputValue, setInputValue] = useState("");
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [num,setNum]=useState("");


  function handleCancelProfile(){
    setToggle(true);
    const selectedInterests = interests?.split(",") || [];
    const updatedLikeArray = interestArray.map((arr) => [
      arr[0],
      selectedInterests.includes(arr[0]),
    ]);

    setLikeArray(updatedLikeArray);
    const selectedValue = updatedLikeArray
      .filter((val) => val[1])
      .map((val) => val[0])
      .join(", ");
    setInputValue(selectedValue);
    setPic(ProfilePic);
    userName.current.value = name;
    userEmail.current.value = mail;
    userMobile.current.value = num;
  }
  
  function handleImage(value) {
    const prevLikeArray = [...likeArray];
    const updatedArray = prevLikeArray.map((item) =>
      item[0] === value ? [item[0], !item[1]] : item
    );
    const selectedValue = updatedArray.filter((val) => val[1] === true);
    setInputValue(selectedValue.map((select) => select[0]).join(", "));

    setLikeArray(updatedArray);
    store.dispatch(interestedFunction(updatedArray));
  }
  useEffect(() => {
    const selectedInterests = interests?.split(",") || [];
    const updatedLikeArray = interestArray.map((arr) => [
      arr[0],
      selectedInterests.includes(arr[0]),
    ]);

    setLikeArray(updatedLikeArray);
    // setInt(updatedLikeArray);
    const selectedValue = updatedLikeArray
      .filter((val) => val[1])
      .map((val) => val[0])
      .join(", ");
    setInputValue(selectedValue);

    setMail(email);
    setName(fullName);
    setNum(mobileNo);
  }, [interests]);

  // useEffect(() => {
  //   const selectedValue = likeArray.filter((val) => val[1] === true);
  //   setInputValue(selectedValue.map((select) => select[0]).join(", "));
  // }, [interestArray]);

  function handleChange(e) {
    const userData = e.target.value;

    console.log(e.target.value);
    setInputValue(userData);

    const data = userData
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const prevLikeArray = [...likeArray];
    const updateInputArray = prevLikeArray.map((item) =>
      data.includes(item[0]) ? [item[0], true] : [item[0], false]
    );
    setLikeArray(updateInputArray);

    store.dispatch(interestedFunction(updateInputArray));
  }

  function handleSaveProfile(e) {
    e.preventDefault();
    console.log("save button clicked");
  
    // Extract selected interests from likeArray instead of interestArray
    const text = likeArray
      .filter(([interest, value]) => value)
      .map(([interest]) => interest)
      .join(",");
  
    console.log("save text", text);
  
    const formData = new FormData();
    formData.append("userId", user_id);
    formData.append("email", userEmail.current.value);
    formData.append("mobileNo", userMobile.current.value);
    formData.append("name", userName.current.value);
    formData.append("intersets", text); // Corrected field name if needed
  
    if (formPic) {
      formData.append("profilePic", formPic);
    }
  
    console.log("FormData before sending:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    store.dispatch(HandleProfile(formData));
    setToggle(true);
    notify();
  }
  

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className=" relative  mt-[30px] w-[53vw] h-[850px] bg-[#FFFFFF] border border-[#DDDDDD] ">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="mt-[30px] ml-[55px] text-left text-[24px] leading-[42px] tracking-[1.19px] text-[#222222] opacity-100 "
          >
            Edit {authorized === true ? fullName : "Charlie"} profile
          </h1>

          <div className="absolute top-[100px] left-[55px] w-[110px] rounded-[8px] overflow-hidden">
            <img
              className="w-[110px] h-[110px] object-cover"
              src={pic}
              alt="Social"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <label className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity cursor-pointer">
              {toggle == false ? (
                <>
                  <FiEdit3 className="text-[#ffffff] cursor-pointer w-[30px] h-[40px] opacity-80" />
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </>
              ) : null}
            </label>
          </div>
          <ToastContainer />
          <div className="absolute top-[90px] left-[190px]">
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                What should we call you?
              </label>
              <br />
              <input
                disabled={toggle}
                defaultValue={name}
                ref={userName}
                type="text"
                className=" outline-gray-300 cursor-text w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                What's your email address?
              </label>
              <br />
              <input
                disabled={true}
                ref={userEmail}
                defaultValue={mail}
                type="text"
                className="outline-gray-300 cursor-text bg-gray-200 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                On which number can we contact you?
              </label>
              <br />
              <input
                disabled={toggle}
                ref={userMobile}
                style={{ fontFamily: "BrownLight, sans-serif" }}
                type="text"
                defaultValue={num}
                className=" outline-gray-300 cursor-text w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px]  text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                When can we wish a happy birthday?
              </label>
              <br />
              <input
                disabled
                value={dob}
                type="text"
                className=" outline-gray-300 cursor-text bg-gray-200 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <div className="mt-[20px] grid grid-cols-5 w-[400px] gap-3">
                {serverData[0].formData.map((data1) => {
                  const isLiked = likeArray.find(
                    (item) => item[0] === data1.name
                  )?.[1];

                  return (
                    <div
                      key={data1.name}
                      onClick={
                        toggle === false ? () => handleImage(data1.name) : null
                      }
                      className="relative w-[73px] cursor-pointer"
                    >
                      <img
                        className="relative w-[73px] h-[100px] object-cover rounded-[4px] cursor-pointer"
                        src={data1.image}
                        alt="Social"
                      />
                      {isLiked && (
                        <>
                          <BsHandThumbsUp
                            size={30}
                            className="absolute z-90 top-7 right-5 text-white text-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        </>
                      )}
                      <p className="absolute bottom-2 left-3 text-center text-[10px] leading-[16px] tracking-[0.29px] text-[#FFFFFF] opacity-100 font-medium w-[60px]">
                        {data1.name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                Please let us know if you have some interests{" "}
              </label>
              <br />
              <input
                disabled={toggle}
                onChange={handleChange}
                value={inputValue}
                placeholder="Add multiple interests comma ( , ) separated"
                type="text"
                className="outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder:pl-2 text-[12px]"
              />
              <br />

              <div className="flex gap-5 mt-[10px]">
                {toggle !== false ? (
                  <button
                    onClick={handleEditProfile}
                    style={{ fontFamily: "BrownLight, sans-serif" }}
                    className="bg-[#FF385C] rounded-[4px] cursor-pointer opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[#FFFFFF] "
                  >
                    Edit
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSaveProfile}
                      style={{ fontFamily: "BrownLight, sans-serif" }}
                      className="bg-[#FF385C] rounded-[4px] cursor-pointer opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[#FFFFFF] "
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelProfile}
                      style={{ fontFamily: "BrownLight, sans-serif" }}
                      className="bg-[#ffffff] border cursor-pointer rounded-[4px] opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[##222222] "
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
