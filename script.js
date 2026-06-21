/* ═══════════════════════════════════════════════════════════
   BABYMOON — script.js
═══════════════════════════════════════════════════════════ */

// ── Products Data (24 items, 8 categories) ───────────────
const PRODUCTS = [
  // Clothing (5)
  { id:1,  name:'Cloud Soft Onesie Set (5-pack)', price:42.99, orig:54.99, rating:4.9, reviews:312, cat:'Clothing', emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1594726648897-f970a4907b98?w=500&h=500&fit=crop', desc:'100% organic cotton, breathable & hypoallergenic. Sizes NB–18M.' },
  { id:2,  name:'Bunny Ear Hooded Romper',        price:29.99, orig:null,  rating:4.8, reviews:198, cat:'Clothing', emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1780329942969-eb17bf426e37?w=500&h=500&fit=crop', desc:'Adorable fleece romper with detachable bunny ears. Machine washable.' },
  { id:3,  name:'Fuzzy Bear Snowsuit',             price:54.99, orig:69.99, rating:4.7, reviews:145, cat:'Clothing', emoji:'', tag:'Sale',        img:'https://images.unsplash.com/photo-1768657890500-ed3a8f808d9d?w=500&h=500&fit=crop', desc:'Ultra-warm fleece snowsuit, perfect for winter outings.' },
  { id:4,  name:'Rainbow Knit Cardigan',           price:36.99, orig:null,  rating:4.8, reviews:87,  cat:'Clothing', emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&h=500&fit=crop', desc:'Hand-knitted cardigan in pastel rainbow. 0–24 months.' },
  { id:5,  name:'Floral Sun Hat & Mittens Set',    price:22.99, orig:28.99, rating:4.6, reviews:134, cat:'Clothing', emoji:'', tag:'Sale',        img:'https://images.unsplash.com/photo-1758513422919-beafc1fb1926?w=500&h=500&fit=crop', desc:'UV-protective cotton hat with matching anti-scratch mittens.' },
  // Toys (5)
  { id:6,  name:'Rainbow Stacking Rings',          price:19.99, orig:null,  rating:4.9, reviews:407, cat:'Toys',     emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=500&fit=crop', desc:'BPA-free silicone rings in 7 colours. Develops motor skills.' },
  { id:7,  name:'Musical Elephant Plush',          price:34.99, orig:null,  rating:4.8, reviews:223, cat:'Toys',     emoji:'', tag:null,          img:'https://images.unsplash.com/photo-1557452765-5b57d100c1dc?w=500&h=500&fit=crop', desc:'Plays 3 lullabies, glowing belly night-light. Super soft.' },
  { id:8,  name:'Wooden Bead Maze',                price:27.99, orig:null,  rating:4.6, reviews:88,  cat:'Toys',     emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1725297951080-47e72ef3f788?w=500&h=500&fit=crop', desc:'Sustainably sourced beechwood. Non-toxic paint. Ages 1+.' },
  { id:9,  name:'Soft Sensory Ball Set (6pk)',     price:16.99, orig:null,  rating:4.7, reviews:319, cat:'Toys',     emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop', desc:'6 textured balls in different sizes & colours. BPA-free.' },
  { id:10, name:'Bunny Reading Book Set (6pk)',    price:22.99, orig:null,  rating:4.9, reviews:158, cat:'Toys',     emoji:'', tag:null,          img:'https://images.unsplash.com/photo-1600880291319-1a7499c191e8?w=500&h=500&fit=crop', desc:'Soft-touch board books with crinkle pages & squeaky surprises.' },
  // Nursery (4)
  { id:11, name:'Farm Animal Crib Mobile',         price:64.99, orig:79.99, rating:4.9, reviews:176, cat:'Nursery',  emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1773270834659-6ab9354858e8?w=500&h=500&fit=crop', desc:'Felt farm animals on a rotating wooden arm. Wind-up music box.' },
  { id:12, name:'Stars & Moon Night Light',        price:39.99, orig:null,  rating:4.8, reviews:294, cat:'Nursery',  emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=500&h=500&fit=crop', desc:'Projects 360° starfield. 8 colour modes, auto-off timer.' },
  { id:13, name:'Dreamy Cloud Knit Blanket',       price:44.99, orig:null,  rating:4.9, reviews:331, cat:'Nursery',  emoji:'',tag:null,          img:'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=500&h=500&fit=crop', desc:'Extra-chunky knit in 100% merino wool. 80×100 cm.' },
  { id:14, name:'Wooden Name Puzzle Board',        price:32.99, orig:null,  rating:4.7, reviews:112, cat:'Nursery',  emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1759678444821-565ff103465c?w=500&h=500&fit=crop', desc:'Personalised beechwood letter puzzle. Great for learning.' },
  // Feeding (3)
  { id:15, name:'Anti-Colic Bottle Set (4pk)',     price:32.99, orig:42.99, rating:4.9, reviews:519, cat:'Feeding',  emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1623707430616-d9f956bcac2b?w=500&h=500&fit=crop', desc:'Clinically proven vent system. BPA-free. Dishwasher safe.' },
  { id:16, name:'Silicone Weaning Spoon Set',      price:16.99, orig:null,  rating:4.7, reviews:382, cat:'Feeding',  emoji:'', tag:'Sale',        img:'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop', desc:'Soft-tip spoons with heat-sensing colour change. 6-pack.' },
  { id:17, name:'Suction Plate & Bowl Set',        price:24.99, orig:32.99, rating:4.8, reviews:267, cat:'Feeding',  emoji:'', tag:'Sale',       img:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop', desc:'Stays put! 100% food-grade silicone. 3 colour options.' },
  // Bath (3)
  { id:18, name:'Bamboo Hooded Towel + Mitt',      price:28.99, orig:null,  rating:4.8, reviews:142, cat:'Bath',     emoji:'', tag:null,          img:'https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?w=500&h=500&fit=crop', desc:'Ultra-absorbent bamboo terry with cute bear ears hood.' },
  { id:19, name:'Lavender Baby Wash Set',          price:24.99, orig:32.99, rating:4.6, reviews:207, cat:'Bath',     emoji:'', tag:'Sale',        img:'https://images.unsplash.com/photo-1747886803344-5c5d24f859b5?w=500&h=500&fit=crop', desc:'Tear-free shampoo, body wash & lotion. Dermatologist tested.' },
  { id:20, name:'Foldable Baby Bath Tub',          price:49.99, orig:64.99, rating:4.7, reviews:193, cat:'Bath',     emoji:'', tag:'Sale',        img:'https://images.unsplash.com/photo-1609220361580-31017d9da806?w=500&h=500&fit=crop', desc:'Ergonomic non-slip design. Fits newborn to 12 months.' },
  // Gifts (2)
  { id:21, name:'New Baby Gift Hamper',            price:79.99, orig:null,  rating:5.0, reviews:93,  cat:'Gifts',    emoji:'', tag:'Limited',     img:'https://images.unsplash.com/photo-1704241370920-e67ce744d8cd?w=500&h=500&fit=crop', desc:'Onesie, blanket, toy, wash set & greeting card in a gift box.' },
  { id:22, name:'Milestone Sticker Set (50pc)',    price:12.99, orig:null,  rating:4.8, reviews:466, cat:'Gifts',    emoji:'', tag:'New',         img:'https://images.unsplash.com/photo-1508883062954-f76d6ac51adf?w=500&h=500&fit=crop', desc:'Capture every first! Monthly, weekly & special occasion stickers.' },
  // Safety (2)
  { id:23, name:'Baby Monitor Pro (HD + WiFi)',    price:89.99, orig:119.99,rating:4.9, reviews:341, cat:'Safety',   emoji:'', tag:'Best Seller', img:'https://images.unsplash.com/photo-1715869428589-366729e7fdcd?w=500&h=500&fit=crop', desc:'1080p live stream, temperature sensor & night vision. 2-way audio.' },
  { id:24, name:'Corner & Edge Protector Set',     price:14.99, orig:null,  rating:4.6, reviews:508, cat:'Safety',   emoji:'', tag:null,         img:'https://images.unsplash.com/photo-1671572899915-340a81395c36?w=500&h=500&fit=crop', desc:'Self-adhesive foam guards. 20-piece set, fits all corners & edges.' },
];

const TAG_CLASS = { 'Best Seller':'tag-bestseller', 'New':'tag-new', 'Sale':'tag-sale', 'Limited':'tag-limited' };
const CATS = ['All','Clothing','Toys','Nursery','Feeding','Bath','Gifts','Safety'];

// ── State ────────────────────────────────────────────────
let cart       = {};
let wishlist   = new Set();
let activeCat  = 'All';
let searchQ    = '';
let justAdded  = null;
let minPrice   = 0;
let maxPrice   = 9999;

// ── Helpers ──────────────────────────────────────────────
function starsHTML(r) {
  return [1,2,3,4,5].map(i =>
    `<span class="star${i<=Math.round(r)?' filled':''}"">★</span>`
  ).join('');
}
function cartTotal()    { return Object.entries(cart).reduce((s,[id,q])=>s+PRODUCTS.find(p=>p.id==id).price*q,0); }
function cartCount()    { return Object.values(cart).reduce((s,q)=>s+q,0); }
function cartShipping() { return cartTotal()>=50?0:4.99; }

// ── Render Products ──────────────────────────────────────
function renderProducts() {
  const q = searchQ.toLowerCase();
  let list = PRODUCTS.filter(p => {
    const matchCat   = activeCat==='All' || p.cat===activeCat;
    const matchQ      = !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    const matchPrice  = p.price>=minPrice && p.price<=maxPrice;
    return matchCat && matchQ && matchPrice;
  });

  const sortVal = document.getElementById('sortSelect')?.value || 'default';
  if (sortVal==='price-asc')  list = [...list].sort((a,b)=>a.price-b.price);
  if (sortVal==='price-desc') list = [...list].sort((a,b)=>b.price-a.price);
  if (sortVal==='rating')     list = [...list].sort((a,b)=>b.rating-a.rating);
  if (sortVal==='reviews')    list = [...list].sort((a,b)=>b.reviews-a.reviews);

  const grid = document.getElementById('productGrid');
  const nop  = document.getElementById('noProducts');

  if (!list.length) {
    grid.innerHTML = '';
    nop.classList.remove('hidden');
    return;
  }
  nop.classList.add('hidden');

  grid.innerHTML = list.map(p => {
    const wl    = wishlist.has(p.id);
    const added = justAdded===p.id;
    const disc  = p.orig ? Math.round((1-p.price/p.orig)*100) : 0;
    return `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.tag?`<span class="product-tag ${TAG_CLASS[p.tag]}">${p.tag}${disc?` −${disc}%`:''}</span>`:''}
        <button class="quick-view-btn" onclick="openModal(${p.id})">View</button>
      </div>
      <div class="product-info">
        <div class="product-cat"><span>${p.cat}</span></div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="stars">${starsHTML(p.rating)}<span class="reviews-count">(${p.reviews})</span></div>
        <div class="product-footer">
          <div class="price-wrap">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            ${p.orig?`<span class="price-original">$${p.orig.toFixed(2)}</span>`:''}
          </div>
          <button class="add-btn${added?' added':''}" onclick="addToCart(${p.id})">
            ${added?'Added ✓':'+ Cart'}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Cart ─────────────────────────────────────────────────
function addToCart(id) {
  cart[id] = (cart[id]||0)+1;
  justAdded = id;
  const p = PRODUCTS.find(x=>x.id==id);
  showToast(`${p.name} added to cart!`);
  setTimeout(()=>{ justAdded=null; renderProducts(); },1500);
  renderProducts();
  updateCartUI();
  openCart();
}
function updateQty(id,delta) {
  const nq = (cart[id]||0)+delta;
  if (nq<=0) delete cart[id]; else cart[id]=nq;
  updateCartUI();
}
function removeItem(id) { delete cart[id]; updateCartUI(); }
function openCart()    { document.getElementById('cartOverlay').classList.add('open'); }
function closeCartFn() { document.getElementById('cartOverlay').classList.remove('open'); }
function toggleCart()  { document.getElementById('cartOverlay').classList.toggle('open'); }

function updateCartUI() {
  const count    = cartCount();
  const total    = cartTotal();
  const shipping = cartShipping();

  // Badge
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.classList.toggle('hidden', count===0);

  const lbl = document.getElementById('cartCountLabel');
  lbl.textContent = `(${count})`;
  lbl.classList.toggle('hidden', count===0);

  // Progress bar
  const progDiv   = document.getElementById('cartProgress');
  const freeBanner= document.getElementById('freeShippingBanner');
  if (count>0 && total<50) {
    progDiv.classList.remove('hidden');
    freeBanner.classList.add('hidden');
    document.getElementById('progressAmt').textContent = `$${(50-total).toFixed(2)}`;
    document.getElementById('progressFill').style.width = `${Math.min((total/50)*100,100)}%`;
  } else if (total>=50 && count>0) {
    progDiv.classList.add('hidden');
    freeBanner.classList.remove('hidden');
  } else {
    progDiv.classList.add('hidden');
    freeBanner.classList.add('hidden');
  }

  // Body
  const body   = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (count===0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🌙</div>
        <h3>Your cart is empty</h3>
        <p>Add some adorable items for your little one!</p>
        <button class="btn-primary" style="font-size:19px;padding:10px 22px;margin-top:8px" onclick="toggleCart();scrollToId('products')">Start Shopping ✨</button>
      </div>`;
    footer.classList.add('hidden');
    return;
  }

  body.innerHTML = `<div class="cart-items">${
    Object.entries(cart).map(([id,qty])=>{
      const p = PRODUCTS.find(x=>x.id==id);
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" />
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">$${p.price.toFixed(2)}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="updateQty(${p.id},1)">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-total">$${(p.price*qty).toFixed(2)}</div>
          <button class="remove-btn" onclick="removeItem(${p.id})">remove</button>
        </div>
      </div>`;
    }).join('')
  }</div>`;

  footer.classList.remove('hidden');
  document.getElementById('subtotalAmt').textContent = `$${total.toFixed(2)}`;
  document.getElementById('shippingAmt').innerHTML = shipping===0
    ? `<span style="color:#059669;font-weight:700">FREE 🎉</span>`
    : `$${shipping.toFixed(2)}`;
  document.getElementById('totalAmt').textContent = `$${(total+shipping).toFixed(2)}`;
  document.getElementById('checkoutBtn').textContent = `Checkout — $${(total+shipping).toFixed(2)} 🌙`;
}

// ── Filters ──────────────────────────────────────────────
function setCatFilter(cat, el) {
  activeCat = cat;
  document.querySelectorAll('.cat-tab').forEach(t=>t.classList.remove('active'));
  if (el) el.classList.add('active');
  else document.querySelectorAll('.cat-tab').forEach(t=>{
    if (t.dataset.cat===cat) t.classList.add('active');
  });
  scrollToId('products');
  renderProducts();
}

function filterProducts(val) {
  searchQ = val!==undefined ? val : (document.getElementById('searchInput')?.value||'');
  const di = document.getElementById('searchInput');
  if (di && val!==undefined) di.value = val;
  renderProducts();
}

function setPriceFilter(min, max, el) {
  minPrice = min;
  maxPrice = max;
  document.querySelectorAll('.price-btn').forEach(b=>b.classList.remove('active'));
  if (el) el.classList.add('active');

  // Keep the range slider in sync with the chosen preset
  const low  = document.getElementById('rangeLow');
  const high = document.getElementById('rangeHigh');
  if (low && high) {
    low.value  = min;
    high.value = Math.min(max, 120);
    updateRangeUI();
  }
  renderProducts();
}

function onRangeInput() {
  const low  = document.getElementById('rangeLow');
  const high = document.getElementById('rangeHigh');
  let lo = parseInt(low.value, 10);
  let hi = parseInt(high.value, 10);
  if (lo > hi) { [lo, hi] = [hi, lo]; }

  minPrice = lo;
  maxPrice = hi >= 120 ? 9999 : hi;

  document.querySelectorAll('.price-btn').forEach(b=>b.classList.remove('active'));

  updateRangeUI(lo, hi);
  renderProducts();
}

function updateRangeUI(lo, hi) {
  const low  = document.getElementById('rangeLow');
  const high = document.getElementById('rangeHigh');
  lo = lo ?? parseInt(low.value, 10);
  hi = hi ?? parseInt(high.value, 10);

  document.getElementById('rangeMin').textContent = `$${lo}`;
  document.getElementById('rangeMax').textContent = hi>=120 ? '$120+' : `$${hi}`;

  const track = document.getElementById('rangeTrack');
  const fill  = document.getElementById('rangeFill');
  if (track && fill) {
    const max = 120;
    const left  = (lo/max)*100;
    const right = 100-(hi/max)*100;
    fill.style.left  = `${left}%`;
    fill.style.right = `${right}%`;
  }
}

// ── Wishlist ─────────────────────────────────────────────
function toggleWishlist(id) {
  wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
  const wc = document.getElementById('wishCount');
  if (wc) wc.textContent = wishlist.size;
  renderProducts();
}

// ── Account ──────────────────────────────────────────────
let currentUser = null;
let registeredUsers = {};
try { registeredUsers = JSON.parse(localStorage.getItem('bm_users') || '{}'); } catch(e) { registeredUsers = {}; }

function saveUsers() {
  try { localStorage.setItem('bm_users', JSON.stringify(registeredUsers)); } catch(e) {}
}

function toggleAccountMenu() {
  document.getElementById('accountDropdown').classList.toggle('open');
}
document.addEventListener('click', e => {
  const wrap = document.getElementById('accountWrap');
  const dd   = document.getElementById('accountDropdown');
  if (dd.classList.contains('open') && !wrap.contains(e.target)) dd.classList.remove('open');
});

function showLogin() {
  document.getElementById('acctLoginForm').classList.remove('hidden');
  document.getElementById('acctRegisterForm').classList.add('hidden');
  document.getElementById('acctForgotForm').classList.add('hidden');
}
function showRegister() {
  document.getElementById('acctLoginForm').classList.add('hidden');
  document.getElementById('acctRegisterForm').classList.remove('hidden');
  document.getElementById('acctForgotForm').classList.add('hidden');
}
function showForgot() {
  document.getElementById('acctLoginForm').classList.add('hidden');
  document.getElementById('acctRegisterForm').classList.add('hidden');
  document.getElementById('acctForgotForm').classList.remove('hidden');
}

function togglePw() {
  const pw  = document.getElementById('acctPassword');
  const btn = document.getElementById('pwToggle');
  const show = pw.type === 'password';
  pw.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁';
}

function handleLogin() {
  const email = document.getElementById('acctEmail').value.trim().toLowerCase();
  const pw    = document.getElementById('acctPassword').value;
  if (!email || !pw) { showToast('Please enter your email and password'); return; }
  const user = registeredUsers[email];
  if (!user || user.password !== pw) { showToast('Incorrect email or password'); return; }
  loginAs(user);
  showToast(`Welcome back, ${user.name.split(' ')[0]}!`);
}

function handleRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pw    = document.getElementById('regPassword').value;
  if (!name || !email || !pw) { showToast('Please fill in all fields'); return; }
  if (!email.includes('@') || !email.includes('.')) { showToast('Please enter a valid email'); return; }
  if (pw.length < 6) { showToast('Password must be at least 6 characters'); return; }
  if (registeredUsers[email]) { showToast('An account with this email already exists'); return; }

  registeredUsers[email] = { name, email, password: pw };
  saveUsers();
  loginAs(registeredUsers[email]);
  showToast(`Welcome, ${name.split(' ')[0]}! Your account has been created 🎉`);
}

function handleForgot() {
  const email = document.getElementById('forgotEmail').value.trim();
  if (!email) { showToast('Please enter your email'); return; }
  showToast('If that email exists, a reset link has been sent');
  showLogin();
}

function handleGoogleLogin() {
  loginAs({ name: 'Google User', email: 'you@gmail.com' });
  showToast('Signed in with Google');
}

function loginAs(user) {
  currentUser = user;
  document.getElementById('guestView').classList.add('hidden');
  document.getElementById('userView').classList.remove('hidden');
  document.getElementById('userName').textContent  = `Hello, ${user.name.split(' ')[0]}!`;
  document.getElementById('userEmail2').textContent = user.email;
  document.getElementById('accountDot').classList.remove('hidden');
  const wc = document.getElementById('wishCount');
  if (wc) wc.textContent = wishlist.size;

  ['acctEmail','acctPassword','regName','regEmail','regPassword','forgotEmail'].forEach(id=>{
    const el = document.getElementById(id); if (el) el.value = '';
  });
  showLogin();
}

function handleSignOut() {
  currentUser = null;
  document.getElementById('userView').classList.add('hidden');
  document.getElementById('guestView').classList.remove('hidden');
  document.getElementById('accountDot').classList.add('hidden');
  document.getElementById('accountDropdown').classList.remove('open');
  showToast('Signed out');
}

// ── Orders ───────────────────────────────────────────────
function showOrders() {
  const body = document.getElementById('ordersBody');
  const header = document.querySelector('#ordersOverlay .orders-header h2');
  if (header) header.textContent = '📦 My Orders';
  body.innerHTML = `
    <div style="text-align:center;padding:40px 20px;color:var(--muted)">
      <p style="font-size:40px;margin-bottom:10px">📦</p>
      <p>You haven't placed any orders yet.</p>
    </div>`;
  document.getElementById('ordersOverlay').classList.add('open');
  document.getElementById('accountDropdown').classList.remove('open');
}
function closeOrders() {
  document.getElementById('ordersOverlay').classList.remove('open');
}

// ── Wishlist Panel ───────────────────────────────────────
function showWishlistPanel() {
  const items = PRODUCTS.filter(p => wishlist.has(p.id));
  const body = document.getElementById('ordersBody');
  const header = document.querySelector('#ordersOverlay .orders-header h2');
  if (header) header.textContent = '❤️ My Wishlist';
  body.innerHTML = items.length ? items.map(p => `
    <div style="display:flex;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)">
      <img src="${p.img}" alt="${p.name}" style="width:60px;height:60px;border-radius:10px;object-fit:cover" />
      <div style="flex:1">
        <div style="font-weight:700">${p.name}</div>
        <div style="color:var(--muted)">$${p.price.toFixed(2)}</div>
      </div>
      <button class="add-btn" onclick="addToCart(${p.id})">+ Cart</button>
    </div>`).join('') : `
    <div style="text-align:center;padding:40px 20px;color:var(--muted)">
      <p style="font-size:40px;margin-bottom:10px">🤍</p>
      <p>Your wishlist is empty.</p>
    </div>`;
  document.getElementById('ordersOverlay').classList.add('open');
  document.getElementById('accountDropdown').classList.remove('open');
}

// ── Search ───────────────────────────────────────────────
function openSearch() {
  document.getElementById('searchBox').classList.remove('hidden');
  document.getElementById('searchToggle').classList.add('hidden');
  document.getElementById('searchInput').focus();
}
function closeSearch() {
  document.getElementById('searchBox').classList.add('hidden');
  document.getElementById('searchToggle').classList.remove('hidden');
  searchQ = '';
  document.getElementById('searchInput').value = '';
  renderProducts();
}

// ── Mobile Menu ──────────────────────────────────────────
function toggleMenu(forceClose) {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburgerBtn');
  const open = menu.classList.contains('open');
  if (forceClose || open) {
    menu.classList.remove('open'); btn.classList.remove('open');
  } else {
    menu.classList.add('open');   btn.classList.add('open');
  }
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburgerBtn');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target))
    toggleMenu(true);
});

// ── Newsletter ───────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  document.getElementById('nlForm').classList.add('hidden');
  document.getElementById('nlSuccess').classList.remove('hidden');
}

// ── Scroll ───────────────────────────────────────────────
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior:'smooth' });
  toggleMenu(true);
}

// ── Toast ────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}

// ── Back to Top ──────────────────────────────────────────
window.addEventListener('scroll', ()=>{
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('visible', window.scrollY > 400);
});

// ── Product Detail Modal ─────────────────────────────────
const DETAILS = {
  1:  { sizes:['NB','0–3M','3–6M','6–12M','12–18M'], material:'100% Organic Cotton (GOTS certified)', age:'Newborn – 18M', care:'Machine wash 30°C · Tumble dry low', features:['Hypoallergenic & breathable','Snap buttons for easy changing','Pre-washed, shrink resistant','OEKO-TEX® Standard 100 certified'], inStock:true  },
  2:  { sizes:['0–3M','3–6M','6–12M','12–18M'],       material:'Fleece (80% Cotton, 20% Polyester)',  age:'0 – 18M',       care:'Machine wash 30°C · Do not tumble dry',  features:['Detachable bunny ears hood','Full zip for quick changes','Warm & cosy fleece lining','Available in 4 pastel colours'], inStock:true  },
  3:  { sizes:['0–6M','6–12M','12–18M'],               material:'Fleece outer, cotton lining',         age:'0 – 18M',       care:'Hand wash cold · Flat dry',              features:['Double-zip for nappy access','Fold-over scratch mittens included','Windproof outer shell','Bear ear hood'], inStock:true  },
  4:  { sizes:['NB','0–3M','3–6M','6–12M','12–24M'],  material:'100% Merino Wool',                    age:'NB – 24M',      care:'Hand wash cold · Dry flat',              features:['Hand-knitted in artisan workshops','Thermoregulating merino fibre','Wooden button fastening','Pastel rainbow palette'], inStock:true  },
  5:  { sizes:['One Size (0–12M)'],                    material:'100% Organic Cotton',                 age:'0 – 12M',       care:'Machine wash 30°C',                      features:['UPF 50+ sun protection','Elasticated brim for secure fit','Anti-scratch mittens included','Adjustable chin strap'], inStock:false },
  6:  { sizes:['One Size'],                            material:'Food-grade BPA-free silicone',        age:'6M+',           care:'Dishwasher safe · Top rack',             features:['7 ring sizes & colours','Develops grip & motor skills','Soft edges, choke-safe base','Easy to clean & sterilise'], inStock:true  },
  7:  { sizes:['One Size'],                            material:'Super-soft plush polyester',          age:'0M+',           care:'Spot clean only',                        features:['3 built-in lullabies','Glowing belly night-light','Automatic 20-min shut-off','Squeezable belly activates sound'], inStock:true  },
  8:  { sizes:['One Size'],                            material:'FSC-certified beechwood, non-toxic paint', age:'12M+',    care:'Wipe clean with damp cloth',             features:['5 colour-coded bead paths','Stimulates problem-solving','Smooth rounded edges','Sturdy weighted base'], inStock:true  },
  9:  { sizes:['One Size'],                            material:'BPA-free food-grade silicone',        age:'3M+',           care:'Dishwasher safe',                        features:['6 textures for sensory play','Soft & chew-safe','Easy to grasp for small hands','Promotes tactile development'], inStock:true  },
  10: { sizes:['One Size'],                            material:'Soft-touch board, fabric pages',      age:'0M+',           care:'Wipe clean',                             features:['6 books in a gift set','Crinkle & squeaky surprise pages','High-contrast black & white designs','Encourages language development'], inStock:true  },
  11: { sizes:['Universal crib fit'],                  material:'Felt, beechwood arm, cotton thread',  age:'0M+',           care:'Spot clean felt only',                   features:['6 felt farm characters','360° rotating arm','Wind-up music box (3 melodies)','Easy ceiling hook install'], inStock:true  },
  12: { sizes:['One Size'],                            material:'ABS plastic, LED',                    age:'0M+',           care:'Wipe clean',                             features:['Projects 360° starfield onto ceiling','8 colour modes','30 / 60 / 90 min auto-off timer','Remote control included'], inStock:true  },
  13: { sizes:['80×100 cm'],                           material:'100% Merino Wool',                    age:'All ages',      care:'Hand wash cold · Dry flat',              features:['Extra-chunky arm-knit style','Thermoregulating & breathable','Available in 5 cloud colours','Ethically sourced wool'], inStock:true  },
  14: { sizes:['26 letter tiles'],                     material:'FSC-certified beechwood',             age:'12M+',          care:'Wipe clean',                             features:['Personalised with any name','Non-toxic water-based paint','Large chunky pieces','Develops letter recognition'], inStock:true  },
  15: { sizes:['150ml · 260ml'],                       material:'BPA & BPS-free PP plastic',           age:'0M+',           care:'Dishwasher safe',                        features:['Clinically proven vent system','Reduces colic, wind & reflux','Slow & fast flow teats included','4-pack value set'], inStock:true  },
  16: { sizes:['One Size'],                            material:'Food-grade silicone',                 age:'4M+',           care:'Dishwasher safe',                        features:['Heat-sensing colour change','Super-soft tip for sensitive gums','Ergonomic long handle','6-piece set in pastel colours'], inStock:true  },
  17: { sizes:['Plate + Bowl + Lid'],                  material:'100% food-grade silicone',            age:'6M+',           care:'Dishwasher safe',                        features:['Strong suction base stays put','Divided plate sections','Microwave & freezer safe','3 colour options'], inStock:true  },
  18: { sizes:['70×140 cm'],                           material:'100% Organic Bamboo Terry',           age:'0M+',           care:'Machine wash 40°C',                      features:['Bear ear hood','Ultra-absorbent bamboo','Includes bath mitt','Hypoallergenic & antibacterial'], inStock:true  },
  19: { sizes:['250ml each'],                          material:'Natural & organic plant extracts',    age:'0M+',           care:'N/A',                                    features:['Tear-free formula','Shampoo, body wash & lotion set','Dermatologist & allergy tested','Calming lavender scent'], inStock:true  },
  20: { sizes:['NB to 12M'],                           material:'Polypropylene, soft-touch lining',    age:'NB – 12M',      care:'Wipe clean · Air dry',                   features:['Ergonomic angled support','Non-slip textured base','Fold flat for storage','Drain plug for quick empty'], inStock:false },
  21: { sizes:['Gift Box'],                            material:'Mixed premium materials',             age:'NB+',           care:'See individual items',                   features:['Cloud onesie + knit blanket','Sensory toy + baby wash set','Personalised greeting card','Luxury gift box with ribbon'], inStock:true  },
  22: { sizes:['50 stickers'],                         material:'Vinyl sticker, waterproof',           age:'N/A',           care:'N/A',                                    features:['Monthly milestones (0–12)','Weekly milestones (1–8 weeks)','Special firsts (smile, laugh, crawl…)','Works on onesies or cards'], inStock:true  },
  23: { sizes:['Camera + App'],                        material:'ABS plastic, glass lens',             age:'0M+',           care:'Wipe clean',                             features:['1080p HD live stream','Night vision (up to 5m)','Room temperature sensor','2-way audio talk-back','App alerts & remote pan/tilt'], inStock:true  },
  24: { sizes:['20-piece set'],                        material:'Soft EVA foam',                       age:'0M+',           care:'Wipe clean',                             features:['Fits any corner/edge shape','Self-adhesive 3M backing','Clear colour — nearly invisible','Non-toxic child-safe foam'], inStock:true  },
};

function openModal(id) {
  const p  = PRODUCTS.find(x=>x.id===id);
  const d  = DETAILS[id];
  const wl = wishlist.has(id);
  const disc = p.orig ? Math.round((1-p.price/p.orig)*100) : 0;

  document.getElementById('modalOverlay').innerHTML = `
  <div class="modal-backdrop" onclick="closeModal()"></div>
  <div class="modal-box" role="dialog" aria-modal="true">

    <!-- Close -->
    <button class="modal-close" onclick="closeModal()">✕</button>

    <!-- Left: Image -->
    <div class="modal-img-col">
      <div class="modal-img-wrap">
        <img src="${p.img.replace('w=500&h=500','w=800&h=800')}" alt="${p.name}" />
        ${p.tag?`<span class="product-tag ${TAG_CLASS[p.tag]} modal-tag">${p.tag}${disc?` −${disc}%`:''}</span>`:''}
      </div>
      <div class="modal-stock ${d.inStock?'in':'out'}">
        ${d.inStock?' In Stock · Ships within 48 hrs':' Out of Stock · Notify me'}
      </div>
    </div>

    <!-- Right: Info -->
    <div class="modal-info-col">
      <div class="modal-cat">${p.cat}</div>
      <h2 class="modal-title">${p.name}</h2>

      <!-- Rating -->
      <div class="modal-rating">
        <div class="stars">${starsHTML(p.rating)}</div>
        <span class="modal-rating-num">${p.rating}</span>
        <span class="modal-reviews">(${p.reviews} reviews)</span>
      </div>

      <!-- Price -->
      <div class="modal-price-row">
        <span class="modal-price-current">$${p.price.toFixed(2)}</span>
        ${p.orig?`<span class="modal-price-orig">$${p.orig.toFixed(2)}</span><span class="modal-discount">Save ${disc}%</span>`:''}
      </div>

      <!-- Description -->
      <p class="modal-desc">${p.desc}</p>

      <!-- Details Grid -->
      <div class="modal-details-grid">
        <div class="modal-detail-item">
          <span class="modal-detail-label"> Age</span>
          <span class="modal-detail-val">${d.age}</span>
        </div>
        <div class="modal-detail-item">
          <span class="modal-detail-label"> Material</span>
          <span class="modal-detail-val">${d.material}</span>
        </div>
        <div class="modal-detail-item">
          <span class="modal-detail-label"> Size / Qty</span>
          <span class="modal-detail-val">${d.sizes.join(' · ')}</span>
        </div>
        <div class="modal-detail-item">
          <span class="modal-detail-label"> Care</span>
          <span class="modal-detail-val">${d.care}</span>
        </div>
      </div>

      <!-- Features -->
      <div class="modal-features">
        <div class="modal-features-title"> Key Features</div>
        <ul class="modal-features-list">
          ${d.features.map(f=>`<li>${f}</li>`).join('')}
        </ul>
      </div>

      <!-- Actions -->
      <div class="modal-actions">
        <button class="modal-add-btn" onclick="addToCart(${p.id});closeModal()">
          🛒 Add to Cart — $${p.price.toFixed(2)}
        </button>
        <button class="modal-wish-btn" onclick="toggleWishlist(${p.id});this.textContent=wishlist.has(${p.id})?'❤️ Saved':'🤍 Wishlist'">
          ${wl?'❤️ Saved':'🤍 Wishlist'}
        </button>
      </div>

      <!-- Promises mini -->
      <div class="modal-promises">
        <span> Free shipping over $50</span>
        <span> 30-day returns</span>
        <span> Free gift wrap</span>
      </div>
    </div>

  </div>`;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Init ─────────────────────────────────────────────────
updateRangeUI();
renderProducts();
updateCartUI();
