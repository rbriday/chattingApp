import React from "react";
import SideNavbar from "../SideNavbar/SideNavbar";
import Friends from "../Frindes/Friends";
import friensOne from "../../assets/friendOne.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineCamera } from "react-icons/ai";
import Chatbox from "./Chatbox";
import { useSelector } from "react-redux";

const Message = () => {
  const activeData = useSelector((state)=>state.chatBoxInfo?.value)
  console.log(activeData)
  return (
    <div className="flex p-[30px]">
      <div>
        <SideNavbar active="message"></SideNavbar>
      </div>
      <div className="flex space-x-5">
        <div className="ml-[40px]">
          <div>
            {/* <Friends></Friends> */}
            <Chatbox></Chatbox>
          </div>
        </div>
        <div>
          <div className="w-[700px] shadow-lg px-[50px] py-[24px] rounded-md">
            <div className="flex items-center justify-between border-b-2 border-[#000]/25 pb-[24px]">
              <div className="flex items-center ">
                <div>
                  <img src={friensOne} alt="" />
                </div>
                <div className="ml-[33px]">
                  <h4 className="font-poppins font-semibold text-[24px] text-black">
                   
                    {
                      activeData ? <p>{activeData?.name}</p> : <p>Unknown</p>
                    }
                    
                  </h4>
                  <p className="font-poppins text-[14px] text-black">Online</p>
                </div>
              </div>
              <div>
                <BsThreeDotsVertical size={25} />
              </div>
            </div>
            <div className="pt-[50px] pb-[20px] border-b-2 border-[#000]/25">
              <div className="relative">
                <h4 className="font-poppins font-medium text-[16px] text-black py-[13px] px-[52px] bg-[#F1F1F1] rounded-lg inline-block">
                  hello !
                </h4>
                <div className="absolute bottom-[0px] left-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#F1F1F1]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
              <div className="relative mt-[20px]">
                <h4 className="font-poppins font-medium text-[16px] text-black py-[13px] px-[52px] bg-[#F1F1F1] rounded-lg inline-block">
                  How are you doing?
                </h4>
                <div className="absolute bottom-[0px] left-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#F1F1F1]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
              <div className="relative mt-[20px] text-end">
                <h4 className="font-poppins font-medium text-[16px] text-white py-[13px] px-[52px] bg-[#000] rounded-lg inline-block">
                  How are you doing?
                </h4>
                <div className="absolute bottom-[1px] right-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#000]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
              <div className="relative mt-[20px] text-end">
                <h4 className="font-poppins font-medium text-[16px] text-white py-[13px] px-[52px] bg-[#000] rounded-lg inline-block">
                  How are you doing?
                </h4>
                <div className="absolute bottom-[1px] right-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#000]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
              <div className="relative mt-[20px]">
                <h4 className="font-poppins font-medium text-[16px] text-black py-[13px] px-[52px] bg-[#F1F1F1] rounded-lg inline-block">
                  I am doing well. Can we meet up tomorrow?
                </h4>
                <div className="absolute bottom-[0px] left-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#F1F1F1]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
              <div className="relative mt-[20px] text-end">
                <h4 className="font-poppins font-medium text-[16px] text-white py-[13px] px-[52px] bg-[#000] rounded-lg inline-block">
                  sure
                </h4>
                <div className="absolute bottom-[1px] right-[-22px]">
                  <GoTriangleUp size={50} className=" text-[#000]" />
                </div>
                <p className="font-poppins text-[12px] text-[#000]/20">
                  today, 2.30pm{" "}
                </p>
              </div>
            </div>
            <div className="pt-[20px] flex space-x-[20px] ">
              <div className="relative">
                <input
                  type="text"
                  className="w-[537px] h-[45px] outline-0 bg-[#F1F1F1] rounded-xl px-5 font-poppins font-medium text-[14px] text-[#000]/50"
                />
                <div className="flex space-x-[15px] absolute right-[4%] top-[50%] translate-y-[-50%]">
                  <div>
                    <FaRegSmile className="text-[#000]/50 text-[15px] cursor-pointer" />
                  </div>
                  <div>
                    <IoCameraOutline className="text-[#000]/50 text-[17px] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[45px] h-[45px] bg-[#000] text-[#fff] rounded-xl cursor-pointer">
                <FaPaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
