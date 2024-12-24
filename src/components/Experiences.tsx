function Experiences() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20 px-60 bg-gray-100">
      <h1 className="text-5xl font-bold">Experiences</h1>
      <div className="grid grid-cols-5 items-stretch gap-5  justify-center">
        <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5">
          <h3 className="text-2xl font-bold">Indie Game Developer</h3>
          <p>52 Hertz Mind · Self-employed</p>
          <p className="opacity-80 text-sm">
            Jul 2019 - Jul 2023 · 4 years & 1 months
          </p>
        </div>
        <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5">
          <h3 className="text-2xl font-bold">Game Designer</h3>
          <p>Nouranium · Full-time</p>
          <p className="opacity-80 text-sm">
            Jan 2022 - Mar 2023 · 1 year & 3 months
          </p>
        </div>
        <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5">
          <h3 className="text-2xl font-bold">Customer Service Administrator</h3>
          <p>Dirclub.ir · Full-time</p>
          <p className="opacity-80 text-sm">Oct 2023 - Jan 2024 · 4 months</p>
        </div>
        <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5">
          <h3 className="text-2xl font-bold">Book Seller</h3>
          <p>Cheshmeh Publication · Full-time</p>
          <p className="opacity-80 text-sm">Apr 2024 - Oct 2024 · 7 months</p>
        </div>
        <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5">
          <h3 className="text-2xl font-bold">Frontend Developer</h3>
          <p>Bytepute · Full-time</p>
          <p className="opacity-80 text-sm">Aug 2024 - Present · 5 months</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
