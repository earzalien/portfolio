import React from "react";
import { useLanguage } from "../context/language-context";
import flagFR from "../../public/assets/france.png";
import flagEN from "../../public/assets/uk.png";
import flagES from "../../public/assets/spain.png";

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switch-buttons">
      <button
        onClick={() => setLanguage("FR")}
        className={`btn-lang ${language === "FR" ? "btn-lang--active" : ""}`}
        aria-label="Français"
      >
        <img src={flagFR} alt="Français" />
      </button>

      <button
        onClick={() => setLanguage("EN")}
        className={`btn-lang ${language === "EN" ? "btn-lang--active" : ""}`}
        aria-label="English"
      >
        <img src={flagEN} alt="English" />
      </button>

      <button
        onClick={() => setLanguage("ES")}
        className={`btn-lang ${language === "ES" ? "btn-lang--active" : ""}`}
        aria-label="Español"
      >
        <img src={flagES} alt="Español" />
      </button>
    </div>
  );
};

export default LanguageSwitch;
