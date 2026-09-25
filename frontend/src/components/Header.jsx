import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#shop' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Sale', href: '#sale' },
  { label: 'About Us', href: '#about-us' },
]

export default function Header({ cartCount = 0, onNavigate, isShopPage = false }) {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const visibleNavLinks = isShopPage
    ? [
        { label: 'Home', href: '#' },
        { label: 'Sale', href: '#sale' },
        { label: 'About Us', href: '#about-us' },
      ]
    : navLinks

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 0)

      if (y > lastY.current && y > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`${scrolled ? 'fixed top-0 inset-x-0 z-50 shadow-sm' : 'relative'} bg-cream border-b border-cream-dark transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="w-full px-6 md:px-12 h-[76px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl tracking-wide">Glam Cart</span>
          </Link>

          <nav className={`hidden lg:flex items-center gap-8 text-sm font-bold text-charcoal ${isShopPage ? 'ml-20' : ''}`}>
            {visibleNavLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.label === 'Shop'
                    ? '/shop'
                    : link.label === 'Home'
                      ? '/'
                      : link.label === 'Men' || link.label === 'Women'
                        ? `/shop?category=${link.label}`
                        : link.label === 'Sale'
                          ? '/shop?tag=Sale'
                        : link.href
                }
                onClick={(event) => {
                  if (link.label === 'Home' || link.label === 'Shop' || link.label === 'Men' || link.label === 'Women' || link.label === 'Sale') {
                    event.preventDefault()
                    navigate(
                      link.label === 'Shop'
                        ? '/shop'
                        : link.label === 'Home'
                          ? '/'
                          : link.label === 'Sale'
                            ? '/shop?tag=Sale'
                            : `/shop?category=${link.label}`,
                    )
                  }
                }}
                className="hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={`flex items-center gap-5 text-charcoal ${isShopPage ? 'ml-auto' : ''}`}>
            <button aria-label="Search" className="hover:text-terracotta transition-colors">
              <Search size={19} strokeWidth={1.75} />
            </button>
            <button aria-label="Account" className="hidden sm:inline-flex hover:text-terracotta transition-colors">
              <User size={19} strokeWidth={1.75} />
            </button>
            <button aria-label="Wishlist" className="hidden sm:inline-flex hover:text-terracotta transition-colors">
              <Heart size={19} strokeWidth={1.75} />
            </button>
            <button aria-label="Cart" className="relative hover:text-terracotta transition-colors">
              <ShoppingBag size={19} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden hover:text-terracotta transition-colors"
            >
              {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-cream-dark bg-cream px-6 py-4 flex flex-col gap-4 text-sm font-bold text-charcoal">
            {visibleNavLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.label === 'Shop'
                    ? '/shop'
                    : link.label === 'Home'
                      ? '/'
                      : link.label === 'Men' || link.label === 'Women'
                        ? `/shop?category=${link.label}`
                        : link.label === 'Sale'
                          ? '/shop?tag=Sale'
                        : link.href
                }
                onClick={(event) => {
                  if (link.label === 'Home' || link.label === 'Shop' || link.label === 'Men' || link.label === 'Women' || link.label === 'Sale') {
                    event.preventDefault()
                    navigate(
                      link.label === 'Shop'
                        ? '/shop'
                        : link.label === 'Home'
                          ? '/'
                          : link.label === 'Sale'
                            ? '/shop?tag=Sale'
                            : `/shop?category=${link.label}`,
                    )
                  }
                  setMenuOpen(false)
                }}
                className="hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Spacer to prevent content jump once the header becomes fixed */}
      {scrolled && <div className="h-[76px]" />}
    </>
  )
}