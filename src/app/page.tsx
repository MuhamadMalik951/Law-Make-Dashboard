import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen flex-col bg-white flex align-middle justify-center text-black text-6xl">
      <a className="font-extrabold" href="/dashboard">
        <div className="flex flex-col  text-center mb-32">
          <div className="text-9xl font-extrabold">
            Law <span className="text-cyan-500">Mate</span>
          </div>
          <div className="text-5xl font-bold">Your Parnter In Justice</div>
        </div>
        <div className="text-2xl text-cyan-500 text-center">CLICK</div>
      </a>{' '}
    </div>
  );
}

