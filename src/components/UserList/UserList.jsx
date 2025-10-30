import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png";
import { FaPlus } from "react-icons/fa6";

const UserList = () => {
  return (
    <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
      <div className="flex justify-between">
        <h3 className="font-poppins font-semibold text-[20px] text-black">
          User List
        </h3>
        <BsThreeDotsVertical size={25} />
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {/* group list item one */}
        <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
          <div className="flex items-center">
            <div>
              <img src={friendOne} alt="#friendOne" />
            </div>
            <div className="ml-[8px]">
              <h5 className="font-poppins font-semibold text-[14px] text-black">
                Tejeshwini C
              </h5>
              <h6 className="font-poppins text-[12px] text-secondary">
                Hi Guys, Wassup!
              </h6>
            </div>
          </div>
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
        {/* group list item one */}
        <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
          <div className="flex items-center">
            <div>
              <img src={friendOne} alt="#friendOne" />
            </div>
            <div className="ml-[8px]">
              <h5 className="font-poppins font-semibold text-[14px] text-black">
                Tejeshwini C
              </h5>
              <h6 className="font-poppins text-[12px] text-secondary">
                Hi Guys, Wassup!
              </h6>
            </div>
          </div>
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
        {/* group list item one */}
        <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
          <div className="flex items-center">
            <div>
              <img src={friendOne} alt="#friendOne" />
            </div>
            <div className="ml-[8px]">
              <h5 className="font-poppins font-semibold text-[14px] text-black">
                Tejeshwini C
              </h5>
              <h6 className="font-poppins text-[12px] text-secondary">
                Hi Guys, Wassup!
              </h6>
            </div>
          </div>
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
        {/* group list item one */}
        <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
          <div className="flex items-center">
            <div>
              <img src={friendOne} alt="#friendOne" />
            </div>
            <div className="ml-[8px]">
              <h5 className="font-poppins font-semibold text-[14px] text-black">
                Tejeshwini C
              </h5>
              <h6 className="font-poppins text-[12px] text-secondary">
                Hi Guys, Wassup!
              </h6>
            </div>
          </div>
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
        {/* group list item one */}
        <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
          <div className="flex items-center">
            <div>
              <img src={friendOne} alt="#friendOne" />
            </div>
            <div className="ml-[8px]">
              <h5 className="font-poppins font-semibold text-[14px] text-black">
                Tejeshwini C
              </h5>
              <h6 className="font-poppins text-[12px] text-secondary">
                Hi Guys, Wassup!
              </h6>
            </div>
          </div>
          <div className="mr-2">
            <p className="w-[30px] h-[30px] bg-black text-white rounded-[5px] font-semibold flex justify-center items-center">
              <FaPlus size={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
