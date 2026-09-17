# ULTIMATE MASTER PROMPT: ULTRA-PREMIUM JEWELRY & COUTURE E-COMMERCE PLATFORM
### 99% Visual Replica of Reference Design with Mobile Android App Experience

---

## 📋 PROMPT FOR AI / DEVELOPER (COPY & PASTE READY)

```text
You are an elite Lead UI/UX Designer & Senior Frontend Architect specializing in ultra-luxury e-commerce experiences (comparable to Tiffany & Co., Cartier, Sabyasachi, and Net-a-Porter).

### OBJECTIVE:
Build a complete, pixel-perfect, 99% visually accurate e-commerce platform matching the exact structure, layout ratios, typography hierarchy, micro-interactions, and color harmony of the reference screenshot ("LIVORA"). 
CRITICAL ADAPTATION: The product niche is transformed from furniture/home-decor into "ULTRA-LUXURY HIGH JEWELRY & DESIGNER GIRL/WOMEN COUTURE DRESSES" (Diamonds, Polki, Kundan, Silk Evening Gowns, Bridal Lehengas, Cocktail Wear).

### TECH STACK REQUIREMENTS:
1. HTML5 (Semantic, accessible markup with ARIA tags)
2. Tailwind CSS (Latest CDN via `<script src="https://cdn.tailwindcss.com"></script>`) + Custom luxury configurations
3. Bootstrap 5.3 (Grid utilities, responsive flex containers, and utility classes where beneficial)
4. GSAP 3.12 (GreenSock) + ScrollTrigger + ScrollToPlugin for silky 60fps luxury transitions and staggered reveals
5. FontAwesome 6 Pro / Lucide Icons via CDN for crisp vector icons
6. Google Fonts: "Playfair Display" / "Cormorant Garamond" for luxury editorial serif headings + "Plus Jakarta Sans" / "Inter" for razor-sharp modern body text.
7. Vanilla JavaScript (Clean, modular ES6+ handling interactive states, cart drawer, wishlist toggle, search modal, and bottom navigation).

---

### 🎨 COLOR PALETTE & DESIGN SYSTEM (EXACT TO REFERENCE):
- Primary Deep Forest Green: #162E25 (Hero CTA button, top bar, badges, footer, search button)
- Secondary Sage / Muted Emerald: #244A3C and #2E5848 (Left split banner, sustainability card)
- Luxury Background Canvas: #FAF8F5 / #F7F5F0 (Warm organic ivory/almond background matching image)
- Card Containers: #FFFFFF (Pure crisp white with border: 1px solid #EFECE6 and subtle shadow: 0 4px 20px -2px rgba(22,46,37,0.05))
- Warm Almond / Champagne Beige: #EFE7DE / #E8DFD5 (Right split promo card, newsletter box)
- Champagne Gold Accent: #C5A880 / #D4AF37 (Star ratings, luxury borders, sparkle accents)
- Alert / Sale Accent: #D94638 / #DC2626 (Sale badge, discount tags)
- Primary Dark Typography: #111827 / #162E25
- Muted Slate Body Typography: #5A625D / #6B7280

---

### 📱 MOBILE "NATIVE ANDROID APP" EXPERIENCE (CRITICAL REQUIREMENT):
When viewed on mobile devices (screens under 768px):
1. **Persistent Android App Bottom Navigation Bar**:
   - Fixed at bottom of screen with frosted glass blur (`backdrop-blur-md bg-white/95 border-t border-stone-200`)
   - 5 Touch-optimized action tabs:
     * [Home] (with active emerald dot indicator)
     * [Categories] (opens smooth bottom-sheet category drawer)
     * [Search] (triggers instant full-screen search overlay with trending jewelry tags)
     * [Wishlist] (with dynamic badge count counter)
     * [Bag / Cart] (with live counter badge and haptic-style micro-bounce)
2. **App-Like Gestures & Drawers**:
   - Slide-in Offcanvas Cart Drawer with item increment/decrement, free shipping progress bar ($50 threshold), and one-click Android Pay / Checkout button.
   - Smooth bottom-sheet filters on category listing.
   - Horizontal touch swipe for circular story category avatars with zero scrollbar friction.

---

### 🏛️ DETAILED SECTION-BY-SECTION BLUEPRINT:

#### 1. TOP ANNOUNCEMENT BAR:
- Background: `#162E25` | Height: ~36px | Text: White/Cream 12px
- Content Left/Center: "✨ Free Insured Worldwide Shipping on Orders Over $50 | Timeless Jewels. Unmatched Radiance."
- Content Right: "Track Order | Concierge & Help" links with subtle hover underline.

