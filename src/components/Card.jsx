import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

const Card = () => {
  const users = [
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "James_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Lynn",
      username: "Skippamentor",
      location: "New York",
      experience: "More than 10 Years Trading",
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Margot",
      username: "margot_mentor",
      location: "Jacksonville, Missipi",
      experience: "5 Years Trading",
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Lyn",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
    },
  ];
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <div key={idx} className="relative grid mx-2 my-8 bg-white shadow-2xl">
            <img
              src={user.backgroundImage}
              className="h-28 w-full"
              alt={`${user.name}`}
            />
            <img
              src={user.profileImage}
              className="border-4 border-light rounded-full  absolute w-20 h-20 left-3 bottom-16"
              alt={`${user.name}`}
            />
            <div className="flex h-20 ml-3 pt-6 flex-col content-baseline">
              <div className="flex w-full">
                <h2 className="font-bold">{user.name}</h2>
                <h6 className="text-gray ml-2">@({user.username})</h6>
              </div>
              <div className="flex w-full items-center">
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 text-gray" />
                  <span className="text-sm ml-1 text-gray">
                    {user.location}
                  </span>
                </div>
                <div className="flex items-center ml-2">
                  <CalendarDaysIcon className="w-4 h-4 text-gray" />
                  <span className="text-sm ml-1 text-gray">
                    {user.experience}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;