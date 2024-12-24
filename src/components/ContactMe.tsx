import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20 px-96 ">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <div className="flex gap-5">
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <FaTelegram className="size-6" />
            <a href="https://t.me/Mamad_Aghaei" target="_blank">
              Telegram
            </a>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <FaLinkedin className="size-6" />
            <a
              href="https://www.linkedin.com/in/mohamad-aghaei-89894b196/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <MdEmail className="size-6" />
            <a href="mailto:mmdrezaaghaei@gmail.com" target="_blank">
              mmdrezaaghaei@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