#### 2. MAIN HEADER NAVIGATION:
- Background: `#FFFFFF` / Ivory with subtle 1px border-bottom `#EFECE6`. Sticky on scroll.
- Left: Mobile hamburger menu toggle button + Brand Logo.
  * Brand Logo: "LIVORA" in majestic serif with subtitle "HAUTE JEWELS & COUTURE" and delicate diamond gemstone icon.
- Center: Pill-shaped luxury search bar:
  * Placeholder: "Search for solitaire rings, bridal lehengas, emerald chokers..."
  * Right: Dark emerald green circular search button with white magnifying glass icon.
- Right:
  * Account link with User icon ("Account")
  * Wishlist link with Heart icon ("Wishlist") + red/gold badge counter
  * Cart link with Luxury shopping bag icon ("Cart") + dynamic price "$0.00" & item counter badge.

#### 3. SUB-NAVIGATION CATEGORY BAR (Exact 10 categories with custom vector icons):
- Thin horizontal strip with clean typography & subtle hover indicator:
  1. 💎 Fine Jewelry
  2. 📿 Chokers & Necklaces
  3. 💍 Solitaires & Rings
  4. 👗 Evening Gowns
  5. 👑 Bridal Lehengas
  6. ✨ Statement Earrings
  7. 💫 Gold Bangles
  8. 👛 Luxury Clutches
  9. 👰 Royal Bridal Sets
  10. 🏷️ Sale (with vibrant reddish badge pill)

#### 4. LUXURY HERO BANNER (Split Lifestyle Showcase):
- Exact aspect ratio matching reference image. Boxed container with soft rounded corners (`rounded-2xl`).
- Background: Warm natural luxury atelier ambiance.
- Left Text Column (GSAP Staggered Entrance):
  * Kicker: "COLLECTIONS THAT CELEBRATE YOU" (uppercase, tracked out, emerald green)
  * Main Headline: "Radiant Jewels,\nTimeless Grace" (Playfair Display 56px, bold, commanding)
  * Body Text: "Handcrafted certified diamond jewelry and bespoke designer couture dresses crafted for life's most unforgettable milestones."
  * Primary Button: Pill-shaped deep emerald `#162E25` with text "Explore the Collection →" (with GSAP magnetic hover and subtle glow).
- Right Visual Column:
  * Ultra-high resolution lifestyle visual of an elegant woman draped in an emerald silk couture gown paired with a glittering diamond & emerald necklace in a warm sunlit luxury penthouse salon.
  * Delicate script accent text: "A more radiant tomorrow" floating organically on the top right.
  * Carousel Pagination Dots (3 minimalist dots, active dot glowing in warm cream/gold).

#### 5. CIRCULAR STORY CATEGORIES (App-style Highlights):
- Horizontal flex row of 10 circular thumbnail capsules with luxury gold/stone borders:
  1. Solitaires
  2. Royal Polki
  3. Bridal Gowns
  4. Silk Lehengas
  5. Chokers
  6. Diamond Drops
  7. Cocktail Wear
  8. Tennis Bangles
  9. Fine Rings
  10. Bridal Troussau
- Hover state: Smooth scale-105 with gold ring glow and subtle label color transition.

