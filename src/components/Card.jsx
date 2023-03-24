import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Card.styles.css";

const Card = ({
  user: {
    username,
    profileImage,
    location,
    backgroundImage,
    experience,
    about,
    name,
    id,
  },
}) => {
  const [flip, setFlip] = useState(null);

  return (
    <div
      key={id}
      className={`card  h-48 grid mx-2 my-8 bg-white shadow-2xl ${
        flip ? "flip" : ""
      }`}
      onMouseEnter={() => setFlip(!flip)}
      onMouseLeave={() => setFlip(null)}
    >
      <div className="front w-full">
        <img src={backgroundImage} className="h-28 w-full" alt={`${name}`} />
        <img
          src={profileImage}
          className="border-4 border-light rounded-full  absolute w-20 h-20 left-3 bottom-16"
          alt={`${name}`}
        />
        <div className="flex h-20 w-full ml-3 pt-6 flex-col content-baseline">
          <div className="flex w-full">
            <h2 className="font-bold">{name}</h2>
            <h6 className="text-gray ml-2">@({username})</h6>
          </div>
          <div className="flex w-full items-center">
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 text-gray" />
              <span className="text-sm ml-1 text-gray">{location}</span>
            </div>
            <div className="flex items-center ml-2">
              <CalendarDaysIcon className="w-4 h-4 text-gray" />
              <span className="text-sm ml-1 text-gray">{experience}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="back h-48 mx-auto bg-gray w-full flex flex-col">
        <div className=" text-dark font-bold p-2 text-center">
          <h2>{username}</h2>
          <p>{about}</p>
        </div>
        <NavLink path="/" className="text-light mt-3 font-bold text-center">
          Go to Mentors page
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
