import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Message from './pages/Message.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"             element={<Home />}         />
            <Route path="/services"     element={<Services />}     />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/message"      element={<Message />}      />
            <Route path="/contact"      element={<Contact />}      />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </BrowserRouter>
  )
}
