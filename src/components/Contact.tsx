import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ServiceStatus from "./ServiceStatus";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name || data.name.trim().length < 2) {
      toast.error(
        language === "FR"
          ? "Merci d’indiquer un nom valide."
          : language === "ES"
          ? "Por favor introduce un nombre válido."
          : "Please enter a valid name."
      );
      setStatus("error");
      return;
    }

    if (!emailRegex.test(data.email)) {
      toast.error(
        language === "FR"
          ? "Merci d’indiquer une adresse email valide."
          : language === "ES"
          ? "Por favor introduce un correo electrónico válido."
          : "Please enter a valid email address."
      );
      setStatus("error");
      return;
    }

    if (!data.message || data.message.trim().length < 10) {
      toast.error(
        language === "FR"
          ? "Ton message est trop court."
          : language === "ES"
          ? "Tu mensaje es demasiado corto."
          : "Your message is too short."
      );
      setStatus("error");
      return;
    }

    try {
      const response = await axios.post(apiBaseUrl, data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);

      if (language === "FR") {
        toast.success(toastMessages.successEmailSent.fr);
      } else if (language === "ES") {
        toast.success(toastMessages.successEmailSent.es);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLastUpdatedField(null);
      setStatus("success");
    } catch (error) {
      console.log(error);

      if (language === "FR") {
        toast.error(toastMessages.failedEmailSent.fr);
      } else if (language === "ES") {
        toast.error(toastMessages.failedEmailSent.es);
      } else {
        toast.error(toastMessages.failedEmailSent.en);
      }
      setStatus("error");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
    if (status !== "idle") setStatus("idle");
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const shortEmail = email.length > 40 ? email.slice(0, 37) + "..." : email;

  const headerComment =
    language === "FR"
      ? `// 🌈 Poussière d’étoiles en cours:\n// Création d’un email cosmique 🌌`
      : language === "ES"
      ? `// 🌈 Esparciendo polvo de estrellas:\n// Creando un correo cósmico 🌌`
      : `// 🌈 Spreading stardust:\n// Crafting a cosmic email 🌌`;

  const messageBody =
    language === "FR"
      ? `Salut, explorateur·rice ! 👋

Ton message vient de traverser le réseau et d’atterrir dans ma boîte mail.

"${wordWrap(message, 40, " ")}"

Je te réponds dès que possible.

À bientôt,
${name}`
      : language === "ES"
      ? `¡Hola, explorador(a)! 👋

Tu mensaje acaba de viajar por la red y ha aterrizado en mi buzón.

"${wordWrap(message, 40, " ")}"

Te responderé lo antes posible.

Hasta pronto,
${name}`
      : `Hello, explorer! 👋

Your message just jumped through the network and landed in my inbox.

"${wordWrap(message, 40, " ")}"

I’ll get back to you as soon as possible.

Talk soon,
${name}`;

  const codeSnippet = `
import { useState } from "react";

${headerComment}

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }🚀";
const [recipient, setRecipient] = "${shortEmail}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  }📧";
const [subject, setSubject] =
"${subject}${
    lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  }✨";
const [message, setMessage] =
\`${messageBody}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }\`;
`;

  const labels = {
    name:
      language === "FR"
        ? "Nom"
        : language === "ES"
        ? "Nombre"
        : "Name",
    email:
      language === "FR"
        ? "Adresse email"
        : language === "ES"
        ? "Correo electrónico"
        : "Email address",
    subject:
      language === "FR"
        ? "Sujet"
        : language === "ES"
        ? "Asunto"
        : "Subject",
    message:
      language === "FR"
        ? "Message"
        : language === "ES"
        ? "Mensaje"
        : "Message",
  };

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "FR"
                ? contactData.title.fr
                : language === "ES"
                ? contactData.title.es
                : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "FR"
                ? contactData.description.fr
                : language === "ES"
                ? contactData.description.es
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          {/* Colonne gauche : snippet + status */}
          <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-12 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight
              code={codeSnippet}
              language="tsx"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} text-4xl code-preview`}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>

            <div className="mt-4 text-2xl">
              <ServiceStatus />
            </div>
          </div>

          {/* Colonne droite : formulaire */}
          <form
            className="flex flex-col gap-6 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {/* Nom */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-[--transparent]"
              >
                {labels.name}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={
                  language === "FR"
                    ? contactData.inputfields[0].placeholder.fr
                    : language === "ES"
                    ? contactData.inputfields[0].placeholder.es
                    : contactData.inputfields[0].placeholder.en
                }
                value={name}
                required
                onFocus={() => {
                  handleInputFocus("name");
                  setLastUpdatedField("name");
                }}
                onMouseEnter={() => {
                  handleInputFocus("name");
                  setLastUpdatedField("name");
                }}
                onChange={handleInputChange}
                disabled={status === "loading"}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-[--transparent]"
              >
                {labels.email}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={
                  language === "FR"
                    ? contactData.inputfields[1].placeholder.fr
                    : language === "ES"
                    ? contactData.inputfields[1].placeholder.es
                    : contactData.inputfields[1].placeholder.en
                }
                value={email}
                required
                onFocus={() => {
                  handleInputFocus("email");
                  setLastUpdatedField("email");
                }}
                onMouseEnter={() => {
                  handleInputFocus("email");
                  setLastUpdatedField("email");
                }}
                onChange={handleInputChange}
                disabled={status === "loading"}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            </div>

            {/* Sujet */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-[--transparent]"
              >
                {labels.subject}
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder={
                  language === "FR"
                    ? contactData.inputfields[2].placeholder.fr
                    : language === "ES"
                    ? contactData.inputfields[2].placeholder.es
                    : contactData.inputfields[2].placeholder.en
                }
                value={subject}
                required
                onFocus={() => {
                  handleInputFocus("subject");
                  setLastUpdatedField("subject");
                }}
                onMouseEnter={() => {
                  handleInputFocus("subject");
                  setLastUpdatedField("subject");
                }}
                onChange={handleInputChange}
                disabled={status === "loading"}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-[--transparent]"
              >
                {labels.message}
              </label>
              <textarea
                id="contact-message"
                rows={contactData.textarea.rows}
                placeholder={
                  language === "FR"
                    ? contactData.textarea.placeholder.fr
                    : language === "ES"
                    ? contactData.textarea.placeholder.es
                    : contactData.textarea.placeholder.en
                }
                name={contactData.textarea.name}
                value={message}
                onFocus={() => {
                  handleInputFocus(contactData.textarea.name);
                  setLastUpdatedField(contactData.textarea.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(contactData.textarea.name);
                  setLastUpdatedField(contactData.textarea.name);
                }}
                onChange={handleInputChange}
                disabled={status === "loading"}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow"
                    : "bg-[--icewhite] dark-shadow"
                }`}
              />
            </div>

            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "FR" && (
                  <>
                    J’accepte que mes informations soient utilisées pour
                    répondre à ma demande et je confirme avoir lu la{" "}
                    <Link
                      to="/privacy"
                      className="underline text-[--orange]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </>
                )}
                {language === "EN" && (
                  <>
                    I agree that my information will be used to answer my
                    request and I confirm that I have read the{" "}
                    <Link
                      to="/privacy"
                      className="underline text-[--orange]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      privacy policy
                    </Link>
                    .
                  </>
                )}
                {language === "ES" && (
                  <>
                    Acepto que mi información se utilice para responder a mi
                    solicitud y confirmo que he leído la{" "}
                    <Link
                      to="/privacy"
                      className="underline text-[--orange]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      política de privacidad
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>

            <Button
              value={
                language === "FR"
                  ? contactData.button.value.fr
                  : language === "ES"
                  ? contactData.button.value.es
                  : contactData.button.value.en
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
<div className="w-full flex justify-center mb-4 lg:hidden">
    <ServiceStatus />
  </div>
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
