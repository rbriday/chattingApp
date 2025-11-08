import { useState } from "react";
import registration from "../../assets/registration.png";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { getDatabase, ref, set } from "firebase/database";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getDatabase();

  //react spinners state
  const [loader, setLoader] = useState(false);
  // vlaue show states
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  // Erro states
  const [emailErr, setEmailErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // password show state
  const [show, setShow] = useState(false);

  // handleEmail
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  // handleFullName
  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
  };
  // handlePassword
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleRegistration = () => {
    console.log(email);
    console.log(fullName);
    console.log(password);
    if (!email) {
      setEmailErr("Plase give your email");
    } else {
      if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmailErr("Please give your right email address--");
      }
    }
    if (!fullName) {
      setFullNameErr("plase give your name");
    }
    if (!password) {
      setPasswordErr("plase give your password");
    }
    // else {
    //   if (
    //     !/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(
    //       password
    //     )
    //   ) {
    //     setPasswordErr("please give strong password");
    //   }
    // }
    if (email && fullName && password) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          sendEmailVerification(auth.currentUser);
          console.log(user, "hello");
          updateProfile(auth.currentUser, {
            displayName: fullName,
            //  photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          toast.success(
            "Registration Successfully Done. Plaese veryfi your email"
          );
          set(ref(db, "users/" + user.user.uid), {
            username: fullName,
            email: email,
            password: password,
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          setLoader(false);
          setEmail("");
          setFullName("");
          setPassword("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("This Email-Already-In-Use");
          console.log(errorCode);
          console.log(errorMessage);
          setLoader(false);
        });
    }
  };

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
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your Email"
                className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary"
              />
              <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">
                Email Address
              </span>
              <p className="w-full  bg-red-500 px-2 font-nunito font-medium text-white rounded-full mt-[2px]">
                {" "}
                {emailErr}{" "}
              </p>
            </div>

            <div className="w-[368px] relative mb-[35px]">
              <input
                onChange={handleFullName}
                type="text"
                value={fullName}
                placeholder="Enter your full name"
                className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary"
              />
              <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">
                Full Name
              </span>
              <p className="w-full  bg-red-500 px-2 font-nunito font-medium text-white rounded-full mt-[2px]">
                {" "}
                {fullNameErr}{" "}
              </p>
            </div>
            <div className="w-[368px] relative mb-[35px]">
              <input
                onChange={handlePassword}
                value={password}
                type={show ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full border-2 border-[#B8B9CE] rounded-[8px] py-[20px] px-[45px] outline-0 font-nunito font-semibold text-[20px] text-primary"
              />
              <span className="font-nunito font-semibold text-primary text-[14px] tracking-[2px] absolute top-[-10px] left-[30px] bg-white px-4">
                Password
              </span>
              <p className="w-full  bg-red-500 px-2 font-nunito font-medium text-white rounded-full mt-[2px]">
                {" "}
                {passwordErr}{" "}
              </p>
              <div
                onClick={() => setShow(!show)}
                className="absolute top-[50%] translate-y-[-50%] right-[20px] cursor-pointer"
              >
                {show ? <FaEye /> : <FaEyeSlash />}
                {/* <FaEye onClick={()=>setShow} />
                  <FaEyeSlash onClick={()=>setShow} /> */}
              </div>
            </div>
            <div className="w-[368px]">
              <button
                onClick={handleRegistration}
                type="button"
                className="relative w-full py-[20px] bg-[#1E1E1E] rounded-full font-nunito font-semibold text-[20px] text-white cursor-pointer "
              >
                {loader ? (
                  <BeatLoader color="#fff" />
                ) : (
                  <span className="relative z-[50]">Sign Up</span>
                )}
                <span className="absolute top-[50%] left-[50%] translate-[-50%] w-[70px] h-[10px] bg-[#5B36F5]/20 blur-[10px]"></span>
              </button>
              <p className="text-center font-openSans text-[14px] text-primary pt-[35px]">
                Already have an account ?
                <Link to="/login">
                  <span className="text-[#EA6C00]">Sign In</span>
                </Link>
              </p>
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
