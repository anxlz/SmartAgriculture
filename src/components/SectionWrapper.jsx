import { useReveal } from '../hooks/useReveal'

export default function SectionWrapper({ id, children, className = '', alt = false }) {
  const ref = useReveal()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal py-20 sm:py-28 ${alt ? 'bg-primary-50/60 dark:bg-primary-950/40' : ''} ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  )
}
