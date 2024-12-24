function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="backdrop-blur-sm flex gap-40 items-center justify-center px-40 py-5 fixed mx-auto w-full bg-white bg-opacity-90">
      <p className="font-bold text-3xl">Mohammad Aghaei</p>
      <div className="flex items-center gap-10 text-2xl">
        <button
          onClick={() => scrollToSection("about-me")}
          className="hover:bg-gray-200 rounded p-2 duration-300"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("experiences")}
          className="hover:bg-gray-200 rounded p-2 duration-300"
        >
          Experiences
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:bg-gray-200 rounded p-2 duration-300"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:bg-gray-200 rounded p-2 duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact-me")}
          className="hover:bg-gray-200 rounded p-2 duration-300"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
