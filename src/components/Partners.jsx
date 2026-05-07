import { useTheme } from '../context/ThemeContext'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'

// Ain Shams University SVG seal as inline fallback
const AsuSealSVG = () => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <circle cx="60" cy="60" r="56" fill="#0d3320" stroke="#2d9e6b" strokeWidth="3"/>
    <circle cx="60" cy="60" r="46" fill="none" stroke="#52b788" strokeWidth="1.5"/>
    <text x="60" y="42" textAnchor="middle" fill="#b5e4cb" fontSize="8" fontFamily="Cairo,sans-serif" fontWeight="700">جامعة</text>
    <text x="60" y="56" textAnchor="middle" fill="#f0d9c8" fontSize="11" fontFamily="Cairo,sans-serif" fontWeight="800">عين شمس</text>
    <text x="60" y="70" textAnchor="middle" fill="#b5e4cb" fontSize="6.5" fontFamily="sans-serif">Ain Shams University</text>
    <text x="60" y="84" textAnchor="middle" fill="#7aaa82" fontSize="6" fontFamily="sans-serif">Est. 1950 · Cairo</text>
    <path d="M30 90 Q60 100 90 90" stroke="#52b788" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
)

const partners = [
  {
    name:      { ar: 'جامعة عين شمس', en: 'Ain Shams University' },
    role:      { ar: 'شريك أكاديمي', en: 'Academic Partner' },
    desc: {
<<<<<<< HEAD
      ar: 'إحدى أعرق الجامعات المصرية المتميزة في مجالات الزراعة والتكنولوجيا التطبيقية والبحث العلمي.',
      en: "One of Egypt's most prestigious universities, excelling in agriculture, applied technology, and scientific research.",
    },
    logo: 'https://upload.wikimedia.org/wikipedia/ar/8/87/AinShamsUniv.png',
    logoFallback: '🏛️',
    link: 'https://www.asu.edu.eg',
    type: 'university',
    tags: { ar: ['زراعة', 'بحث علمي', 'تكنولوجيا'], en: ['Agriculture', 'Research', 'Technology'] },
  },
  {
    name: { ar: 'كلية الزراعة – جامعة عين شمس', en: 'Faculty of Agriculture – ASU' },
    role: { ar: 'شريك أكاديمي', en: 'Academic Partner' },
    desc: {
      ar: 'صرح علمي رائد في تطوير العلوم الزراعية والبيئية، وتخريج كوادر متخصصة في الإنتاج النباتي والحيواني وتقنيات الغذاء.',
      en: 'A leading academic institution advancing agricultural and environmental sciences, producing specialists in crop production, animal science, and food technology.',
    },
    logo: 'https://agr.asu.edu.eg/images/logo.png',
    logoFallback: '🌾',
    link: 'https://agr.asu.edu.eg',
    type: 'faculty',
    tags: { ar: ['إنتاج نباتي', 'علوم بيئية', 'تقنيات غذاء'], en: ['Crop Science', 'Environment', 'Food Tech'] },
  },
  {
    name: { ar: 'قسم المجتمع الريفي وإرشاد زراعي', en: 'Dept. of Rural Community & Agricultural Extension' },
    role: { ar: 'شريك بحثي وإرشادي', en: 'Research & Extension Partner' },
    desc: {
      ar: 'يختص بدراسة المجتمعات الريفية وتنميتها، وتطوير برامج الإرشاد الزراعي للارتقاء بمستوى المزارعين والمجتمعات الزراعية.',
      en: 'Dedicated to studying and developing rural communities, and designing agricultural extension programs to empower farmers and agrarian societies.',
    },
    logo: 'https://agr.asu.edu.eg/images/logo.png',
    logoFallback: '🌱',
    link: 'https://agr.asu.edu.eg',
    type: 'department',
    tags: { ar: ['تنمية ريفية', 'إرشاد زراعي', 'مجتمع'], en: ['Rural Dev', 'Extension', 'Community'] },
  },
  {
    name: { ar: 'anxlz', en: 'anxlz' },
    role: { ar: 'مطور المنصة', en: 'Platform Developer' },
=======
      ar: 'إحدى أعرق الجامعات المصرية تأسست عام 1950، متميزة في الزراعة والتكنولوجيا التطبيقية والبحث العلمي.',
      en: "Founded in 1950, one of Egypt's most prestigious universities excelling in agriculture, applied technology, and research.",
    },
    // Two fallback URLs for the logo
    logoUrls: [
      'https://upload.wikimedia.org/wikipedia/ar/a/a4/%D8%B9%D9%8A%D9%86_%D8%B4%D9%85%D8%B3.png',
      'https://www.asu.edu.eg/sites/default/files/logo.png',
    ],
    UseFallbackSVG: AsuSealSVG,
    link:  'https://www.asu.edu.eg',
    type:  'university',
    tags:  { ar: ['زراعة', 'بحث علمي', 'تكنولوجيا'], en: ['Agriculture', 'Research', 'Technology'] },
    social: null,
  },
  {
    name:  { ar: 'anxlz', en: 'anxlz' },
    role:  { ar: 'مطور المنصة', en: 'Platform Developer' },
>>>>>>> 3301b20b9a28fa9388cc08e5fdbb70d7ac4c98a0
    desc: {
      ar: 'مطور واجهات أمامية متخصص في React وبناء تجارب رقمية حديثة وتطبيقات الويب التفاعلية.',
      en: 'Frontend developer specializing in React, building modern digital experiences and interactive web applications.',
    },
    logoUrls: ['https://github.com/anxlz.png'],
    UseFallbackSVG: null,
    link:  'https://github.com/anxlz',
    type:  'developer',
    tags:  { ar: ['React', 'تطوير ويب', 'UI/UX'], en: ['React', 'Web Dev', 'UI/UX'] },
    social: {
      github:   'https://github.com/anxlz',
    },
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
        {partners.map((p, i) => <PartnerCard key={i} partner={p} isArabic={isArabic} />)}
      </div>
    </SectionWrapper>
  )
}

