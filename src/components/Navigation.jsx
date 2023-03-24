import {
  MagnifyingGlassIcon,
  UsersIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChevronLeftIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ReactComponent as SkippaLogo } from "../assets/skippa.svg";
import CardList from "./CardList";
import "./Navigation.styles.css";

const Navigation = () => {
  return (
    <div>
      <div className="flex h-full">
        <aside className=" hidden md:block sidebar w-1/5 min-h-screen">
          <nav className="mt-10">
            <NavLink className="flex items-center w-10/12 mx-auto">
              <SkippaLogo className="h-8 w-8 text-gray" />
              <h1 className="text-light pl-3 font-extrabold  md:text-2xl  lg:text-3xl">
                Skippa
              </h1>
            </NavLink>

            <NavLink className="flex items-center mt-24 w-10/12 mx-auto hover:bg-highlight active:bg-lightblue">
              <UsersIcon className="h-6 w-6 text-dark pr-2" />
              <p className="text-dark   md:text-sm  lg:text-2xl break-normal font-bold">
                Find Traders
              </p>
            </NavLink>
          </nav>
        </aside>
        <main className="w-full lg:w-4/5 min-h-screen">
          <nav className="md:hidden bg-light flex items-center w-full h-20">
            <div className="w-11/12  m-auto flex  justify-between items-center">
              <div className="flex justify-between space-x-4">
                <ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray" />
                <BellIcon className="h-6 w-6 text-gray" />
              </div>
              <div className="">
                <Bars3CenterLeftIcon className="h-10 w-10 text-barblue" />
              </div>
            </div>
          </nav>
          <nav className="bg-light hidden md:block">
            {" "}
            <nav className="bg-light flex items-center justify-between w-full h-20">
              <div className="w-11/12 m-auto flex  justify-between items-center">
                <NavLink className="">
                  <ChevronLeftIcon className="h-6 w-6 text-gray" />
                </NavLink>
                <div className="flex items-center justify-between space-x-4">
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
            <div className="relative mt-4 mx-auto w-11/12">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-dark" />
              </span>
              <input
                type="search"
                name="q"
                className="w-full  py-3 text-sm placholder:text-dark rounded-md pl-10 focus:outline-light focus:text-dark"
                placeholder="Find Mentors"
              />
            </div>
            <CardList />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Navigation;
