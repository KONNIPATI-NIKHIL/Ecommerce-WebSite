import { useEffect, useState } from 'react'
import './App.css'

const seedProducts = [
  { id: 1, name: 'Nike Air Max 270', category: 'Shoes', price: 7499, oldPrice: 12999, stock: 18, rating: 4.8, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Apple AirPods Pro', category: 'Audio', price: 18999, oldPrice: 24900, stock: 12, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Classic Leather Watch', category: 'Accessories', price: 3499, oldPrice: 5999, stock: 22, rating: 4.6, badge: 'New', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'Sony Wireless Headphones', category: 'Audio', price: 8999, oldPrice: 14990, stock: 9, rating: 4.9, badge: 'Hot deal', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'Minimal Backpack', category: 'Bags', price: 2299, oldPrice: 3999, stock: 30, rating: 4.5, badge: 'Limited', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'Smart Fitness Watch', category: 'Wearables', price: 6999, oldPrice: 9999, stock: 14, rating: 4.7, badge: 'Trending', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85' },
  { id: 7, name: 'Ray-Ban Sunglasses', category: 'Accessories', price: 4999, oldPrice: 8200, stock: 16, rating: 4.6, badge: 'Sale', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85' },
  { id: 8, name: 'Premium Sneakers', category: 'Shoes', price: 5499, oldPrice: 8999, stock: 20, rating: 4.8, badge: 'Top rated', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85' },
  { id: 9, name: 'Portable Bluetooth Speaker', category: 'Audio', price: 2799, oldPrice: 4499, stock: 25, rating: 4.5, badge: 'New', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85' },
  { id: 10, name: 'Classic Crewneck Hoodie', category: 'Fashion', price: 1999, oldPrice: 3499, stock: 32, rating: 4.4, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85' },
  { id: 11, name: 'Leather Crossbody Bag', category: 'Bags', price: 3899, oldPrice: 6500, stock: 11, rating: 4.7, badge: 'Trending', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85' },
  { id: 12, name: 'Polarized Aviator Sunglasses', category: 'Accessories', price: 3299, oldPrice: 5800, stock: 18, rating: 4.6, badge: 'Sale', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=85' },
  { id: 13, name: 'Smart Home Camera', category: 'Electronics', price: 5999, oldPrice: 8499, stock: 10, rating: 4.8, badge: 'Smart pick', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=700&q=85' },
  { id: 14, name: 'Everyday Running Shoes', category: 'Shoes', price: 4299, oldPrice: 7199, stock: 21, rating: 4.7, badge: 'Hot deal', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85' },
  { id: 15, name: 'Mechanical Keyboard', category: 'Electronics', price: 6499, oldPrice: 10999, stock: 8, rating: 4.9, badge: 'Top rated', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85' },
  { id: 16, name: 'Ceramic Travel Mug', category: 'Lifestyle', price: 1299, oldPrice: 1999, stock: 40, rating: 4.3, badge: 'Popular', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85' },
  { id: 17, name: 'Wireless Gaming Mouse', category: 'Electronics', price: 2499, oldPrice: 3999, stock: 28, rating: 4.6, badge: 'New arrival', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=85' },
  { id: 18, name: 'Yoga Training Mat', category: 'Lifestyle', price: 1499, oldPrice: 2499, stock: 35, rating: 4.7, badge: 'Fitness pick', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=700&q=85' },
  { id: 19, name: 'Stainless Steel Water Bottle', category: 'Lifestyle', price: 999, oldPrice: 1699, stock: 45, rating: 4.5, badge: 'Everyday', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85' },
  { id: 20, name: 'Casual Denim Jacket', category: 'Fashion', price: 2999, oldPrice: 4999, stock: 17, rating: 4.6, badge: 'Trending', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=85' },
  { id: 21, name: 'Linen Summer Shirt', category: 'Fashion', price: 1899, oldPrice: 3299, stock: 24, rating: 4.4, badge: 'Summer sale', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85' },
  { id: 22, name: 'Wireless Phone Charger', category: 'Electronics', price: 1799, oldPrice: 2999, stock: 26, rating: 4.5, badge: 'Fast charge', image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=700&q=85' },
  { id: 23, name: 'USB-C Travel Hub', category: 'Electronics', price: 2199, oldPrice: 3799, stock: 19, rating: 4.7, badge: 'Work essential', image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=700&q=85' },
  { id: 24, name: 'Compact Digital Camera', category: 'Electronics', price: 12499, oldPrice: 17999, stock: 7, rating: 4.8, badge: 'Creator pick', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85' },
  { id: 25, name: 'Noise-Cancelling Earbuds', category: 'Audio', price: 4999, oldPrice: 7999, stock: 21, rating: 4.8, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=85' },
  { id: 26, name: 'Studio Monitor Speaker', category: 'Audio', price: 9499, oldPrice: 13999, stock: 6, rating: 4.9, badge: 'Pro audio', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=85' },
  { id: 27, name: 'Canvas Weekend Tote', category: 'Bags', price: 1799, oldPrice: 2899, stock: 33, rating: 4.5, badge: 'New', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85' },
  { id: 28, name: 'Slim Laptop Sleeve', category: 'Bags', price: 1299, oldPrice: 2199, stock: 38, rating: 4.6, badge: 'Office essential', image: 'https://images.unsplash.com/photo-1555488205-d5e6781a7a3a?auto=format&fit=crop&w=700&q=85' },
  { id: 29, name: 'Analog Rose Gold Watch', category: 'Accessories', price: 4299, oldPrice: 6999, stock: 13, rating: 4.7, badge: 'Gift pick', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=85' },
  { id: 30, name: 'Leather Card Wallet', category: 'Accessories', price: 1099, oldPrice: 1899, stock: 42, rating: 4.4, badge: 'Compact', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85' },
  { id: 31, name: 'Silver Chain Bracelet', category: 'Accessories', price: 1499, oldPrice: 2499, stock: 29, rating: 4.6, badge: 'Limited', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=85' },
  { id: 32, name: 'Fitness Resistance Bands', category: 'Lifestyle', price: 799, oldPrice: 1399, stock: 50, rating: 4.5, badge: 'Set of 5', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=700&q=85' },
  { id: 33, name: 'Performance Running Shorts', category: 'Fashion', price: 1199, oldPrice: 1999, stock: 27, rating: 4.3, badge: 'Activewear', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85' },
  { id: 34, name: 'Cotton Oversized T-Shirt', category: 'Fashion', price: 899, oldPrice: 1499, stock: 36, rating: 4.4, badge: 'Unisex', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85' },
  { id: 35, name: 'Classic White Sneakers', category: 'Shoes', price: 3999, oldPrice: 6499, stock: 16, rating: 4.7, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85' },
  { id: 36, name: 'Trail Hiking Boots', category: 'Shoes', price: 5799, oldPrice: 8999, stock: 9, rating: 4.8, badge: 'Outdoor', image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=85' },
  { id: 37, name: 'Smart LED Desk Lamp', category: 'Lifestyle', price: 2499, oldPrice: 3999, stock: 18, rating: 4.6, badge: 'Eye comfort', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85' },
  { id: 38, name: 'Aromatherapy Candle Set', category: 'Lifestyle', price: 1299, oldPrice: 2199, stock: 31, rating: 4.5, badge: 'Gift set', image: 'https://images.unsplash.com/photo-1602874801006-e26d3eb2c8ba?auto=format&fit=crop&w=700&q=85' },
  { id: 39, name: 'Tablet Stand with Dock', category: 'Electronics', price: 1499, oldPrice: 2599, stock: 23, rating: 4.4, badge: 'Desk upgrade', image: 'https://images.unsplash.com/photo-1585790050200-6c74cb74ab93?auto=format&fit=crop&w=700&q=85' },
  { id: 40, name: 'Car Dash Camera', category: 'Electronics', price: 3499, oldPrice: 5499, stock: 11, rating: 4.7, badge: 'Road safety', image: 'https://images.unsplash.com/photo-1626827229715-72a4c8e4b21c?auto=format&fit=crop&w=700&q=85' },
  { id: 41, name: 'Premium Gaming Chair', category: 'Lifestyle', price: 14999, oldPrice: 21999, stock: 5, rating: 4.8, badge: 'Ergonomic', image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=700&q=85' },
]

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const mergeSeedProducts = saved => {
  if (!Array.isArray(saved)) return seedProducts
  const savedIds = new Set(saved.map(product => product.id))
  return [...saved, ...seedProducts.filter(product => !savedIds.has(product.id))]
}
const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

function App() {
  const [session, setSession] = useState(() => read('bf_session', null))
  const [users, setUsers] = useState(() => read('bf_users', [
    { name: 'Demo Customer', email: 'customer@demo.com', password: 'demo123', role: 'customer' },
    { name: 'Demo Admin', email: 'admin@demo.com', password: 'demo123', role: 'admin' },
  ]))
  const [products, setProducts] = useState(() => mergeSeedProducts(read('bf_products', seedProducts)))
  const [orders, setOrders] = useState(() => read('bf_orders', []))
  const [cart, setCart] = useState(() => read('bf_cart', []))
  const [view, setView] = useState('shop')
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [toast, setToast] = useState('')
  const [sort, setSort] = useState('featured')
  const [wishlist, setWishlist] = useState(() => read('bf_wishlist', []))
  const [quickView, setQuickView] = useState(null)
  const [saleSeconds, setSaleSeconds] = useState(8 * 60 * 60 + 42 * 60)

  useEffect(() => save('bf_products', products), [products])
  useEffect(() => save('bf_orders', orders), [orders])
  useEffect(() => save('bf_cart', cart), [cart])
  useEffect(() => save('bf_users', users), [users])
  useEffect(() => save('bf_wishlist', wishlist), [wishlist])
  useEffect(() => {
    const timer = setInterval(() => setSaleSeconds(value => value > 0 ? value - 1 : 8 * 60 * 60), 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(timer)
  }, [toast])

  const addToCart = product => {
    const existing = cart.find(item => item.id === product.id)
    if (existing && existing.qty >= product.stock) return setToast('Stock limit reached')
    setCart(existing
      ? cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...cart, { ...product, qty: 1 }])
    setToast(`${product.name} added to cart`)
  }

  const changeQty = (id, delta) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: Math.min(item.stock, item.qty + delta) } : item).filter(item => item.qty > 0))
  }

  const toggleWishlist = product => {
    const exists = wishlist.includes(product.id)
    setWishlist(exists ? wishlist.filter(id => id !== product.id) : [...wishlist, product.id])
    setToast(exists ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`)
  }

  if (!session) {
    return <AuthPage mode={authMode} setMode={setAuthMode} users={users} setUsers={setUsers} setSession={setSession} />
  }

  const filtered = products.filter(product =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    if (sort === 'low') return a.price - b.price
    if (sort === 'high') return b.price - a.price
    if (sort === 'rating') return b.rating - a.rating
    return b.rating - a.rating
  })
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const placeOrder = event => {
    event.preventDefault()
    if (!cart.length) return
    const form = new FormData(event.currentTarget)
    const order = {
      id: `BF${Date.now().toString().slice(-6)}`,
      customer: form.get('name'),
      email: session.email,
      address: form.get('address'),
      payment: form.get('payment'),
      items: cart,
      total: cartTotal,
      status: 'Placed',
      date: new Date().toLocaleDateString('en-IN'),
    }
    setOrders([order, ...orders])
    setProducts(products.map(product => {
      const item = cart.find(cartItem => cartItem.id === product.id)
      return item ? { ...product, stock: Math.max(0, product.stock - item.qty) } : product
    }))
    setCart([])
    setCartOpen(false)
    setView('orders')
    setToast(`Order ${order.id} placed successfully`)
  }

  return (
    <div className="app">
      <header className="header">
        <button className="brand" onClick={() => setView('shop')}><span>BLACK</span>FRIDAY</button>
        <label className="search-box">
          <span>⌕</span>
          <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search products" />
        </label>
        <nav>
          <button className={view === 'shop' ? 'active' : ''} onClick={() => setView('shop')}>Shop</button>
          <button className={view === 'orders' ? 'active' : ''} onClick={() => setView('orders')}>My Orders</button>
          {session.role === 'admin' && <button className={view === 'admin' ? 'active' : ''} onClick={() => setView('admin')}>Admin</button>}
        </nav>
        <button className="cart-button" onClick={() => setCartOpen(true)}>Cart <b>{cartCount}</b></button>
        <button className="avatar" title="Sign out" onClick={() => { save('bf_session', null); setSession(null); }}>{session.name.charAt(0)}</button>
      </header>

      {view === 'shop' && (
        <main>
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">THE BIGGEST SALE OF THE YEAR</p>
              <h1>UP TO <strong>70% OFF</strong></h1>
              <p>Premium brands. Unmissable prices. Limited-time deals.</p>
              <div className="countdown" aria-label="Sale countdown">
                {[
                  Math.floor(saleSeconds / 3600),
                  Math.floor((saleSeconds % 3600) / 60),
                  saleSeconds % 60,
                ].map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['HRS', 'MIN', 'SEC'][index]}</span></div>)}
              </div>
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>SHOP THE SALE</button>
            </div>
            <div className="hero-image" aria-label="Black Friday fashion sale">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=88" alt="Fashion store display" />
            </div>
          </section>

          <section className="deal-strip">
            <span>FREE DELIVERY</span><i /> <span>SECURE PAYMENTS</span><i /> <span>30-DAY RETURNS</span><i /> <span>BLACK FRIDAY SALE</span>
          </section>

          <section className="products-section" id="products">
            <div className="section-heading">
              <div><p className="eyebrow dark">DON'T MISS OUT</p><h2>Top Deals</h2></div>
              <div className="filters">
                {['All', 'Shoes', 'Audio', 'Accessories', 'Wearables', 'Bags', 'Fashion', 'Electronics', 'Lifestyle'].map(item =>
                  <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>
                )}
              </div>
            </div>
            <div className="catalog-tools">
              <span>{filtered.length} products</span>
              <label>Sort by
                <select value={sort} onChange={event => setSort(event.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to high</option>
                  <option value="high">Price: High to low</option>
                  <option value="rating">Highest rated</option>
                </select>
              </label>
            </div>
            <div className="product-grid">
              {filtered.map(product => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <span className="badge">{product.badge}</span>
                    <button className={`wishlist ${wishlist.includes(product.id) ? 'saved' : ''}`} onClick={() => toggleWishlist(product)} aria-label={`Save ${product.name}`}>♡</button>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <p className="category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <div className="rating"><span>★</span> {product.rating}</div>
                    <div className="price-row">
                      <strong>{money(product.price)}</strong>
                      <del>{money(product.oldPrice)}</del>
                    </div>
                    <div className="card-actions">
                      <button onClick={() => addToCart(product)} disabled={!product.stock}>{product.stock ? 'Add to cart' : 'Out of stock'}</button>
                      <button className="quick-button" onClick={() => setQuickView(product)} aria-label={`Quick view ${product.name}`}>Quick view</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      {view === 'orders' && <Orders orders={orders.filter(order => order.email === session.email)} />}
      {view === 'admin' && <Admin products={products} setProducts={setProducts} orders={orders} setOrders={setOrders} />}

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)} />}
      {quickView && (
        <div className="quick-modal" role="dialog" aria-modal="true" aria-label={quickView.name}>
          <button className="modal-close" onClick={() => setQuickView(null)} aria-label="Close">×</button>
          <img src={quickView.image} alt={quickView.name} />
          <div>
            <p className="eyebrow dark">{quickView.category}</p>
            <h2>{quickView.name}</h2>
            <div className="rating"><span>★</span> {quickView.rating} rating</div>
            <div className="price-row"><strong>{money(quickView.price)}</strong><del>{money(quickView.oldPrice)}</del></div>
            <p>{quickView.stock > 10 ? 'In stock and ready to ship.' : `Only ${quickView.stock} left in stock.`}</p>
            <button className="modal-cart" onClick={() => { addToCart(quickView); setQuickView(null) }} disabled={!quickView.stock}>Add to cart</button>
          </div>
        </div>
      )}
      <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="drawer-title"><h2>Your Cart</h2><button onClick={() => setCartOpen(false)}>×</button></div>
        {cart.length ? (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div><h3>{item.name}</h3><strong>{money(item.price)}</strong>
                    <div className="quantity"><button onClick={() => changeQty(item.id, -1)}>−</button><span>{item.qty}</span><button onClick={() => changeQty(item.id, 1)}>+</button></div>
                  </div>
                </div>
              ))}
            </div>
            <form className="checkout" onSubmit={placeOrder}>
              <input name="name" defaultValue={session.name} placeholder="Full name" required />
              <input name="address" placeholder="Delivery address" required />
              <select name="payment" aria-label="Payment method"><option>UPI</option><option>Credit / Debit Card</option><option>Cash on Delivery</option></select>
              <div className="cart-total"><span>Total</span><strong>{money(cartTotal)}</strong></div>
              <button type="submit">Place order</button>
            </form>
          </>
        ) : <p className="empty-cart">Your cart is empty.</p>}
      </aside>
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

function AuthPage({ mode, setMode, users, setUsers, setSession }) {
  const [error, setError] = useState('')
  const submit = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (mode === 'login') {
      const email = form.get('email').trim().toLowerCase()
      const user = users.find(item => item.email === email && item.password === form.get('password'))
      if (!user) return setError('Email or password is incorrect.')
      save('bf_session', user); setSession(user)
      return
    }
    const email = form.get('email').trim().toLowerCase()
    if (users.some(item => item.email === email)) return setError('An account with this email already exists.')
    if (form.get('password').length < 6) return setError('Password must be at least 6 characters.')
    const user = { name: form.get('name').trim(), email, password: form.get('password'), role: form.get('role') }
    setUsers([...users, user]); save('bf_session', user); setSession(user)
  }
  return (
    <main className="auth-page">
      <section className="auth-brand">
        <div className="brand large"><span>BLACK</span>FRIDAY</div>
        <p className="eyebrow">THE BIGGEST SALE</p>
        <h1>Style that<br />speaks for itself.</h1>
        <p>Discover curated fashion, electronics and everyday essentials at prices worth celebrating.</p>
      </section>
      <section className="auth-card">
        <div className="auth-tabs"><button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setError('') }}>Sign in</button><button className={mode === 'register' ? 'active' : ''} onClick={() => { setMode('register'); setError('') }}>Create account</button></div>
        <form onSubmit={submit}>
          {mode === 'register' && <label>Full name<input name="name" required /></label>}
          <label>Email<input name="email" type="email" required /></label>
          <label>Password<input name="password" type="password" required /></label>
          {mode === 'register' && <label>Account type<select name="role"><option value="customer">Customer</option><option value="admin">Admin</option></select></label>}
          {error && <p className="auth-error">{error}</p>}
          <button className="auth-submit" type="submit">{mode === 'login' ? 'Sign in' : 'Create account'}</button>
        </form>
        {mode === 'login' && <p className="demo">Demo customer: customer@demo.com / demo123<br />Demo admin: admin@demo.com / demo123</p>}
      </section>
    </main>
  )
}

function Orders({ orders }) {
  return (
    <main className="dashboard">
      <p className="eyebrow dark">PURCHASE HISTORY</p><h1>My Orders</h1>
      {!orders.length ? <div className="empty-state">No orders yet. Shop the sale to place your first order.</div> :
        orders.map(order => (
          <article className="order-card" key={order.id}>
            <div className="order-head"><div><p>ORDER</p><strong>{order.id}</strong></div><div><p>DATE</p><strong>{order.date}</strong></div><div><p>TOTAL</p><strong>{money(order.total)}</strong></div><span>{order.status}</span></div>
            <div className="order-items">{order.items.map(item => <div key={item.id}><img src={item.image} alt="" /><span>{item.name} × {item.qty}</span></div>)}</div>
            <p className="delivery">Delivering to: {order.address}</p>
          </article>
        ))}
    </main>
  )
}

function Admin({ products, setProducts, orders, setOrders }) {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0)
  const submitProduct = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setProducts([...products, {
      id: Date.now(), name: form.get('name'), category: form.get('category'), price: Number(form.get('price')),
      oldPrice: Number(form.get('price')) * 1.5, stock: Number(form.get('stock')), rating: 4.5,
      badge: 'New', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85',
    }])
    event.currentTarget.reset()
  }
  const updateStock = (id, stock) => setProducts(products.map(product => product.id === id ? { ...product, stock: Number(stock) } : product))
  return (
    <main className="dashboard admin">
      <p className="eyebrow dark">STORE MANAGEMENT</p><h1>Admin Dashboard</h1>
      <div className="stats">
        <div><p>Revenue</p><strong>{money(revenue)}</strong></div>
        <div><p>Orders</p><strong>{orders.length}</strong></div>
        <div><p>Products</p><strong>{products.length}</strong></div>
        <div><p>Low stock</p><strong>{products.filter(product => product.stock < 10).length}</strong></div>
      </div>
      <section className="admin-section"><h2>Add Product</h2><form className="add-product" onSubmit={submitProduct}>
        <input name="name" placeholder="Product name" required />
        <select name="category"><option>Shoes</option><option>Audio</option><option>Accessories</option><option>Wearables</option><option>Bags</option><option>Fashion</option><option>Electronics</option><option>Lifestyle</option></select>
        <input name="price" type="number" min="1" placeholder="Price" required />
        <input name="stock" type="number" min="0" placeholder="Stock" required />
        <button>Add product</button>
      </form></section>
      <section className="admin-section"><h2>Inventory</h2><div className="table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th></th></tr></thead>
        <tbody>{products.map(product => <tr key={product.id}><td>{product.name}</td><td>{product.category}</td><td>{money(product.price)}</td><td><input className="stock-input" type="number" min="0" value={product.stock} onChange={event => updateStock(product.id, event.target.value)} /></td><td><button className="delete" onClick={() => setProducts(products.filter(item => item.id !== product.id))}>Delete</button></td></tr>)}</tbody>
      </table></div></section>
      <section className="admin-section"><h2>Customer Orders</h2><div className="table-wrap"><table><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead>
        <tbody>{orders.map(order => <tr key={order.id}><td>{order.id}</td><td>{order.customer}</td><td>{money(order.total)}</td><td><select value={order.status} onChange={event => setOrders(orders.map(item => item.id === order.id ? { ...item, status: event.target.value } : item))}><option>Placed</option><option>Packed</option><option>Shipped</option><option>Delivered</option></select></td></tr>)}</tbody>
      </table></div></section>
    </main>
  )
}

export default App
