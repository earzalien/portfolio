// context/language-context.tsx
import { useEffect, useState, createContext, useContext } from "react";

type Language = "EN" | "FR" | "ES";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({ children }: LanguageContextProviderProps) {
  const [language, _setLanguage] = useState<Language>("EN");

  const setLanguage = (lang: Language) => {
    _setLanguage(lang);
    window.localStorage.setItem("language", lang);
    document.documentElement.classList.remove("EN", "FR", "ES");
    document.documentElement.classList.add(lang);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      setLanguage("EN");
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
