/**
 * LIVORA — Haute Jewels & Bespoke Couture
 * Master Interactive Logic, Persistent Cart/Wishlist & Android App Engine
 */

// Default Initial Cart Items if storage is empty
const INITIAL_CART = [
  {
    id: "item-1",
    name: "Avela 18k Solitaire Choker",
    price: 699,
    qty: 1,
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "item-2",
    name: "Noor Silk Embroidered Gown",
    price: 549,
    qty: 1,
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "item-3",
    name: "Lume Emerald Solitaire Ring",
    price: 399,
    qty: 1,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=200&auto=format&fit=crop"
  }
];

const INITIAL_WISHLIST = [
  {
    id: "item-4",
    name: "Orbi Baroque Pearl Drops",
    price: 89,
    img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "item-5",
    name: "Serene Organza Midi Dress",
    price: 45,
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop"
  }
];

// ==========================================
// 1. STATE ACCESSORS (LOCAL STORAGE)
// ==========================================
function getCart() {
  const saved = localStorage.getItem('livora_cart');
  if (!saved) {
    localStorage.setItem('livora_cart', JSON.stringify(INITIAL_CART));
    return INITIAL_CART;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('livora_cart', JSON.stringify(cart));
  updateBadges();
  renderCartDrawer();
}

function getWishlist() {
  const saved = localStorage.getItem('livora_wishlist');
  if (!saved) {
    localStorage.setItem('livora_wishlist', JSON.stringify(INITIAL_WISHLIST));
    return INITIAL_WISHLIST;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem('livora_wishlist', JSON.stringify(wishlist));
  updateBadges();
}

// ==========================================
// 2. CART OPERATIONS
// ==========================================
function addToCart(name, price, img, id = null) {
  const cart = getCart();
  const itemId = id || 'prod-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const existing = cart.find(item => item.id === itemId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: itemId,
      name: name,
      price: Number(price),
      qty: 1,
      img: img
    });
  }

  saveCart(cart);
  showToast(`Added "${name}" ($${price}) to Bag! ✨`);

  // Animate cart icons
  const badges = document.querySelectorAll('.cart-counter-badge');
  badges.forEach(b => {
    if (window.gsap) {
      gsap.fromTo(b, { scale: 1.5 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
    }
  });
}

function removeFromCart(id) {
  let cart = getCart();
  const removedItem = cart.find(i => i.id === id);
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  if (removedItem) {
    showToast(`Removed "${removedItem.name}" from Bag`);
  }
  // If we are on cart.html, trigger its specific render
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
}

function updateCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart(cart);
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
}

function calculateCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function calculateCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.qty, 0);
}

// ==========================================
// 3. WISHLIST OPERATIONS
// ==========================================
function toggleWishlist(name, price, img, btnElement = null, id = null) {
  const wishlist = getWishlist();
  const itemId = id || 'prod-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const index = wishlist.findIndex(item => item.id === itemId || item.name === name);

  let icon = null;
  if (btnElement) {
    icon = btnElement.querySelector('i');
  }

  if (index > -1) {
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    showToast(`Removed "${name}" from Wishlist`);
    if (icon) {
      icon.classList.remove('fa-solid', 'text-red-500');
      icon.classList.add('fa-regular');
    }
  } else {
    wishlist.push({
      id: itemId,
      name: name,
      price: Number(price),
      img: img
    });
    saveWishlist(wishlist);
    showToast(`Added "${name}" to Wishlist ❤️`);
    if (icon) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid', 'text-red-500');
      if (window.gsap) {
        gsap.fromTo(icon, { scale: 0.6 }, { scale: 1.4, duration: 0.25, yoyo: true, repeat: 1 });
      }
    }
  }

  if (typeof renderWishlistPage === 'function') {
    renderWishlistPage();
  }
}

