// SVG icon paths are inline — they use currentColor so they always render in teal.
// Prices in ₹ per visit.

const services = [
  {
    id: 'orthopaedic',
    title: 'Orthopaedic Physiotherapy',
    description: 'Relief from joint pain, back pain, neck pain & musculoskeletal conditions through targeted exercises.',
    price: '₹700 / visit',
    waMessage: "Hi! I\u2019d like to book a home visit for Orthopaedic Physiotherapy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M8 17.5V20a2 2 0 0 0 4 0v-2.5"/><path d="M12 20v2"/></svg>`,
  },
  {
    id: 'neuro',
    title: 'Neuro Physiotherapy',
    description: 'Specialised rehab for stroke, Parkinson\'s, and other neurological conditions at home.',
    price: '₹900 / visit',
    waMessage: "Hi! I’d like to book a home visit for Neuro Physiotherapy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M8 12h.01M16 12h.01"/></svg>`,
  },
  {
    id: 'post-surgical',
    title: 'Post-Surgical Rehabilitation',
    description: 'Structured recovery programs after knee replacement, hip surgery, or spinal surgeries.',
    price: '₹800 / visit',
    waMessage: "Hi! I’d like to book a home visit for Post-Surgical Rehabilitation.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12M12 12 7 7M12 12l5-5"/><circle cx="12" cy="5" r="3"/></svg>`,
  },
  {
    id: 'geriatric',
    title: 'Geriatric Care',
    description: 'Gentle physiotherapy for elderly patients to improve mobility, balance & quality of life.',
    price: '₹700 / visit',
    waMessage: "Hi! I’d like to book a home visit for Geriatric Care physiotherapy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury Rehab',
    description: 'Fast-track recovery for athletes — sprains, ligament tears, tendinitis & muscle injuries.',
    price: '₹800 / visit',
    waMessage: "Hi! I’d like to book a home visit for Sports Injury Rehabilitation.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    id: 'electrotherapy',
    title: 'Electrotherapy (Home Visit)',
    description: 'TENS, IFT & ultrasound therapy brought to your home for deep pain relief.',
    price: '₹750 / visit',
    waMessage: "Hi! I’d like to book a home visit for Electrotherapy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
]

export default services
