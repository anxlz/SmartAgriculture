import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Technologies() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.technologies : content.en.technologies
  const gridRef = useReveal()

  return (
    <SectionWrapper id="technologies" alt>
      <SectionHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <div
        ref={gridRef}
        className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {t.items.map((item, i) => (
          <div key={i} className="card-base group overflow-hidden relative">
            {/* Gradient top bar */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:h-1.5`} />

            <div className="flex items-start gap-4 mb-4">
              <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 shadow-sm flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-primary-800 dark:text-primary-200 text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {item.features.map((f, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium
                             bg-primary-50 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300
                             border border-primary-100 dark:border-primary-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
