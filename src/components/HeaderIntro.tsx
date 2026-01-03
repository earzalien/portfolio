import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";
import { toast } from "react-toastify";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleCvClick = async () => {
    const url =
      language === "FR"
        ? "/cv_fr.pdf"
        : language === "ES"
        ? "/cv_es.pdf"
        : "/cv_en.pdf";

    try {
      const res = await fetch(url, {
        method: "GET",
        redirect: "error",
      });

      const contentType = res.headers.get("Content-Type") || "";

      if (!res.ok || !contentType.includes("application/pdf")) {
        throw new Error("Not a PDF");
      }

      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      const msg =
        language === "FR"
          ? "Le CV dans cette langue est en cours de préparation."
          : language === "ES"
          ? "El CV en este idioma está en preparación."
          : "The CV in this language is being prepared.";

      toast.info(msg);
    }
  };

  const title =
    language === "FR"
      ? headerIntroData.title.fr
      : language === "ES"
      ? headerIntroData.title.es
      : headerIntroData.title.en;

  const subtitle =
    language === "FR"
      ? headerIntroData.subtitle.fr
      : language === "ES"
      ? headerIntroData.subtitle.es
      : headerIntroData.subtitle.en;

  const description =
    language === "FR"
      ? headerIntroData.description.fr
      : language === "ES"
      ? headerIntroData.description.es
      : headerIntroData.description.en;

  return (
    <section
      className="hero flex flex-col justify-center items-center text-center gap-10 h-full max-lg:h-full max-lg:gap-6 px-4"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt="Kevin Ressegaire"
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />

      <h1 className="text-center">
        {title}
        <span className="wave text-7xl ml-2">&#128075;&#127997;</span>
      </h1>

      <h2 className="text-center">{subtitle}</h2>

      <p className="w-1/2 text-center max-lg:w-full">
        {description}
      </p>

      <div className="button-container flex items-center justify-center gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => {
          const buttonLabel =
            language === "FR"
              ? button.label.fr
              : language === "ES"
              ? button.label.es
              : button.label.en;

          return (
            <Button
              key={index}
              label={buttonLabel}
              iconSVG={button.icon}
              link={`#${button.name.toLocaleLowerCase()}`}
              buttoncolor={button.color}
              onClick={() => {
                setActiveSection(button.name);
                setTimeOfLastClick(Date.now());
              }}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center mb-12">
        <button
          type="button"
          onClick={handleCvClick}
          className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold border border-[--orange] text-[--orange] hover:bg-[--orange] hover:text-white transition-colors"
        >
          {language === "FR"
            ? "Télécharger mon CV"
            : language === "ES"
            ? "Descargar mi CV"
            : "Download my CV"}
        </button>
      </div>

      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
