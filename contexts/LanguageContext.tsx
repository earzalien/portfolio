'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Kevin Ressegaire',
    'hero.subtitle': 'Développeur Full-Stack',
    'hero.description': 'Passionné par la création de sites Web. Motivé, curieux, toujours prêt pour de nouveaux défis.',
    'hero.cta': 'Découvrir mon profil',
    
    // About
    'about.title': 'À propos',
    'about.subtitle': 'Qui suis-je ?',
    'about.p1': 'Développeur Web et Web Mobile (DWWM) niveau 5, spécialisé dans la création d\'applications web modernes et performantes. Formé à la Wild Code School, je maîtrise les technologies frontend et backend pour concevoir des solutions complètes et innovantes.',
    'about.p2': 'Je développe des applications web avec',
    'about.p3': ',',
    'about.p4': ', Node.js, PostgreSQL et d\'autres technologies modernes. Mon approche combine rigueur technique, attention aux détails et souci de la qualité du code pour livrer des produits robustes et maintenables.',
    'about.p5': 'Passionné par le développement web, je suis à la recherche d\'opportunités pour mettre mes compétences au service de projets stimulants. Je suis prêt à intégrer une équipe dynamique et à contribuer à la réussite de vos projets.',
    'about.certification': 'Certification',
    'about.certificationDesc': 'DWWM Niveau 5',
    'about.experience': 'Expérience',
    'about.experienceDesc': 'Projets variés',
    'about.available': 'Disponible',
    'about.availableDesc': 'Recherche active',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.subtitle': 'Ce que j\'apporte',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils',
    'skills.softSkills': 'Savoir-être',
    
    // Projects
    'projects.title': 'Projets',
    'projects.subtitle': 'Ce que j\'ai créé',
    'projects.websiteMultilang': 'Gestionnaire multilingue simple pour sites web statiques. Template réutilisable pour créer des sites multilingues facilement.',
    'projects.sassenach': 'Fansite sur la série Outlander, réalisé à 4 pour le projet P1 à la Wild Code School. Site vitrine avec design moderne et responsive.',
    'projects.portfolio': 'Ce site portfolio. Développé avec Next.js, TypeScript et Tailwind CSS. Design moderne avec animations fluides.',
    'projects.code': 'Code',
    'projects.demo': 'Démo',
    'projects.allProjects': 'Tous mes projets sont disponibles sur GitHub',
    'projects.viewAll': 'Voir tous mes projets',
    
    // Contact
    'contact.title': 'Me contacter',
    'contact.subtitle': 'On discute ?',
    'contact.description': 'Je suis toujours ouvert à discuter de nouveaux projets, opportunités de collaboration ou simplement échanger sur le développement web. N\'hésitez pas à me contacter !',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.locationValue': 'France',
    'contact.education': 'Formation',
    'contact.educationValue': 'Wild Code School',
    'contact.status': 'Statut',
    'contact.statusValue': 'Développeur Full-Stack',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.created': 'Créé avec',
    'footer.hosted': 'Hébergé sur',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Kevin Ressegaire',
    'hero.subtitle': 'Full-Stack Developer',
    'hero.description': 'Passionate about creating websites. Motivated, curious, always ready for new challenges.',
    'hero.cta': 'Discover my profile',
    
    // About
    'about.title': 'About',
    'about.subtitle': 'Who am I?',
    'about.p1': 'Web and Mobile Web Developer (DWWM) level 5, specialized in creating modern and performant web applications. Trained at Wild Code School, I master frontend and backend technologies to design complete and innovative solutions.',
    'about.p2': 'I develop web applications with',
    'about.p3': ',',
    'about.p4': ', Node.js, PostgreSQL and other modern technologies. My approach combines technical rigor, attention to detail, and code quality to deliver robust and maintainable products.',
    'about.p5': 'Passionate about web development, I am looking for opportunities to put my skills at the service of stimulating projects. I am ready to join a dynamic team and contribute to the success of your projects.',
    'about.certification': 'Certification',
    'about.certificationDesc': 'DWWM Level 5',
    'about.experience': 'Experience',
    'about.experienceDesc': 'Various projects',
    'about.available': 'Available',
    'about.availableDesc': 'Active search',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'What I bring',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.softSkills': 'Soft Skills',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'What I\'ve created',
    'projects.websiteMultilang': 'Simple multilingual manager for static websites. Reusable template to easily create multilingual sites.',
    'projects.sassenach': 'Fansite about the Outlander series, made by 4 people for the P1 project at Wild Code School. Showcase site with modern and responsive design.',
    'projects.portfolio': 'This portfolio site. Developed with Next.js, TypeScript and Tailwind CSS. Modern design with smooth animations.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.allProjects': 'All my projects are available on GitHub',
    'projects.viewAll': 'View all my projects',
    
    // Contact
    'contact.title': 'Contact me',
    'contact.subtitle': 'Let\'s talk?',
    'contact.description': 'I am always open to discussing new projects, collaboration opportunities or simply exchanging about web development. Feel free to contact me!',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.locationValue': 'France',
    'contact.education': 'Education',
    'contact.educationValue': 'Wild Code School',
    'contact.status': 'Status',
    'contact.statusValue': 'Full-Stack Developer',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.created': 'Created with',
    'footer.hosted': 'Hosted on',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  // Toujours retourner le Provider, même avant le montage
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

