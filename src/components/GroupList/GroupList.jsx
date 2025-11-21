import { useState } from "react";
import groupOne from "../../assets/groupOne.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupList = () => {
  const [groupShow, setGroupShow] = useState(false);

  const handleCreatGroup = () => {
    setGroupShow(!groupShow);
  };
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
                  type="text"
                  placeholder="Enter your group name"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter your group title"
                  className="py-3 px-1 border-3 outline-0 border-primary rounded-md w-full font-poppins font-semibold text-primary text-[18px]"
                />
              </div>
            </div>
            <div>
              <button className="bg-primary text-white font-poppins font-semibold text-[20px] px-5 py-3 rounded-md cursor-pointer mr-[20px]">Submit</button>
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
