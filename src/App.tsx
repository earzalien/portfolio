import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import {
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Github as GithubIcon,
} from 'lucide-react'
import {
  SiReact,
  SiVite,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiGit,
  SiGithub,
  SiJavascript,
  SiPhp,
  SiFigma,
  SiJest,
  SiNpm,
  SiEslint,
  SiStorybook,
} from 'react-icons/si'
import { FaSchool } from 'react-icons/fa'

type ProjectId = 'cinemood' | 'mini'

type Lang = 'FR' | 'EN' | 'ES'

type Project = {
  id: ProjectId
  preview: string
  tech: string[]
  link: string
  github: string
}

const copy = {
  heroKicker: {
    FR: 'Développeur Fullstack ',
    EN: 'Fullstack Developer',
    ES: 'Desarrollador Fullstack',
  },
heroSubtitlePrefix: {
  FR: 'De l\'hôtellerie 4★ au développement, mon standard reste le même : l\'exigence à chaque ligne de code.',
  EN: 'From 4★ hospitality to development, my standard remains the same: high expectations for every line of code.',
  ES: 'De la hostelería 4★ al desarrollo, mi estándar sigue siendo el mismo: exigencia en cada línea de código.',
},

  heroSubtitleCta: {
    FR: 'Prêt à rejoindre votre équipe en Avril 2026',
    EN: 'Ready to join your team in April 2026',
    ES: 'Listo para unirse a su equipo en abril de 2026',
  },
  cvLabel: {
    FR: 'Voir CV',
    EN: 'View CV',
    ES: 'Ver CV',
  },
  cvHref: {
    FR: '/cv.pdf',
    EN: '/cv-en.pdf',
    ES: '/cv-es.pdf',
  },
  gallerySub: {
    FR: 'Photographie personnelle',
    EN: 'Personal photography',
    ES: 'Fotografía personal',
  },
  projectsTitle: {
    FR: 'Mes Projets',
    EN: 'My Projects',
    ES: 'Mis Proyectos',
  },
  projectsSubtitle: {
    FR: 'Des applications fullstack construites avec les dernières technologies web',
    EN: 'Fullstack applications built with the latest web technologies',
    ES: 'Aplicaciones fullstack construidas con las últimas tecnologías web',
  },
  demoLabel: {
    FR: 'Démo',
    EN: 'Demo',
    ES: 'Demo',
  },
  codeLabel: {
    FR: 'Code',
    EN: 'Code',
    ES: 'Código',
  },
  footerMain: {
    FR: 'Créé en React + Vite',
    EN: 'Built using React + Vite',
    ES: 'Creado con React + Vite',
  },
  footerSub: {
    FR: '© 2025 Kévin Ressegaire | Développeur Fullstack',
    EN: '© 2025 Kévin Ressegaire | Fullstack Developer',
    ES: '© 2025 Kévin Ressegaire | Desarrollador Fullstack',
  },
  projectsData: {
    titles: {
      cinemood: {
        FR: 'Cinemood',
        EN: 'Cinemood',
        ES: 'Cinemood',
      },
      mini: {
        FR: 'Mini-projet Fullstack',
        EN: 'Mini Fullstack Project',
        ES: 'Mini proyecto Fullstack',
      },
    } satisfies Record<ProjectId, Record<Lang, string>>,
    descriptions: {
      cinemood: {
        FR: 'App de recommandations films React/TS + Express',
        EN: 'Movie recommendation app with React/TS + Express',
        ES: 'Aplicación de recomendación de películas con React/TS + Express',
      },
      mini: {
        FR: 'API REST + Frontend Vite avec authentification',
        EN: 'REST API + Vite frontend with authentication',
        ES: 'API REST + frontend Vite con autenticación',
      },
    } satisfies Record<ProjectId, Record<Lang, string>>,
  },
} as const

const stack = [
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Vite', Icon: SiVite },

  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express', Icon: SiExpress },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PHP', Icon: SiPhp },

  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Vercel', Icon: SiVercel },

  { name: 'Figma', Icon: SiFigma },
  { name: 'Jest', Icon: SiJest },
  { name: 'ESLint', Icon: SiEslint },
  { name: 'npm', Icon: SiNpm },
  { name: 'Storybook', Icon: SiStorybook },

  { name: 'Wild Code School', Icon: FaSchool },

  { name: 'Biome', Icon: SiEslint },
  { name: 'Husky', Icon: SiNpm },
]

