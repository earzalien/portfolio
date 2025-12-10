'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    titleKey: 'projects.websiteMultilang',
    descriptionKey: 'projects.websiteMultilang',
    technologies: ['JavaScript'],
    github: 'https://github.com/earzalien/website-multilanguage',
    demo: null,
    image: null,
  },
  {
    titleKey: 'projects.sassenach',
    descriptionKey: 'projects.sassenach',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/earzalien/sassenach',
    demo: null,
    image: null,
  },
  {
    titleKey: 'projects.portfolio',
    descriptionKey: 'projects.portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/earzalien',
    demo: null,
    image: null,
  },
]

export default function Projects() {
  const { t } = useLanguage()

  const projectTitles = {
    'projects.websiteMultilang': 'Website Multilanguage',
    'projects.sassenach': 'Sassenach',
    'projects.portfolio': 'Portfolio',
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            {t('projects.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {projectTitles[project.titleKey as keyof typeof projectTitles]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {t(project.descriptionKey)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={20} />
                        <span className="text-sm font-medium">{t('projects.code')}</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm font-medium">{t('projects.demo')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('projects.allProjects')}
            </p>
            <a
              href="https://github.com/earzalien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('projects.viewAll')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
