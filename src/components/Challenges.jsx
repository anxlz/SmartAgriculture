import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const severityConfig = {
  high:   { label: { ar: 'عالي', en: 'High' },   color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',   dot: 'bg-red-500' },
  medium: { label: { ar: 'متوسط', en: 'Medium' }, color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', dot: 'bg-amber-500' },
  low:    { label: { ar: 'منخفض', en: 'Low' },   color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',  dot: 'bg-blue-500' },
}

export default function Challenges() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.challenges : content.en.challenges
  const gridRef = useReveal()

  return (
    <SectionWrapper id="challenges" alt>
      <SectionHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <div
        ref={gridRef}
        className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {t.items.map((item, i) => {
          const sev = severityConfig[item.severity]
          return (
            <div key={i} className="card-base group flex gap-4">
              <div className="text-3xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-bold text-primary-800 dark:text-primary-200 text-base">
                    {item.title}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${sev.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${sev.dot}`} />
                    {isArabic ? sev.label.ar : sev.label.en}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
