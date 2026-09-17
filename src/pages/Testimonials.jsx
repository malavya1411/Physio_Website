import testimonials from '../data/testimonials.js'
import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import CTAButtons from '../components/CTAButtons.jsx'

export default function Testimonials() {
  return (
    <div className="page-wrapper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Patient Stories"
          subtitle="Hear from patients who recovered comfortably at home across Delhi."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h2
            className="font-poppins font-bold text-[#1F2937] text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Book your home visit today
          </h2>
          <p
            className="font-inter text-[#1F2937] text-base mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join hundreds of patients healing at home across Delhi.
          </p>
          <div className="flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </div>
  )
}
