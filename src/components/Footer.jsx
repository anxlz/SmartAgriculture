import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'

// Inline SVG icons — no emoji
const Icons = {
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Globe: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
}

const ASU = {
  ar: {
    name: 'جامعة عين شمس',
    address: 'الخليفة المأمون، عباسية، القاهرة 11566، مصر',
    phone: '+20 2 2482 2580',
    email: 'info@asu.edu.eg',
    website: 'www.asu.edu.eg',
    map: 'https://maps.google.com/?q=Ain+Shams+University+Cairo',
  },
  en: {
    name: 'Ain Shams University',
    address: 'Al-Khalifa Al-Maamoun, Abbasiya, Cairo 11566, Egypt',
    phone: '+20 2 2482 2580',
    email: 'info@asu.edu.eg',
    website: 'www.asu.edu.eg',
    map: 'https://maps.google.com/?q=Ain+Shams+University+Cairo',
  },
}

// anxlz social links with real SVG icons
const ANXLZ_SOCIALS = [
  { Icon: Icons.Github,   label: 'GitHub',   href: 'https://github.com/anxlz' },
  { Icon: Icons.Twitter,  label: 'Twitter',  href: 'https://twitter.com/anxlz' },
  { Icon: Icons.Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/anxlz' },
]

const QUICK = {
  ar: [
    { label: 'المقدمة',    href: '#intro' },
    { label: 'التقنيات',   href: '#technologies' },
    { label: 'الفوائد',    href: '#benefits' },
    { label: 'التحديات',   href: '#challenges' },
    { label: 'التطبيقات',  href: '#applications' },
    { label: 'الإحصاءات',  href: '#statistics' },
  ],
  en: [
    { label: 'Introduction', href: '#intro' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Benefits',     href: '#benefits' },
    { label: 'Challenges',   href: '#challenges' },
    { label: 'Applications', href: '#applications' },
    { label: 'Statistics',   href: '#statistics' },
  ],
}

const S = {
  col: { display:'flex', flexDirection:'column', gap:'0' },
  h:   { fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.1em',
         textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'18px' },
  link: { display:'flex', alignItems:'center', gap:'8px', padding:'5px 0',
          color:'rgba(255,255,255,.55)', textDecoration:'none', fontSize:'0.85rem',
          transition:'color 0.15s' },
}

export default function Footer() {
  const { isArabic } = useTheme()
  const t       = isArabic ? content.ar.footer : content.en.footer
  const contact = isArabic ? ASU.ar : ASU.en
  const links   = isArabic ? QUICK.ar : QUICK.en

  const hover = e => { e.currentTarget.style.color = '#52b788' }
  const leave = e => { e.currentTarget.style.color = 'rgba(255,255,255,.55)' }

  return (
    <footer style={{ background:'#0a1d10', color:'rgba(255,255,255,.7)', paddingTop:'64px', paddingBottom:'32px' }}>
      <div className="section-container">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:'48px', marginBottom:'48px' }}>

          {/* Col 1 — Brand + anxlz socials */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
              <span style={{ fontSize:'1.6rem' }}>🌾</span>
              <div>
                <p style={{ fontWeight:800, color:'white', fontSize:'1rem', margin:0 }}>{t.brand}</p>
                <p style={{ fontSize:'0.72rem', color:'rgba(255,255,255,.35)', margin:0 }}>
                  {isArabic ? 'بواسطة anxlz' : 'by anxlz'}
                </p>
              </div>
            </div>
            <p style={{ fontSize:'0.84rem', color:'rgba(255,255,255,.45)', lineHeight:1.8, marginBottom:'20px' }}>{t.desc}</p>

            {/* anxlz social icon links */}
            <div style={{ display:'flex', gap:'8px' }}>
              {ANXLZ_SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width:'36px', height:'36px', borderRadius:'50%',
                    background:'rgba(255,255,255,.08)',
                    border:'1px solid rgba(255,255,255,.12)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'rgba(255,255,255,.6)', textDecoration:'none',
                    transition:'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='#2d9e6b'; e.currentTarget.style.color='white' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.08)'; e.currentTarget.style.color='rgba(255,255,255,.6)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div style={S.col}>
            <p style={S.h}>{isArabic ? 'روابط سريعة' : 'Quick Links'}</p>
            {links.map((l, i) => (
              <a key={i} href={l.href} style={S.link} onMouseEnter={hover} onMouseLeave={leave}>
                <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#2d9e6b', flexShrink:0 }} />
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 3 — Ain Shams contact */}
          <div style={S.col}>
            <p style={S.h}>{isArabic ? 'تواصل معنا' : 'Contact'}</p>
            <p style={{ fontSize:'0.78rem', fontWeight:600, color:'rgba(255,255,255,.35)', marginBottom:'12px' }}>
              {contact.name}
            </p>

            {[
              { Icon: Icons.MapPin, text: contact.address, href: contact.map },
              { Icon: Icons.Phone,  text: contact.phone,   href: `tel:${contact.phone}`, dir:'ltr' },
              { Icon: Icons.Mail,   text: contact.email,   href: `mailto:${contact.email}` },
              { Icon: Icons.Globe,  text: contact.website, href: `https://${contact.website}` },
            ].map(({ Icon, text, href, dir }, i) => (
              <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ ...S.link, alignItems:'flex-start' }} onMouseEnter={hover} onMouseLeave={leave}
              >
                <span style={{ marginTop:'2px', flexShrink:0, opacity:0.7 }}><Icon /></span>
                <span dir={dir}>{text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:'24px',
          display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'12px',
          fontSize:'0.75rem', color:'rgba(255,255,255,.25)',
        }}>
          <span>{t.copy}</span>
          <span>React · Vite · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
