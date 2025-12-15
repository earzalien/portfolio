import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Nous sommes ravis de vous annoncer le lancement de notre nouvelle fonctionnalité qui vous permet de personnaliser votre expérience utilisateur comme jamais auparavant ! Plongez dans un univers d'options personnalisées, conçues spécialement pour vous. De plus, restez informé(e) des nouveautés et des offres exclusives. Merci de faire partie de notre communauté !</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>We're thrilled to announce the launch of our new feature, allowing you to customize your user experience like never before! Dive into a world of personalized options tailored just for you. Plus, stay tuned for exciting updates and exclusive offers coming your way. Thank you for being part of our community!</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
