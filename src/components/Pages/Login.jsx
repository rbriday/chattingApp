import login from "../../assets/login.png";
import gmail from "../../assets/gmail.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userInfo } from "../../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // Email State
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // password State
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // password show state
  const [show, setShow] = useState(false);

  // handleEamil
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  // haldlePassword
  const haldlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  // handlePassword show
  const handleShow = () => {
    setShow(!show);
  };

  // handleLogin
  const handleLogin = () => {
    if (!email) {
      setEmailErr("please give your email");
    } else {
      if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmailErr("Please give your right email address--");
      }
    }
    if (!password) {
      setPasswordErr("please give your password");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
          dispatch(userInfo(user))
          localStorage.setItem('userInfo', JSON.stringify(user))
          setTimeout(()=>{
              navigate("/")
          },2000)

          toast.success("Login succssfully done..");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Please give right email and password");
          }
        });
    }
  };

  const singInGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((user) => {
    console.log(user);
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    
  
  });
  }
  return (
    <div className="flex items-center">
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
      <div className="w-1/2">
        <div className="flex justify-end mr-[170px]">
          <div>
            <h2 className="font-openSans font-bold text-[34px] text-primary pb-[30px]">
              Login to your account!
            </h2>
            <div onClick={singInGoogle} className="flex w-[220px] border-2 border-[#E8E8EF] rounded-[9px] py-[15px] px-[29px] mb-[32px] cursor-pointer">
              <img src={gmail} alt="#gmail" />
              <p className="font-openSans font-semibold text-[14px] text-primary pl-[10px]">
                Login with Google
              </p>
            </div>
            <div>
              <div className="w-[368px] relative mb-[35px]">
                <input
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full border-b-2 border-[#B8B9CE] rounded-[8px] py-[20px] outline-0 font-nunito font-semibold text-[20px] text-primary"
                />
                <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-0 bg-white ">
                  Email Address
                </span>
                <p className="w-full  bg-red-500 px-2 font-nunito font-medium text-white rounded-full mt-[2px]">
                  {" "}
                  {emailErr}{" "}
                </p>
              </div>
              <div className="w-[368px] relative mb-[35px]">
                <input
                  onChange={haldlePassword}
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full border-b-2 border-[#B8B9CE] rounded-[8px] py-[20px] outline-0 font-nunito font-semibold text-[20px] text-primary"
                />
                <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-0 bg-white ">
                  Password
                </span>
                <p className="w-full  bg-red-500 px-2 font-nunito font-medium text-white rounded-full mt-[2px]">
                  {" "}
                  {passwordErr}{" "}
                </p>
                <div
                  onClick={handleShow}
                  className="absolute top-[50%] translate-y-[-50%] right-[20px] cursor-pointer"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div className="w-[368px]">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="w-full py-[20px] bg-[#1E1E1E] rounded-full font-nunito font-semibold text-[20px] text-white cursor-pointer "
                >
                  <span className="relative z-[50]">
                    Login to Continue
                    <span className="absolute top-0 left-0 w-[70px] h-[10px] bg-[#5B36F5]/20 blur-[10px] translate-1/2"></span>
                  </span>
                </button>
                <Link to="/forgotPassword">
                  <p className="text-center font-openSans text-[14px] text-[#EA6C00] pt-[35px] cursor-pointer">
                    Forgot Passowrd
                  </p>
                </Link>
                <p className="text-center font-openSans text-[14px] text-primary pt-[5px]">
                  Don’t have an account ?
                  <Link to="/registration">
                    <span className="text-[#EA6C00] cursor-pointer">
                      {" "}
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={login}
          alt="#login"
          className="h-screen object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Login;
