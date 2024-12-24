function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-screen flex items-center justify-center gap-20 px-96 bg-gray-100">
      <div data-aos-duration="1000" data-aos="fade-right" className="rounded">
        <img
          className="w-96 rounded-full border-2 border-blue-900 shadow hover:!shadow-2xl duration-300"
          alt="M.Aghaei Photo"
          src="/photo4.jpg"
        ></img>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="flip-left"
        className="flex flex-col items-center gap-2"
      >
        <p className="text-2xl">Hello, </p>
        <p className="text-2xl">I'm Mohammad Aghaei</p>
        <p className="text-3xl font-bold ">A Front-End Developer</p>
        <div className="flex gap-3">
          <a
            href="/MohammadAghaei-en-resume.pdf"
            download="MohammadAghaei-en-resume.pdf"
            className="text-center bg-blue-900 text-white p-3 rounded-2xl mt-5 hover:bg-blue-800 duration-300"
          >
            Download CV
          </a>
          <button
            onClick={() => scrollToSection("contact-me")}
            className="border-2 border-blue-900 text-mainText p-3 rounded-2xl mt-5 hover:bg-blue-100 duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
