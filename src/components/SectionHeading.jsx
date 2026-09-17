// Consistent section heading block — title + optional subtitle.
// Design: Poppins 700 for title, Inter 400 for subtitle, both charcoal.

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2
        className="font-poppins font-bold text-[#1F2937] text-3xl sm:text-4xl leading-tight mb-3"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-inter text-[#1F2937] text-base sm:text-lg max-w-2xl"
          style={{ fontFamily: 'Inter, sans-serif', ...(centered ? { margin: '0 auto' } : {}) }}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 rounded-full bg-[#0A192F] ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
