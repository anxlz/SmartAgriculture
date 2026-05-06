export default function SectionHeader({ tag, title, subtitle, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span className="tag mb-4 inline-block">
          {tag}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-5 flex ${center ? 'justify-center' : ''} gap-1`}>
        <span className="w-10 h-1 rounded-full bg-primary-500" />
        <span className="w-3 h-1 rounded-full bg-earth-400" />
        <span className="w-1.5 h-1 rounded-full bg-primary-300" />
      </div>
    </div>
  )
}
