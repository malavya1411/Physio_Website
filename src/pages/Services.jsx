import services from '../data/services.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTAButtons from '../components/CTAButtons.jsx'

export default function Services() {
  return (
    <div className="page-wrapper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="All sessions are conducted at your home — no commute, no hassle."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h2
            className="font-poppins font-bold text-[#1F2937] text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Not sure which service you need?
          </h2>
          <p
            className="font-inter text-[#1F2937] text-base mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Call us or send a WhatsApp message and we'll help you choose the right plan.
          </p>
          <div className="flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </div>
  )
}
