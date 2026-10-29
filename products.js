export const products = [
  { id: 1, name: 'Everyday Wireless Headphones', category: 'Electronics', price: 2499, oldPrice: 3299, rating: 4.8, tag: 'BESTSELLER', emoji: '🎧', tone: 'lavender' },
  { id: 2, name: 'Minimal Ceramic Coffee Set', category: 'Home', price: 899, oldPrice: 1199, rating: 4.7, tag: 'POPULAR', emoji: '☕', tone: 'peach' },
  { id: 3, name: 'Classic Everyday Backpack', category: 'Fashion', price: 1499, oldPrice: 1999, rating: 4.6, tag: '−25%', emoji: '🎒', tone: 'mint' },
  { id: 4, name: 'Smart Fitness Watch', category: 'Electronics', price: 3299, oldPrice: 4299, rating: 4.5, tag: 'TRENDING', emoji: '⌚', tone: 'blue' },
  { id: 5, name: 'Soft Knit Throw Blanket', category: 'Home', price: 1299, oldPrice: 1599, rating: 4.9, tag: 'TOP RATED', emoji: '🧶', tone: 'sand' },
  { id: 6, name: 'Daily Skincare Essentials', category: 'Beauty', price: 799, oldPrice: 999, rating: 4.4, tag: '−20%', emoji: '🧴', tone: 'pink' },
  { id: 7, name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 1799, oldPrice: 2299, rating: 4.7, tag: 'NEW', emoji: '🔊', tone: 'yellow' },
  { id: 8, name: 'Modern Desk Lamp', category: 'Home', price: 1099, oldPrice: 1399, rating: 4.6, tag: 'SMART PICK', emoji: '💡', tone: 'lavender' }
]
export const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)