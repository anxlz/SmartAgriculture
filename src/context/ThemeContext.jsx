import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [isArabic, setIsArabic] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    if (isArabic) {
      html.setAttribute('lang', 'ar')
      html.setAttribute('dir', 'rtl')
      body.classList.remove('ltr')
    } else {
      html.setAttribute('lang', 'en')
      html.setAttribute('dir', 'ltr')
      body.classList.add('ltr')
    }
  }, [isArabic])

  const toggleDark = () => setIsDark(p => !p)
  const toggleLang = () => setIsArabic(p => !p)

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, isArabic, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
