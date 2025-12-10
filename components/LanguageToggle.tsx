'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const languages = [
  { code: 'fr' as const, flag: '🇫🇷', name: 'Français' },
  { code: 'en' as const, flag: '🇬🇧', name: 'English' },
  { code: 'es' as const, flag: '🇪🇸', name: 'Español' },
]

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageSelect = (langCode: typeof language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all flex items-center space-x-2 px-4"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium text-sm">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors ${
                language === lang.code 
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-primary-600 dark:text-primary-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

