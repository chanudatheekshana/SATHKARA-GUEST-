/**
 * Sathkara Guest House - Official Frontend Application
 * Location: Freeman Mawatha, Anuradhapura, Sri Lanka
 * Phone / WhatsApp: +94 77 863 8229 | Landline: 025 222 2711 (Footer only)
 */

// ==========================================
// 1. DATA REPOSITORIES & CONSTANTS
// ==========================================

const SATHKARA_CONFIG = {
  name: "Sathkara Guest House",
  sinhalaName: "සත්කාර",
  phone: "+94778638229",
  displayPhone: "+94 77 863 8229",
  landline: "025 222 2711",
  address: "Freeman Mawatha, Anuradhapura, Sri Lanka",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 noon",
  totalRooms: 8,
  maxCapacity: 26,
  maxNightlyCeiling: 45000
};

// Official 8-Room Inventory & LKR Nightly Rates
const ROOM_CATEGORIES = [
  {
    id: "single",
    name: "Single Room",
    sinhalaName: "තනි කාමරය",
    quantity: 1,
    capacity: 1,
    capacityLabel: "1 Person",
    bedSetup: "1 Single Bed",
    rate: 3000,
    primaryImage: "images/room-single.webp",
    gallery: ["images/room-single.webp", "images/bathroom-hotwater.webp"],
    badge: "Solo Traveler / Pilgrim",
    description: "Quiet and peaceful air-conditioned sanctuary designed for solo travelers, business professionals, or sacred pilgrims. Features a comfortable single bed, private bathroom with Singer hot water shower, dressing vanity table, and clothes rack.",
    amenities: ["Air Conditioning", "Hot Water Shower", "Free High-Speed Wi-Fi", "Dressing Vanity & Mirror", "Free Parking", "Daily Housekeeping"]
  },
  {
    id: "dual",
    name: "Dual Room",
    sinhalaName: "ද්විත්ව කාමරය",
    quantity: 2,
    capacity: 2,
    capacityLabel: "2 People",
    bedSetup: "1 King/Queen Mahogany Bed",
    rate: 4000,
    primaryImage: "images/room-dual.png",
    gallery: ["images/room-dual.png", "images/room-deluxe-double.webp", "images/bathroom-hotwater.webp"],
    badge: "Couples & Duos",
    description: "Elegant and restful room featuring a handcrafted solid mahogany king/queen bed with crisp white cotton linens. Fully air-conditioned with wall sconce lighting, modern dressing table, and en-suite hot water shower.",
    amenities: ["Air Conditioning", "Singer Hot Water Shower", "Free High-Speed Wi-Fi", "Mahogany King/Queen Bed", "Dressing Table with Mirror", "Clothes Drying Rack", "Free Parking"]
  },
  {
    id: "triple",
    name: "Triple Room",
    sinhalaName: "ත්‍රිත්ව කාමරය",
    quantity: 3,
    capacity: 3,
    capacityLabel: "3 People",
    bedSetup: "1 Double Bed + 1 Single Bed",
    rate: 6000,
    primaryImage: "images/room-triple-bath.webp",
    gallery: ["images/room-triple-bath.webp", "images/room-triple-green.webp", "images/bathroom-hotwater.webp"],
    badge: "Popular with Small Families",
    description: "Spacious multi-bed room configuration equipped with 1 comfortable double bed and 1 single bed. Features a modern attached bathroom with frosted glass shower enclosure, air conditioning, ceiling/wall fan, and optional wall-mounted flat-screen TV.",
    amenities: ["Air Conditioning & Fan", "Singer Hot Water Shower", "Frosted Glass Shower Enclosure", "Free High-Speed Wi-Fi", "Flat-Screen TV", "Luggage & Clothes Rack", "Free Parking"]
  },
  {
    id: "family",
    name: "Family Room",
    sinhalaName: "පවුලේ කාමරය",
    quantity: 2,
    capacity: 5,
    capacityLabel: "Up to 5 Adults",
    bedSetup: "Multiple Beds (Double + Single Configurations)",
    rate: 8000,
    primaryImage: "images/room-family-4beds.webp",
    gallery: ["images/room-family-4beds.webp", "images/room-family-suite.webp", "images/bathroom-hotwater.webp"],
    badge: "Group & Family Luxury",
    description: "Extremely spacious family suite accommodating up to five adults with multiple solid teak beds, stylish wood-grain floor tiles, dual cooling (A/C + wall fan), seating table, dressing mirror, and large attached hot water bathroom.",
    amenities: ["Air Conditioning & Fan", "Singer Hot Water Shower", "Accommodates Up to 5 Adults", "Free High-Speed Wi-Fi", "Dining / Seating Table", "Dressing Vanity Unit", "Free Vehicle Parking"]
  }
];

