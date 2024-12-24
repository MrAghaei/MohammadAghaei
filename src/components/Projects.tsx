function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20 px-96 bg-gray-100">
      <h1 className="text-5xl font-bold">My Projects</h1>
      <div className="shadow-xl hover:shadow-2xl duration-300 flex flex-col justify-between items-center gap-5 border border-blue-900 p-5 size-1/2 h-fit rounded-2xl">
        <img
          alt="kheradkhan"
          src="/kheradkhan.png"
          className="w-full h-fit rounded-2xl"
        />
        <a
          href="https://github.com/52-Hertz-Mind/KheradKhan"
          target="_blank"
          className="text-center bg-blue-900 w-1/2  text-white p-3 rounded-2xl mt-5 hover:bg-blue-800 duration-300"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default Hero;
