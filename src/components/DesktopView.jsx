import {
  MagnifyingGlassIcon,
  UsersIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ReactComponent as SkippaLogo } from "../assets/skippa.svg";
import Card from "./Card";
import "./Desktopview.styles.css";

const DesktopView = () => {
  return (
    <div
      className={`${
        window.innerWidth >= 768 ? "hidden md:block" : "md:hidden"
      }`}
    >
      <div className="flex h-full">
        <aside className="sidebar w-1/5 min-h-screen">
          <nav className="mt-10">
            <NavLink className="flex items-center w-10/12 mx-auto">
              <SkippaLogo className="h-8 w-8 text-gray" />
              <h1 className="text-light pl-3 font-extrabold text-3xl">
                Skippa
              </h1>
            </NavLink>

            <NavLink className="flex items-center mt-24 pl-3 hover:bg-highlight active:bg-lightblue">
              <UsersIcon className="h-6 w-6 text-dark" />
              <p className="text-dark   md:text-sm  xl:text-2xl  p-3 break-normal font-bold">
                Find Mentors
              </p>
            </NavLink>
          </nav>
        </aside>
        <main className="w-4/5 min-h-screen">
          <nav className="bg-light">
            {" "}
            <nav className="bg-light flex items-center justify-between w-full h-20">
              <div className="w-11/12 m-auto flex  justify-between items-center">
                <NavLink className="">
                  <ChevronLeftIcon className="h-6 w-6 text-gray" />
                </NavLink>
                <div className="flex items-center justify-between space-x-12">
                  <ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray" />
                  <NavLink></NavLink>
                  <NavLink>
                    <BellIcon className="h-6 w-6 text-gray" />
                  </NavLink>
                  <NavLink>
                    <img
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                      className="border-4 border-light rounded-full  w-12 h-12 left-3 bottom-16"
                      alt="avatar"
                    />
                  </NavLink>
                </div>
              </div>
            </nav>
          </nav>
          <section>
            <div className="py-4 text-center w-full">
              <MagnifyingGlassIcon className="h-6 w-6 text-dark absolute mt-3 md:ml-12 lg:ml-28" />
              <input
                className="border border-light w-11/12 m-auto rounded-lg  placeholder:text-dark text-left px-14 p-3 lg:px-24"
                placeholder="Find Mentors"
              />
            </div>
            <Card />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DesktopView;
