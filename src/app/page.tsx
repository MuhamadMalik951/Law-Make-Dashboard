import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen flex-col bg-white flex align-middle justify-center text-black text-6xl">
      <a className="font-extrabold flex flex-col items-center" href="/dashboard">
        <div className="flex flex-col  text-center mb-12 md:mb-32">
          <div className="text-6xl md:text-9xl font-extrabold">
            Law <span className="text-cyan-500">Mate</span>
          </div>
          <div className="text-xl md:text-5xl font-bold">
            Your Parnter In Justice
          </div>
        </div>
        <button className="btn bg-cyan-500 text-white border-none text-2xl text-cyan-500 text-center">CLICK</button>
      </a>
    </div>
  );
}

