import registration from "../../assets/registration.png";

const Registration = () => {
  return (
    <div className="flex items-center">
      <div className="w-[50%]">
        <div className="flex justify-end pr-[70px]">
          <div>
            <h2 className="font-nunito font-bold text-[34px] text-primary">
              Get started with easily register
            </h2>
            <p className="font-nunito text-[20px] text-secondary pt-[13px] pb-[40px]">
              Free register and you can enjoy it
            </p>
            <div className="w-[368px] relative mb-[35px]">
                <input type="email" placeholder="Enter your Email" className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary" />
                <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">Email Address</span>
            </div>
            <div className="w-[368px] relative mb-[35px]">
                <input type="text" placeholder="Enter your full name" className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary" />
                <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">Full Name</span>
            </div>
            <div className="w-[368px] relative mb-[35px]">
                <input type="text" placeholder="Enter your Password" className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary" />
                <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">Password</span>
            </div>
            <div className="w-[368px]">
                <button type="button" className="w-full py-[20px] bg-[#1E1E1E] rounded-full font-nunito font-semibold text-[20px] text-white ">
                    <span className="relative z-[50]">Sign Up
                        <span className="absolute top-0 left-0 w-[70px] h-[10px] bg-[#5B36F5]/20 blur-[10px] translate-1/2"></span>
                    </span>
                    
                </button>
                <p className="text-center font-openSans text-[14px] text-primary pt-[35px]">Already  have an account ? <span className="text-[#EA6C00]">Sign In</span> </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <img
          src={registration}
          alt="#registration"
          className="h-screen object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Registration;