// ==========================================
// 4. BADGE & DRAWER RENDERING
// ==========================================
function updateBadges() {
  const count = calculateCartCount();
  const total = calculateCartTotal();
  const wishlistCount = getWishlist().length;

  // Cart Badges
  document.querySelectorAll('.cart-counter-badge').forEach(el => {
    el.innerText = count;
  });

  // Cart Header Total
  document.querySelectorAll('.cart-header-total').forEach(el => {
    el.innerText = `$${total.toLocaleString()}`;
  });

  // Wishlist Badges
  document.querySelectorAll('.wishlist-counter-badge').forEach(el => {
    el.innerText = wishlistCount;
  });

  // Drawer item count & subtotal
  const drawerCount = document.getElementById('drawer-item-count');
  if (drawerCount) drawerCount.innerText = count;

  const drawerSubtotal = document.getElementById('drawer-subtotal');
  if (drawerSubtotal) drawerSubtotal.innerText = `$${total.toLocaleString()}.00`;
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <div class="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-3 text-stone-400">
          <i class="fa-solid fa-bag-shopping text-2xl"></i>
        </div>
        <p class="font-serif text-lg text-livora-dark">Your bag is empty</p>
        <p class="text-xs text-stone-500 mt-1">Discover handcrafted diamonds & bespoke gowns.</p>
        <a href="fine-jewelry.html" class="inline-block mt-4 px-6 py-2 bg-livora-dark text-white rounded-full text-xs font-semibold hover:bg-livora-sage transition">Explore Jewels</a>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="flex gap-3.5 pb-4 border-b border-stone-100 items-center">
      <img src="${item.img}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover bg-stone-100 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-semibold text-livora-dark truncate">${item.name}</h4>
        <div class="text-xs font-bold text-livora-dark mt-0.5">$${item.price.toLocaleString()}</div>
        <div class="flex items-center justify-between mt-2 text-xs">
          <div class="flex items-center border border-stone-200 rounded-md">
            <button onclick="updateCartQty('${item.id}', -1)" class="px-2 py-0.5 text-stone-600 hover:bg-stone-100 font-bold">-</button>
            <span class="px-2 font-medium">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" class="px-2 py-0.5 text-stone-600 hover:bg-stone-100 font-bold">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-[11px] text-stone-400 hover:text-red-500">
            <i class="fa-regular fa-trash-can mr-1"></i>Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 5. DRAWER TOGGLES & MODALS
// ==========================================
function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-panel');
  if (!drawer || !panel) return;

  const isOpen = !drawer.classList.contains('pointer-events-none');
  if (isOpen) {
    panel.classList.add('translate-x-full');
    drawer.classList.add('opacity-0');
    setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
  } else {
    renderCartDrawer();
    drawer.classList.remove('pointer-events-none');
    drawer.classList.remove('opacity-0');
    panel.classList.remove('translate-x-full');
  }
}

function toggleMobileDrawer() {
  let drawer = document.getElementById('mobile-nav-drawer');
  if (!drawer) {
    initMobileDrawer();
    drawer = document.getElementById('mobile-nav-drawer');
  }
  const panel = document.getElementById('mobile-nav-panel');
  if (!drawer || !panel) return;

  const isOpen = !drawer.classList.contains('pointer-events-none');
  if (isOpen) {
    panel.classList.add('-translate-x-full');
    drawer.classList.add('opacity-0');
    setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
  } else {
    drawer.classList.remove('pointer-events-none');
    drawer.classList.remove('opacity-0');
    panel.classList.remove('-translate-x-full');
  }
}

