import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import SideNavbar from "../SideNavbar/SideNavbar";
import GroupList from "../GroupList/GroupList";
import FriendRequest from "../FriendRequest/FriendRequest";
import Friends from "../Frindes/Friends";
import MyGroup from "../MyGroup/MyGroup";
import UserList from "../UserList/UserList";
import BlockedUser from "../BlockedUser/BlockedUser";

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.userInfo?.value);
  const [load, setLoad] = useState(true);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  },[]);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoad(false);
  });

  if (load) {
    return null;
  }

  // useEffect(()=>{
  //     if(data.emailVerified){
  //         setverify(true)
  //     }
  // },[])

  return (
    <div>
      {verify ? (
        <div className="flex p-[30px]">
          <div>
            <SideNavbar></SideNavbar>
          </div>
          <div className="flex space-x-5">
            <div className="ml-[40px]">
              <div>
                <GroupList></GroupList>
              </div>
              <div className="mt-[30px]">
                <FriendRequest></FriendRequest>
              </div>
            </div>
            <div>
              <div>
                <Friends></Friends>
              </div>
              <div className="mt-[30px]">
                <MyGroup></MyGroup>
              </div>
            </div>
            <div>
              <div>
                <UserList></UserList>
              </div>
              <div className="mt-[30px]">
                <BlockedUser></BlockedUser>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary w-full h-screen flex justify-center items-center">
          <div className="w-[500px] bg-pink-200 text-center p-5 rounded-xl">
            <p className="font-primary font-semibold text-[30px] text-primary">
              Please verify your email
            </p>
            <div className="mt-[30px] mb-[20px]">
              <Link
                to="/login"
                className="font-openSans font-bold text-[16px] py-[10px] px-[20px] border-2 border-primary rounded-2xl hover:border-primary hover:bg-primary hover:text-pink-200 cursor-pointer transition-all"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
