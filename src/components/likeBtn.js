import { useState } from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"


export default function LikeButton (){
  const [isLiked, setIsLiked] = useState(null);

  const buttonHandle = () =>{
    setIsLiked(!isLiked);
  }


  return (
    <button z-10
      className={`rounded-full bg-slate-100 cursor-pointer  shadow-sm flex align-middle justify-center items-center h-7 w-7 absolute right-0 focus:outline-none`}
      onClick={buttonHandle}
    >
      {isLiked? <FcLike /> :<FcLikePlaceholder /> }
      
    </button>
  )
}