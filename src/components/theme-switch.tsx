import { useTheme } from "../context/theme-context";
import {
  BsMoon,
  BsSun,
  BsLinkedin,
  BsFillEnvelopeAtFill,
  BsGithub,
} from "react-icons/bs";
import { sideBarLeftSocials } from "../assets/lib/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseBtn =
    "shortcut-btn fixed w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950";

  const themeBg = theme === "dark" ? "bg-[--darkblue]" : "bg-white";

  return (
    <div
      className={`
        fixed right-10 z-50
        h-[24rem] w-[4rem]
        ${isMobile ? "top-10" : "bottom-5"}
      `}
    >
      {/* Bouton thème */}
      <button
        className={`
          ${baseBtn} ${themeBg}
          ${isMobile ? "top-10" : "bottom-5"}
          right-10
        `}
        onClick={toggleTheme}
        aria-label="Switch Dark and Light"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>

      {/* Github */}
      <button
        className={`
          ${baseBtn} ${themeBg}
          right-10
          ${isMobile ? "top-32" : "bottom-[6rem]"}
        `}
        aria-label="My Github Profile"
      >
        <Link
          to={sideBarLeftSocials[1].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </Link>
      </button>

      {/* Linkedin */}
      <button
        className={`
          ${baseBtn} ${themeBg}
          right-10
          ${isMobile ? "top-52" : "bottom-[11rem]"}
        `}
        aria-label="My Linkedin Profile"
      >
        <Link
          to={sideBarLeftSocials[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>
      </button>

      {/* Email */}
      <button
        className={`
          ${baseBtn} ${themeBg}
          right-10
          ${isMobile ? "top-72" : "bottom-[16rem]"}
        `}
        aria-label="Send me an Email"
      >
        <Link
          to={sideBarLeftSocials[2].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillEnvelopeAtFill />
        </Link>
      </button>
    </div>
  );
}
