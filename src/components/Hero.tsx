function Hero() {
  return (
    <div className="flex items-center justify-center gap-20 px-96 mt-40">
      <div className="rounded">
        <img
          className="w-80 rounded-full border-2 border-blue-900 shadow hover:shadow-2xl duration-300"
          alt="M.Aghaei Photo"
          src="/photo2.jpg"
        ></img>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">Hello, </p>
        <p className="text-2xl">I'm Mohammad Aghaei</p>
        <p className="text-3xl font-bold ">A Front-End Developer</p>
        <div className="flex gap-3">
          <button className="bg-blue-900 text-white p-3 rounded-2xl mt-5 hover:bg-blue-800 duration-300">
            Download CV
          </button>
          <button className="border-2 border-blue-900 text-mainText p-3 rounded-2xl mt-5 hover:bg-blue-100 duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
