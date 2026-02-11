'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook, Twitter, Mail, ChevronRight } from 'lucide-react'

// --- COMPONENTS ---
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
// ------------------

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
    { id: 1, name: 'Ruby Heritage Saree', price: '₹12,500', image: 'https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800' },
    { id: 2, name: 'Sunshine Elegance', price: '₹8,900', image: 'https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800' },
    { id: 3, name: 'Azure Dreams Saree', price: '₹15,200', image: 'https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?crop=entropy&cs=srgb&fm=jpg&q=85&w=800' },
    { id: 4, name: 'Crimson Royale', price: '₹11,800', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?crop=entropy&cs=srgb&fm=jpg&q=85&w=800' },
    { id: 5, name: 'Golden Lotus', price: '₹9,500', image: 'https://images.pexels.com/photos/31540070/pexels-photo-31540070.jpeg?w=800' },
    { id: 6, name: 'Emerald Tradition', price: '₹13,400', image: 'https://images.unsplash.com/photo-1756483510900-ec43edbafb45?crop=entropy&cs=srgb&fm=jpg&q=85&w=800' }
  ]

  const lookbookImages = [
    'https://images.unsplash.com/photo-1610189337543-1c5d8e64f574?w=800&q=85',
    'https://images.unsplash.com/photo-1610189000544-1f0885c4bbeb?w=800&q=85',
    'https://images.unsplash.com/photo-1610189338175-0782dfdb0c04?w=800&q=85',
    'https://images.unsplash.com/photo-1610189338344-f3ce0d0f6d06?w=800&q=85'
  ]

  const handleWhatsAppInquiry = (productName: string, price: string) => {
    const message = encodeURIComponent(`Hi Label Lelen! I'm interested in the ${productName} (${price}). Could you please provide more details?`)
    const phoneNumber = '919876543210' 
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans overflow-x-hidden">
      {/* Navbar - NOW BREAKS AT XL (1280px) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F9F9F7]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="w-full px-[5vw] flex items-center justify-between">
          <div className="text-[2vw] min-text-[24px] font-playfair font-bold tracking-tight text-[#1A1A1A] z-50 relative">LABEL LELEN</div>
          
          {/* Desktop Menu - Changed from lg:flex to xl:flex (Hidden on small laptops/tablets now) */}
          <div className="hidden xl:flex items-center space-x-[3vw]">
            {['Our Story', 'Collections', 'Journal', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[#1A1A1A] hover:text-[#8B7355] transition-colors text-[1vw] uppercase tracking-widest font-medium">{item}</a>
            ))}
          </div>

          {/* Mobile Menu Button - Changed from lg:hidden to xl:hidden (Visible on small laptops/tablets now) */}
          <button className="xl:hidden text-[#1A1A1A] z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        <div className={`fixed inset-0 bg-[#F9F9F7] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {['Our Story', 'Collections', 'Journal', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-playfair hover:text-[#8B7355] transition-colors">{item}</a>
            ))}
        </div>
      </nav>

      {/* Hero Section - FLUID TYPOGRAPHY */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1724433530860-f094e39b64e7?w=1920&q=85" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-[8vw] leading-[0.85] font-bold text-white mb-[4vh] drop-shadow-xl w-full">
            WEAVING STORIES, <br /> ONE STITCH AT A TIME
          </h1>
          <Button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-[#1A1A1A] text-white px-[3vw] py-[2vh] text-[1.2rem] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            Discover Collection
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="ourstory" className="py-[15vh] px-[5vw]">
        <div className="max-w-[90vw] mx-auto text-center">
          <span className="text-[#8B7355] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">About Us</span>
          <h2 className="font-playfair text-[5vw] leading-[1.1] mb-12 text-[#1A1A1A]">Our Story</h2>
          <p className="text-[2vw] leading-relaxed text-[#1A1A1A] font-playfair italic max-w-4xl mx-auto">
            "Label Lelen celebrates the timeless art of Indian handloom weaving. Each piece tells a story of sustainable craftsmanship, honoring traditional techniques passed down through generations."
          </p>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-[10vh] bg-white">
        <div className="px-[5vw]">
          <div className="text-center mb-[8vh]">
             <h2 className="font-playfair text-[4vw] text-[#1A1A1A]">Lookbook '26</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2vw]">
            {lookbookImages.map((img, i) => (
              <div key={i} className="aspect-[3/4] relative overflow-hidden rounded-[2rem] group cursor-pointer">
                <img src={img} alt="Lookbook" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-[15vh] px-[5vw] bg-[#F9F9F7]">
        <div className="grid lg:grid-cols-2 gap-[5vw] items-center">
          <div className="h-[70vh] rounded-[2.5rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1640292343595-889db1c8262e?w=1200&q=85" alt="Weaving" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-[3vh]">
            <h2 className="font-playfair text-[5vw] text-[#1A1A1A] leading-[1] mt-8 lg:mt-0">The Art of <br/>Handloom</h2>
            <p className="text-[1.5vw] text-gray-600 leading-relaxed max-w-xl min-text-[16px]">
              Discover the intricate process behind our handwoven textiles. From the rhythmic dance of the loom to the careful selection of natural dyes, each saree embodies centuries of tradition.
            </p>
            <a href="#" className="inline-flex items-center text-[1.2vw] text-[#1A1A1A] font-medium border-b border-black pb-1 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors">
              Read the Story <ChevronRight className="ml-2 w-[1.5vw] h-[1.5vw]" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="collections" className="py-[15vh] px-[5vw] bg-white">
        <div className="w-full">
          <h2 className="font-playfair text-[5vw] text-center mb-[10vh] text-[#1A1A1A]">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3vw] gap-y-[8vh]">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-[2vw] text-[#1A1A1A] leading-tight">{product.name}</h3>
                  <p className="text-[1.2vw] text-gray-500 font-sans">{product.price}</p>
                </div>
                <Button onClick={() => handleWhatsAppInquiry(product.name, product.price)} className="mt-6 w-full bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white py-[2vh] rounded-full text-sm uppercase tracking-widest">
                  Inquire via WhatsApp
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2C241B] text-[#F5F1E8] py-[10vh] px-[5vw]">
        <div className="grid md:grid-cols-12 gap-[5vw]">
          <div className="md:col-span-5 space-y-8">
            <div className="text-[3vw] font-playfair font-bold">LABEL LELEN</div>
             <p className="text-[#D4C5B0] text-[1.2vw] leading-relaxed max-w-md">Sustainable luxury celebrating the heritage of Indian handloom. Crafted with conscience, worn with pride.</p>
          </div>
          
          <div className="md:col-span-4 space-y-8">
             <h3 className="font-playfair text-[2vw]">Newsletter</h3>
             <div className="flex flex-col gap-6">
               <Input type="email" placeholder="Enter your email" className="text-white border-white/20 focus:border-white" />
               <Button className="bg-[#8B7355] text-white py-4 w-40 rounded-full tracking-widest uppercase text-xs hover:bg-[#9C8466]">Subscribe</Button>
             </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="font-playfair text-[2vw]">Contact</h3>
            <div className="space-y-4 text-[#D4C5B0] text-lg">
               <p>Bangalore, India</p>
               <p>hello@labellelen.com</p>
               <p>+91 98765 43210</p>
               <div className="flex space-x-6 pt-4">
                 {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => <a key={i} href="#" className="text-white hover:text-[#8B7355] transition-colors"><Icon size={24} /></a>)}
               </div>
            </div>
          </div>
        </div>
        <div className="mt-[10vh] pt-8 border-t border-white/10 text-center text-[#D4C5B0] text-sm tracking-widest uppercase">
           &copy; 2026 Label Lelen. All rights reserved.
        </div>
      </footer>
    </div>
  )
}