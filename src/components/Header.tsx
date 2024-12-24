function Header() {
  return (
    <div className="flex gap-40 items-center justify-center px-40 py-5 fixed mx-auto w-full bg-white bg-opacity-90">
      <p className="font-bold text-3xl">Mohammad Aghaei</p>
      <div className="flex items-center gap-10 text-2xl ">
        <button className="hover:bg-gray-200 rounded p-2 duration-300">
          About Me
        </button>
        <button className="hover:bg-gray-200 rounded p-2 duration-300">
          Experiences
        </button>
        <button className="hover:bg-gray-200 rounded p-2 duration-300">
          Skills
        </button>{" "}
        <button className="hover:bg-gray-200 rounded p-2 duration-300">
          Projects
        </button>
        <button className="hover:bg-gray-200 rounded p-2 duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
