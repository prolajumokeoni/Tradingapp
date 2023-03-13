import {
  Bars3CenterLeftIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const MobileView = () => {
  return (
    <nav>
      <div className="bg-light flex items-center w-full h-20">
        <div className="w-11/12  m-auto flex  justify-between">
          <div className="flex justify-between space-x-4">
            <ChatBubbleBottomCenterIcon className="h-10 w-10 text-gray" />
            <BellIcon className="h-10 w-10 text-gray" />
          </div>
          <div className="">
            <Bars3CenterLeftIcon className="h-10 w-10 text-blue" />
          </div>
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="mt-4 relative w-full text-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-dark absolute mt-2 ml-5" />
          <input
            className="border border-light w-11/12 m-auto rounded-lg  placeholder:text-dark text-left px-10 p-2"
            placeholder="Find Mentors"
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileView;