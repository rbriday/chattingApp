import { BsThreeDotsVertical } from "react-icons/bs";
import friendOne from "../../assets/friendOne.png"

const Friends = () => {
    return (
        <div className="w-[344px] border-2 border-[#ddd] rounded-xl p-[20px]">
                      <div className="flex justify-between">
                        <h3 className="font-poppins font-semibold text-[20px] text-black">
                        Friends
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
                        <div>
                          <p className="font-primary text-[10px] text-secondary">Today, 8:56pm</p>
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
                        <div>
                          <p className="font-primary text-[10px] text-secondary">Today, 8:56pm</p>
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
                        <div>
                          <p className="font-primary text-[10px] text-secondary">Today, 8:56pm</p>
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
                        <div>
                          <p className="font-primary text-[10px] text-secondary">Today, 8:56pm</p>
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
                        <div>
                          <p className="font-primary text-[10px] text-secondary">Today, 8:56pm</p>
                        </div>
                      </div>
           
                      </div>
         </div>
    );
};

export default Friends;