#### 6. "NEW ARRIVALS" 5-COLUMN PRODUCT GRID:
- Header: "New Arrivals" (Serif 28px) with "View All →" link on right.
- 5 Luxury Product Cards:
  * Card 1: "Aura 18k Solitaire Diamond Choker" - $699 | ★★★★★ (124 reviews) | Badge: [New]
  * Card 2: "Noor Hand-Embroidered Silk Gown" - $549 | ★★★★★ (98 reviews) | Badge: [New]
  * Card 3: "Lume Emerald-Cut Diamond Ring" - $399 | ★★★★★ (76 reviews) | Badge: [New]
  * Card 4: "Orbi Baroque Pearl & Diamond Drops" - $89 | ★★★★★ (213 reviews) | Badge: [New]
  * Card 5: "Serene Pastel Organza Cocktail Dress" - $45 | ★★★★★ (164 reviews) | Badge: [New]
- Card Features: Wishlist floating heart button (with GSAP heart pop animation), quick "Quick Add" hover overlay button, image zoom on hover.

#### 7. DUAL SPLIT PROMOTIONAL BANNERS:
- Card 1 (Left - Deep Sage Green `#244A3C` with organic handcrafted pottery and gold jewelry accents):
  * Heading: "Make Every Moment Special"
  * Discount: "Up to 40% Off Handcrafted Heritage Jewelry"
  * Button: Warm Ivory Pill "Shop Jewelry →"
- Card 2 (Right - Warm Almond/Blush `#EFE7DE` with silk gown draped elegance):
  * Heading: "Elegance Lives Here"
  * Sub: "Bespoke Bridal Lehengas & Evening Gowns | Up to 30% Off"
  * Button: Dark Emerald Pill "Shop Couture →"

#### 8. "BEST SELLERS" + "CURATED EDITORIAL COLLECTIONS":
- Split Layout:
  * Left Side (5 Best Seller Product Cards):
    1. Nova 22k Gold Temple Choker - $299 (★ 4.9)
    2. Sel Handcrafted Emerald Velvet Gown - $249 (★ 4.8)
    3. Eden Royal Polki & Kundan Drops - $179 (★ 5.0)
    4. Astra Solitaire Tennis Bracelet - $129 (★ 4.9)
    5. Mira Pastel Floral Embroidered Lehenga - $99 (★ 4.7)
  * Right Side ("Curated Collections" 4-Card Editorial Grid with "View All →"):
    1. Modern Minimalist (Sleek everyday diamonds)
    2. Royal Heritage (Heirloom bridal Kundan & Polki)
    3. Sunset Gala (Couture red carpet gowns)
    4. Cocktail Chic (Contemporary evening wear)

#### 9. "JUST FOR YOU" & SUSTAINABILITY SHOWCASE:
- Left: 4 curated luxury item cards:
  * Ceramic Pearl Pendant - $49
  * Pure Mulberry Silk Stole - $69
  * Aura Scented Amber Perfume Oil - $29
  * Handcrafted Silk Organza Dupatta - $39
- Right: Large Deep Green Feature Card (`#162E25`):
  * Headline: "Radiate Sustainably"
  * Subtext: "100% Conflict-free certified lab & mined diamonds, paired with ethically hand-spun heritage silks."
  * CTA Button: "Shop Ethical Luxury →"
  * Feature Icons: "Conflict-Free Gems" & "Artisan Handcrafted"

#### 10. SOCIAL PROOF: "WHAT OUR CUSTOMERS SAY":
- 3 Luxury Testimonial Cards:
  * Card 1: Sarah M. (Verified Buyer) - "The diamond choker is breathtaking! The craftsmanship exceeded every expectation."
  * Card 2: Ali K. (Verified Buyer) - "Ordered the bridal lehenga for my sister's wedding. Flawless fit, royal texture!"
  * Card 3: Emma R. (Verified Buyer) - "Ultra premium packaging and certified authenticity. Livora is my forever jeweler."
- Star ratings (5 solid gold stars), customer circular portraits, verified buyer gold badge.

