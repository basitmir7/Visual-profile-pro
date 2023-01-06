const { data } = useContext(UserContext);
import React, { useContext } from "react";
import { UserContext } from "../usercontext";
const Chats = (user) => {
  return (
    <>
      <div className="rounded-2xl shadow-xl w-1/3 overflow-hidden text-gray-700 z-10 bg-white">
        <h3 className="text-center p-10 text-xl text-gray-800 bg-gray-100">
          select an account
        </h3>
        <ul
          className="overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 p-5 "
          style={{ height: "25rem" }}
        >
          {!data ? (
            <div>loading..</div>
          ) : (
            data.map((person) => {
              return (
                <li>
                  {" "}
                  {person.firstName}
                  {""} {person.lastName}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default Chats;
