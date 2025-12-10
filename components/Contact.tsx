'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            {t('contact.subtitle')}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 text-center leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.email')}</p>
                  <a
                    href="mailto:contact@kevin-ressegaire.fr"
                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    contact@kevin-ressegaire.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.location')}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.education')}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.educationValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.status')}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.statusValue')}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/earzalien"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-ressegaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@kevin-ressegaire.fr"
                className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
