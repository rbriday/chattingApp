import React, { useState } from 'react';
import { Link } from 'react-router';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Forgot = () => {
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    // forgotEmail
    const forgotEmail = (e) =>{
        setEmail(e.target.value);
        setEmailErr("");
        
    }
    // handalForgotPassword
    const handalForgotPassword =()=>{
        if(!email){
            setEmailErr("please give your right email");
        }else {
      if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmailErr("Please give your right email address--");
      }
    }
    if(email && (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email))){
        sendPasswordResetEmail(auth, email)
  .then((user) => {
        console.log(user, "forget");
        setEmail("")
        toast.success("Please Check Your Eamil")
        
  })    
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
        
    }
    return (
        <div className='flex items-center justify-center w-full h-screen bg-primary text-white'>
             <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
               <div className='w-[500px] h-[250px] bg-[#a7d6bc] rounded-2xl px-[20px] py-4 font-poppins font-semibold text-2xl text-[#EA6C00]'>
                <h4 className='mb-[30px]'>Forgot Password: </h4>
                    <div className='w-[400px]'>
                        <input 
                        onChange={forgotEmail}
                        value={email}
                        type="email" 
                        placeholder='Enter your email...' 
                        className='border-2 border-primary rounded-2xl px-3 py-[10px] text-[14px] w-full outline-0 focus:none'
                         />
                    </div>
                    <p className='bg-red-400 px-[10px] rounded-xl text-white text-[14px] w-[400px] mt-[10px]'>{emailErr}</p>
                    <div className='mt-[30px]'>
                        <button onClick={handalForgotPassword} className='font-openSans font-bold text-[16px] py-[10px] px-[20px] border-2 border-[#EA6C00] rounded-2xl hover:border-primary hover:bg-primary cursor-pointer transition-all mr-[10px]'>Reset Password</button>
                        <Link to='/login' className='font-openSans font-bold text-[16px] py-[10px] px-[20px] border-2 border-[#EA6C00] rounded-2xl hover:border-primary hover:bg-primary cursor-pointer transition-all'>Go Back</Link>
                    </div>
               </div>
        </div>
    )
};

export default Forgot;