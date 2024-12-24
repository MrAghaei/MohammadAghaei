import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="backdrop-blur-sm fixed w-full bg-white bg-opacity-90 px-6 sm:px-10 md:px-40 py-4 z-50 overflow-hidden">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <p className="font-bold text-xl sm:text-2xl md:text-3xl">
          Mohammad Aghaei
        </p>

        {/* Menu Button (Visible on small screens) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none ml-4"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-8 text-lg md:text-2xl">
          {["about-me", "experiences", "skills", "projects", "contact-me"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:bg-gray-200 rounded px-3 py-2 duration-300"
              >
                {section
                  .split("-")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens when toggled) */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-start gap-3 text-lg">
          {["about-me", "experiences", "skills", "projects", "contact-me"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:bg-gray-200 rounded px-3 py-2 duration-300 w-full text-left"
              >
                {section
                  .split("-")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
