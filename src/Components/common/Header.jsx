import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useBasic } from "../../store/basic";

function Header() {
  const { setMenu } = useBasic();
  return (
    <>
      <div className="shadow-sm shadow-secondary/20 flex items-center gap-2 lg:ms-[250px] h-[70px] transition-all  bg-white">
        <div
          onClick={() => {
            setMenu((prev) => !prev);
          }}
          className={`max-lg:flex cursor-pointer  hidden bg-secondary text-white rounded-full h-8 w-8 m-2  items-center justify-center `}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="ms-2">
          <div className=" font-normal ms-3">
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Type to search"
              className="ms-5 outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
