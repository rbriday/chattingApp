import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png"

const FriendRequest = () => {
    return (
         <div className="w-[427px] border-2 border-[#ddd] rounded-xl p-[20px]">
              <div className="flex justify-between">
                <h3 className="font-poppins font-semibold text-[20px] text-black">
                Frend Request
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
                    <h5 className="font-poppins font-semibold text-[18px] text-black">
                      Raghav
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
                    Accept
                  </button>
                </div>
              </div>
              {/* group list item two */}
              <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
                <div className="flex items-center">
                  <div>
                    <img src={friendOne} alt="#groupOne" />
                  </div>
                  <div className="ml-[8px]">
                    <h5 className="font-poppins font-semibold text-[18px] text-black">
                      Swathi
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
                    Accept
                  </button>
                </div>
              </div>
              {/* group list items three */}
              <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
                <div className="flex items-center">
                  <div>
                    <img src={friendOne} alt="#groupOne" />
                  </div>
                  <div className="ml-[8px]">
                    <h5 className="font-poppins font-semibold text-[18px] text-black">
                      Friends Reunion
                    </h5>
                    <h6 className="font-poppins text-[14px] text-secondary">
                      Kiran
                    </h6>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="font-poppins font-semibold text-[20px] text-white px-[20px] py-[2px] bg-black rounded-2xl"
                  >
                    Accept
                  </button>
                </div>
              </div>
              {/* group list items three */}
              <div className="flex items-center justify-between mt-[5px] border-b-2 border-[#000]/25 py-[13px]">
                <div className="flex items-center">
                  <div>
                    <img src={friendOne} alt="#groupOne" />
                  </div>
                  <div className="ml-[8px]">
                    <h5 className="font-poppins font-semibold text-[18px] text-black">
                      Tejeshwini C
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
                    Accept
                  </button>
                </div>
              </div>
              </div>
            </div>
    );
};

export default FriendRequest;