function initMobileDrawer() {
  if (document.getElementById('mobile-nav-drawer')) return;

  const drawer = document.createElement('div');
  drawer.id = 'mobile-nav-drawer';
  drawer.className = 'fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 opacity-0';
  drawer.innerHTML = `
    <div onclick="toggleMobileDrawer()" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div id="mobile-nav-panel" class="absolute left-0 top-0 bottom-0 w-[84%] max-w-xs bg-white shadow-2xl flex flex-col justify-between transform -translate-x-full transition-transform duration-300 pointer-events-auto overflow-y-auto">
      
      <!-- Top Brand Bar -->
      <div class="p-4 bg-[#162E25] text-white flex items-center justify-between border-b border-white/10">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#C5A880]">
            <i class="fa-regular fa-gem text-xs"></i>
          </div>
          <div>
            <span class="font-display font-bold text-lg tracking-[0.15em] block leading-none">LIVORA</span>
            <span class="text-[7.5px] tracking-[0.2em] text-stone-300 uppercase block font-semibold mt-0.5">Haute Jewels & Couture</span>
          </div>
        </div>
        <button onclick="toggleMobileDrawer()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <!-- Quick Search Bar -->
      <div class="p-3.5 border-b border-stone-100 bg-stone-50">
        <form onsubmit="handleMobileSearch(event)" class="relative">
          <input type="text" id="mobile-search-input" placeholder="Search chokers, gowns, rings..." class="w-full pl-3.5 pr-9 py-2 bg-white text-xs rounded-full border border-stone-200 focus:outline-none focus:border-[#162E25]" />
          <button type="submit" class="absolute right-1 top-1 bottom-1 w-7 bg-[#162E25] text-white rounded-full flex items-center justify-center text-[10px]">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <!-- Categories & Links -->
      <div class="p-4 space-y-4 flex-1">
        <div>
          <div class="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">Collections & Atelier</div>
          <div class="space-y-1 text-xs font-medium text-stone-700">
            <a href="fine-jewelry.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-gem text-[#C5A880] text-xs w-4"></i> Fine Jewelry</a>
            <a href="chokers.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-necklace text-stone-400 text-xs w-4"></i> Necklaces & Chokers</a>
            <a href="rings.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-ring text-stone-400 text-xs w-4"></i> Solitaire Rings</a>
            <a href="gowns.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-person-dress text-stone-400 text-xs w-4"></i> Evening Gowns</a>
            <a href="bridal.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-crown text-stone-400 text-xs w-4"></i> Royal Bridal Lehengas</a>
            <a href="earrings.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-sparkles text-stone-400 text-xs w-4"></i> Earrings & Drops</a>
            <a href="sale.html" class="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 text-red-600 font-semibold transition">
              <span class="flex items-center gap-2.5"><i class="fa-solid fa-tags text-xs w-4"></i> Special Sale</span>
              <span class="text-[9px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">Up to 40%</span>
            </a>
          </div>
        </div>

        <div class="pt-3 border-t border-stone-100">
          <div class="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">Client Services</div>
          <div class="space-y-1 text-xs font-medium text-stone-700">
            <a href="account.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-regular fa-user text-stone-400 text-xs w-4"></i> Patron Profile & Vault</a>
            <a href="track-order.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-solid fa-location-dot text-stone-400 text-xs w-4"></i> Track Armored Delivery</a>
            <a href="wishlist.html" class="flex items-center justify-between p-2 rounded-lg hover:bg-stone-50 transition">
              <span class="flex items-center gap-2.5"><i class="fa-regular fa-heart text-stone-400 text-xs w-4"></i> Saved Wishlist</span>
              <span class="wishlist-counter-badge text-[10px] font-bold bg-stone-200 text-[#162E25] px-1.5 py-0.5 rounded-full">2</span>
            </a>
            <a href="cart.html" class="flex items-center justify-between p-2 rounded-lg hover:bg-stone-50 transition">
              <span class="flex items-center gap-2.5"><i class="fa-solid fa-bag-shopping text-stone-400 text-xs w-4"></i> Shopping Bag</span>
              <span class="cart-counter-badge text-[10px] font-bold bg-[#162E25] text-white px-1.5 py-0.5 rounded-full">3</span>
            </a>
            <a href="help.html" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 transition"><i class="fa-regular fa-circle-question text-stone-400 text-xs w-4"></i> Concierge & Help Center</a>
          </div>
        </div>
      </div>

      <!-- Bottom Phone CTA -->
      <div class="p-4 bg-stone-50 border-t border-stone-200 text-xs space-y-2">
        <a href="tel:+18005558924" class="w-full py-2.5 bg-[#162E25] text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition">
          <i class="fa-solid fa-phone text-xs"></i>
          <span>Call Concierge: 1-800-LIVORA</span>
        </a>
        <div class="text-center text-[10px] text-stone-400">
          Insured Worldwide Armored Delivery
        </div>
      </div>

    </div>
  `;
  document.body.appendChild(drawer);
}

function handleMobileSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('mobile-search-input');
  const query = input ? input.value.trim() : '';
  if (!query) return;
  toggleMobileDrawer();
  showToast(`Searching for "${query}"...`);
  setTimeout(() => {
    window.location.href = `fine-jewelry.html?q=${encodeURIComponent(query)}`;
  }, 400);
}

// Mobile Catalog Filter Bottom Sheet
function toggleMobileFilters() {
  let sheet = document.getElementById('mobile-filter-sheet');
  if (!sheet) {
    initMobileFilterSheet();
    sheet = document.getElementById('mobile-filter-sheet');
  }
  const panel = document.getElementById('mobile-filter-panel');
  if (!sheet || !panel) return;

  const isOpen = !sheet.classList.contains('pointer-events-none');
  if (isOpen) {
    panel.classList.add('translate-y-full');
    sheet.classList.add('opacity-0');
    setTimeout(() => sheet.classList.add('pointer-events-none'), 300);
  } else {
    sheet.classList.remove('pointer-events-none');
    sheet.classList.remove('opacity-0');
    panel.classList.remove('translate-y-full');
  }
}

function initMobileFilterSheet() {
  if (document.getElementById('mobile-filter-sheet')) return;

  const sheet = document.createElement('div');
  sheet.id = 'mobile-filter-sheet';
  sheet.className = 'fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 opacity-0';
  sheet.innerHTML = `
    <div onclick="toggleMobileFilters()" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div id="mobile-filter-panel" class="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-2xl p-5 max-h-[80vh] flex flex-col justify-between transform translate-y-full transition-transform duration-300 pointer-events-auto overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b border-stone-200">
        <h3 class="font-serif text-lg font-semibold text-[#162E25]">Filters & Refinements</h3>
        <button onclick="toggleMobileFilters()" class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
      
      <div class="py-4 space-y-5 text-xs">
        <div>
          <h4 class="font-semibold uppercase tracking-wider text-stone-700 mb-2">Precious Metal</h4>
          <div class="grid grid-cols-2 gap-2 text-stone-600">
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" checked /> 18k Yellow Gold</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> 18k Rose Gold</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> Platinum 950</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> 14k White Gold</label>
          </div>
        </div>

        <div>
          <h4 class="font-semibold uppercase tracking-wider text-stone-700 mb-2">Gemstone</h4>
          <div class="grid grid-cols-2 gap-2 text-stone-600">
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" checked /> Certified Diamond</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> Emerald</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> Burmese Ruby</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="checkbox" /> South Sea Pearl</label>
          </div>
        </div>

        <div>
          <h4 class="font-semibold uppercase tracking-wider text-stone-700 mb-2">Price Range</h4>
          <div class="grid grid-cols-2 gap-2 text-stone-600">
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="radio" name="mobile_price" /> Under $200</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="radio" name="mobile_price" /> $200 - $500</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="radio" name="mobile_price" checked /> $500 - $1,000</label>
            <label class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg"><input type="radio" name="mobile_price" /> $1,000+</label>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-stone-200 grid grid-cols-2 gap-3">
        <button onclick="showToast('Filters reset'); toggleMobileFilters()" class="py-2.5 bg-stone-100 text-stone-700 rounded-xl font-semibold text-xs">Reset All</button>
        <button onclick="showToast('Filters applied ✨'); toggleMobileFilters()" class="py-2.5 bg-[#162E25] text-white rounded-xl font-semibold text-xs">Apply Filters</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

// Toast notification
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 bg-[#162E25] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-stone-700';
    toast.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-xs">
        <i class="fa-solid fa-check"></i>
      </div>
      <span id="toast-message" class="text-xs font-medium"></span>
    `;
    document.body.appendChild(toast);
  }

  const toastMsg = toast.querySelector('#toast-message') || toast.querySelector('span');
  if (toastMsg) toastMsg.innerText = message;

  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Newsletter Subscription
function handleNewsletter(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const val = input ? input.value : '';
  showToast(`Welcome to Livora's Inner Circle${val ? ', ' + val : ''}! ✨`);
  if (input) input.value = '';
}

