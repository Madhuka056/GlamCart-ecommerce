import { Link } from 'react-router-dom'
import menImage from '../assets/categories/men.jpg'
import womenImage from '../assets/categories/women.jpg' 
import kidsImage from '../assets/categories/kids.jpg'
import shoesImage from '../assets/categories/shoes.jpg'
const categories = [
  { label: 'Men', img: menImage  },
  { label: 'Women', img: womenImage },
  { label: 'Kids', img: kidsImage },
  { label: 'Footwear', img: shoesImage },
  { label: 'Accessories', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop' },
  { label: 'Cosmetics', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=300&auto=format&fit=crop' },
]

export default function Categories() {
  return (
    <section id="collections" className="w-full px-6 md:px-12 py-12">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link key={cat.label} to={`/shop?category=${encodeURIComponent(cat.label)}`} className="flex flex-col items-center gap-5 group">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-cream-dark ring-4 ring-cream-dark group-hover:ring-terracotta transition-all duration-300 group-hover:scale-110">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-ink transition-transform duration-300 group-hover:scale-110">{cat.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
