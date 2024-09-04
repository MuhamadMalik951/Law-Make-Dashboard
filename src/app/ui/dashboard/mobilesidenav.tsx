import NavLinks from "./nav-links"
import Link from "next/link"
import Image from "next/image"

export default function MobileSideNav() {
    return (
        <>
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
            <Link href="/" className="flex flex-col m-3">
              <div className="text-3xl font-extrabold">
                Law <span className="text-cyan-500">Mate</span>
              </div>
              <div className="text-xs font-bold">Your Parnter In Justice</div>
            </Link>
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
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
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
                <Link href={'/dashboard/myprofile'} className="justify-between">
                  Profile
                  <span className="badge bg-white text-black">New</span>
                </Link>
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
        </>

    )
}