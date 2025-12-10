'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            👋 {t('about.title')}
          </h2>
          <div className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold">{t('about.subtitle')}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('about.p2')} <strong>React</strong>{t('about.p3')} <strong>JavaScript</strong>{t('about.p4')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('about.p5')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.certification')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t('about.certificationDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">💼</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.experience')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t('about.experienceDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.available')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t('about.availableDesc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
