import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  value?: string;
  className?: string;
  link?: string;
  iconcolor?: string;
  iconSVG?: React.FC<{ className: string }>;
  buttoncolor?: string;
  buttonhovercolor?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "input" | "button";
  target?: "_blank" | "_self";
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type = "button",
  elementType,
  target,
  rel,
}) => {
  const commonClassName = `
    text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem]
    transition-all duration-200 flex flex-row gap-4 justify-center items-center
    cursor-pointer ${buttoncolor ?? ""} ${buttonhovercolor ?? ""} max-lg:text-3xl
    max-lg:py-8 max-lg:px-16 max-lg:rounded-xl shadow-xl hover:scale-100
    hover:-translate-y-2 hover:drop-shadow-xl w-max
  `;

  if (elementType === "input") {
    return (
      <input
        onClick={onClick}
        type={type}
        className={commonClassName}
        value={value}
      />
    );
  }

  const content = (
    <>
      {IconSVGComponent ? (
        <IconSVGComponent className={"w-max h-10"} />
      ) : buttoncolor ? (
        <img
          src={buttoncolor}
          alt={`${label}-icon`}
          className={`w-16`}
        />
      ) : null}
      {label}
    </>
  );

  // Si lien externe (http/https), utiliser <a>, sinon <Link>
  if (link && /^https?:\/\//.test(link)) {
    return (
      <a
        href={link}
        target={target}
        rel={rel}
        onClick={onClick}
        className="no-underline"
      >
        <button type={type} className={commonClassName}>
          {content}
        </button>
      </a>
    );
  }

  return (
    <Link to={link || ""} className="no-underline">
      <button type={type} onClick={onClick} className={commonClassName}>
        {content}
      </button>
    </Link>
  );
};

export default Button;
