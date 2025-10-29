import groupOne from "../../assets/groupOne.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupList = () => {
  return (
    <div className="w-[427px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
        Group List
      </h3>
      <BsThreeDotsVertical size={25} />
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
      {/* group list item two */}
      <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
        <div className="flex items-center">
          <div>
            <img src={groupOne} alt="#groupOne" />
          </div>
          <div className="ml-[8px]">
            <h5 className="font-poppins font-semibold text-[18px] text-black">
              Friends Forever
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
      {/* group list items three */}
      <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
        <div className="flex items-center">
          <div>
            <img src={groupOne} alt="#groupOne" />
          </div>
          <div className="ml-[8px]">
            <h5 className="font-poppins font-semibold text-[18px] text-black">
              Crazy Cousins
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
      {/* group list items three */}
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
  );
};

export default GroupList;