#### 11. TRUST & VALUE PROPOSITIONS STRIP (5 Column Minimalist Bar):
- Free Insured Shipping (On orders over $50)
- Secure Checkout (256-bit encrypted payments)
- 30-Day Easy Returns (Hassle-free exchange policy)
- Certified Authenticity (100% GIA/IGI Hallmarked)
- 100k+ Happy Clients (Trusted by royalty and brides)

#### 12. VIP NEWSLETTER CLUB ("JOIN OUR CIRCLE"):
- Background: Warm almond gradient with decorative luxury jewelry props and script accent "Elegance for Every Story".
- Headline: "Join Our Inner Circle"
- Sub: "Receive private couture invitations, exclusive diamond drops, and bespoke styling advice."
- Input Form: Clean rounded input pill + Dark Emerald "Subscribe" button with instant toast notification.

#### 13. COMPREHENSIVE MEGA FOOTER (Deep Green `#162E25`):
- Column 1: Brand Logo ("LIVORA HAUTE JEWELS") + "Homes of grace, silhouettes of timeless beauty." + Social links (Instagram, Pinterest, YouTube, Facebook, TikTok).
- Column 2: Shop (Fine Jewelry, Solitaire Rings, Designer Gowns, Bridal Lehengas, Statement Chokers, Sale).
- Column 3: Client Services (Track Your Order, Size & Fit Guide, Returns & Exchanges, Diamond Certification, FAQs, Book a Virtual Stylist).
- Column 4: The Atelier (Our Heritage, Ethical Sourcing, Master Artisans, Careers, Press).
- Column 5: Download App (App Store & Google Play buttons with native Android/iOS badge design).
- Bottom Bar: © 2026 LIVORA Haute Jewels & Couture. Privacy Policy | Terms of Service | Sitemap.

---

### ⚡ GSAP ANIMATION SPECIFICATIONS:
1. **Hero Intro Sequence**:
   - `gsap.from(".hero-kicker", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" })`
   - `gsap.from(".hero-title", { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: "power4.out" })`
   - `gsap.from(".hero-image", { scale: 1.08, opacity: 0, duration: 1.4, ease: "expo.out" })`
2. **ScrollTrigger Reveal**:
   - Staggered card reveals for New Arrivals & Best Sellers (`stagger: 0.1, y: 40, opacity: 0`).
3. **Micro-Interactions**:
   - Heart wishlist button bounce (`scale: 1.4` then back to `1.0`).
   - Sticky navbar background blur transition on scroll (`ScrollTrigger.create`).
   - Android Bottom Navigation Active Pill smooth sliding indicator.
4. **Interactive Drawers & Modals**:
   - Sliding cart offcanvas drawer with backdrop overlay.
   - Quick View modal with GSAP pop-in.

---

### 📄 MULTI-PAGE ARCHITECTURE (ALL HEADER MENU LINKS):
Provide the complete structure, routes, and layout templates for all pages linked in the header:
1. `index.html` (Master Home Landing Page)
2. `jewelry.html` (Fine Jewelry Catalog with multi-filter sidebar)
3. `necklaces.html` (Chokers, Chains & Royal Necklaces)
4. `rings.html` (Engagement Solitaires & Cocktail Rings)
5. `gowns.html` (Evening Gowns & Red Carpet Dresses)
6. `bridal.html` (Heirloom Lehengas & Royal Bridal Sets)
7. `earrings.html` (Drops, Studs, Chandbalis & Hoops)
8. `sale.html` (Curated Discounted Items with countdown timers)
9. `track-order.html` (Live Order Tracking with interactive timeline)
10. `help.html` (FAQ accordion & 24/7 Concierge Chat widget)
11. `cart.html` (Full Cart & Checkout Page)
12. `wishlist.html` (Saved Items Grid)
13. `account.html` (Client Login, Profile & Orders Dashboard)

Generate complete, production-ready, clean, responsive code with full real text, high-res Unsplash luxury jewelry and dress imagery, and all interactive features working seamlessly!
```