// Restaurant Menu Data (Compliant with official specification)
const MENU_DATA = [
  // Rice, Noodles & Kottu
  {
    id: "m1",
    category: "rice-noodles",
    categoryName: "Rice, Noodles & Kottu",
    name: "Chicken Fried Rice",
    portion: "Normal & Full",
    priceText: "N: Rs. 800 | F: Rs. 1,200",
    normalPrice: 800,
    fullPrice: 1200,
    note: "Wok-tossed basmati rice with seasoned chicken breast, egg ribbons & fresh scallions.",
    tag: "Chef Special"
  },
  {
    id: "m2",
    category: "rice-noodles",
    categoryName: "Rice, Noodles & Kottu",
    name: "Mixed Rice",
    portion: "Normal & Full",
    priceText: "N: Rs. 1,300 | F: Rs. 1,800",
    normalPrice: 1300,
    fullPrice: 1800,
    note: "Generous blend of chicken, seafood, egg and crunchy vegetables wok-fried to perfection.",
    tag: "Crowd Favorite"
  },
  {
    id: "m3",
    category: "rice-noodles",
    categoryName: "Rice, Noodles & Kottu",
    name: "Chicken Cheese Kottu",
    portion: "Normal & Full",
    priceText: "N: Rs. 1,300 | F: Rs. 1,700",
    normalPrice: 1300,
    fullPrice: 1700,
    note: "Chopped Sri Lankan godamba roti chopped on griddle with shredded chicken, spices and creamy melted cheese.",
    tag: "Must Try"
  },
  {
    id: "m4",
    category: "rice-noodles",
    categoryName: "Rice, Noodles & Kottu",
    name: "Chicken Kottu",
    portion: "Normal & Full",
    priceText: "N: Rs. 800 | F: Rs. 1,200",
    normalPrice: 800,
    fullPrice: 1200,
    note: "Authentic street-style spicy kottu roti chopped with tender chicken, egg, leeks and onions.",
    tag: "Sri Lankan Classic"
  },
  {
    id: "m5",
    category: "rice-noodles",
    categoryName: "Rice, Noodles & Kottu",
    name: "Chicken Mixed Noodles",
    portion: "Normal & Full",
    priceText: "N: Rs. 800 | F: Rs. 1,200",
    normalPrice: 800,
    fullPrice: 1200,
    note: "Savory stir-fried noodles with seasoned chicken cuts, mixed garden vegetables and light soy.",
    tag: ""
  },

  // Rice & Curry - Single Portion
  {
    id: "m6",
    category: "rice-curry",
    categoryName: "Sri Lankan Rice & Curry",
    name: "Vegetable Rice & Curry",
    portion: "Single Portion",
    priceText: "Rs. 400",
    normalPrice: 400,
    fullPrice: null,
    note: "Steamed white/red rice served with 4 fresh traditional village curries, dhal, sambol & papadam.",
    tag: "Vegetarian"
  },
  {
    id: "m7",
    category: "rice-curry",
    categoryName: "Sri Lankan Rice & Curry",
    name: "Egg Rice & Curry",
    portion: "Single Portion",
    priceText: "Rs. 450",
    normalPrice: 450,
    fullPrice: null,
    note: "Traditional village rice and 4 curries accompanied by a seasoned boiled or fried egg.",
    tag: ""
  },
  {
    id: "m8",
    category: "rice-curry",
    categoryName: "Sri Lankan Rice & Curry",
    name: "Fish Rice & Curry",
    portion: "Single Portion",
    priceText: "Rs. 450",
    normalPrice: 450,
    fullPrice: null,
    note: "Fresh local catch in rich aromatic Sri Lankan curry gravy served with traditional vegetable sides.",
    tag: "Local Catch"
  },
  {
    id: "m9",
    category: "rice-curry",
    categoryName: "Sri Lankan Rice & Curry",
    name: "Chicken Rice & Curry",
    portion: "Single Portion",
    priceText: "Rs. 500",
    normalPrice: 500,
    fullPrice: null,
    note: "Slow-simmered spicy Sri Lankan chicken curry with authentic roasted spices and assorted side curries.",
    tag: "Bestseller"
  },
  {
    id: "m10",
    category: "rice-curry",
    categoryName: "Sri Lankan Rice & Curry",
    name: "Pork Rice & Curry",
    portion: "Single Portion",
    priceText: "Rs. 700",
    normalPrice: 700,
    fullPrice: null,
    note: "Rich, dark, traditional Sri Lankan black pork curry infused with goraka, black pepper and garlic.",
    tag: "House Special"
  },

  // Buffet - Main Meal plus Dessert
  {
    id: "m11",
    category: "buffet",
    categoryName: "Buffet Spreads",
    name: "Breakfast Buffet",
    portion: "All You Can Eat + Dessert",
    priceText: "Rs. 1,000",
    normalPrice: 1000,
    fullPrice: null,
    note: "Includes traditional Sri Lankan items (String Hoppers, Kiribath, Pol Roti) or Continental eggs/toast, fresh tropical fruit, and Ceylon Tea/Coffee.",
    tag: "Morning Delight"
  },
  {
    id: "m12",
    category: "buffet",
    categoryName: "Buffet Spreads",
    name: "Lunch Buffet",
    portion: "Full Buffet + Dessert",
    priceText: "Rs. 1,200",
    normalPrice: 1200,
    fullPrice: null,
    note: "Extensive spread of fragrant rice, meats, local lake fish, regional vegetables, chutneys, papadam, followed by curd & treacle or ice cream.",
    tag: "Hearty Midday"
  },
  {
    id: "m13",
    category: "buffet",
    categoryName: "Buffet Spreads",
    name: "Dinner Buffet",
    portion: "Full Buffet + Dessert",
    priceText: "Rs. 1,200",
    normalPrice: 1200,
    fullPrice: null,
    note: "Evening feast served under the garden tree lights. Live kottu/hopper action, fried rice, curries, savory bites and sweet dessert.",
    tag: "Garden Evening"
  },

  // Bites & Beverages - Strictly compliant with "Contact us for current price"
  {
    id: "m14",
    category: "bites-drinks",
    categoryName: "Bites & Beverages",
    name: "Pork Bites (Devilled Pork, Black Curry, Pork Stew)",
    portion: "Platter",
    priceText: "Contact us for current price",
    normalPrice: null,
    fullPrice: null,
    note: "Sizzling wok devilled pork with capsicum and onions, or slow-cooked black pepper pork bites.",
    tag: "Evening Bites"
  },
  {
    id: "m15",
    category: "bites-drinks",
    categoryName: "Bites & Beverages",
    name: "Chicken Bites (Devilled Chicken, Stew, Chicken Fries)",
    portion: "Platter",
    priceText: "Contact us for current price",
    normalPrice: null,
    fullPrice: null,
    note: "Crispy fried chicken bites or sweet-spicy devilled chicken with fresh onions and bell peppers.",
    tag: "Popular"
  },
  {
    id: "m16",
    category: "bites-drinks",
    categoryName: "Bites & Beverages",
    name: "Other Bites (Fish Fries, Crispy French Fries)",
    portion: "Platter",
    priceText: "Contact us for current price",
    normalPrice: null,
    fullPrice: null,
    note: "Golden spiced batter-fried fish fillets or hot crispy potato french fries served with dip.",
    tag: ""
  },
  {
    id: "m17",
    category: "bites-drinks",
    categoryName: "Bites & Beverages",
    name: "Fresh Tropical Juices (Watermelon, Papaya)",
    portion: "Glass",
    priceText: "Contact us for current price",
    normalPrice: null,
    fullPrice: null,
    note: "100% natural, freshly squeezed local Anuradhapura watermelons and sun-ripened papayas chilled to order.",
    tag: "Healthy & Fresh"
  },
  {
    id: "m18",
    category: "bites-drinks",
    categoryName: "Bites & Beverages",
    name: "Chilled Soft Drinks & Mineral Water",
    portion: "Bottle / Can",
    priceText: "Contact us for current price",
    normalPrice: null,
    fullPrice: null,
    note: "Sunquick fruit cordial, Sprite, Pepsi, Coca-Cola, and chilled bottled mineral drinking water.",
    tag: ""
  }
];

