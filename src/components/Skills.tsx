import { FaCode } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20 px-96 ">
      <h1 className="text-5xl font-bold">My Skills</h1>
      <div className="flex gap-10">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 flex flex-col items-center justify-center gap-8 border border-blue-900 rounded-2xl py-5 px-12"
        >
          <h2 className="text-4xl text-gray-600">Front-end</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">React</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Next.js</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">JavaScript</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">TypeScript</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">HTML</p>
                <p>Experienced</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">CSS</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Tailwind</p>
                <p>Experienced</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">SASS</p>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 flex flex-col items-center justify-center gap-8 border border-blue-900 rounded-2xl py-5 px-5"
        >
          <h2 className="text-4xl text-gray-600">Other</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Scrum</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Agile Methodologies</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Adobe Illustrator</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Adobe Photoshop</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Figma</p>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Project Management</p>
                <p>Beginner</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Unity</p>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdVerified className="size-8" />
              <div className="flex flex-col items-start ">
                <p className="text-2xl font-bold">Game Design</p>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
