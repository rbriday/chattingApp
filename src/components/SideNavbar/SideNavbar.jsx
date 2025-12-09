import profile from "../../assets/profile.png";
import { LiaHomeSolid } from "react-icons/lia";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../slices/userSlice";

const SideNavbar = ({active}) => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = useSelector((selector)=>(selector?.userInfo?.value))


  const handleSignOut = () => {
    signOut(auth).then((user) => {
        localStorage.removeItem('userInfo');
        dispatch(userInfo(null))
        setTimeout(() => {
            navigate("/login")
        }, 2000);
      console.log(user);
    });
  };
  return (
    <div className="bg-[#1E1E1E] w-[186px] rounded-[20px] py-[38px]">
      <div className="flex-col">
        <div className="flex justify-center pb-[10px] ">
          <img src={profile} alt="#profile" />
        </div>
         <div className="pb-[65px] flex justify-center font-poppins text-2xl text-white font-semibold">
            <p>{data?.displayName || data?.user?.displayName}</p>
        </div>
        
        <div className={`mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 ${active == "home" ? "before:bg-white" : 'bg-transparent'  }  before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 ${active == "home" ? "after:bg-black" : "bg-transparent" } after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer`}>
          <Link to="/">
          
          <LiaHomeSolid size={46} className={`${active == "home" ? "text-black": "text-[rgb(187,187,187)]"}`} />
          </Link>
        </div>
        <div className={`mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 ${active == "message" ? "before:bg-white" : 'bg-transparent'  }  before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 ${active == "message" ? "after:bg-black" : "bg-transparent" } after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer`}>
          <Link to ="/msg">
          
          <AiTwotoneMessage size={46} className={`${active == "message" ? "text-black": "text-[rgb(187,187,187)]"}`}  />
          </Link>
        </div>
        <div className={`mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 ${active == "setting" ? "before:bg-white" : 'bg-transparent'  }  before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 ${active == "setting" ? "after:bg-black" : "bg-transparent" } after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer`}>
          <Link to = "/setting">
          <MdOutlineSettings size={46} className={`${active == "setting" ? "text-black" : "text-[rgb(187,187,187)]"}`}  />
          </Link>
        </div>
        <div active = "exit"
          className={`mb-[20px] relative pt-[20px] pb-[25px] before:absolute before:content-[' '] before:top-0 before:right-0 ${active == "exit" ? "before:bg-white" : 'bg-transparent'  }  before:w-[161px] before:h-[89px] before:rounded-s-lg before:z-[-1] z-[1]  pl-[70px] after:absolute after:content-[' '] after:top-0 after:right-0 ${active == "exit" ? "after:bg-black" : "bg-transparent" } after:w-[8px] after:h-full after:rounded-s-lg after:[box-shadow:-2px_0px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer`}
          onClick={handleSignOut}
        >
          <ImExit size={46} className={`${active == "exit" ? "text-black" : "text-[rgb(187,187,187)]"}`} />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
