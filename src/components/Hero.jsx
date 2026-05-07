import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

// ─── قائمة الفيديوهات ───────────────────────────────────────────────
// استبدل src بروابط الفيديوهات الحقيقية
const videos = [
  {
    src: 'https://res.cloudinary.com/dwxybf8iu/video/upload/q_auto,f_auto/v1778090696/hero-video_jmgu3j.mp4',       // ← استبدل بالفيديو الأول
    poster: 'https://res.cloudinary.com/dwxybf8iu/image/upload/q_auto,f_auto/v1778090696/hero-poster-1.jpg',   // ← صورة تحميل اختيارية
    label: { ar: 'الزراعة الذكية', en: 'Smart Farming' },
  },
  {
    src: '/videos/hero-video-2.mp4',       // ← استبدل بالفيديو الثاني
    poster: '/videos/hero-poster-2.jpg',   // ← صورة تحميل اختيارية
    label: { ar: 'مجتمعات ريفية', en: 'Rural Communities' },
  },
]
// ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const { isArabic } = useTheme()
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const videoRef = useRef(null)
  const intervalRef = useRef(null)

  // Auto-play slider every 8 seconds
  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [])

  function startAutoPlay() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      switchTo((prev) => (prev + 1) % videos.length)
    }, 8000)
  }

  function switchTo(indexOrFn) {
    setFading(true)
    setTimeout(() => {
      setCurrent(indexOrFn)
      setFading(false)
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play().catch(() => {})
      }
    }, 400)
  }

  function goTo(idx) {
    if (idx === current) return
    switchTo(idx)
    startAutoPlay()
  }

  function goPrev() {
    goTo((current - 1 + videos.length) % videos.length)
  }

  function goNext() {
    goTo((current + 1) % videos.length)
  }

  const video = videos[current]

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* ── Video Background ── */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <video
          ref={videoRef}
          key={current}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={video.poster}
        >
          <source src={video.src} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {isArabic ? 'الزراعة الذكية في مصر' : 'Smart Agriculture in Egypt'}
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90 drop-shadow">
          {isArabic
            ? 'منصة تربط العلم بالأرض لتمكين المجتمعات الريفية'
            : 'A platform connecting science to the field to empower rural communities'}
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-primary-500 hover:bg-primary-600
                     text-white font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isArabic ? 'اكتشف المزيد' : 'Discover More'}
        </a>
      </div>

      {/* ── Slider Controls ── */}
      {videos.length > 1 && (
        <>
          {/* Prev Button */}
          <button
            onClick={goPrev}
            aria-label="Previous video"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 flex items-center justify-center rounded-full
                       bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm
                       transition-all duration-200 shadow"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            aria-label="Next video"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 flex items-center justify-center rounded-full
                       bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm
                       transition-all duration-200 shadow"
          >
            ›
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {videos.map((v, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Video ${i + 1}`}
                className={`transition-all duration-300 rounded-full border-2 border-white
                  ${i === current
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>

          {/* Video Label */}
          <div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20
                       px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm
                       text-white text-sm font-medium tracking-wide"
            style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.4s' }}
          >
            {isArabic ? video.label.ar : video.label.en}
          </div>
        </>
      )}
    </section>
  )
}
