import { useEffect, useState } from "react";
import groupOne from "../../assets/groupOne.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const GroupList = () => {
  const db = getDatabase();
  const [groupShow, setGroupShow] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupTitle, setGroupTitle] = useState("");

  const [groupNameErr, setGroupNameErr] = useState("");
  const [groupTitleErr, setGroupTitleErr] = useState("");

  const data = useSelector((selector) => selector.userInfo.value?.user);

  const handleCreatGroup = () => {
    setGroupShow(!groupShow);
  };
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
    setGroupNameErr("");
  };
  const handleTitleName = (e) => {
    setGroupTitle(e.target.value);
    setGroupTitleErr("");
  };
  const handlGroupCreat = () => {
    console.log(groupName);
    console.log(groupTitle);
    if (!groupName) {
      setGroupNameErr("Plase give your group name.");
    }
    if (!groupTitle) {
      setGroupTitleErr("plase give your group Title..");
    }

    if (groupName && groupTitle) {
      set(push(ref(db, "groupList/")), {
        groupName: groupName,
        groupTitle: groupTitle,
        groupAdmin: data.uid,
      });
      setGroupShow(!groupShow);
    }

    setGroupName("");
    setGroupTitle("");
    
  };

  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    const groupListRef = ref(db, "groupList/");
    onValue(groupListRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((items) => {
        if(data.uid != items.val().groupAdmin){

          arry.push(items.val());
        }
      });
      setGroupList(arry);
    });
  }, []);

  console.log(groupList);
  return (
    <>
      <div>
        
        {groupShow ? (
          <div className={"absolute top-[30px] left-[50%] w-[500px] h-[400px] translate-x-[-50%] bg-[#ddd] rounded-md p-5 transition-all duration-1000"}>
            <h2 className="font-poppins font-semibold text-[30px] text-primary pb-4">
              Create Group
            </h2>
            <div>
              <div className="mb-6">
                <input
                  onChange={handleGroupName}
                  value={groupName}
                  type="text"
                  placeholder="Enter your group name"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p className="bg-red-500 px-2 font-poppins text-[16px] text-white">
                  {groupNameErr}
                </p>
              </div>
              <div className="mb-6">
                <input
                  onChange={handleTitleName}
                  value={groupTitle}
                  type="text"
                  placeholder="Enter your group title"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p className="bg-red-500 px-2 font-poppins text-[16px] text-white">
                  {groupTitleErr}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handlGroupCreat}
                className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer mr-[20px]"
              >
                Submit
              </button>
              <button
                onClick={() => setGroupShow(!groupShow)}
                className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
         
         <div className="absolute top-[-700px] left-[50%] w-[500px] h-[400px] translate-x-[-50%] bg-[#ddd] rounded-md p-5 transition-all duration-1000">
            <h2 className="font-poppins font-semibold text-[30px] text-primary pb-4">
              Create Group
            </h2>
            <div>
              <div className="mb-6">
                <input
                  onChange={handleGroupName}
                  value={groupName}
                  type="text"
                  placeholder="Enter your group name"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p className="bg-red-500 px-2 font-poppins text-[16px] text-white">
                  {groupNameErr}
                </p>
              </div>
              <div className="mb-6">
                <input
                  onChange={handleTitleName}
                  value={groupTitle}
                  type="text"
                  placeholder="Enter your group title"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p className="bg-red-500 px-2 font-poppins text-[16px] text-white">
                  {groupTitleErr}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handlGroupCreat}
                className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer mr-[20px]"
              >
                Submit
              </button>
              <button
                onClick={() => setGroupShow(!groupShow)}
                className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-[427px] border-2 border-[#ddd] rounded-xl p-[20px]">
        <div className="flex justify-between">
          <h3 className="font-poppins font-semibold text-[20px] text-black">
            Group List
          </h3>
          <div>
            {groupShow ? (
              <button
                onClick={handleCreatGroup}
                className="bg-primary text-white font-poppins font-semibold px-1 py-1 rounded-md cursor-pointer"
              >
                Go Back
              </button>
            ) : (
              <button
                onClick={handleCreatGroup}
                className="bg-primary text-white font-poppins font-semibold px-1 py-1 rounded-md cursor-pointer"
              >
                Create Group
              </button>
            )}
            {/* <button 
      onClick={handleCreatGroup}
      className="bg-primary text-white font-poppins font-semibold px-1 py-1 rounded-md cursor-pointer">
        Create Group
        </button> */}
          </div>
        </div>
        <div className="h-[300px] overflow-y-scroll">
          {/* group list item one */}
          {groupList.map((item) => (
            <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
              <div className="flex items-center">
                <div>
                  <img src={groupOne} alt="#groupOne" />
                </div>
                <div className="ml-[8px]">
                  <h5 className="font-poppins font-semibold text-[18px] text-black">
                    {item.groupName}
                  </h5>
                  <h6 className="font-poppins text-[14px] text-secondary">
                    {item.groupTitle}
                  </h6>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="font-poppins font-semibold text-[20px] text-white px-[20px] py-[2px] bg-black rounded-2xl"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupList;
