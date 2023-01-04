import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";

const Users = ({ data }) => {
  const [singleUser, setSingleUser] = useState({});
  return (
    <section className="flex justify-center  items-center min-h-screen">
      <div className="bg-curve custom-shape-divider-bottom-1672816296">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
            stroke="10px purple"
          ></path>
        </svg>
      </div>
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
            data.map((user) => {
              return (
                <Link
                  to="/profile"
                  key={user.id}
                  index={user.id}
                  onClick={() => {
                    setSingleUser(user);
                    console.log(user);
                  }}
                >
                  <li className="flex text-xl p-2 cursor-pointer items-center border-bt">
                    <img
                      className="h-12 w-12 rounded-full bg-slate-200 mr-4"
                      src={user.image}
                    />
                    {user.firstName}
                    {""} {user.lastName}
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
