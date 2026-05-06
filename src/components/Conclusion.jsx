import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'

export default function Conclusion() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.conclusion : content.en.conclusion
  const listRef = useReveal()

  return (
    <SectionWrapper id="conclusion" alt>
      <SectionHeader tag={t.tag} title={t.title} />

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-12">
          {t.body}
        </p>

        {/* Points */}
        <div
          ref={listRef}
          className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {t.points.map((pt, i) => (
            <div
              key={i}
              className="card-base flex items-start gap-3 group"
            >
              <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full
                               bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-bold text-sm mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative text-center px-8 py-8 rounded-2xl
                               bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
          <div className="absolute top-4 start-6 text-6xl text-white/20 font-serif leading-none select-none">❝</div>
          <p className="relative text-xl sm:text-2xl font-bold leading-relaxed z-10">
            {t.quote}
          </p>
          <div className="absolute bottom-4 end-6 text-6xl text-white/20 font-serif leading-none select-none rotate-180">❝</div>
        </blockquote>
      </div>
    </SectionWrapper>
  )
}
