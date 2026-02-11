'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Mail, ChevronRight, Linkedin } from 'lucide-react'

// --- REUSABLE UI COMPONENTS ---
const Button = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <button 
    onClick={onClick} 
    className={`inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
)

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    className={`flex h-14 w-full rounded-none border-b border-[#1A1A1A] bg-transparent px-0 py-2 text-lg placeholder:text-gray-500 focus:outline-none focus:border-[#8B7355] ${className}`} 
    {...props} 
  />
)

export default function LabelLelenWebsite() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { id: 1, name: 'Shirt', price: '₹', image: './d.jpg' },
    { id: 2, name: 'Shirt', price: '₹', image: './s.jpg' },
    { id: 3, name: 'shirt', price: '₹', image: './a.jpg' },
    { id: 4, name: 'Shirt', price: '₹', image: './c.jpg' },
    { id: 5, name: 'Shirt', price: '₹', image: './f.jpg' },
    { id: 6, name: 'Shirt', price: '₹', image: './e.jpg' }
  ]

  const lookbookImages = [
    './b.jpg', './j.jpg', './i.jpg', './h.jpg',
    './b.jpg', './j.jpg', './i.jpg', './h.jpg'
  ]

  const handleWhatsAppInquiry = (productName: string, price: string) => {
    const message = encodeURIComponent(`Hi Label Lelen! I'm interested in the ${productName}. Could you please provide more details?`)
    const phoneNumber = '919362223522' 
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans overflow-x-hidden">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FDFBF7]/95 py-4 shadow-md' : 'bg-white/0 py-6'}`}>
        <div className="w-full px-[5vw] flex items-center justify-between">
          <div className={`text-[4vw] min-text-[24px] font-playfair font-bold tracking-tight z-50 relative uppercase ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#B5A482]'}`}>
            LABEL LELEN
          </div>
          
          <div className="hidden xl:flex items-center space-x-[3vw]">
            {['Our Story', 'Collections', 'Journal', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className={`transition-colors text-[1vw] uppercase tracking-widest font-medium ${isScrolled ? 'text-[#1A1A1A] hover:text-[#8B7355]' : 'text-[#B5A482] hover:text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className={`xl:hidden z-50 relative ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {['Our Story', 'Collections', 'Journal', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-playfair">{item}</a>
            ))}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="./h.jpg" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center justify-center space-x-6 w-full px-4 mb-[4vh]">
            <h1 className="font-playfair text-[1.2vw] md:text-[1.1vw] font-bold text-white uppercase tracking-[0.3em] flex items-center whitespace-nowrap drop-shadow-2xl">
              Ethical Mizo brand
              <span className="inline-block w-[3vw] h-[1px] bg-white/40 mx-4"></span>
              Homegrown
              <span className="inline-block w-[3vw] h-[1px] bg-white/40 mx-4"></span>
              Handcrafted
              <span className="inline-block w-[3vw] h-[1px] bg-white/40 mx-4"></span>
              Sustainable
            </h1>
          </div>
          <Button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-white text-[#1A1A1A] px-[3vw] py-[2vh] text-[1.2rem] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Discover Collection
          </Button>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section id="ourstory" className="py-[15vh] px-[5vw] bg-[#FDFBF7]">
        <div className="max-w-[90vw] mx-auto text-center">
          <span className="text-[#8B7355] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">Our Heritage</span>
          <h2 className="font-playfair text-[5vw] leading-[1.1] mb-12 text-[#1A1A1A]">A Mizo Wildflower</h2>
          <p className="text-[2vw] leading-relaxed text-[#1A1A1A] font-playfair italic max-w-4xl mx-auto">
            "Lélen symbolises my desire to promote not just our vibrant Mizo culture, but also sustainability. We hope to transform how the fashion industry operates by elevating the talented craftsmanship of our local artisans."
          </p>
        </div>
      </section>

      {/* --- LOOKBOOK (SIDE-SCROLLING) --- */}
      <section className="py-[10vh] bg-[#F4F0E8]">
        <div className="px-[5vw]">
          <div className="text-center mb-[8vh]">
             <h2 className="font-playfair text-[4vw] text-[#1A1A1A]">Lookbook '26</h2>
             <p className="text-sm uppercase tracking-widest text-[#8B7355] mt-2">Scroll to explore →</p>
          </div>
          <div className="flex overflow-x-auto pb-10 space-x-[2vw] scrollbar-hide snap-x">
            {lookbookImages.map((img, i) => (
              <div key={i} className="min-w-[70vw] md:min-w-[40vw] lg:min-w-[25vw] aspect-[3/4] relative overflow-hidden rounded-[2rem] snap-center group shadow-md">
                <img src={img} alt="Lookbook entry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARTISAN JOURNAL --- */}
      <section id="journal" className="py-[15vh] px-[5vw] bg-[#FDFBF7]">
        <div className="grid lg:grid-cols-2 gap-[5vw] items-center">
          <div className="h-[70vh] rounded-[2.5rem] overflow-hidden shadow-lg">
            <img src="./j.jpg" alt="Weaving close-up" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-[3vh]">
            <h2 className="font-playfair text-[5vw] text-[#1A1A1A] leading-[1]">The Art of <br/>Handloom</h2>
            <p className="text-[1.5vw] text-gray-600 leading-relaxed max-w-xl min-text-[16px]">
              Our pieces are more than just clothes; they are a legacy woven with dedication and ancient techniques passed down through generations of Mizo weavers.
            </p>
            <a href="#" className="inline-flex items-center text-[1.2vw] text-[#1A1A1A] font-medium border-b border-black pb-1 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors">
              The Process <ChevronRight className="ml-2 w-[1.5vw] h-[1.5vw]" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section id="collections" className="py-[15vh] px-[5vw] bg-[#F4F0E8]">
        <div className="w-full">
          <h2 className="font-playfair text-[5vw] text-center mb-[10vh] text-[#1A1A1A]">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3vw] gap-y-[8vh]">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-[2vw] text-[#1A1A1A] leading-tight">{product.name}</h3>
                  <p className="text-[1.2vw] text-gray-500 font-sans tracking-widest">{product.price}</p>
                </div>
                <Button onClick={() => handleWhatsAppInquiry(product.name, product.price)} className="mt-6 w-full bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white py-[2vh] rounded-full text-sm uppercase tracking-widest font-bold">
                  Inquire via WhatsApp
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#2C241B] text-[#F5F1E8] py-[10vh] px-[5vw]">
          <div className="grid md:grid-cols-12 gap-[5vw]">
            <div className="md:col-span-4 space-y-8">
              <div className="text-[3vw] font-playfair font-bold uppercase">LABEL LELEN</div>
              <p className="text-[#D4C5B0] text-[1.2vw] leading-relaxed max-w-md italic">
                Sustainable Mizo craftsmanship. Homegrown in Mizoram.
              </p>
              <div className="flex space-x-6 pt-4 items-center">
                {/* Instagram Icon (Size 50) */}
                <a href="https://www.instagram.com/label_lelen/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8B7355] transition-colors">
                  <Instagram size={50} />
                </a>
                
                {/* LinkedIn Icon (Size 50) - Replaced Facebook */}
                <a href="your-linkedin-link-here" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8B7355] transition-colors">
                  <Linkedin size={50} />
                </a>
                
                {/* Mail Icon (Size 50) */}
                <a href="mailto:labellelen2022@gmail.com" className="text-white hover:text-[#8B7355] transition-colors">
                  <Mail size={50} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-5 space-y-6">
              <h3 className="font-playfair text-[2vw]">Find Us</h3>
              <div className="w-full h-[200px] rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.735878415259!2d92.7143230758994!3d23.721105089886295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d9524a918d449%3A0xbc770642127903a5!2sRts%20D&#39;Decor%20Store%20-%20Aizawl%20-%20Mizoram!5e0!3m2!1sen!2sin!4v1707254000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              <h3 className="font-playfair text-[2vw]">Visit Us</h3>
              <div className="space-y-4 text-[#D4C5B0] text-lg">
                <p className="leading-tight">Khatla Kawn, RTS Building.</p>
                <p className="leading-tight">Opposite Pizza Hut. Aizawl, MZ</p>
                <p className="text-white font-medium">+91 9362223522</p>
              </div>
            </div>
          </div>

          <div className="mt-[10vh] pt-8 border-t border-white/10 text-center text-[#D4C5B0] text-sm tracking-widest uppercase">
            © 2026 Label Lelen. All rights reserved.
          </div>
      </footer>
    </div>
  )
}