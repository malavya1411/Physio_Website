import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { telLink, waLink, WA_MESSAGE_PAGE, WA_GENERAL } from '../data/links.js'

export default function Message() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name.'
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number.'
    if (!/^\+?[0-9\s\-()]{7,15}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid phone number.'
    if (!form.concern.trim()) e.concern = 'Please describe your concern.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    const message = WA_MESSAGE_PAGE(form.name.trim(), form.phone.trim(), form.concern.trim())
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  const inputBase =
    'w-full font-inter text-[#1F2937] text-sm bg-white border border-[#1F2937]/20 rounded-lg px-4 py-3 transition-subtle focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none'

  return (
    <div className="page-wrapper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Send us a message"
          subtitle="Fill in the form and we'll open WhatsApp with your message pre-filled — no backend needed."
          centered
        />

        {/* Form card */}
        <div className="bg-white rounded-2xl card-shadow p-8 mt-6">
          <form onSubmit={handleSubmit} noValidate aria-label="WhatsApp contact form">
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="msg-name"
                className="block font-inter font-medium text-[#1F2937] text-sm mb-1.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Your Name
              </label>
              <input
                id="msg-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={handleChange}
                className={inputBase}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-describedby={errors.name ? 'msg-name-err' : undefined}
              />
              {errors.name && (
                <p id="msg-name-err" role="alert" className="mt-1 text-xs text-red-600 font-inter" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label
                htmlFor="msg-phone"
                className="block font-inter font-medium text-[#1F2937] text-sm mb-1.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Phone Number
              </label>
              <input
                id="msg-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={inputBase}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-describedby={errors.phone ? 'msg-phone-err' : undefined}
              />
              {errors.phone && (
                <p id="msg-phone-err" role="alert" className="mt-1 text-xs text-red-600 font-inter" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Concern */}
            <div className="mb-7">
              <label
                htmlFor="msg-concern"
                className="block font-inter font-medium text-[#1F2937] text-sm mb-1.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Your Concern / Condition
              </label>
              <textarea
                id="msg-concern"
                name="concern"
                rows={4}
                placeholder="e.g. Knee pain after a fall, need physiotherapy at home in Bandra."
                value={form.concern}
                onChange={handleChange}
                className={`${inputBase} resize-none`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-describedby={errors.concern ? 'msg-concern-err' : undefined}
              />
              {errors.concern && (
                <p id="msg-concern-err" role="alert" className="mt-1 text-xs text-red-600 font-inter" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {errors.concern}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              id="msg-submit"
              type="submit"
              className="w-full bg-[#0F766E] text-white font-inter font-medium text-base py-3.5 rounded-lg transition-subtle hover:bg-[#0d6560]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Send on WhatsApp
            </button>
          </form>

          {/* Alternatives */}
          <div className="mt-6 pt-6 border-t border-[#1F2937]/10 flex flex-col sm:flex-row gap-3">
            <a
              id="msg-call-instead"
              href={telLink()}
              aria-label="Call instead of WhatsApp"
              className="flex-1 text-center border border-[#0F766E] text-[#0F766E] font-inter font-medium text-sm py-3 rounded-lg transition-subtle hover:bg-[#0F766E] hover:text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Call instead
            </a>
            <a
              id="msg-open-whatsapp"
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp directly"
              className="flex-1 text-center border border-[#0F766E] text-[#0F766E] font-inter font-medium text-sm py-3 rounded-lg transition-subtle hover:bg-[#0F766E] hover:text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Open WhatsApp directly
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
