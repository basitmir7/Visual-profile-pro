import { UserContext } from "../usercontext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdPadding } from "react-icons/md";

const Modal = ({ user, modal }) => {
  const { data } = useContext(UserContext);
  const { changeUser } = useContext(UserContext);
  return (
    <>
      <div
        className="items-center text-center absolute flex flex-col justify-center right-14 height-top rounded-2xl shadow-xl w-3/12 text-gray-700 z-10 bg-white text-md"
        style={{
          height: "20rem",
          display: `${modal ? "flex" : "none"}`,
          top: "14%",
        }}
      >
        <img
          src={user.image}
          className="h-16 w-16 rounded-full bg-slate-200 mr-4"
        />
        <header>
          {user.firstName}
          {""}
          {user.lastName}
        </header>

        <p className="border-bt text-gray-300 text-sm">{user.email}</p>

        <ul className="text-sm ">
          {data.slice(0, 2).map((i) => {
            return (
              <li
                className="flex p-2 cursor-pointer items-center border-bt max-sm:text-sm"
                key={i.id}
                index={i.id}
                onClick={() => {
                  changeUser(i);
                }}
              >
                <img
                  className="h-8 w-8 rounded-full bg-slate-200 mr-4 max-sm:h-10 max-sm:w-10"
                  src={i.image}
                />
                {i.firstName}
                {i.lastName}
              </li>
            );
          })}
        </ul>
        <Link to="/">
          <button
            className="orange rounded-3xl text-gray-100 mt-3 mb-3"
            style={{ background: "#ce3900db", padding: "5px 12px" }}
          >
            sign out
          </button>
        </Link>
      </div>
    </>
  );
};

export default Modal;
