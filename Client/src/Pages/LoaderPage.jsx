import { useSelector } from "react-redux";
import {RingLoader} from "react-spinners"

export default function LoaderPage() {
    
    const userDetails=useSelector((store)=>store.user);
    console.log(userDetails);
  
    const {loading}=userDetails;
    
    return (
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <RingLoader  color="#89cfe5" loading={loading}/>
        <p className="text-2xl mt-[10px] text-gray-700">fetching user details......</p>
      </div>
    );
 
}
