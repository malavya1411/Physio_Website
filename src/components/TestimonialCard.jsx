// Testimonial card — 5 teal stars, quote, name + locality, initial avatar.

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#0F766E]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
  </svg>
)

export default function TestimonialCard({ testimonial }) {
  const { name, locality, quote, rating } = testimonial
  const initial = name.charAt(0).toUpperCase()

  return (
    <div className="bg-white rounded-2xl card-shadow p-6 flex flex-col gap-4 transition-subtle hover:shadow-md hover:-translate-y-0.5">
      {/* Stars */}
      <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-inter text-[#1F2937] text-sm leading-relaxed flex-grow"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-2">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-poppins font-semibold text-base flex-shrink-0"
          aria-hidden="true"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {initial}
        </div>
        <div>
          <p
            className="font-inter font-medium text-[#1F2937] text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {name}
          </p>
          <p
            className="font-inter text-[#1F2937] text-xs opacity-70"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {locality}
          </p>
        </div>
      </div>
    </div>
  )
}
