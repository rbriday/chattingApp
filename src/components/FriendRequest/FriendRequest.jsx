import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { useEffect, useState } from "react";
import { Database, getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequest = () => {
  const db = getDatabase();
  const data = useSelector((selector)=>(selector.userInfo.value.user))
  
  const [friendRequest, setFriendRequest] = useState([]);
  useEffect(() => {
    const friendRequsetRef = ref(db, "firendRequest");
    onValue(friendRequsetRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
      if(data.uid == items.val().receiverId){

        arry.push(items.val());
      }
      });
      setFriendRequest(arry);
    });
  }, []);
  console.log(friendRequest);

  return (
    <div className="w-[427px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          Frend Request
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {friendRequest.map((items) => (
          <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
            <div className="flex items-center">
              <div>
                <img src={friendOne} alt="#friendOne" />
              </div>
              <div className="ml-[8px]">
                <h5 className="font-poppins font-semibold text-[18px] text-black">
                  {items.senderName}
                </h5>
                <h6 className="font-poppins text-[14px] text-secondary">
                  Hi Guys, Wassup!
                </h6>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="font-poppins font-semibold text-[20px] text-white px-[20px] py-[2px] bg-black rounded-2xl"
              >
                Accept
              </button>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default FriendRequest;
