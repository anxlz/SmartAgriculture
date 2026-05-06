import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Technologies from './components/Technologies'
import Benefits from './components/Benefits'
import Challenges from './components/Challenges'
import Applications from './components/Applications'
import Statistics from './components/Statistics'
import Partners from './components/Partners'
import Conclusion from './components/Conclusion'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Intro />
          <Technologies />
          <Benefits />
          <Challenges />
          <Applications />
          <Statistics />
          <Partners />
          <Conclusion />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
