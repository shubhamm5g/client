import React from "react";

import { useBasic } from "../../store/basic";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function SideMenu() {
  const { menu, setMenu } = useBasic();

  const urlPath = window.location.pathname;
  console.log(urlPath);
  return (
    <>
      <div
        className={`
          ${menu ? "max-lg:w-[250px]" : "max-lg:w-[0px]"}
            ] z-10  h-[100vh] transition-all text-white bg-secondary lg:w-[250px]  fixed left-0 top-0 overflow-auto`}
      >
        <div className="flex items-center h-[70px] ">
          <h1 className="font-bold w-full  text-xl m-2">Contect Form Task</h1>
          <div>
            <span
              onClick={() => {
                setMenu((prev) => !prev);
              }}
              className={`max-lg:flex  cursor-pointer  z-30 hidden bg-white rounded-full h-8 w-8  m-2  items-center justify-center `}
            >
              <FontAwesomeIcon className="!text-secondary" icon={faArrowLeft} />
            </span>
          </div>
        </div>
        {/* navigation */}
        <div>
          <Link
            to={"/"}
            className={`${
              urlPath.trim() == "/" ? "!bg-secondaryHover" : " "
            } hover:bg-secondaryHover w-[100%] block cursor-pointer p-3`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="text-lg !font-normal ms-4">Dashboard</span>
          </Link>
          <Link
            to={"/contact-form"}
            className={`${
              urlPath.trim() == "/contact-form" ? "!bg-secondaryHover" : " "
            } hover:bg-secondaryHover w-[100%] block cursor-pointer p-3`}
          >
            <FontAwesomeIcon icon={faFolder} />
            <span className="text-lg !font-normal ms-4">Contect Form</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
