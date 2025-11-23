import { useState } from "react";
import groupOne from "../../assets/groupOne.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupList = () => {
  const [groupShow, setGroupShow] = useState(false);

  const [groupName , setGroupName] = useState('')
  const [groupTitle, setGroupTitle] = useState('')

  const [groupNameErr, setGroupNameErr] = useState('')
  const [groupTitleErr, setGroupTitleErr] = useState('')

  const handleCreatGroup = () => {
    setGroupShow(!groupShow);
  };
  const handleGroupName= (e)=>{
    setGroupName(e.target.value)
    setGroupNameErr('')

  }
  const handleTitleName = (e)=>{
    setGroupTitle(e.target.value)
    setGroupNameErr("")

  }
  const handlGroupCreat = ()=>{
      if(!groupName){
        setGroupNameErr("Plase give your group name.")
        groupNameErr('')
      }
      if(!groupTitle){
        setGroupTitleErr("plase give your group Title..")
        
      }
      setGroupName('')
      setGroupTitle('')
  }
  return (
    <>
      <div>
        {groupShow ? (
          <div className="absolute top- left-[50%] w-[500px] h-[600px] translate-x-[-50%] bg-[#ddd] rounded-md p-5">
            <h2 className="font-poppins font-semibold text-[30px] text-primary pb-4">
              Create Group
            </h2>
            <div>
              <div className="mb-6">
                <input 
                onChange={handleGroupName}
                // onChange={(e)=>setGroupName(e.target.value, setGroupTitleErr(''))}
                  type="text"
                  placeholder="Enter your group name"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p className="bg-red-500 px-2 font-poppins text-[16px] text-white">{groupNameErr}</p>
              </div>
              <div className="mb-6">
                <input
                // onChange={(e)=>setGroupTitle(e.target.value)}
                onChange={handleTitleName}
                  type="text"
                  placeholder="Enter your group title"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
                <p>{groupTitleErr}</p>
              </div>
            </div>
            <div>
              <button onClick={handlGroupCreat} className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer mr-[20px]">Submit</button>
              <button onClick={()=>(setGroupShow(!groupShow))} className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer">Go Back</button>
            </div>
          </div>
        ) : (
          ""
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
          <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
            <div className="flex items-center">
              <div>
                <img src={groupOne} alt="#groupOne" />
              </div>
              <div className="ml-[8px]">
                <h5 className="font-poppins font-semibold text-[18px] text-black">
                  Friends Reunion
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
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupList;
