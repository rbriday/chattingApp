import React from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';
import Friends from '../Frindes/Friends';
import friensOne from '../../assets/friendOne.png'
import { BsThreeDotsVertical } from 'react-icons/bs';

const Message = () => {
    return (
        <div className="flex p-[30px]">
                  <div>
                    <SideNavbar active = "message"></SideNavbar>
                  </div>
                  <div className="flex space-x-5">
                    <div className="ml-[40px]">
                      <div>
                        <Friends></Friends>
                      </div>
                      
                    </div>
                    
                    <div>
                      <div className='w-[700px] shadow-md px-[50px] py-[24px] rounded-md'>
                       <div className='flex items-center justify-between border-b-2 border-[#000]/25 pb-[24px]'>
                        <div className='flex items-center '>
                            <div>
                            <img src= {friensOne} alt="" />
                        </div>
                        <div className="ml-[33px]">
                            <h4 className='font-poppins font-semibold text-[24px] text-black'>Swathi </h4>
                            <p className='font-poppins text-[14px] text-black'>Online</p>
                        </div>
                        </div>
                        <div>
                            <BsThreeDotsVertical size={25} />
                        </div>
                       </div>
                       <div className='pt-[50px]'>
                        <div>
                            <h4 className='font-poppins font-medium text-[16px] text-black py-[13px] px-[52px] bg-[#F1F1F1] rounded-lg inline-block'>hello !</h4>
                            <p>today, 2.30pm </p>
                        </div>
                      </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
    );
};

export default Message;