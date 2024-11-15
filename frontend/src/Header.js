import logo from "./logo.png";
import Avatar from "./avatar.png";

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    PlusIcon,
    SearchIcon,
  } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="w-full bg-reddit_dark p-2">
        <div className="mx-4 flex">
          <img src={logo} className="h-8 w-8 mr-2" alt="logo" />
          <form
            action=""
            className="bg-gray-800 px-3 flex rounded-md border border-reddit_border mx-4 flex-grow"
          >
            <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
            <input
              type="text"
              className="bg-gray-800 text-sm p-1 pl-2 pr-0 block focus:outline-none text-white"
              placeholder="Search"
            />
          </form>
          <button className="px-2 py-1">
            <ChatIcon className="text-gray-200 w-6 h-6 mx-2"/>
          </button>
          <button className="px-2 py-1">
            <BellIcon className="text-gray-200 w-6 h-6 mx-2"/>
          </button>
          <button className="px-2 py-1">
            <PlusIcon className="text-gray-200 w-6 h-6 mx-2"/>
          </button>

          <button className="rounded-full flex">
            <div className="bg-gray-600 ml-2 h-8 w-8 rounded-full">
            <img
              src={Avatar}
              alt="profile"
              className="block"/>
            </div>
            <ChevronDownIcon className="text-gray-500 h-4 w-4 mt-2"/>
          </button>
        </div>
      </header>
  );
}

export default Header;