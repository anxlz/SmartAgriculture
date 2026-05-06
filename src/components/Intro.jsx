import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Intro() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.intro : content.en.intro
  const cardsRef = useReveal()

  return (
    <SectionWrapper id="intro">
      <SectionHeader tag={t.tag} title={t.title} />

      {/* Main body */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {t.body}
        </p>
      </div>

      {/* Why section */}
      <h3 className="text-2xl font-bold text-center text-primary-800 dark:text-primary-200 mb-10">
        {t.why}
      </h3>

      <div
        ref={cardsRef}
        className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {t.reasons.map((r, i) => (
          <div key={i} className="card-base text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {r.icon}
            </div>
            <h4 className="font-bold text-primary-800 dark:text-primary-200 mb-2 text-lg">
              {r.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
