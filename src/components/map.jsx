import { useState } from "react";
import React, { useContext } from "react";
import { UserContext } from "../usercontext";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function MyMap() {
  const { user } = useContext(UserContext);
  const position = [user.address.coordinates.lat, user.address.coordinates.lng];
  return (
    <>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <p className="text-sm p-2 text-gray-300 font-light text-center">
        <b className="text-gray-600">lat :</b> {user.address.coordinates.lat}{" "}
        <b className="text-gray-600">long :</b> {user.address.coordinates.lng}
      </p>
    </>
  );
}
export default MyMap;
