import React, { useContext, useState } from "react";
import { UserContext } from "../usercontext";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { BsDot } from "react-icons/bs";
const Chats = () => {
  const { data } = useContext(UserContext);
  const [openChat, setOpenChat] = useState(true);

  const openChatBox = () => {
    setOpenChat(!openChat);
  };
  return (
    <>
      <div className="absolute right-20 -bottom-20 rounded-2xl shadow-xl w-1/5 overflow-hidden text-gray-700 z-10 text-md max-sm:-bottom-3/4 max-sm:w-3/6 max-sm:text-sm max-sm:right-10">
        <h3 className="flex justify-around items-center p-2  text-gray-800 bg-blue-500 text-gray-100">
          <FiMessageSquare />
          Chats
          <IoIosArrowUp
            className="transition-smooth cursor-pointer"
            onClick={openChatBox}
            style={{
              transform: `${openChat ? "rotate(0)" : "rotate(180deg)"}`,
            }}
          />
        </h3>
        <ul
          className="overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 text-base bg-white transition-smooth"
          style={{ height: `${openChat ? "0" : "20rem"}` }}
        >
          {data.map((person) => {
            return (
              <li
                key={person.id}
                className="flex p-2 cursor-pointer items-center border-bt max-sm:text-sm"
              >
                <img
                  className="h-8 w-8 rounded-full bg-slate-200 mr-4 max-sm:h-10 max-sm:w-10"
                  src={person.image}
                />{" "}
                {person.firstName}
                {""} {person.lastName}
                <BsDot
                  style={{
                    marginLeft: "auto",
                    fontSize: "25px",
                    color: "green",
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Chats;
