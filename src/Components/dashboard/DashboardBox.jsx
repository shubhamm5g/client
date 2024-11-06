import {
  faEye,
  faPeopleGroup,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DashboardBox() {
  return (
    <div className="min-h-[616px] p-2 lg:ms-[250px] bg-gray-light transition-all">
      <div className="flex max-lg:justify-center gap-2 flex-wrap ">
        <div className=" w-[250px] h-[170px] rounded-lg p-4 bg-white shadow-sm shadow-secondaryHover/20 ">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-light text-[#5778fd]">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <h1 className="font-semibold text-2xl my-2 ">$20K</h1>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Total Views</span>
            <span className="text-green text-sm">0.34%</span>
          </div>
        </div>
        <div className="w-[250px] h-[170px] rounded-lg p-4 bg-white shadow-sm shadow-secondaryHover/20 ">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-light text-[#5778fd]">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <h1 className="font-semibold text-2xl my-2 ">$20K</h1>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Total Views</span>
            <span className="text-green text-sm">0.34%</span>
          </div>
        </div>
        <div className="w-[250px] h-[170px] rounded-lg p-4 bg-white shadow-sm shadow-secondaryHover/20 ">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-light text-[#5778fd]">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </div>
          <h1 className="font-semibold text-2xl my-2 ">$20K</h1>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Total Views</span>
            <span className="text-green text-sm">0.34%</span>
          </div>
        </div>
        <div className="w-[250px] h-[170px] rounded-lg p-4 bg-white shadow-sm shadow-secondaryHover/20 ">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-gray-light text-[#5778fd]">
            <FontAwesomeIcon icon={faEye} />
          </div>
          <h1 className="font-semibold text-2xl my-2 ">$20K</h1>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Total Views</span>
            <span className="text-green text-sm">0.34%</span>
          </div>
        </div>
      </div>
      <h1 className="my-10 font-bold text-xl">
        Please View the Contect Form to send message
      </h1>
    </div>
  );
}

export default DashboardBox;
