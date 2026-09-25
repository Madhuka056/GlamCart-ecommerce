const banners = [
  {
    title: 'Sale',
    subtitle: 'Minimal, medium premium and fashionable',
    cta: 'Shop Essentials',
    bg: 'bg-terracotta',
    text: 'text-cream',
  },
  {
    title: 'Up to 50% Off',
    subtitle: 'On selected items and styles',
    cta: 'Shop Now',
    bg: 'bg-sand',
    text: 'text-ink',
  },
  {
    title: 'New Arrivals',
    subtitle: 'Elevate your new day',
    cta: 'Shop New',
    bg: 'bg-olive',
    text: 'text-cream',
  },
]

export default function PromoBanners() {
  return (
    <section className="w-full px-6 md:px-12 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        {banners.map((b) => (
          <div key={b.title} className={`${b.bg} ${b.text} rounded-xl p-7 min-h-[160px] flex flex-col justify-between`}>
            <div>
              <h3 className="font-display text-2xl mb-2">{b.title}</h3>
              <p className="text-sm opacity-85 max-w-[220px]">{b.subtitle}</p>
            </div>
            <button className="self-start mt-4 bg-charcoal text-cream text-xs font-medium px-4 py-2 rounded-full hover:bg-ink transition-colors">
              {b.cta} →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
