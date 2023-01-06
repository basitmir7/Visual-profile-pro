import { useState } from "react";
import { Link } from "react-router-dom";
import Curve from "../components/curve";
import { UserContext } from "../usercontext";
import React, { useContext } from "react";

const Users = () => {
  // const [singleUser, setSingleUser] = useState({});
  const { changeUser } = useContext(UserContext);
  const { data } = useContext(UserContext);
  return (
    <section className="flex justify-center  items-center min-h-screen">
      <Curve />
      <div className="rounded-2xl shadow-xl w-1/3 overflow-hidden text-gray-700 z-10 bg-white max-md:w-2/3">
        <h3 className="text-center p-10 text-xl text-gray-800 bg-gray-100 max-sm:p-5">
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
                <Link
                  to="/profile/details"
                  key={person.id}
                  index={person.id}
                  onClick={() => {
                    changeUser(person);
                    console.log(person);
                  }}
                >
                  <li className="flex text-xl p-2 cursor-pointer items-center border-bt max-sm:text-sm">
                    <img
                      className="h-12 w-12 rounded-full bg-slate-200 mr-4 max-sm:h-10 max-sm:w-10"
                      src={person.image}
                    />
                    {person.firstName}
                    {""} {person.lastName}
                  </li>
                </Link>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default Users;
