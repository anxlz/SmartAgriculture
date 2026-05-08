import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { content } from '../data/content'

// ─── الفيديوهات ────────────────────────────────────────────────────────────
const videos = [
  {
    src: 'https://res.cloudinary.com/dwxybf8iu/video/upload/q_auto,f_auto/v1778090696/hero-video_jmgu3j.mp4',
    poster: 'https://res.cloudinary.com/dwxybf8iu/image/upload/v1778178433/corn-field-young-corn-plants-growing-sun_vz24fx.jpg',
    label: { ar: 'الزراعة الذكية', en: 'Smart Farming' },
  },
  {
    src: 'https://res.cloudinary.com/dwxybf8iu/video/upload/q_auto,f_auto/updated_fsis9b',
    poster: 'https://res.cloudinary.com/dwxybf8iu/image/upload/v1778186886/tractor-working-green-field_23-2151983626_cn9v0j.avif',
    label: { ar: 'مجتمعات ريفية', en: 'Rural Communities' },
  },
]
// ──────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const { isArabic } = useTheme()
  const t = isArabic ? content.ar.hero : content.en.hero

  const [current,   setCurrent]   = useState(0)
  const [fading,    setFading]    = useState(false)
  const [playing,   setPlaying]   = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const videoRef    = useRef(null)
  const intervalRef = useRef(null)

  // Auto-advance every 8 s
  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [])

  function startAutoPlay() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      switchTo(prev => (prev + 1) % videos.length)
    }, 8000)
  }

  function switchTo(indexOrFn) {
    setFading(true)
    setTimeout(() => {
      setCurrent(indexOrFn)
      setFading(false)
    }, 400)
  }

  function togglePlay() {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      clearInterval(intervalRef.current)
    } else {
      videoRef.current.play().catch(() => {})
      startAutoPlay()
    }
    setPlaying(p => !p)
  }

  function goTo(idx) {
    if (idx === current) return
    switchTo(idx)
    startAutoPlay()
  }

  function scrollToIntro(e) {
    e.preventDefault()
    const target = document.getElementById('intro') || document.getElementById('about')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  const video = videos[current]

  return (
    <>
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* ── Background Video ── */}
        <div style={{
          position: 'absolute', inset: 0,
          transition: 'opacity 0.5s',
          opacity: fading ? 0 : 1,
        }}>
          <video
            ref={videoRef}
            key={current}
            autoPlay
            muted
            loop
            playsInline
            poster={video.poster}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src={video.src} type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.52)' }} />
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
            background: 'linear-gradient(to top, var(--bg,#fff), transparent)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Dot grid texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.07,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* ── Hero Content ── */}
        <div
          className="section-container"
          style={{
            textAlign: 'center', paddingTop: '140px', paddingBottom: '100px',
            position: 'relative', zIndex: 1,
          }}
        >
          {/* Tag pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px', borderRadius: '999px',
            background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.85)',
            fontSize: '0.82rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.04em',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%', background: '#52b788',
              boxShadow: '0 0 6px #52b788', animation: 'pulse 2s infinite',
            }} />
            {t.tag}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: '20px',
          }}>
            {isArabic ? (
              <>
                <span style={{ display: 'block' }}>الزراعة الذكية</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #b5e4cb, #f0d9c8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>في مصر</span>
              </>
            ) : (
              <>
                <span style={{ display: 'block' }}>Smart Agriculture</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #b5e4cb, #f0d9c8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>in Egypt</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p style={{
            maxWidth: '600px', margin: '0 auto 40px',
            color: 'rgba(255,255,255,.72)', fontSize: '1.1rem', lineHeight: 1.75,
          }}>
            {t.subtitle}
          </p>

          {/* ── CTAs ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>

            {/* Scroll-down / Discover More */}
            <a
              href="#intro"
              onClick={scrollToIntro}
              className="btn-primary"
              style={{ fontSize: '1rem' }}
            >
              {t.cta}
            </a>

            {/* Watch Video — opens modal */}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 28px', borderRadius: '999px',
                border: '2px solid rgba(255,255,255,.3)',
                background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(6px)',
                color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'}
            >
              <span style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(255,255,255,.2)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              }}>▶</span>
              {isArabic ? 'شاهد الفيديو' : 'Watch Video'}
            </button>
          </div>

          {/* Scroll hint */}
          <div style={{
            marginTop: '72px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,.35)',
          }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {isArabic ? 'انتقل للأسفل' : 'Scroll'}
            </span>
            <div style={{
              width: '1px', height: '48px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,.4), transparent)',
              animation: 'bounce 1.8s infinite',
            }} />
          </div>
        </div>

        {/* Floating botanicals */}
        {[
          { emoji: '🌿', top: '18%',    left: '5%',  size: '2.2rem', delay: '0s',   dur: '3.2s' },
          { emoji: '🌾', top: '30%',    right: '6%', size: '2rem',   delay: '1.1s', dur: '4s'   },
          { emoji: '💧', bottom: '28%', left: '8%',  size: '1.8rem', delay: '0.5s', dur: '3.6s' },
          { emoji: '🛰️', bottom: '20%', right: '5%', size: '2rem',   delay: '1.8s', dur: '2.8s' },
        ].map((f, i) => (
          <span key={i} style={{
            position: 'absolute', fontSize: f.size, opacity: 0.18,
            top: f.top, bottom: f.bottom, left: f.left, right: f.right,
            animation: `bounce ${f.dur} ${f.delay} infinite`,
            pointerEvents: 'none',
          }}>{f.emoji}</span>
        ))}

        {/* ── Slider Prev / Next ── */}
        {['prev','next'].map(dir => (
          <button
            key={dir}
            onClick={() => goTo(dir === 'prev'
              ? (current - 1 + videos.length) % videos.length
              : (current + 1) % videos.length
            )}
            aria-label={dir === 'prev' ? 'Previous video' : 'Next video'}
            style={{
              position: 'absolute',
              [dir === 'prev' ? 'left' : 'right']: '16px',
              top: '50%', transform: 'translateY(-50%)',
              zIndex: 20, width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)',
              color: 'white', fontSize: '1.4rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(6px)', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.2)'}
          >
            {dir === 'prev' ? '‹' : '›'}
          </button>
        ))}

        {/* Video label */}
        <div style={{
          position: 'absolute', bottom: '68px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, padding: '5px 14px', borderRadius: '999px',
          background: 'rgba(0,0,0,.4)', backdropFilter: 'blur(6px)',
          color: 'white', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.05em',
          opacity: fading ? 0 : 1, transition: 'opacity 0.4s', whiteSpace: 'nowrap',
        }}>
          {isArabic ? video.label.ar : video.label.en}
        </div>

        {/* Dots + Play/Pause */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Play'}
            style={{
              width: '30px', height: '30px', borderRadius: '50%',
              background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.4)',
              color: 'white', fontSize: '0.75rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(6px)', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.2)'}
          >
            {playing ? '⏸' : '▶'}
          </button>

          <span style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,.3)' }} />

          {/* Dots */}
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Video ${i + 1}`}
              style={{
                borderRadius: '999px', border: '2px solid white', padding: 0,
                background: i === current ? 'white' : 'rgba(255,255,255,.35)',
                width: i === current ? '28px' : '10px', height: '10px',
                cursor: 'pointer', transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.4} }
          @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        `}</style>
      </section>

      {/* ── Video Modal ── */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative', width: '100%', maxWidth: '900px',
              borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,.6)',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(0,0,0,.6)', border: 'none', color: 'white',
                fontSize: '1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>

            {/* Tab switcher between videos */}
            <div style={{ display: 'flex', background: '#0d3320', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
              {videos.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    flex: 1, padding: '10px', border: 'none', cursor: 'pointer',
                    background: i === current ? 'rgba(255,255,255,.12)' : 'transparent',
                    color: i === current ? 'white' : 'rgba(255,255,255,.45)',
                    fontWeight: 600, fontSize: '0.82rem',
                    borderBottom: i === current ? '2px solid #52b788' : '2px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {isArabic ? v.label.ar : v.label.en}
                </button>
              ))}
            </div>

            <video
              key={`modal-${current}`}
              controls
              autoPlay
              poster={videos[current].poster}
              style={{ width: '100%', aspectRatio: '16/9', background: '#000', display: 'block' }}
            >
              <source src={videos[current].src} type="video/mp4" />
              {isArabic ? 'متصفحك لا يدعم الفيديو.' : 'Your browser does not support video.'}
            </video>

            <div style={{
              background: '#0d3320', color: 'rgba(255,255,255,.5)',
              padding: '8px 16px', fontSize: '0.72rem', textAlign: 'center',
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
