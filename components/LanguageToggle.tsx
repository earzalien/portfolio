'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all flex items-center space-x-2 px-4"
      aria-label="Toggle language"
    >
      <Languages size={18} />
      <span className="font-medium text-sm">{language.toUpperCase()}</span>
    </button>
  )
}

