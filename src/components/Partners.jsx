import { useTheme } from '../context/ThemeContext'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'

const partners = [
  {
    name: { ar: 'جامعة عين شمس', en: 'Ain Shams University' },
    role: { ar: 'شريك أكاديمي', en: 'Academic Partner' },
    desc: {
      ar: 'إحدى أعرق الجامعات المصرية المتميزة في مجالات الزراعة والتكنولوجيا التطبيقية والبحث العلمي.',
      en: 'One of Egypt\'s most prestigious universities, excelling in agriculture, applied technology, and scientific research.',
    },
    // Official Ain Shams University logo from Wikipedia Commons
    logo: 'https://upload.wikimedia.org/wikipedia/ar/8/87/AinShamsUniv.png',
    logoFallback: '🏛️',
    link: 'https://www.asu.edu.eg',
    type: 'university',
    tags: { ar: ['زراعة', 'بحث علمي', 'تكنولوجيا'], en: ['Agriculture', 'Research', 'Technology'] },
  },
  {
    name: { ar: 'anxlz', en: 'anxlz' },
    role: { ar: 'مطور المنصة', en: 'Platform Developer' },
    desc: {
      ar: 'مطور واجهات أمامية متخصص في بناء تجارب رقمية حديثة وتطبيقات الويب التفاعلية.',
      en: 'Frontend developer specializing in building modern digital experiences and interactive web applications.',
    },
    logo: 'https://github.com/anxlz.png',
    logoFallback: '👨‍💻',
    link: 'https://github.com/anxlz',
    type: 'developer',
    tags: { ar: ['React', 'تطوير ويب', 'UI/UX'], en: ['React', 'Web Dev', 'UI/UX'] },
  },
]

export default function Partners() {
  const { isArabic } = useTheme()
  const cardsRef = useReveal()

  return (
    <SectionWrapper id="partners">
      <SectionHeader
        tag={isArabic ? 'الشركاء' : 'Partners'}
        title={isArabic ? 'تعرف على الشركاء' : 'Meet the Partners'}
        subtitle={
          isArabic
            ? 'التعاون الأكاديمي والتقني خلف هذه المنصة'
            : 'The academic and technical collaboration behind this platform'
        }
      />

      <div
        ref={cardsRef}
        className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {partners.map((p, i) => (
          <PartnerCard key={i} partner={p} isArabic={isArabic} />
        ))}
      </div>
    </SectionWrapper>
  )
}

function PartnerCard({ partner, isArabic }) {
  const name = isArabic ? partner.name.ar : partner.name.en
  const role = isArabic ? partner.role.ar : partner.role.en
  const desc = isArabic ? partner.desc.ar : partner.desc.en
  const tags = isArabic ? partner.tags.ar : partner.tags.en
  const isUni = partner.type === 'university'

  return (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-base group flex flex-col items-center text-center gap-5 hover:border-primary-400 dark:hover:border-primary-600 no-underline"
    >
      {/* Logo / Avatar */}
      <div className={`relative flex-shrink-0 ${isUni ? 'w-28 h-28' : 'w-24 h-24'}`}>
        <img
          src={partner.logo}
          alt={name}
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
          className={`w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 ${
            isUni ? '' : 'rounded-full ring-4 ring-primary-200 dark:ring-primary-800'
          }`}
        />
        {/* Fallback emoji */}
        <div
          className="w-full h-full hidden items-center justify-center text-5xl rounded-full bg-primary-50 dark:bg-primary-900"
        >
          {partner.logoFallback}
        </div>

        {/* Dev badge */}
        {!isUni && (
          <span className="absolute -bottom-1 -end-1 w-7 h-7 flex items-center justify-center rounded-full
                           bg-gray-900 text-white text-xs shadow-md border-2 border-white dark:border-gray-800">
            GH
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-1">{name}</h3>
        <p className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-3">{role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, j) => (
            <span
              key={j}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/60
                         text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Link indicator */}
      <span className="text-xs text-primary-500 dark:text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all">
        {isArabic ? 'زيارة الصفحة' : 'Visit page'}
        <span className={isArabic ? 'rotate-180' : ''}>→</span>
      </span>
    </a>
  )
}
