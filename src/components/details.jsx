import React, { useContext, useState } from "react";
import { UserContext } from "../usercontext";
import MyMap from "./map";
import Modal from "./modal";
const Details = ({}) => {
  const [openModal, setopenModal] = useState(false);
  const { user } = useContext(UserContext);

  const openProfileModal = () => {
    setopenModal(!openModal);
  };
  return (
    <>
      {user && (
        <main className="grid-main pl-8 max-sm:pl-0 max-sm:text-sm">
          <header className="gchild1 flex justify-between border-bt p-5 ">
            <div>Profile</div>
            <div className="flex items-center" onClick={openProfileModal}>
              <img
                className="h-12 w-12 rounded-full bg-slate-200 mr-4"
                src={user.image}
              />
              {user.firstName}
              {""}
              {user.lastName}
            </div>
          </header>
          <Modal user={user} modal={openModal} />

          <section className="gchild2 border-rt">
            <div className="info user-info border-bt pb-4">
              <img
                className="h-30 w-30 rounded-full bg-slate-200 mr-4"
                src={user.image}
              />
              <header>
                {user.firstName}
                {""}
                {user.lastName}
              </header>
              <p>
                <b>Username : </b>
                {user.username}
              </p>
              <p>
                <b>e-mail : </b>
                {user.email}
              </p>
              <p>
                <b>phone : </b>
                {user.phone}
              </p>
              <p>
                <b>website : </b>
                {user.domain}
              </p>
            </div>
            <div className="info company-info">
              <header>company </header>
              <p>
                <b>name : </b>
                {user.company.name}
              </p>
              <p>
                <b>catchphrase : </b>
                {user.company.department}
              </p>
              <p>
                <b>bs : </b>
                {user.company.title}
              </p>
            </div>
          </section>
          <section className="gchild3 pl-10 max-sm:pl-0">
            <div className="info address-details w-3/5 items-baseline">
              <header>Address</header>
              <p>
                <b>street : </b>
                {user.address.address}
              </p>
              <p>
                <b>State : </b>
                {user.address.state}
              </p>
              <p>
                <b>City : </b>
                {user.address.city}
              </p>
              <p>
                <b>zip-code : </b>
                {user.address.postalCode}
              </p>
            </div>
            <MyMap className="mt-10" />
          </section>
        </main>
      )}
    </>
  );
};

export default Details;
