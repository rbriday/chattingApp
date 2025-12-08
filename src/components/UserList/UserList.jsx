import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const db = getDatabase();
  const [userListItem, setUserListItem] = useState([]);
  const [friendRequestList, setFriendRequestList] = useState([]);

  const data = useSelector((selector) => selector.userInfo.value?.user);
  console.log(data, "user");

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if (data?.uid !== item.key) {
          arry.push({ ...item?.val(), userid: item.key });
        }
      });
      setUserListItem(arry);
    });
  }, []);

  console.log(userListItem);

  const handleFriendRequest = (item) => {
    set(push(ref(db, "firendRequests/")), {
      senderName: data?.displayName,
      senderId: data?.uid,
      receiverName: item.username,
      receiverId: item.userid,
    });
    console.log(item);
  };

  useEffect(() => {
    const friendRequsetRef = ref(db, "firendRequests");
    onValue(friendRequsetRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        arry.push(items.val().receiverId + items.val().senderId);
      });
      setFriendRequestList(arry);
    });
  }, []);

  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    const friendsref = ref(db, "friend");
    onValue(friendsref, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        arry.push(items.val().receiverId + items.val().senderId);
      });
      setFriendsList(arry);
    });
  }, []);

  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    const blockListRef = ref(db, "blockLists");
    onValue(blockListRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        // if(data.uid == items.val().senderId || data.uid == items.val().receiverId){
        //   arry.push(items.val());
        // }
        arry.push(items.val().receiverId + items.val().senderId);
      });
      setBlockList(arry);
    });
  }, []);

  const [filterUserList, setFilterUserList] = useState([]);

  const handleSearch = (e) => {
    let arry = [];
    if (e.target.value.length == 0) {
      setFilterUserList([]);
    } else {
      userListItem.filter((item) => {
        if (
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          arry.push(item);
          setFilterUserList(arry);
        }
      });
    }
  };
  console.log(filterUserList);

  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          User List
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          className="border-2 outline-0 w-full px-4 py-1.5 border-secondary rounded-lg font-poppins font-semibold text-xl text-primary"
        />
      </div>
      <div className="h-[260px] overflow-y-scroll">
        {filterUserList.length > 0 ? 
          filterUserList.map((user) => (
              <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
                <div className="flex items-center">
                  <div>
                    <img src={friendOne} alt="#friendOne" />
                  </div>
                  <div className="ml-[8px]">
                    <h5 className="font-poppins font-semibold text-[14px] text-black">
                      {user.username}
                    </h5>
                    <h6 className="font-poppins text-[12px] text-secondary">
                      {user.email}
                    </h6>
                  </div>
                </div>
                {blockList.includes(data?.uid + user.userid) ||
                blockList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      block
                    </p>
                  </div>
                ) : friendsList.includes(data?.uid + user.userid) ||
                  friendsList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      friend
                    </p>
                  </div>
                ) : friendRequestList.includes(data?.uid + user.userid) ||
                  friendRequestList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      <FaMinus size={20} />
                    </p>
                  </div>
                ) : (
                  <div
                    className="mr-2"
                    onClick={() => handleFriendRequest(user)}
                  >
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      <FaPlus size={20} />
                    </p>
                  </div>
                )}
              </div>
            ))
          : userListItem.map((user) => (
              <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
                <div className="flex items-center">
                  <div>
                    <img src={friendOne} alt="#friendOne" />
                  </div>
                  <div className="ml-[8px]">
                    <h5 className="font-poppins font-semibold text-[14px] text-black">
                      {user.username}
                    </h5>
                    <h6 className="font-poppins text-[12px] text-secondary">
                      {user.email}
                    </h6>
                  </div>
                </div>
                {blockList.includes(data?.uid + user.userid) ||
                blockList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      block
                    </p>
                  </div>
                ) : friendsList.includes(data?.uid + user.userid) ||
                  friendsList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      friend
                    </p>
                  </div>
                ) : friendRequestList.includes(data?.uid + user.userid) ||
                  friendRequestList.includes(user.userid + data?.uid) ? (
                  <div className="mr-2">
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      <FaMinus size={20} />
                    </p>
                  </div>
                ) : (
                  <div
                    className="mr-2"
                    onClick={() => handleFriendRequest(user)}
                  >
                    <p className="px-[5px] py-[5px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center cursor-pointer">
                      <FaPlus size={20} />
                    </p>
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default UserList;
