import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/language-context";

const Imprint: React.FC = () => {
  const { language } = useLanguage();
  const isFR = language === "FR";
  const isES = language === "ES";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold">
        {isFR ? "Mentions légales" : isES ? "Aviso legal" : "Imprint"}
      </h1>

      <h2 className="text-2xl font-semibold">
        {isFR ? "Éditeur du site" : isES ? "Editor del sitio" : "Site owner"}
      </h2>
      <p>
        Kévin Ressegaire
        <br />
        Développeur full‑stack (portfolio personnel)
        <br />
        {isFR
          ? "Pour me contacter, merci d’utiliser le formulaire de contact du site."
          : isES
          ? "Para contactarme, utiliza el formulario de contacto del sitio."
          : "To contact me, please use the contact form on this site."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR ? "Hébergement" : isES ? "Alojamiento" : "Hosting"}
      </h2>
      <p>
        {isFR
          ? "Ce site est hébergé par Vercel Inc."
          : isES
          ? "Este sitio está alojado por Vercel Inc."
          : "This site is hosted by Vercel Inc."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "Propriété intellectuelle"
          : isES
          ? "Propiedad intelectual"
          : "Intellectual property"}
      </h2>
      <p>
        {isFR
          ? "Sauf mention contraire, les contenus (textes, visuels, code) présentés sur ce portfolio sont la propriété de Kévin Ressegaire et ne peuvent être réutilisés qu’avec autorisation."
          : isES
          ? "Salvo indicación en contrario, los contenidos (textos, visuales, código) presentados en este portfolio son propiedad de Kévin Ressegaire y no pueden reutilizarse sin autorización previa."
          : "Unless stated otherwise, the content (texts, visuals, code) displayed on this portfolio is the property of Kévin Ressegaire and may not be reused without prior permission."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR ? "Responsabilité" : isES ? "Responsabilidad" : "Liability"}
      </h2>
      <p>
        {isFR
          ? "Ce portfolio a pour objectif de présenter mon profil et mes projets. Malgré le soin apporté aux informations publiées, des erreurs ou omissions peuvent subsister. Vous pouvez me contacter pour signaler tout problème."
          : isES
          ? "Este portfolio tiene como objetivo presentar mi perfil y mis proyectos. Aunque se presta atención a la exactitud de la información, pueden existir errores u omisiones. Puedes contactarme para informar de cualquier problema."
          : "This portfolio aims to present my profile and projects. While care is taken to ensure accuracy, errors or omissions may occur. You can contact me to report any issue."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR ? "Contact" : isES ? "Contacto" : "Contact"}
      </h2>
      <p>
        {isFR
          ? "Pour toute question concernant le site, vous pouvez passer par le "
          : isES
          ? "Para cualquier consulta relacionada con el sitio, puedes utilizar el "
          : "For any question related to this site, please use the "}
        <Link
          to="/#contact"
          className="underline text-[--orange]"
        >
          {isFR
            ? "formulaire de contact"
            : isES
            ? "formulario de contacto"
            : "contact form"}
        </Link>
        {isFR
          ? "."
          : isES
          ? "."
          : "."}
      </p>
    </section>
  );
};

export default Imprint;