// Complete Photo Gallery Data
const GALLERY_DATA = [
  {
    id: "g1",
    src: "images/exterior-day.jpg",
    title: "Property Entrance & Exposed Brick Pavilion",
    category: "exterior",
    categoryName: "Exterior & Grounds",
    caption: "The welcoming roadside brick pavilion, tree canopy shade, and secure vehicle parking along Freeman Mawatha."
  },
  {
    id: "g2",
    src: "images/restaurant-garden-night1.webp",
    title: "Enchanted Garden Restaurant at Twilight",
    category: "restaurant",
    categoryName: "Garden Restaurant",
    caption: "Romantic illuminated open-air dining terrace with string fairy lights wound around mature trees and white garden dining tables."
  },
  {
    id: "g3",
    src: "images/restaurant-garden-night2.webp",
    title: "Evening Patio Dining Setup",
    category: "restaurant",
    categoryName: "Garden Restaurant",
    caption: "Warm ambiance under the starry canopy, stone planters, and cozy lighting ideal for relaxing after visiting the Sacred City."
  },
  {
    id: "g4",
    src: "images/restaurant-garden-paved.webp",
    title: "Stone Paved Courtyard & Garden Grounds",
    category: "restaurant",
    categoryName: "Garden Restaurant",
    caption: "Interlocking stone walkways, illuminated tree bases, and peaceful garden dining spaces."
  },
  {
    id: "g5",
    src: "images/room-dual.png",
    title: "Dual Room with Mahogany Bed",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Solid mahogany king/queen bed, crisp white linen, air conditioner, wall sconces, and soft drapery."
  },
  {
    id: "g6",
    src: "images/room-deluxe-double.webp",
    title: "Double Room with Vanity Mirror Desk",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Pristine white bedding on teak wood frame, dressing table with full mirror, clothes rack, and quiet A/C."
  },
  {
    id: "g7",
    src: "images/room-single.webp",
    title: "Single Room for Solo Guests & Pilgrims",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Compact, spotless room with single wooden bed, dressing unit, clothes drying rack, and private attached bathroom."
  },
  {
    id: "g8",
    src: "images/room-triple-bath.webp",
    title: "Triple Room Suite & Modern Attached Bathroom",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Accommodates 3 guests with 1 double and 1 single bed, accompanied by a clean modern bathroom with frosted shower cabin."
  },
  {
    id: "g9",
    src: "images/room-triple-green.webp",
    title: "Spacious Triple Room with Flat-Screen TV",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Vibrant accent walls, premium navy linen, flat-screen wall TV, air conditioning, and bedside tables."
  },
  {
    id: "g10",
    src: "images/room-family-4beds.webp",
    title: "Family Room - 4 Bed Setup (Up to 5 Adults)",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Solid wood beds accommodating groups and families with stylish wood-grain tiled floors, ceiling fan, and A/C."
  },
  {
    id: "g11",
    src: "images/room-family-suite.webp",
    title: "Family Suite Configurations",
    category: "rooms",
    categoryName: "Guest Rooms",
    caption: "Spacious family setup with multiple double and single bed combinations, dining table, and large dressing unit."
  },
  {
    id: "g12",
    src: "images/bathroom-hotwater.webp",
    title: "Modern Bathroom & Singer Hot Water Geyser",
    category: "bathrooms",
    categoryName: "Bathrooms",
    caption: "Equipped with Singer electric instant hot water shower, square rainfall head, bidet spray, ceramic toilet, and pedestal sink."
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let bookingState = {
  checkIn: "",
  checkOut: "",
  nights: 1,
  adults: 2,
  children: 0,
  rooms: {
    single: 0,
    dual: 1,
    triple: 0,
    family: 0
  },
  addons: {
    safari: false,
    massage: false,
    table: false
  },
  guestDetails: {
    fullName: "",
    phone: "",
    email: "",
    specialRequests: ""
  }
};

let activeLightboxIndex = 0;
let filteredGallery = [...GALLERY_DATA];

// ==========================================
// 3. INITIALIZATION & DOM READY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initDefaultDates();
  renderRoomCards();
  renderBookingModalRoomSelectors();
  renderQuickSearchRoomOptions();
  renderMenuItems("all");
  renderGalleryGrid("all");
  initEventListeners();
  checkUrlParamsForDirectActions();
  updateBookingSummary();
  renderStoredBookingsCount();
});

// ==========================================
// 4. DATE HELPERS & INVENTORY ENGINE
// ==========================================

function initDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d) => d.toISOString().split("T")[0];

  const checkInInput = document.getElementById("bookingCheckIn");
  const checkOutInput = document.getElementById("bookingCheckOut");
  const quickInInput = document.getElementById("quickCheckIn");
  const quickOutInput = document.getElementById("quickCheckOut");

  const todayStr = formatDate(today);
  const tomorrowStr = formatDate(tomorrow);

  bookingState.checkIn = todayStr;
  bookingState.checkOut = tomorrowStr;
  bookingState.nights = 1;

  if (checkInInput) {
    checkInInput.min = todayStr;
    checkInInput.value = todayStr;
  }
  if (checkOutInput) {
    checkOutInput.min = tomorrowStr;
    checkOutInput.value = tomorrowStr;
  }
  if (quickInInput) {
    quickInInput.min = todayStr;
    quickInInput.value = todayStr;
  }
  if (quickOutInput) {
    quickOutInput.min = tomorrowStr;
    quickOutInput.value = tomorrowStr;
  }
}

