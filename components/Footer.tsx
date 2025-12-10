'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Kevin Ressegaire. {t('footer.rights')}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>{t('footer.created')}</span>
            <span className="text-primary-400 font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-primary-400 font-semibold">Tailwind</span>
            <span>|</span>
            <span>{t('footer.hosted')}</span>
            <span className="text-primary-400 font-semibold">Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
