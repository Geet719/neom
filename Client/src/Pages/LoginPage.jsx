import { useNavigate } from "react-router-dom";

import { FcGoogle  } from "react-icons/fc";

import store from "../../Store";
import { userlogin } from "../Features/User/UserSlice";

module.exports function LoginPage({ loginHandlebyGoogle }) {

   const navigate=useNavigate();


    function handleSign(e){
      e.preventDefault();
      navigate("/SignIn");
    }

    function handleLogin(e){
      e.preventDefault();
      const fd = new FormData(e.target);
      const data = Object.fromEntries(fd.entries());    
      store.dispatch(userlogin(data));    
    }
    
  return (
    <div className="flex flex-col justify-center items-center bg-white h-[100vh] mx-[-120px]">
         
      <div className=" flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
        <h1 style={{fontFamily:"IvyMode, sans-serif"}} className="text-center text-[32px] tracking-widest font-normal text-zinc-800 dark:text-white mb-[60px]">WELCOME TO NEOM</h1>
        <div className=" flex flex-col items-center w-[400px] justify-center ml-[120px]">
        
          <div className="w-[400px] ">
            <form onSubmit={handleLogin} className="mb-4 w-full " >
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    className="text-zinc-950 dark:text-white tracking-wider"
                    htmlFor="email"
                    style={{fontFamily:"IvyMode, sans-serif"}}
                    
                  >
                    Email
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-gray-400 bg-[#ffffff] px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 outline-none"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                  />
                  <label
                    className="text-zinc-950 mt-2 dark:text-white tracking-wider"
                    htmlFor="password"
                    style={{fontFamily:"IvyMode, sans-serif"}}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-gray-400 bg-[#ffffff] px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 outline-none"
                    name="password"
                  />
                </div>
                <button
                  className="mt-5 inline-flex items-center bg-white justify-center  rounded-md text-sm font-medium cursor-pointer border border-gray-400 h-10 px-4 w-full text-zinc-800 py-6 hover:border hover:border-gray-600 hover:translate-y-1 hover:transition-all ease-in-out"
                  type="submit"
                  
                >
                  Login In
                </button>
                <p style={{fontFamily:"Brown, sans-serif"}}  className="text-[12px] font-normal text-gray-600 ">Don't Have an Account ? <button onClick={handleSign} className="text-blue-600 font-medium cursor-pointer">Create New Account</button></p>
              </div>
            </form>

            <div className="flex items-center justify-center mt-5">
              <h5>OR</h5>
            </div>
            <button
              onClick={loginHandlebyGoogle}
              className="mt-5 inline-flex items-center bg-white justify-center  rounded-md text-sm font-medium cursor-pointer border border-gray-400 h-10 px-4 w-full text-zinc-800 py-6 hover:border hover:border-gray-600 hover:translate-y-1 hover:transition-all ease-in-out"
            >
              <FcGoogle  className="mr-5 text-red-600" size={25}/>
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
