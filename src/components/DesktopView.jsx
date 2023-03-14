import { UsersIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ReactComponent as SkippaLogo } from "../assets/skippa.svg";
import "./Desktopview.styles.css";

const DesktopView = () => {
  return (
    <div
      className={`${
        window.innerWidth >= 768 ? "hidden sm:block" : "sm:hidden"
      }`}
    >
      <div className="flex h-screen">
        <aside className="sidebar w-2/12">
          <nav className="mt-10 w-10/12 mx-auto ">
            <NavLink className="flex items-center">
              <SkippaLogo />
              <h1 className="text-light pl-3 font-extrabold">Skippa</h1>
            </NavLink>

            <NavLink className="flex items-center mt-24">
              <UsersIcon className="h-6 w-6 text-gray" />
              <p className="text-dark pl-3 font-semibold">Find Mentor</p>
            </NavLink>
          </nav>
        </aside>
        <main className="bg-gray w-10/12">
          <nav className="bg-light">navigation</nav>
        </main>
      </div>
    </div>
  );
};

export default DesktopView;
