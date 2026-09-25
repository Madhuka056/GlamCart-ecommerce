import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceFeatures from './components/ServiceFeatures'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanners from './components/PromoBanners'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import ShopPage from './components/shop/ShopPage'
import ProductDetailPage from './components/shop/ProductDetailPage'
import AboutUs from './components/AboutUs'

export default function App() {
  const { pathname } = useLocation()
  const isShopPage = pathname.startsWith('/shop')

  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <TopBar compact={isShopPage} />
      <Header cartCount={0} isShopPage={isShopPage} />
      <Routes>
        <Route path="/shop/products/:productId" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, search])

  return null
}

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Reveal><ServiceFeatures /></Reveal>
        <Reveal delay={80}><Categories /></Reveal>
        <Reveal delay={120}><FeaturedProducts /></Reveal>
        <Reveal delay={80}><PromoBanners /></Reveal>
        <Reveal delay={100}><AboutUs /></Reveal>
        <Reveal><WhyChooseUs /></Reveal>
      </main>
      <Reveal><Newsletter /></Reveal>
    </>
  )
}
