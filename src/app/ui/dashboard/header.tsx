import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="navbar bg-white text-black flex justify-between hidden md:flex">
        <div className="flex flex-col m-3">
          <Link href="/" className='flex flex-col m-3'>
            <div className="text-3xl font-extrabold">
              Law <span className="text-cyan-500">Mate</span>
            </div>
            <div className="text-xs font-bold">Your Parnter In Justice</div>
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="text flex  flex-col hidden md:flex">
            <div className="font-bold text-xl">Mr Hrais Irfan</div>
            <div className="text-gray-500 text-semibold text-sm text-right">
              Bussiness Lawyer
            </div>
          </div>
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
  );
}