function ImgWithFallback({ urls, alt, style, FallbackSVG, rounded }) {
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  const tryNext = () => {
    if (idx + 1 < urls.length) {
      setIdx(i => i + 1)
    } else {
      setFailed(true)
    }
  }

  if (failed || urls.length === 0) {
    return FallbackSVG
      ? <FallbackSVG />
      : <div style={{ ...style, background:'var(--bg-alt)', display:'flex', alignItems:'center',
                      justifyContent:'center', fontSize:'3rem', borderRadius: rounded ? '50%' : '8px' }}>👤</div>
  }

  return (
    <img
      src={urls[idx]}
      alt={alt}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={tryNext}
      style={{ ...style, objectFit:'contain', display:'block' }}
    />
  )
}

// need useState for ImgWithFallback
import { useState } from 'react'

function PartnerCard({ partner, isArabic }) {
  const name  = isArabic ? partner.name.ar  : partner.name.en
  const role  = isArabic ? partner.role.ar  : partner.role.en
  const desc  = isArabic ? partner.desc.ar  : partner.desc.en
  const tags  = isArabic ? partner.tags.ar  : partner.tags.en
  const isUni = partner.type === 'university'
  const isDev = partner.type === 'developer'
  const isLarge = isUni || partner.type === 'faculty'

  return (
<<<<<<< HEAD
    
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-base group flex flex-col items-center text-center gap-5 hover:border-primary-400 dark:hover:border-primary-600 no-underline"
    >
      {/* Logo / Avatar */}
      <div className={`relative flex-shrink-0 ${isLarge ? 'w-28 h-28' : 'w-24 h-24'}`}>
        <img
          src={partner.logo}
          alt={name}
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
          className={`w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 ${
            isDev ? 'rounded-full ring-4 ring-primary-200 dark:ring-primary-800' : ''
          }`}
        />
        {/* Fallback emoji */}
        <div className="w-full h-full hidden items-center justify-center text-5xl rounded-full bg-primary-50 dark:bg-primary-900">
          {partner.logoFallback}
        </div>

        {/* Dev badge only */}
        {isDev && (
          <span className="absolute -bottom-1 -end-1 w-7 h-7 flex items-center justify-center rounded-full
                           bg-gray-900 text-white text-xs shadow-md border-2 border-white dark:border-gray-800">
            GH
          </span>
        )}
=======
    <div className="card-base" style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'20px' }}>
      {/* Logo / Avatar */}
      <div style={{
        width: isUni ? '110px' : '96px',
        height: isUni ? '110px' : '96px',
        borderRadius: isUni ? '12px' : '50%',
        overflow:'hidden', flexShrink:0,
        border: isUni ? '2px solid var(--border)' : '3px solid var(--green-3)',
        padding: isUni ? '8px' : '0',
        background: isUni ? 'white' : 'transparent',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <ImgWithFallback
          urls={partner.logoUrls}
          alt={name}
          style={{ width:'100%', height:'100%' }}
          FallbackSVG={partner.UseFallbackSVG}
          rounded={!isUni}
        />
>>>>>>> 3301b20b9a28fa9388cc08e5fdbb70d7ac4c98a0
      </div>

      {/* Info */}
      <div style={{ flex:1, width:'100%' }}>
        <h3 style={{ fontSize:'1.2rem', fontWeight:800, color:'var(--text)', marginBottom:'4px' }}>{name}</h3>
        <p style={{ fontSize:'0.82rem', fontWeight:600, color:'var(--green-1)', marginBottom:'12px' }}>{role}</p>
        <p style={{ fontSize:'0.875rem', color:'var(--text-muted)', lineHeight:1.7, marginBottom:'14px' }}>{desc}</p>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', justifyContent:'center', marginBottom:'14px' }}>
          {tags.map((tag, j) => (
            <span key={j} className="tag" style={{ fontSize:'0.75rem' }}>{tag}</span>
          ))}
        </div>

        {/* Social links for anxlz */}
        {partner.social && (
          <div style={{ display:'flex', gap:'8px', justifyContent:'center' }}>
            {partner.social.github && (
              <a href={partner.social.github} target="_blank" rel="noopener noreferrer"
                style={socialBtnStyle} title="GitHub"
                onMouseEnter={e => e.currentTarget.style.background='var(--green-1)'}
                onMouseLeave={e => e.currentTarget.style.background='var(--bg-alt)'}
              >
                <GithubIcon />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Visit link */}
      <a
        href={partner.link}
        target="_blank" rel="noopener noreferrer"
        style={{ fontSize:'0.8rem', color:'var(--green-1)', textDecoration:'none',
                 display:'flex', alignItems:'center', gap:'4px', fontWeight:600 }}
      >
        {isArabic ? 'زيارة الصفحة' : 'Visit page'}
        <span style={{ display:'inline-block', transform: isArabic ? 'rotate(180deg)' : 'none' }}>→</span>
      </a>
    </div>
  )
<<<<<<< HEAD
}
=======
}

const socialBtnStyle = {
  width:'36px', height:'36px', borderRadius:'50%',
  background:'var(--bg-alt)', border:'1px solid var(--border)',
  display:'flex', alignItems:'center', justifyContent:'center',
  color:'var(--text)', cursor:'pointer', transition:'background 0.2s, color 0.2s',
  textDecoration:'none',
}

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)
>>>>>>> 3301b20b9a28fa9388cc08e5fdbb70d7ac4c98a0