const projects: Project[] = [
  {
    id: 'cinemood',
    preview: '/previews/cinemood.png',
    tech: ['React', 'TypeScript', 'Vercel'],
    link: 'https://cinemood-ebon.vercel.app',
    github: 'https://github.com/earzalien/cinemood',
  },
  {
    id: 'mini',
    preview: '/previews/mini-fullstack.jpg',
    tech: ['Vite', 'Node.js', 'TypeScript'],
    link: '#',
    github: 'https://github.com/tonusername/mini-projet',
  },
]




function App() {
  const [lang, setLang] = useState<'FR' | 'EN' | 'ES'>('FR')

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-flex">
          <div className="pill-container">
            <div
              className="toggle-thumb"
              style={{
                left: '4px',
                width: 'calc(33.33% - 4px)',
                transform:
                  lang === 'FR'
                    ? 'translateX(0%)'
                    : lang === 'EN'
                    ? 'translateX(100%)'
                    : 'translateX(200%)',
              }}
            />
            <button
              onClick={() => setLang('FR')}
              className={`btn-lang ${lang === 'FR' ? 'btn-lang--active' : ''}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`btn-lang ${lang === 'EN' ? 'btn-lang--active' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ES')}
              className={`btn-lang ${lang === 'ES' ? 'btn-lang--active' : ''}`}
            >
              ES
            </button>
          </div>

          <a
            href={copy.cvHref[lang]}
            download={copy.cvHref[lang].replace('/', '')}
            className="cv-link"
          >
            <div className="cv-link-glow" />
            <div className="cv-link-btn">
              <Download className="icon-download" />
              {copy.cvLabel[lang]}
            </div>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-kicker">{copy.heroKicker[lang]}</p>

            <h1 className="hero-title">
              KEVIN RESSEGAIRE<span className="hero-title-dot">.</span>
            </h1>

            <p className="hero-subtitle">
              {copy.heroSubtitlePrefix[lang]}
              <br className="hero-subtitle-br" />
              <span className="hero-subtitle-cta">
                {copy.heroSubtitleCta[lang]}
              </span>
            </p>

            <div className="hero-badges">
              <a
                href="mailto:kevin.ressegaire@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail className="social-icon" />
              </a>

              <a
                href="www.linkedin.com/in/kevin-ressegaire"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="social-icon" />
              </a>

              <a
                href="https://github.com/earzalien"
                className="social-link"
                aria-label="GitHub"
              >
                <Github className="social-icon" />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-glow" />
              <div className="hero-card-inner" />
              <img
                src="/gemini.png"
                alt="Kevin Ressegaire"
                className="hero-photo"
              />
              <div className="hero-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Stack Marquee */}
      <section className="stack-section">
        <div className="stack-section-inner">
          <div className="stack-track">
            <div className="stack-badges-row">
              {stack.map(({ name, Icon }) => (
                <div key={`row1-${name}`} className="stack-pill">
                  {Icon && (
                    <Icon className="stack-pill-logo" aria-label={name} />
                  )}
                  <span className="stack-pill-text">{name}</span>
                </div>
              ))}
            </div>
            <div className="stack-badges-row">
              {stack.map(({ name, Icon }) => (
                <div key={`row2-${name}`} className="stack-pill">
                  {Icon && (
                    <Icon className="stack-pill-logo" aria-label={name} />
                  )}
                  <span className="stack-pill-text">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">{copy.projectsTitle[lang]}</h2>
            <p className="projects-subtitle">
              {copy.projectsSubtitle[lang]}
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
<div
  key={project.id}
  className="project-card project-card--with-bg"
  style={{
    backgroundImage: `url(${project.preview})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="project-card-bg-overlay" />
  <div className="project-card-inner">
    <h3 className="project-title">
      {copy.projectsData.titles[project.id][lang]}
    </h3>

    <p className="project-description">
      {copy.projectsData.descriptions[project.id][lang]}
    </p>

    <div className="project-tech-list">
      {project.tech.map((t) => (
        <span key={t} className="project-tech-pill">
          {t}
        </span>
      ))}
    </div>

    <div className="project-actions">
      {project.link && (
        <a href={project.link} className="project-btn-demo">
          <ExternalLink className="project-btn-icon" />
          {copy.demoLabel[lang]}
        </a>
      )}
      <a href={project.github} className="project-btn-code">
        <GithubIcon className="project-btn-icon" />
        {copy.codeLabel[lang]}
      </a>
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="site-footer-text-main">
            {copy.footerMain[lang]}
          </p>
          <p className="site-footer-text-sub">
            {copy.footerSub[lang]}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
