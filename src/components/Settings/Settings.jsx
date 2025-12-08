import React from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';
import profile from '../../assets/profile.png'
import { RiEdit2Fill } from "react-icons/ri";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const Settings = () => {
    return (
        <div>
            <div className='flex p-[30px] space-x-[30px]'>
                <div>
                    <SideNavbar active="setting"></SideNavbar>
                </div>
                <div className='md:w-[1133px] w-full'>
                    <div className='mb-[30px]'>
                        <input type="text" placeholder='Search' className='w-full px-[30px] py-[15px] border-2 border-secondary text-[20px] font-poppins font-semibold rounded-xl ' />
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[550px] p-[26px] border-2 border-secondary shadow-md rounded-lg'>
                            <div>
                                <h2 className='font-poppins font-semibold text-[20px] text-black pb-[50px]'>Profile Settings</h2>
                            </div>
                            <div className='flex items-center space-x-[30px] pb-[29px] border-b-2 border-secondary'>
                                <div>
                                    <img src= {profile} alt="#profile" />
                                </div>
                                <div>
                                    <h2 className='font-poppins font-semibold text-[25px] text-black'>Sohel Rana Baig</h2>
                                    <p className='font-poppins text-[20px] text-black'>Stay home stay safe</p>
                                </div>
                            </div>
                            <div className='font-poppins text[20px] text-black mt-[43px]'>
                              <h5 className='flex items-center pb-[30px] cursor-pointer'><RiEdit2Fill className='mr-[20px] text-[25px]'/> Edit Profile Name.</h5>
                              <h5 className='flex items-center pb-[30px] cursor-pointer'><PiDotsThreeCircleFill className='mr-[20px] text-[25px]'/> Edit Profile Status Info.</h5>
                              <h5 className='flex items-center pb-[30px] cursor-pointer'><MdAddPhotoAlternate className='mr-[20px] text-[25px]'/> Edit Profile Photo.</h5>
                              <h5 className='flex items-center pb-[30px] cursor-pointer'><IoMdHelpCircleOutline className='mr-[20px] text-[25px]'/> Help.</h5>
                            </div>
                        </div>
                        <div className='w-[550px] p-[26px] border-2 border-secondary shadow-md rounded-lg'>
                            <div className='pb-[25px]'>
                                 <h2 className='font-poppins font-semibold text-[20px] text-black'>Account Settings</h2>
                            </div>
                             <div className='font-poppins text[20px] text-black mt-[20px] ml-[30px]'>
                              <h5 className='flex items-center pb-[20px] cursor-pointer'><FaKey  className='mr-[20px] text-[25px]'/> Delete Account.</h5>
                              <h5 className='flex items-center pb-[20px] cursor-pointer'><RiDeleteBin6Line className='mr-[20px] text-[25px]'/> Delete Account.</h5>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Settings;