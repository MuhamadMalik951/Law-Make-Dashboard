import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full text-black  flex-col px-3 py-4 md:px-2 bg-white md:bg-transparent">
      <div className="navbar flex md:hidden ">
        <div className="navbar-start flex md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white  rounded-box z-[1]  w-52 shadow flex justify-start"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex flex-col m-3">
            <div className="text-3xl font-extrabold">
              Law <span className="text-cyan-500">Mate</span>
            </div>
            <div className="text-xs font-bold">Your Parnter In Justice</div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end flex text-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-16"
            >
              <div className="w-14 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-16 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-white text-black">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 hidden md:flex">
        <NavLinks />
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-cyan-100 hover:text-cyan-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block text-black">Logout</div>
          </button>
        </form>
      </div>
    </div>
  );
}

