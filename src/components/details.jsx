import React, { useContext } from "react";
import { UserContext } from "../usercontext";
const Details = ({}) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <main className="grid-main">
        <header className="gchild1">
          <div>Profile</div>
          <div>
            <img className="h-12 w-12 rounded-full bg-slate-200 mr-4" />
            {user.firstName}
            {user.lastName}
          </div>
        </header>
        <section className="gchild2"></section>
        <section className="gchild3">more details</section>
      </main>
    </>
  );
};

export default Details;
