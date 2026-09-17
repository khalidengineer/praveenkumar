/**
 * VIVAHA — Haute Bridal Couture & Royal Jewels
 * Master Mobile Navigation & Offcanvas Drawer Engine
 */

(function () {
  'use strict';

  function initVivahaNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Ensure Mobile Hamburger Button in Header
    let mobileBtn = document.getElementById('mobileMenuBtn');
    const header = document.querySelector('header');

    if (!mobileBtn && header) {
      const container = header.querySelector('.max-w-7xl') || header.firstElementChild;
      if (container) {
        mobileBtn = document.createElement('button');
        mobileBtn.id = 'mobileMenuBtn';
        mobileBtn.className = 'lg:hidden text-royal-maroon text-2xl focus:outline-none p-1.5 -ml-1 rounded-lg hover:bg-champagne-gold/15 active:bg-champagne-gold/25 transition-colors flex items-center justify-center';
        mobileBtn.setAttribute('aria-label', 'Open Navigation Menu');
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';

        container.insertBefore(mobileBtn, container.firstElementChild);
      }
    }

    // 2. Ensure Mobile Navigation Drawer in DOM
    let drawer = document.getElementById('mobileMenuDrawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'mobileMenuDrawer';
      drawer.className = 'fixed inset-0 z-50 hidden transition-opacity duration-300';
      drawer.innerHTML = `
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" id="mobileMenuBackdrop"></div>
        <div class="absolute left-0 top-0 bottom-0 w-[84%] max-w-xs sm:max-w-sm bg-[#FAF5EE] border-r border-champagne-gold/50 shadow-2xl flex flex-col z-10 transform -translate-x-full transition-transform duration-300 ease-out" id="mobileMenuPanel">
          
          <!-- Drawer Header -->
          <div class="p-4 bg-royal-maroon text-champagne-gold-pale flex items-center justify-between border-b border-champagne-gold/30">
            <div class="flex items-center gap-2">
              <span class="text-champagne-gold text-base">✦</span>
              <div>
                <span class="font-cinzel text-xl font-bold tracking-[0.2em] text-white block leading-none">VIVAHA</span>
                <span class="font-serif text-[8px] tracking-[0.22em] text-champagne-gold-light uppercase block mt-0.5">Haute Bridal Couture</span>
              </div>
            </div>
            <button id="mobileMenuCloseBtn" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none" aria-label="Close Navigation Menu">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <!-- Quick Search Bar -->
          <div class="p-3 bg-[#F4ECE1] border-b border-champagne-gold/20">
            <form onsubmit="window.handleVivahaSearch(event)" class="relative">
              <input type="text" id="mobileDrawerSearchInput" placeholder="Search lehengas, sherwanis, jewels..." class="w-full pl-9 pr-4 py-2 bg-white text-xs rounded-full border border-champagne-gold/40 text-[#2B1D20] placeholder-[#8A7A78] focus:outline-none focus:border-[#4A0A16] shadow-inner" />
              <button type="submit" class="absolute left-3 top-1/2 -translate-y-1/2 text-champagne-gold-dark text-xs focus:outline-none" aria-label="Search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <!-- Scrollable Links -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4">
            <div>
              <div class="text-[10px] uppercase font-bold tracking-[0.2em] text-champagne-gold-dark font-cinzel mb-2 flex items-center gap-1.5">
                <span>✦</span> Royal Collections
              </div>
              <div class="space-y-1 text-xs font-serif font-medium text-[#2B1D20]">
                <a href="index.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'index.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-house text-champagne-gold-dark w-4 text-center"></i>
                  <span>Home Edition</span>
                </a>
                <a href="bridal.html" class="nav-item-link flex items-center justify-between p-2.5 rounded-xl transition-colors ${currentPath === 'bridal.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <span class="flex items-center gap-3">
                    <i class="fa-solid fa-crown text-champagne-gold-dark w-4 text-center"></i>
                    <span>For Her • Bridal Lehengas</span>
                  </span>
                  <span class="text-[9px] bg-royal-maroon text-champagne-gold px-1.5 py-0.5 rounded font-cinzel font-bold">Trending</span>
                </a>
                <a href="groom.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'groom.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-user-tie text-champagne-gold-dark w-4 text-center"></i>
                  <span>For Him • Royal Sherwanis</span>
                </a>
                <a href="jewelry.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'jewelry.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-gem text-champagne-gold-dark w-4 text-center"></i>
                  <span>Royal Heritage High Jewelry</span>
                </a>
                <a href="chokers.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'chokers.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-ribbon text-champagne-gold-dark w-4 text-center"></i>
                  <span>Imperial Chokers & Necklaces</span>
                </a>
                <a href="rings.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'rings.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-ring text-champagne-gold-dark w-4 text-center"></i>
                  <span>Solitaires, Pavé & Rings</span>
                </a>
                <a href="gowns.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'gowns.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-person-dress text-champagne-gold-dark w-4 text-center"></i>
                  <span>Cocktail & Reception Gowns</span>
                </a>
                <a href="bridal-sets.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'bridal-sets.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold border-l-2 border-royal-maroon' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-wand-magic-sparkles text-champagne-gold-dark w-4 text-center"></i>
                  <span>Complete Bridal Sets</span>
                </a>
                <a href="sale.html" class="nav-item-link flex items-center justify-between p-2.5 rounded-xl transition-colors ${currentPath === 'sale.html' ? 'bg-red-100 text-red-800 font-bold border-l-2 border-red-700' : 'bg-red-50 text-red-700 hover:bg-red-100'}">
                  <span class="flex items-center gap-3">
                    <i class="fa-solid fa-tags text-red-700 w-4 text-center"></i>
                    <span>Royal Wedding Sale</span>
                  </span>
                  <span class="text-[9px] bg-red-700 text-white px-2 py-0.5 rounded-full font-bold">Special</span>
                </a>
              </div>
            </div>

            <!-- Category 2: VIP Client Services -->
            <div class="pt-2 border-t border-champagne-gold/30">
              <div class="text-[10px] uppercase font-bold tracking-[0.2em] text-champagne-gold-dark font-cinzel mb-2 flex items-center gap-1.5">
                <span>✦</span> VIP Client Services
              </div>
              <div class="space-y-1 text-xs font-serif text-[#2B1D20]">
                <a href="wishlist.html" class="nav-item-link flex items-center justify-between p-2.5 rounded-xl transition-colors ${currentPath === 'wishlist.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold' : 'hover:bg-champagne-gold/15'}">
                  <span class="flex items-center gap-3">
                    <i class="fa-regular fa-heart text-champagne-gold-dark w-4 text-center"></i>
                    <span>Saved Wedding Pins</span>
                  </span>
                  <span class="text-[10px] bg-royal-maroon text-champagne-gold px-2 py-0.5 rounded-full font-sans font-bold">5</span>
                </a>
                <a href="track-order.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'track-order.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-solid fa-truck-fast text-champagne-gold-dark w-4 text-center"></i>
                  <span>Track Armored Delivery</span>
                </a>
                <a href="cart.html" class="nav-item-link flex items-center justify-between p-2.5 rounded-xl transition-colors ${currentPath === 'cart.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold' : 'hover:bg-champagne-gold/15'}">
                  <span class="flex items-center gap-3">
                    <i class="fa-solid fa-bag-shopping text-champagne-gold-dark w-4 text-center"></i>
                    <span>Shopping Bag</span>
                  </span>
                  <span class="text-[10px] bg-champagne-gold-dark text-white px-2 py-0.5 rounded-full font-sans font-bold">2</span>
                </a>
                <a href="account.html" class="nav-item-link flex items-center gap-3 p-2.5 rounded-xl transition-colors ${currentPath === 'account.html' ? 'bg-royal-maroon/15 text-royal-maroon font-bold' : 'hover:bg-champagne-gold/15'}">
                  <i class="fa-regular fa-user text-champagne-gold-dark w-4 text-center"></i>
                  <span>Patron Account & Vault</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Drawer Footer -->
          <div class="p-4 bg-[#F4ECE1] border-t border-champagne-gold/30 space-y-2">
            <a href="tel:+919876543210" class="w-full py-2.5 bg-royal-maroon hover:bg-royal-maroon-dark text-champagne-gold-light rounded-xl font-cinzel text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow transition-all">
              <i class="fa-solid fa-phone text-xs"></i>
              <span>Call Concierge: +91 98765 43210</span>
            </a>
            <div class="flex items-center justify-between text-[10px] text-[#6A5A57] px-1 font-serif">
              <span>Insured Armored Delivery</span>
              <span class="text-royal-maroon font-bold">Currency: INR (Rs.)</span>
            </div>
          </div>

        </div>
      `;
      document.body.appendChild(drawer);
    }

    // 3. Attach Event Listeners
    function openDrawer() {
      const d = document.getElementById('mobileMenuDrawer');
      const p = document.getElementById('mobileMenuPanel');
      if (!d || !p) return;
      d.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        p.classList.remove('-translate-x-full');
      });
    }

    function closeDrawer() {
      const d = document.getElementById('mobileMenuDrawer');
      const p = document.getElementById('mobileMenuPanel');
      if (!d || !p) return;
      p.classList.add('-translate-x-full');
      document.body.style.overflow = '';
      setTimeout(() => {
        d.classList.add('hidden');
      }, 300);
    }

    window.openMobileMenu = openDrawer;
    window.closeMobileMenu = closeDrawer;

    // Attach to button
    if (mobileBtn) {
      mobileBtn.onclick = (e) => {
        e.preventDefault();
        openDrawer();
      };
    }

    // Attach to close button & backdrop
    const closeBtn = document.getElementById('mobileMenuCloseBtn');
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        closeDrawer();
      };
    }

    const backdrop = document.getElementById('mobileMenuBackdrop');
    if (backdrop) {
      backdrop.onclick = (e) => {
        e.preventDefault();
        closeDrawer();
      };
    }

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });

    // Mobile Search Handler
    window.handleVivahaSearch = function (e) {
      if (e) e.preventDefault();
      const input = document.getElementById('mobileDrawerSearchInput');
      const query = input ? input.value.trim() : '';
      if (!query) return;
      closeDrawer();
      setTimeout(() => {
        window.location.href = `bridal.html?q=${encodeURIComponent(query)}`;
      }, 300);
    };
  }

  // Auto-initialize on ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVivahaNav);
  } else {
    initVivahaNav();
  }
})();
