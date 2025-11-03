import profile from "../../assets/profile.png";
import { LiaHomeSolid } from "react-icons/lia";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const SideNavbar = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then((user) => {
        localStorage.removeItem('userInfo', (user));
        setTimeout(() => {
            navigate("/login")
        }, 2000);
      console.log(user);
    });
  };
  return (
    <div className="bg-[#1E1E1E] w-[186px] rounded-[20px] py-[38px]">
      <div className="flex-col">
        <div className="flex justify-center pb-[78px]">
          <img src={profile} alt="#profile" />
        </div>
        <div className="mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 before:bg-white before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 after:bg-black after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer">
          <LiaHomeSolid size={46} className="text-black" />
        </div>
        <div className="mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 before:bg-white before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 after:bg-black after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer">
          <AiTwotoneMessage size={46} className="text-black" />
        </div>
        <div className="mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 before:bg-white before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 after:bg-black after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer">
          <MdOutlineSettings size={46} className="text-black" />
        </div>
        <div
          className="mt-[120px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 before:bg-white before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 after:bg-black after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer"
          onClick={handleSignOut}
        >
          <ImExit size={46} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
