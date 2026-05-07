import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'
import heroVideo from '../assets/hero-video.mp4'
export default function Hero() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.hero : content.en.hero
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          /* Soft green + cream gradient — the "1st prompt" palette */
          background: 'linear-gradient(145deg, #0d3320 0%, #155c36 35%, #1e8057 65%, #2d9e6b 100%)',
        }}
      >
        {/* Soft geometric texture */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(82,183,136,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(208,149,106,.12) 0%, transparent 45%)',
          pointerEvents:'none',
        }} />
        {/* Dot grid */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none', opacity:0.07,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        {/* Bottom fade to page bg */}
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:'160px',
          background:'linear-gradient(to top, var(--bg), transparent)',
          pointerEvents:'none',
        }} />

        <div className="section-container" style={{ textAlign:'center', paddingTop:'140px', paddingBottom:'100px', position:'relative', zIndex:1 }}>
          {/* Tag pill */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'6px 18px', borderRadius:'999px',
            background:'rgba(255,255,255,.12)', backdropFilter:'blur(8px)',
            border:'1px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.85)',
            fontSize:'0.82rem', fontWeight:600, marginBottom:'24px', letterSpacing:'0.04em',
          }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#52b788',
                           boxShadow:'0 0 6px #52b788', animation:'pulse 2s infinite' }} />
            {t.tag}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            {isArabic ? (
              <>
                <span style={{ display:'block' }}>الزراعة الذكية</span>
                <span style={{
                  display:'block',
                  background:'linear-gradient(90deg, #b5e4cb, #f0d9c8)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                }}>في مصر</span>
              </>
            ) : (
              <>
                <span style={{ display:'block' }}>Smart Agriculture</span>
                <span style={{
                  display:'block',
                  background:'linear-gradient(90deg, #b5e4cb, #f0d9c8)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                }}>in Egypt</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p style={{
            maxWidth:'600px', margin:'0 auto 40px',
            color:'rgba(255,255,255,.72)',
            fontSize:'1.1rem', lineHeight:1.75,
          }}>
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'14px', justifyContent:'center' }}>
            <a href="#intro" className="btn-primary" style={{ fontSize:'1rem' }}>
              {t.cta}
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              style={{
                display:'flex', alignItems:'center', gap:'12px',
                padding:'14px 28px', borderRadius:'999px',
                border:'2px solid rgba(255,255,255,.3)',
                background:'rgba(255,255,255,.08)', backdropFilter:'blur(6px)',
                color:'white', fontWeight:600, fontSize:'1rem', cursor:'pointer',
                transition:'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,.16)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,.08)'}
            >
              <span style={{
                width:'38px', height:'38px', borderRadius:'50%',
                background:'rgba(255,255,255,.2)', display:'flex',
                alignItems:'center', justifyContent:'center', fontSize:'1rem',
              }}>▶</span>
              {isArabic ? 'شاهد الفيديو' : 'Watch Video'}
            </button>
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop:'72px', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', color:'rgba(255,255,255,.35)' }}>
            <span style={{ fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
              {isArabic ? 'انتقل للأسفل' : 'Scroll'}
            </span>
            <div style={{
              width:'1px', height:'48px',
              background:'linear-gradient(to bottom, rgba(255,255,255,.4), transparent)',
              animation:'bounce 1.8s infinite',
            }} />
          </div>
        </div>

        {/* Floating botanicals */}
        {[
          { emoji:'🌿', top:'18%', left:'5%',  size:'2.2rem', delay:'0s',   dur:'3.2s' },
          { emoji:'🌾', top:'30%', right:'6%', size:'2rem',   delay:'1.1s', dur:'4s'   },
          { emoji:'💧', bottom:'28%', left:'8%', size:'1.8rem', delay:'0.5s', dur:'3.6s' },
          { emoji:'🛰️', bottom:'20%', right:'5%', size:'2rem',  delay:'1.8s', dur:'2.8s' },
        ].map((f, i) => (
          <span key={i} style={{
            position:'absolute', fontSize:f.size, opacity:0.18,
            top:f.top, bottom:f.bottom, left:f.left, right:f.right,
            animation:`bounce ${f.dur} ${f.delay} infinite`,
            pointerEvents:'none',
          }}>{f.emoji}</span>
        ))}

        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position:'fixed', inset:0, zIndex:999,
            background:'rgba(0,0,0,.82)', backdropFilter:'blur(6px)',
            display:'flex', alignItems:'center', justifyContent:'center', padding:'16px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position:'relative', width:'100%', maxWidth:'900px',
              borderRadius:'20px', overflow:'hidden', boxShadow:'0 32px 80px rgba(0,0,0,.6)',
            }}
          >
            <button
              onClick={() => setVideoOpen(false)}
              style={{
                position:'absolute', top:'12px', right:'12px', zIndex:10,
                width:'34px', height:'34px', borderRadius:'50%',
                background:'rgba(0,0,0,.6)', border:'none', color:'white',
                fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
              }}
            >✕</button>
            <video src={heroVideo} controls autoPlay style={{ width:'100%', aspectRatio:'16/9', background:'#000', display:'block' }}>
              {isArabic ? 'متصفحك لا يدعم الفيديو.' : 'Your browser does not support video.'}
            </video>
            <div style={{
              background:'#0d3320', color:'rgba(255,255,255,.5)',
              padding:'8px 16px', fontSize:'0.72rem', textAlign:'center',
            }}>
              📁 {isArabic
                ? 'اعداد الطالب : عبدالرحمن فتحي'
                : 'Abdulrahman Fathy - Student Project'}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
