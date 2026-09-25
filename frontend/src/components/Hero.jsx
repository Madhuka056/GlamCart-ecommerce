import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/hero.jpeg'

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] md:h-[720px] overflow-hidden">
      <img
        src={heroImage}
        alt="Two models wearing this season's collection"
        className="hero-image absolute inset-0 w-full h-full object-cover object-[center_0%]"
      />
      {/* Left-side dark overlay so text stays readable over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a3418]/95 via-[#E8E2DB]/35 to-transparent" />

      <div className="relative h-full w-full px-6 md:px-16 flex items-center">
        <div className="hero-copy max-w-lg">
          <span className="hero-item inline-block bg-terracotta/80 text-ink text-xs tracking-wide px-3 py-1 rounded-full mb-6">
            New Collection 2026
          </span>
          <h1 className="hero-item hero-item-delay-1 font-display text-4xl sm:text-6xl leading-tight text-black mb-5">
            Redefine Your
            <br />
            Everyday Aesthetic
          </h1>
          <p className="hero-item hero-item-delay-2 text-black/85 max-w-md mb-8 leading-relaxed">
            Discover premium quality products crafted for comfort, style and performance.
          </p>
          <div className="hero-item hero-item-delay-3 flex items-center gap-4">
            <button type="button" className="inline-flex items-center gap-2 bg-stone text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-cream-dark hover:text-ink hover:-translate-y-0.5 transition-all">
              Shop Now <ArrowRight size={16} />
            </button>
            <button type="button" className="inline-flex items-center gap-2 border border-cream text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-cream-dark hover:text-ink hover:-translate-y-0.5 transition-all">
              Explore Trends <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}