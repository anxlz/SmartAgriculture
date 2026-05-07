import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useCounter } from '../hooks/useCounter'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

function StatCard({ item, isArabic }) {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const count = useCounter(item.isFloat ? item.value * 10 : item.value, 2000, started)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const displayValue = item.isFloat
    ? (count / 10).toFixed(1)
    : count.toLocaleString(isArabic ? 'ar-EG' : 'en-US')

  return (
    <div
      ref={ref}
      className="card-base group text-center hover:border-primary-400 dark:hover:border-primary-600"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
      <div className="text-3xl sm:text-4xl font-black text-primary-600 dark:text-primary-400 font-mono mb-1 tabular-nums">
        {displayValue}
        <span className="text-lg font-bold text-earth-500 dark:text-earth-400 me-1">{item.suffix}</span>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
    </div>
  )
}

export default function Statistics() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.statistics : content.en.statistics

  return (
    <SectionWrapper id="statistics" alt>
      <SectionHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {t.items.map((item, i) => (
          <StatCard key={i} item={item} isArabic={isArabic} />
        ))}
      </div>
    </SectionWrapper>
  )
}
