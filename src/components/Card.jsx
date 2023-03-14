import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

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
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Lynn",
      username: "Skippamentor",
      location: "New York",
      experience: "10 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Margot",
      username: "margot_mentor",
      location: "Jacksonville, Missipi",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "Lyn",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
    {
      profileImage: "https://api.multiavatar.com/Binx Bond.png",
      backgroundImage:
        "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      name: "James",
      username: "james_mentor",
      location: "Boulder Colorado",
      experience: "5 Years Trading",
      about: "Lorem ipsum dolor sit amet, consecrate disciplining elit. Duis vel orci mi. Quisque a ante viverra, mollis magna eu, dapibus nunc. "
    },
  ];
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="flex items-center justify-between w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
        {users.map((user, idx) => {
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseDown={() => setHoveredCard(idx)}
              onMouseUp={() => setHoveredCard(null)}
              className="relative grid mx-2 my-8 bg-white shadow-2xl"
            > 
                {hoveredCard === idx ? (
                  <div className="h-48  mx-auto bg-gray w-full"> 
                  <div className=" text-light p-2 text-center">
                  <h2>{user.username}</h2>
                  <p>{user.about}</p>
                  </div>
                  </div>
                ) : (
                  <div>
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
                    <div className="flex h-20 w-full ml-3 pt-6 flex-col content-baseline">
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
                )}
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
