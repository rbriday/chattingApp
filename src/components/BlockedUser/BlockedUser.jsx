import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const BlockedUser = () => {
  const db = getDatabase();
  const data = useSelector((selector) => selector.userInfo.value?.user);

  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    const blockListRef = ref(db, "blockLists");
    onValue(blockListRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        if(data.uid !== items.val().senderId || data.uid !== items.val().receiverId){
          arry.push(items.val());
        }
      });
      setBlockList(arry);
    });
  }, []);
  console.log(blockList);
  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          Block List
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {/* group list item one */}
        {blockList.map((item) => (
          <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
            <div className="flex items-center">
              <div>
                <img src={friendOne} alt="#friendOne" />
              </div>
              <div className="ml-[8px]">
                <h5 className="font-poppins font-semibold text-[14px] text-black">
                  {/* {item.senderName} */}
                  {
                    data.uid == item.senderId ? item.senderName : item.receiverName
                  }
                  
                </h5>
                <h6 className="font-poppins text-[12px] text-secondary">
                  Hi Guys, Wassup!
                </h6>
              </div>
            </div>
            <div className="mr-2">
              <p className=" bg-black text-white rounded-[5px] font-poppins font-semibold flex justify-center items-center text-[14px] px-1 py-1">
                Unblock
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedUser;
