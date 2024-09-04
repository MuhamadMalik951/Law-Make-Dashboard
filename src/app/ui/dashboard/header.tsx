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
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="text-sm">Mr Hrais Irfan</div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-lawyer-male-profession-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png"
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
