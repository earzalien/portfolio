import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/language-context";

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  const isFR = language === "FR";
  const isES = language === "ES";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold">
        {isFR
          ? "Politique de confidentialité"
          : isES
          ? "Política de privacidad"
          : "Privacy Policy"}
      </h1>

      <p>
        {isFR
          ? "Cette page explique comment les informations que vous fournissez via ce portfolio sont utilisées et protégées."
          : isES
          ? "Esta página explica cómo se utilizan y protegen los datos que proporcionas a través de este portfolio."
          : "This page explains how the information you provide through this portfolio is used and protected."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "1. Données collectées"
          : isES
          ? "1. Datos recopilados"
          : "1. Data collected"}
      </h2>
      <p>
        {isFR
          ? "Le formulaire de contact enregistre uniquement les informations que vous saisissez : nom, adresse e‑mail, sujet et message."
          : isES
          ? "El formulario de contacto solo recoge los datos que introduces: nombre, correo electrónico, asunto y mensaje."
          : "The contact form only collects the data you provide: name, email address, subject and message."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "2. Finalité du traitement"
          : isES
          ? "2. Finalidad del tratamiento"
          : "2. Purpose of processing"}
      </h2>
      <p>
        {isFR
          ? "Ces informations sont utilisées uniquement pour répondre à vos demandes de contact et échanges professionnels."
          : isES
          ? "Esta información se utiliza únicamente para responder a tus solicitudes de contacto y a posibles colaboraciones profesionales."
          : "This information is used solely to respond to your contact requests and potential professional collaboration."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "3. Destinataires"
          : isES
          ? "3. Destinatarios"
          : "3. Recipients"}
      </h2>
      <p>
        {isFR
          ? "Les messages sont reçus directement dans ma boîte mail personnelle et ne sont pas transmis à des tiers sans votre accord."
          : isES
          ? "Los mensajes llegan directamente a mi bandeja de correo personal y no se comparten con terceros sin tu consentimiento."
          : "Messages are sent directly to my personal inbox and are not shared with third parties without your consent."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "4. Durée de conservation"
          : isES
          ? "4. Plazo de conservación"
          : "4. Data retention"}
      </h2>
      <p>
        {isFR
          ? "Les échanges par e‑mail peuvent être conservés pendant la durée nécessaire au suivi de nos discussions, puis supprimés régulièrement."
          : isES
          ? "Los intercambios por correo pueden conservarse mientras sean necesarios para el seguimiento de nuestras conversaciones y luego eliminarse periódicamente."
          : "Email exchanges may be kept as long as necessary to follow up on our conversation and are then periodically deleted."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "5. Vos droits"
          : isES
          ? "5. Tus derechos"
          : "5. Your rights"}
      </h2>
      <p>
        {isFR
          ? "Vous pouvez me contacter à tout moment pour demander l’accès, la mise à jour ou la suppression des informations vous concernant."
          : isES
          ? "Puedes contactar conmigo en cualquier momento para solicitar el acceso, la actualización o la eliminación de tus datos."
          : "You can contact me at any time to request access, update or deletion of your personal data."}
      </p>

      <h2 className="text-2xl font-semibold">
        {isFR
          ? "6. Contact"
          : isES
          ? "6. Contacto"
          : "6. Contact"}
      </h2>
      <p>
        {isFR
          ? "Pour toute question relative à cette politique de confidentialité, merci d’utiliser le "
          : isES
          ? "Para cualquier pregunta sobre esta política de privacidad, utiliza el "
          : "For any questions about this privacy policy, please use the "}
        <Link
          to="/#contact"
          className="underline text-[--orange]"
        >
          {isFR
            ? "formulaire de contact"
            : isES
            ? "formulario de contacto"
            : "contact form"}
        </Link>.
      </p>
    </section>
  );
};

export default Privacy;