function calculateNights(checkInVal, checkOutVal) {
  if (!checkInVal || !checkOutVal) return 1;
  const d1 = new Date(checkInVal);
  const d2 = new Date(checkOutVal);
  const diffTime = d2 - d1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

// ==========================================
// 5. ROOM CARDS RENDERING
// ==========================================

function renderRoomCards() {
  const container = document.getElementById("roomCardsContainer");
  if (!container) return;

  container.innerHTML = ROOM_CATEGORIES.map((room) => `
    <div class="bg-white rounded-2xl overflow-hidden border border-beige shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <!-- Image with overlay tags -->
      <div class="relative h-64 overflow-hidden bg-espresso/10">
        <img 
          src="${room.primaryImage}" 
          alt="${room.name} at Sathkara Guest House" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-forest text-cream shadow-md">
            ${room.badge}
          </span>
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-espresso/80 text-gold border border-gold/40 shadow-sm">
            ${room.quantity} Available in Property
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-cream">
          <div>
            <span class="text-xs font-sinhala text-gold">${room.sinhalaName}</span>
            <h3 class="text-xl font-bold text-cream">${room.name}</h3>
          </div>
          <div class="text-right">
            <span class="text-xs text-cream/75 block">Nightly Rate</span>
            <span class="text-xl font-bold text-gold tabular-nums">Rs. ${room.rate.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div class="space-y-3">
          <div class="flex items-center gap-4 text-xs font-medium text-ink/80 pb-3 border-b border-beige">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <strong>Capacity:</strong> ${room.capacityLabel}
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              ${room.bedSetup}
            </span>
          </div>

          <p class="text-xs text-ink/80 leading-relaxed">
            ${room.description}
          </p>

          <!-- Amenities Badges -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${room.amenities.map(a => `
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-beige/60 text-forest border border-goldenbrown/15">
                <span class="text-goldenbrown font-bold">&#10003;</span> ${a}
              </span>
            `).join('')}
          </div>

          <!-- Mandatory Notice -->
          <div class="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-1.5">
            <span class="text-goldenbrown font-bold shrink-0 mt-0.5">&#9432;</span>
            <span><strong>Notice:</strong> Kitchen facilities are not available inside the rooms. Meals can be enjoyed at our on-site restaurant.</span>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="pt-2 flex items-center gap-3">
          <button 
            type="button" 
            onclick="preselectRoomAndOpenModal('${room.id}')"
            class="flex-1 py-3 px-4 rounded-xl bg-forest hover:bg-forest-hover text-cream text-xs font-bold transition shadow-sm hover:shadow flex items-center justify-center gap-2"
          >
            <span>Request Booking</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>

          <button 
            type="button" 
            onclick="openRoomGalleryModal('${room.id}')"
            class="py-3 px-3.5 rounded-xl border border-goldenbrown/30 bg-cream hover:bg-beige text-ink text-xs font-semibold transition"
            title="View Real Photos"
          >
            Photos (${room.gallery.length})
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 6. BOOKING ENGINE & ESTIMATOR
// ==========================================

function renderBookingModalRoomSelectors() {
  const container = document.getElementById("modalRoomSelectors");
  if (!container) return;

  container.innerHTML = ROOM_CATEGORIES.map((room) => {
    const selectedQty = bookingState.rooms[room.id] || 0;
    return `
      <div class="p-3.5 rounded-xl border ${selectedQty > 0 ? 'border-forest bg-beige/60' : 'border-beige bg-white'} transition flex items-center justify-between gap-3">
        <div class="space-y-0.5">
          <div class="flex items-center gap-2">
            <h4 class="font-bold text-sm text-forest">${room.name}</h4>
            <span class="text-[10px] px-2 py-0.2 rounded-full bg-goldenbrown/15 text-goldenbrown font-bold uppercase">
              Max ${room.quantity}
            </span>
          </div>
          <p class="text-xs text-ink/75">
            ${room.capacityLabel} &bull; <strong class="text-goldenbrown tabular-nums">Rs. ${room.rate.toLocaleString()}/night</strong>
          </p>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <button 
            type="button" 
            onclick="updateRoomQuantity('${room.id}', -1)"
            class="w-8 h-8 rounded-lg bg-white border border-goldenbrown/30 font-bold text-ink hover:bg-beige text-base flex items-center justify-center shadow-xs disabled:opacity-30 disabled:cursor-not-allowed"
            ${selectedQty <= 0 ? 'disabled' : ''}
          >-</button>
          
          <span class="w-6 text-center font-bold text-sm tabular-nums text-forest">
            ${selectedQty}
          </span>

          <button 
            type="button" 
            onclick="updateRoomQuantity('${room.id}', 1)"
            class="w-8 h-8 rounded-lg bg-white border border-goldenbrown/30 font-bold text-ink hover:bg-beige text-base flex items-center justify-center shadow-xs disabled:opacity-30 disabled:cursor-not-allowed"
            ${selectedQty >= room.quantity ? 'disabled' : ''}
          >+</button>
        </div>
      </div>
    `;
  }).join('');
}

function updateRoomQuantity(roomId, delta) {
  const room = ROOM_CATEGORIES.find(r => r.id === roomId);
  if (!room) return;

  const current = bookingState.rooms[roomId] || 0;
  const next = current + delta;

  if (next >= 0 && next <= room.quantity) {
    bookingState.rooms[roomId] = next;
    renderBookingModalRoomSelectors();
    updateBookingSummary();
  }
}

function updateBookingSummary() {
  const nights = calculateNights(bookingState.checkIn, bookingState.checkOut);
  bookingState.nights = nights;

  let nightlyRoomSum = 0;
  let totalCapacity = 0;
  let totalRooms = 0;
  const itemizedList = [];

  ROOM_CATEGORIES.forEach(room => {
    const qty = bookingState.rooms[room.id] || 0;
    if (qty > 0) {
      const lineTotal = qty * room.rate;
      nightlyRoomSum += lineTotal;
      totalCapacity += qty * room.capacity;
      totalRooms += qty;
      itemizedList.push(`${qty} × ${room.name} (Rs. ${lineTotal.toLocaleString()}/nt)`);
    }
  });

  const grandTotal = nightlyRoomSum * nights;
  const totalGuests = Number(bookingState.adults) + Number(bookingState.children);

  // Update DOM displays
  const totalDisplay = document.getElementById("bookingGrandTotalDisplay");
  const formulaDisplay = document.getElementById("bookingFormulaDisplay");
  const capacityAlert = document.getElementById("bookingCapacityAlert");
  const nightsDisplay = document.getElementById("bookingNightsBadge");

  if (totalDisplay) {
    totalDisplay.textContent = `Rs. ${grandTotal.toLocaleString()}`;
  }
  if (nightsDisplay) {
    nightsDisplay.textContent = `${nights} Night${nights > 1 ? 's' : ''}`;
  }
  if (formulaDisplay) {
    if (totalRooms > 0) {
      formulaDisplay.textContent = `${itemizedList.join(" + ")} × ${nights} night${nights > 1 ? 's' : ''}`;
    } else {
      formulaDisplay.textContent = "Please select at least 1 room category above.";
    }
  }

  // Validate Capacity
  if (capacityAlert) {
    if (totalRooms === 0) {
      capacityAlert.className = "p-3 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-900 block";
      capacityAlert.innerHTML = `<strong>Attention:</strong> Please choose at least one room category to calculate availability.`;
    } else if (totalGuests > totalCapacity) {
      capacityAlert.className = "p-3 rounded-lg bg-red-50 border border-red-300 text-xs font-medium text-red-900 block animate-fade-in";
      capacityAlert.innerHTML = `
        <strong>Capacity Limit Reached:</strong> ${totalGuests} guests selected, but your chosen rooms accommodate a maximum of <strong>${totalCapacity} guests</strong>. Please add another room or select the Family Room.
      `;
    } else {
      capacityAlert.className = "hidden";
    }
  }

  return { grandTotal, nightlyRoomSum, totalCapacity, totalRooms, nights, totalGuests };
}

// Preselect from outside and open modal
function preselectRoomAndOpenModal(roomId) {
  // Reset other rooms or ensure this one is selected
  ROOM_CATEGORIES.forEach(r => {
    bookingState.rooms[r.id] = (r.id === roomId) ? 1 : 0;
  });

  renderBookingModalRoomSelectors();
  updateBookingSummary();
  openModal('bookingModal');
  showToast(`Pre-selected: ${ROOM_CATEGORIES.find(r => r.id === roomId).name}`);
}

function handleQuickSearch(e) {
  if (e) e.preventDefault();
  const qIn = document.getElementById("quickCheckIn").value;
  const qOut = document.getElementById("quickCheckOut").value;
  const qRoom = document.getElementById("quickRoomSelect").value;
  const qGuests = parseInt(document.getElementById("quickGuestsSelect").value) || 2;

  if (qIn && qOut) {
    bookingState.checkIn = qIn;
    bookingState.checkOut = qOut;
    document.getElementById("bookingCheckIn").value = qIn;
    document.getElementById("bookingCheckOut").value = qOut;
  }

  bookingState.adults = qGuests;
  document.getElementById("bookingAdults").value = qGuests;

  if (qRoom && qRoom !== "any") {
    ROOM_CATEGORIES.forEach(r => {
      bookingState.rooms[r.id] = (r.id === qRoom) ? 1 : 0;
    });
  } else {
    // default to 1 Dual room
    ROOM_CATEGORIES.forEach(r => {
      bookingState.rooms[r.id] = (r.id === "dual") ? 1 : 0;
    });
  }

  renderBookingModalRoomSelectors();
  updateBookingSummary();
  openModal("bookingModal");
}

function renderQuickSearchRoomOptions() {
  const select = document.getElementById("quickRoomSelect");
  if (!select) return;

  select.innerHTML = `
    <option value="any">Any Room (Best Available)</option>
    ${ROOM_CATEGORIES.map(r => `
      <option value="${r.id}">${r.name} (Rs. ${r.rate.toLocaleString()}/nt)</option>
    `).join('')}
  `;
}

// ==========================================
// 7. BOOKING SUBMISSION & STORAGE
// ==========================================

function submitBookingRequest(e) {
  if (e) e.preventDefault();

  const summary = updateBookingSummary();

  if (summary.totalRooms === 0) {
    alert("Please select at least one room category.");
    return;
  }

  if (summary.totalGuests > summary.totalCapacity) {
    alert(`Your guest count (${summary.totalGuests}) exceeds the capacity of the selected rooms (${summary.totalCapacity}). Please add an additional room.`);
    return;
  }

  // Gather guest information
  const fullName = document.getElementById("guestFullName").value.trim();
  const phone = document.getElementById("guestPhone").value.trim();
  const email = document.getElementById("guestEmail").value.trim();
  const specialRequests = document.getElementById("guestRequests").value.trim();

  if (!fullName || !phone) {
    alert("Please provide your Full Name and Mobile Phone Number so our staff can contact you.");
    return;
  }

  // Add-ons
  const addSafari = document.getElementById("modalAddonSafari")?.checked || false;
  const addMassage = document.getElementById("modalAddonMassage")?.checked || false;
  const addTable = document.getElementById("modalAddonTable")?.checked || false;

  // Generate Reference & Token
  const reference = "SGH-" + Math.floor(100000 + Math.random() * 900000);
  const token = Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0')).join('');

  const selectedRoomsList = [];
  ROOM_CATEGORIES.forEach(r => {
    const q = bookingState.rooms[r.id] || 0;
    if (q > 0) {
      selectedRoomsList.push({ id: r.id, name: r.name, quantity: q, rate: r.rate, subtotal: q * r.rate * summary.nights });
    }
  });

  const newBooking = {
    reference,
    token,
    status: "Pending", // Strictly as per spec: new requests start as Pending
    createdAt: new Date().toISOString(),
    checkIn: bookingState.checkIn,
    checkOut: bookingState.checkOut,
    nights: summary.nights,
    adults: bookingState.adults,
    children: bookingState.children,
    totalGuests: summary.totalGuests,
    rooms: selectedRoomsList,
    addons: {
      safari: addSafari,
      massage: addMassage,
      table: addTable
    },
    grandTotal: summary.grandTotal,
    guest: {
      fullName,
      phone,
      email,
      specialRequests
    }
  };

  // Save to client-side localStorage
  saveBookingToStorage(newBooking);

  // Close booking modal & Open Success Modal
  closeModal("bookingModal");
  showBookingSuccessModal(newBooking);
  renderStoredBookingsCount();
}

function saveBookingToStorage(booking) {
  let existing = [];
  try {
    existing = JSON.parse(localStorage.getItem("sathkara_guest_house_bookings") || "[]");
  } catch (err) {
    existing = [];
  }
  existing.unshift(booking);
  localStorage.setItem("sathkara_guest_house_bookings", JSON.stringify(existing));
}

function getStoredBookings() {
  try {
    return JSON.parse(localStorage.getItem("sathkara_guest_house_bookings") || "[]");
  } catch (e) {
    return [];
  }
}

function showBookingSuccessModal(b) {
  const modal = document.getElementById("bookingSuccessModal");
  if (!modal) return;

  const roomNames = b.rooms.map(r => `${r.quantity}x ${r.name}`).join(", ");
  const addons = [];
  if (b.addons.safari) addons.push("Wilpattu Safari Request");
  if (b.addons.massage) addons.push("Sports Massage Enquiry");
  if (b.addons.table) addons.push("Restaurant Table Reservation");

  // Format WhatsApp message to +94 77 863 8229
  const waText = encodeURIComponent(
    `*NEW SATHKARA GUEST HOUSE RESERVATION REQUEST*\n` +
    `----------------------------------------\n` +
    `*Reference:* ${b.reference}\n` +
    `*Guest:* ${b.guest.fullName}\n` +
    `*Phone:* ${b.guest.phone}\n` +
    (b.guest.email ? `*Email:* ${b.guest.email}\n` : ``) +
    `*Check-In:* ${b.checkIn} (from 2:00 PM)\n` +
    `*Check-Out:* ${b.checkOut} (by 12:00 noon)\n` +
    `*Duration:* ${b.nights} night(s)\n` +
    `*Guests:* ${b.adults} Adults, ${b.children} Children\n` +
    `*Rooms:* ${roomNames}\n` +
    `*Estimated Total:* Rs. ${b.grandTotal.toLocaleString()} LKR\n` +
    (addons.length ? `*Add-ons:* ${addons.join(", ")}\n` : ``) +
    (b.guest.specialRequests ? `*Requests:* ${b.guest.specialRequests}\n` : ``) +
    `*Status:* Pending Hotel Verification\n` +
    `----------------------------------------\n` +
    `Please verify availability and send confirmation. Thank you!`
  );

  const waLink = `https://wa.me/94778638229?text=${waText}`;

  document.getElementById("successRefBadge").textContent = b.reference;
  document.getElementById("successGuestName").textContent = b.guest.fullName;
  document.getElementById("successDates").textContent = `${b.checkIn} to ${b.checkOut} (${b.nights} nt)`;
  document.getElementById("successRooms").textContent = roomNames;
  document.getElementById("successTotal").textContent = `Rs. ${b.grandTotal.toLocaleString()}`;
  
  const waBtn = document.getElementById("successWhatsAppBtn");
  if (waBtn) {
    waBtn.href = waLink;
  }

  const lookupBtn = document.getElementById("successLookupBtn");
  if (lookupBtn) {
    lookupBtn.onclick = () => {
      closeModal("bookingSuccessModal");
      openMyBookingsModal(b.reference);
    };
  }

  openModal("bookingSuccessModal");
}

// ==========================================
// 8. MY BOOKINGS & SELF-SERVICE CANCELLATION
// ==========================================

function openMyBookingsModal(prefillRef = "") {
  const modal = document.getElementById("myBookingsModal");
  if (!modal) return;

  const refInput = document.getElementById("lookupRefInput");
  if (refInput && prefillRef) {
    refInput.value = prefillRef;
  }

  renderMyBookingsList(prefillRef);
  openModal("myBookingsModal");
}

function renderMyBookingsList(filterRef = "") {
  const container = document.getElementById("myBookingsListContainer");
  if (!container) return;

  const all = getStoredBookings();

  if (all.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 space-y-3 bg-cream rounded-xl border border-beige p-6">
        <div class="w-12 h-12 mx-auto rounded-full bg-goldenbrown/10 text-goldenbrown flex items-center justify-center text-xl">
          &#128197;
        </div>
        <h4 class="font-bold text-forest text-base">No Saved Bookings Found</h4>
        <p class="text-xs text-ink/75 max-w-sm mx-auto">
          Reservations created on this browser appear here automatically. If you booked from another device, enter your Reference code above.
        </p>
        <button type="button" onclick="closeModal('myBookingsModal'); openModal('bookingModal');" class="mt-2 px-4 py-2 rounded-lg bg-forest text-cream text-xs font-bold hover:bg-forest-hover">
          Make a Reservation
        </button>
      </div>
    `;
    return;
  }

  const displayList = filterRef 
    ? all.filter(b => b.reference.toLowerCase().includes(filterRef.toLowerCase().trim())) 
    : all;

  if (displayList.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-xs text-ink/75 bg-cream rounded-xl border border-beige">
        No booking found matching Reference "<strong>${filterRef}</strong>". Please check your reference number.
      </div>
    `;
    return;
  }

  container.innerHTML = displayList.map(b => {
    let statusClass = "bg-amber-100 text-amber-900 border-amber-300";
    if (b.status === "Confirmed") statusClass = "bg-emerald-100 text-emerald-900 border-emerald-300";
    if (b.status === "Cancelled") statusClass = "bg-stone-200 text-stone-700 border-stone-300";

    const isCancelled = b.status === "Cancelled";

    return `
      <div class="p-5 rounded-xl border border-beige bg-white shadow-xs space-y-4">
        <div class="flex items-start justify-between gap-3 border-b border-beige pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-forest tabular-nums tracking-wide">${b.reference}</span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${statusClass}">
                ${b.status}
              </span>
            </div>
            <p class="text-xs text-ink/70 mt-0.5">Created on ${new Date(b.createdAt).toLocaleDateString()}</p>
          </div>
          <span class="text-base font-bold text-forest tabular-nums">
            Rs. ${b.grandTotal.toLocaleString()}
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span class="text-ink/60 block">Check-in</span>
            <strong class="text-ink">${b.checkIn}</strong>
            <span class="text-[10px] text-goldenbrown block">From 2:00 PM</span>
          </div>
          <div>
            <span class="text-ink/60 block">Check-out</span>
            <strong class="text-ink">${b.checkOut}</strong>
            <span class="text-[10px] text-goldenbrown block">By 12:00 noon</span>
          </div>
          <div>
            <span class="text-ink/60 block">Duration</span>
            <strong class="text-ink">${b.nights} Night${b.nights > 1 ? 's' : ''}</strong>
          </div>
          <div>
            <span class="text-ink/60 block">Party Size</span>
            <strong class="text-ink">${b.totalGuests} Guests</strong>
          </div>
        </div>

        <div class="text-xs bg-cream p-3 rounded-lg border border-beige space-y-1">
          <p><strong>Reserved Rooms:</strong> ${b.rooms.map(r => `${r.quantity}× ${r.name}`).join(', ')}</p>
          <p><strong>Primary Guest:</strong> ${b.guest.fullName} (${b.guest.phone})</p>
          ${b.addons.safari ? '<p class="text-goldenbrown font-medium">&#10003; Includes Wilpattu Safari Request</p>' : ''}
          ${b.addons.massage ? '<p class="text-goldenbrown font-medium">&#10003; Includes Sports Massage Enquiry</p>' : ''}
          ${b.addons.table ? '<p class="text-goldenbrown font-medium">&#10003; Includes Restaurant Table Reservation</p>' : ''}
        </div>

        <!-- Management Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
          <a 
            href="https://wa.me/94778638229?text=Hello%20Sathkara%20Guest%20House,%20inquiring%20about%20my%20booking%20reference%20${b.reference}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest text-cream text-xs font-semibold hover:bg-forest-hover transition"
          >
            <span>WhatsApp Staff (+94 77 863 8229)</span>
          </a>

          ${!isCancelled ? `
            <button 
              type="button" 
              onclick="promptCancelBooking('${b.reference}')"
              class="px-3 py-1.5 rounded-lg bg-red-50 text-red-800 border border-red-200 hover:bg-red-100 text-xs font-semibold transition"
            >
              Cancel Booking
            </button>
          ` : `
            <span class="text-xs text-stone-500 italic">This reservation has been cancelled.</span>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function promptCancelBooking(reference) {
  if (!confirm(`Are you sure you want to cancel booking ${reference}? As per property policy, cancelled rooms will be immediately released for other guests.`)) {
    return;
  }

  const all = getStoredBookings();
  const idx = all.findIndex(b => b.reference === reference);
  if (idx !== -1) {
    all[idx].status = "Cancelled";
    all[idx].cancelledAt = new Date().toISOString();
    localStorage.setItem("sathkara_guest_house_bookings", JSON.stringify(all));
    showToast(`Booking ${reference} has been successfully cancelled.`);
    renderMyBookingsList();
    renderStoredBookingsCount();
  }
}

function renderStoredBookingsCount() {
  const count = getStoredBookings().filter(b => b.status !== "Cancelled").length;
  const badges = document.querySelectorAll(".stored-booking-count");
  badges.forEach(b => {
    b.textContent = count;
    b.classList.toggle("hidden", count === 0);
  });
}

// ==========================================
// 9. RESTAURANT MENU FILTERING
// ==========================================

function renderMenuItems(cat) {
  const container = document.getElementById("menuItemsContainer");
  if (!container) return;

  const filtered = cat === "all" ? MENU_DATA : MENU_DATA.filter(m => m.category === cat);

  // Update tabs active styling
  document.querySelectorAll(".menu-category-btn").forEach(btn => {
    const isCurrent = btn.dataset.category === cat;
    btn.className = `menu-category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
      isCurrent 
        ? "bg-forest text-cream shadow-sm" 
        : "bg-beige/70 text-ink hover:bg-beige"
    }`;
  });

  container.innerHTML = filtered.map(item => `
    <div class="p-4 rounded-xl border border-beige bg-white shadow-xs hover:border-goldenbrown/40 transition flex flex-col justify-between gap-3">
      <div class="space-y-1">
        <div class="flex items-start justify-between gap-2">
          <h4 class="font-bold text-sm sm:text-base text-forest leading-snug">${item.name}</h4>
          ${item.tag ? `
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 shrink-0">
              ${item.tag}
            </span>
          ` : ''}
        </div>
        <p class="text-xs text-ink/75 leading-relaxed">${item.note}</p>
      </div>

      <div class="flex items-center justify-between pt-2 border-t border-beige/60 text-xs">
        <span class="text-ink/65 font-medium">${item.portion}</span>
        <span class="font-bold text-forest text-right tabular-nums ${item.priceText.includes('Contact') ? 'text-goldenbrown font-semibold text-[11px]' : 'text-sm sm:text-base'}">
          ${item.priceText}
        </span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 10. PHOTO GALLERY & LIGHTBOX
// ==========================================

function renderGalleryGrid(cat) {
  const container = document.getElementById("galleryGridContainer");
  if (!container) return;

  filteredGallery = cat === "all" ? GALLERY_DATA : GALLERY_DATA.filter(g => g.category === cat);

  // Update filter buttons
  document.querySelectorAll(".gallery-filter-btn").forEach(btn => {
    const isCurrent = btn.dataset.cat === cat;
    btn.className = `gallery-filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
      isCurrent 
        ? "bg-forest text-cream shadow-xs" 
        : "bg-beige/70 text-ink hover:bg-beige"
    }`;
  });

  container.innerHTML = filteredGallery.map((item, idx) => `
    <div 
      onclick="openLightbox(${idx})" 
      class="gallery-img-container rounded-2xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer bg-espresso/10 aspect-4/3 group relative"
    >
      <img 
        src="${item.src}" 
        alt="${item.title}" 
        class="w-full h-full object-cover transition-transform duration-500" 
        loading="lazy" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-cream">
        <span class="text-[10px] uppercase tracking-wider text-gold font-bold">${item.categoryName}</span>
        <p class="text-xs font-bold leading-tight mt-0.5">${item.title}</p>
        <span class="text-[11px] text-cream/80 line-clamp-1 mt-0.5">${item.caption}</span>
      </div>
      <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-espresso/70 text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
      </div>
    </div>
  `).join('');
}

function openLightbox(index) {
  activeLightboxIndex = index;
  updateLightboxContent();
  openModal("lightboxModal");
}

function updateLightboxContent() {
  const item = filteredGallery[activeLightboxIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const caption = document.getElementById("lightboxCaption");
  const counter = document.getElementById("lightboxCounter");

  if (img) img.src = item.src;
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (counter) counter.textContent = `${activeLightboxIndex + 1} of ${filteredGallery.length}`;
}

function nextLightboxImage() {
  if (filteredGallery.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % filteredGallery.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  if (filteredGallery.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
  updateLightboxContent();
}

function openRoomGalleryModal(roomId) {
  const room = ROOM_CATEGORIES.find(r => r.id === roomId);
  if (!room) return;

  // Filter gallery for room photos and open
  filteredGallery = GALLERY_DATA.filter(g => g.category === "rooms" || g.category === "bathrooms");
  activeLightboxIndex = 0;
  updateLightboxContent();
  openModal("lightboxModal");
}

// ==========================================
// 11. EXPERIENCE MODALS (SAFARI & MASSAGE)
// ==========================================

function openSafariEnquiryModal() {
  openModal("safariModal");
}

function submitSafariEnquiry(e) {
  if (e) e.preventDefault();
  const date = document.getElementById("safariDate").value;
  const adults = document.getElementById("safariAdults").value;
  const name = document.getElementById("safariName").value.trim();
  const phone = document.getElementById("safariPhone").value.trim();
  const notes = document.getElementById("safariNotes").value.trim();

  if (!name || !phone) {
    alert("Please provide your name and phone number for the safari quote.");
    return;
  }

  const text = encodeURIComponent(
    `*WILPATTU SAFARI TOUR QUOTATION REQUEST*\n` +
    `----------------------------------------\n` +
    `*Guest:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Preferred Date:* ${date || "Flexible"}\n` +
    `*Participants:* ${adults} Adults\n` +
    (notes ? `*Notes:* ${notes}\n` : ``) +
    `----------------------------------------\n` +
    `Arranged through Sathkara Guest House external trusted safari partner.\n` +
    `Please provide jeep and permit quotation. Thank you!`
  );

  window.open(`https://wa.me/94778638229?text=${text}`, "_blank");
  closeModal("safariModal");
  showToast("Safari quotation request dispatched via WhatsApp.");
}

function openMassageEnquiryModal() {
  openModal("massageModal");
}

function submitMassageEnquiry(e) {
  if (e) e.preventDefault();
  const date = document.getElementById("massageDate").value;
  const time = document.getElementById("massageTime").value;
  const name = document.getElementById("massageName").value.trim();
  const phone = document.getElementById("massagePhone").value.trim();
  const inRoom = document.getElementById("massageInRoom")?.checked ? "Yes (In-Room mobile option)" : "No";

  if (!name || !phone) {
    alert("Please enter your name and phone number to schedule your massage.");
    return;
  }

  const text = encodeURIComponent(
    `*AURA WELLNESS SPORTS MASSAGE ENQUIRY*\n` +
    `----------------------------------------\n` +
    `*Client:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Preferred Date:* ${date || "As soon as possible"}\n` +
    `*Preferred Time:* ${time || "Flexible"}\n` +
    `*In-Room Service:* ${inRoom}\n` +
    `----------------------------------------\n` +
    `NVQ Level 4 Sports Masseur session enquiry at Sathkara Guest House.`
  );

  window.open(`https://wa.me/94778638229?text=${text}`, "_blank");
  closeModal("massageModal");
  showToast("Sports massage enquiry sent via WhatsApp.");
}

function openTableReservationModal() {
  openModal("tableModal");
}

function submitTableReservation(e) {
  if (e) e.preventDefault();
  const date = document.getElementById("tableDate").value;
  const time = document.getElementById("tableTime").value;
  const guests = document.getElementById("tableGuests").value;
  const meal = document.getElementById("tableMealType").value;
  const name = document.getElementById("tableName").value.trim();
  const phone = document.getElementById("tablePhone").value.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number to reserve your table.");
    return;
  }

  const text = encodeURIComponent(
    `*RESTAURANT TABLE RESERVATION REQUEST*\n` +
    `----------------------------------------\n` +
    `*Guest:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Date:* ${date || "Today"}\n` +
    `*Time:* ${time || "Evening"}\n` +
    `*Party Size:* ${guests} Guests\n` +
    `*Meal Type:* ${meal}\n` +
    `----------------------------------------\n` +
    `Sathkara Guest House On-Site Garden Restaurant.`
  );

  window.open(`https://wa.me/94778638229?text=${text}`, "_blank");
  closeModal("tableModal");
  showToast("Table reservation request dispatched to restaurant.");
}

// ==========================================
// 12. GENERIC MODAL & UI UTILITIES
// ==========================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function showToast(message) {
  let toast = document.getElementById("appToastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToastNotification";
    toast.className = "fixed top-20 right-4 z-50 px-4 py-3 rounded-xl bg-espresso text-cream text-xs font-semibold shadow-2xl border border-gold/40 flex items-center gap-2 transform transition-all duration-300 translate-y-[-20px] opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="text-gold font-bold">&#9432;</span> <span>${message}</span>`;
  toast.classList.remove("translate-y-[-20px]", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-[-20px]", "opacity-0");
  }, 3500);
}

// ==========================================
// 13. URL PARAMETER CHECKER (DEEP LINKS)
// ==========================================

function checkUrlParamsForDirectActions() {
  const params = new URLSearchParams(window.location.search);
  const bookingRef = params.get("booking");
  const directRoom = params.get("room");

  if (bookingRef) {
    openMyBookingsModal(bookingRef);
  } else if (directRoom) {
    preselectRoomAndOpenModal(directRoom);
  }
}

// ==========================================
// 14. EVENT LISTENERS
// ==========================================

function initEventListeners() {
  // Mobile drawer navigation
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileClose = document.getElementById("mobileDrawerClose");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("hidden");
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener("click", () => {
      mobileDrawer.classList.add("hidden");
    });
  }

  // Date and guest input listeners
  const checkIn = document.getElementById("bookingCheckIn");
  const checkOut = document.getElementById("bookingCheckOut");
  const adults = document.getElementById("bookingAdults");
  const children = document.getElementById("bookingChildren");

  if (checkIn) {
    checkIn.addEventListener("change", (e) => {
      bookingState.checkIn = e.target.value;
      if (checkOut && checkOut.value <= e.target.value) {
        const nextDay = new Date(e.target.value);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOut.value = nextDay.toISOString().split("T")[0];
        bookingState.checkOut = checkOut.value;
      }
      updateBookingSummary();
    });
  }

  if (checkOut) {
    checkOut.addEventListener("change", (e) => {
      bookingState.checkOut = e.target.value;
      updateBookingSummary();
    });
  }

  if (adults) {
    adults.addEventListener("input", (e) => {
      bookingState.adults = Math.max(1, parseInt(e.target.value) || 1);
      updateBookingSummary();
    });
  }

  if (children) {
    children.addEventListener("input", (e) => {
      bookingState.children = Math.max(0, parseInt(e.target.value) || 0);
      updateBookingSummary();
    });
  }

  // Lookup Reference form
  const lookupForm = document.getElementById("lookupRefForm");
  if (lookupForm) {
    lookupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("lookupRefInput").value;
      renderMyBookingsList(val);
    });
  }

  // Lightbox keyboard arrows
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightboxModal");
    if (lightbox && !lightbox.classList.contains("hidden")) {
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
      if (e.key === "Escape") closeModal("lightboxModal");
    }
  });

  // Close modals on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        const parentModal = backdrop.closest(".fixed");
        if (parentModal) {
          closeModal(parentModal.id);
        }
      }
    });
  });
}
