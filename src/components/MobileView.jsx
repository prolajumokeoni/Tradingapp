import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import Card from "./Card";

const MobileView = () => {
  return (
    <div
      className={`${
        window.innerWidth <= 767 ? "hidden sm:block" : "sm:hidden"
      }`}
    >
      <nav className="bg-light flex items-center w-full h-20">
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
      <div className="py-4 w-full text-center">
        <MagnifyingGlassIcon className="h-6 w-6 text-dark absolute mt-3 ml-10" />
        <input
          className="border border-light w-11/12 m-auto rounded-lg  placeholder:text-dark text-left px-14 p-3"
          placeholder="Find Mentors"
        />
      </div>
      <Card />
    </div>
  );
};

export default MobileView;
