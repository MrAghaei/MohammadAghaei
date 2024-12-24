import { FaCircle } from "react-icons/fa";
function AboutMe() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-20 items-center px-96 ">
      <h1 className="text-5xl font-bold">About Me</h1>
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-start justify-center h-full border rounded-2xl py-5 px-10 gap-3 font-bold">
          <div className="flex items-center justify-center gap-4">
            <FaCircle />
            <p>
              Started programming with Java, sparking my interest in
              development.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaCircle />
            <p>Learned game development using Unity and Unreal Engine.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaCircle />
            <p>Worked 1.5 years as a game designer at a game studio.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaCircle />
            <p>Transitioned to front-end development in 2023.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FaCircle />
            <p>Currently a junior front-end developer at Bytepute.</p>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-lg">
            My journey in development started with learning Java, which sparked
            my interest in programming. I explored game development with Unity
            and Unreal Engine, eventually working as a game designer at a game
            studio for 1.5 years. In 2023, I decided to shift my focus to
            front-end development, where I combine my background in design and
            coding to create intuitive and engaging web experiences. I'm
            currently working at Bytepute as junior front-end developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
