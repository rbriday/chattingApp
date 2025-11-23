import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const MyGroup = () => {
  const db = getDatabase();
  const data = useSelector((selector) => selector.userInfo.value?.user);
  const [myGroup, setmyGroup] = useState([]);
  useEffect(() => {
    const groupListRef = ref(db, "groupList/");
    onValue(groupListRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        if (data.uid == items.val().groupAdmin) {
          arry.push(items.val());
        }
      });
      setmyGroup(arry);
    });
  }, []);

  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          My Group
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {/* group list item one */}
        {myGroup.map((item) => (
          <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
            <div className="flex items-center">
              <div>
                <img src={friendOne} alt="#friendOne" />
              </div>
              <div className="ml-[8px]">
                <h5 className="font-poppins font-semibold text-[14px] text-black">
                  {item.groupName}
                </h5>
                <h6 className="font-poppins text-[12px] text-secondary">
                  Hi Guys, Wassup!
                </h6>
              </div>
            </div>
            <div>
              <p className="font-primary text-[10px] text-secondary">
                {item.groupTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