// Smart Active Bottom Tab Highlighter
function highlightActiveBottomTab() {
  const path = window.location.pathname.toLowerCase();
  const tabs = document.querySelectorAll('.android-tab');
  tabs.forEach(t => t.classList.remove('active'));

  if (path.includes('cart')) {
    document.getElementById('tab-cart')?.classList.add('active');
  } else if (path.includes('wishlist')) {
    document.getElementById('tab-wishlist')?.classList.add('active');
  } else if (path.includes('account') || path.includes('track-order') || path.includes('help')) {
    document.getElementById('tab-account')?.classList.add('active');
  } else if (path.includes('fine-jewelry') || path.includes('chokers') || path.includes('rings') || 
             path.includes('gowns') || path.includes('bridal') || path.includes('earrings') || path.includes('sale') ||
             path.includes('product-detail')) {
    document.getElementById('tab-categories')?.classList.add('active');
  } else {
    document.getElementById('tab-home')?.classList.add('active');
  }
}

// ==========================================
// 6. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  updateBadges();
  renderCartDrawer();
  highlightActiveBottomTab();

  // GSAP Animations (if GSAP is loaded)
  if (window.gsap) {
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Header reveal
    gsap.from('#main-header', { y: -20, opacity: 0, duration: 0.6, ease: 'power2.out' });

    // Product cards staggered entry
    const cards = document.querySelectorAll('.luxury-card');
    if (cards.length > 0 && window.ScrollTrigger) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 85%'
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out'
      });
    }
  }

  // Hero Slider Auto-Play Initialization
  initHeroSlider();
});

// ==========================================
// 7. HERO SLIDER AUTO-PLAY & CONTROLS
// ==========================================
let currentHeroSlide = 0;
const totalHeroSlides = 3;
let heroSlideTimer = null;

function initHeroSlider() {
  const container = document.getElementById('hero-slider-container');
  if (!container) return;

  // Set initial active slide
  showHeroSlide(0);

  // Auto-play every 4.2 seconds
  startHeroTimer();

  // Pause on hover, resume on mouse leave
  container.addEventListener('mouseenter', () => stopHeroTimer());
  container.addEventListener('mouseleave', () => startHeroTimer());

  // Support touch swipe on mobile
  let touchStartX = 0;
  let touchEndX = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextHeroSlide();
      resetHeroTimer();
    } else if (touchEndX - touchStartX > 50) {
      prevHeroSlide();
      resetHeroTimer();
    }
  }, { passive: true });
}

function showHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  currentHeroSlide = (index + totalHeroSlides) % totalHeroSlides;

  slides.forEach((slide, i) => {
    if (i === currentHeroSlide) {
      slide.classList.add('is-active');
      slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      slide.classList.add('opacity-100', 'z-10');

      // GSAP smooth slide transition
      if (window.gsap) {
        gsap.fromTo(slide.querySelector('.hero-content'), 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
        gsap.fromTo(slide.querySelector('.hero-image'), 
          { scale: 1.06, opacity: 0.6 }, 
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' }
        );
      }
    } else {
      slide.classList.remove('is-active');
      slide.classList.remove('opacity-100', 'z-10');
      slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
    }
  });

  // Update dots
  dots.forEach((dot, i) => {
    if (i === currentHeroSlide) {
      dot.className = 'hero-dot w-6 h-2 rounded-full bg-livora-dark shadow-md transition-all duration-300';
    } else {
      dot.className = 'hero-dot w-2 h-2 rounded-full bg-stone-400 hover:bg-livora-dark transition-all duration-300';
    }
  });
}

function nextHeroSlide() {
  showHeroSlide(currentHeroSlide + 1);
}

function prevHeroSlide() {
  showHeroSlide(currentHeroSlide - 1);
}

function goToHeroSlide(i) {
  showHeroSlide(i);
  resetHeroTimer();
}

function startHeroTimer() {
  stopHeroTimer();
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, 4200); // Smooth continuous sliding every 4.2s
}

function stopHeroTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
}

function resetHeroTimer() {
  stopHeroTimer();
  startHeroTimer();
}
