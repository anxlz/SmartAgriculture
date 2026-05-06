import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Applications() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.applications : content.en.applications
  const gridRef = useReveal()

  return (
    <SectionWrapper id="applications">
      <SectionHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <div
        ref={gridRef}
        className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {t.items.map((item, i) => (
          <div key={i} className="card-base group flex flex-col gap-3 hover:border-primary-300 dark:hover:border-primary-700">
            {/* Header with emoji & location */}
            <div className="flex items-center gap-3">
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/60 px-2.5 py-1 rounded-full">
                📍 {item.location}
              </span>
            </div>

            <h3 className="font-bold text-primary-800 dark:text-primary-200 text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              {item.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 text-xs rounded-md bg-earth-100 dark:bg-earth-900/40 text-earth-700 dark:text-earth-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
