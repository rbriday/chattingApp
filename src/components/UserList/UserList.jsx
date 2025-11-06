import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { FaPlus } from "react-icons/fa6";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";


const UserList = () => {
  const db = getDatabase();
  const [useuListItem, setUserListItem] = useState([]);

useEffect(()=>{
const userRef = ref(db, 'users');
onValue(userRef, (snapshot)=>{
  let arry = [];
  console.log(snapshot.val())
  snapshot.forEach((items)=>{
    console.log(items.val())
    arry.push(items.val())
  })
  setUserListItem(arry)
})
},[])

console.log(UserList)

  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          User List
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">

        {
          useuListItem.map((user)=>(
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
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default UserList;
