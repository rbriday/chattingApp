import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, set, push, remove } from "firebase/database";
import { IoTerminalSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Friends = () => {
  const data = useSelector((selector)=>(selector.userInfo.value?.user))
  const db = getDatabase();
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    const friendsref = ref(db, "friend");
    onValue(friendsref, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        if(data.uid == items.val().receiverId || data.uid == items.val().senderId){
          arry.push({...items.val(), userId: items.key});
        }
      });
      setFriendsList(arry);
    });
  }, []);
  console.log(friendsList);

  const handleBlock = (item)=>{
    console.log(item)
    set(push(ref(db, "blockLists")),{
      ...item
    })
    .then(()=>{
      remove(ref(db, "friend/" + item.userId))
      
    })
    // .then(()=>{
    //   remove(ref(db, "user/" +item.userId)) 
    // })
  }
  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          Friends
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {friendsList.map((item) => (
          <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
            <div className="flex items-center">
              <div>
                <img src={friendOne} alt="#friendOne" />
              </div>
              <div className="ml-[8px]">
                <h5 className="font-poppins font-semibold text-[14px] text-black">
                  {data.uid == item.receiverId ? item.senderName : item.receiverName }
                </h5>
                <h6 className="font-poppins text-[12px] text-secondary">
                  Hi Guys, Wassup!
                </h6>
              </div>
            </div>
            <div>
              <p onClick={()=>handleBlock(item)} className="font-primary text-[20px] text-white px-[5px] py-[5px] bg-black rounded-2xl cursor-pointer">
                block
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
