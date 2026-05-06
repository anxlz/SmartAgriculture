import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Benefits() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.benefits : content.en.benefits
  const gridRef = useReveal()

  return (
    <SectionWrapper id="benefits">
      <SectionHeader tag={t.tag} title={t.title} subtitle={t.subtitle} />

      <div
        ref={gridRef}
        className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {t.items.map((item, i) => (
          <div key={i} className="card-base group flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-2xl font-black text-primary-600 dark:text-primary-400 font-mono">
                {item.value}
              </span>
            </div>
            <h3 className="font-bold text-primary-800 dark:text-primary-200 text-lg">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              {item.desc}
            </p>
            {/* Decorative bottom bar */}
            <div className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-primary-400 to-earth-300 
                            scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
