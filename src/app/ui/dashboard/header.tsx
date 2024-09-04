import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="navbar h-8 bg-white text-black flex justify-between">
        <div className="flex flex-col m-3">
          <div className="text-3xl font-extrabold">
            Law <span className="text-cyan-500">Mate</span>
          </div>
          <div className="text-xs font-bold">Your Parnter In Justice</div>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div className="text-sm mb-3">Mr Hrais Irfan</div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full btn btn-circle avatar rounded-full rounded-box">
                <Image
                  className="roundeed-full"
                  width={500}
                  height={500}
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="external-lawyer-male-profession-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
        </div>
      </div>
    </>
  );
}
