/* ---------------------------------------------------------------
   DATA — real content from baranghomestay.com, Airbnb, GetYourGuide,
   himalayanjourney.com, and user-provided documents.
   PRICES: Airbnb doesn't expose a static nightly rate without dates
   selected, and GetYourGuide's pricing is behind JS rendering, so
   only Kabi's base room price below is a confirmed third-party figure
   (hopnepal.com lists it "Starting from USD 15"). Every other price
   is a placeholder estimate — swap in real rates before launch.
---------------------------------------------------------------- */

export const WHATSAPP = "9779806595884";
export const waLink = (msg) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`;

export const homestays = [
  {
    id: "kabi-standard",
    name: "Kabi's Homestay",
    room: "Standard Room",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-23362326/original/a9538627-5a7b-4062-bdfe-1f4a2b01872a.jpeg?im_w=720",
    text: "2 single beds, private bathroom. The village's best mountain view, top-5% rated.",
    price: 15,
    rating: "4.99",
    reviews: 121,
  },
  {
    id: "kabi-deluxe",
    name: "Kabi's Homestay",
    room: "Deluxe King Room",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1513384220696191656/original/7f49aaa6-194c-4365-bb19-98094f26200b.jpeg?im_w=720",
    text: "1 king bed, private bathroom. Top-10% rated, run by a trekking guide of 16+ years.",
    price: 22,
    rating: "5.0",
    reviews: 20,
  },
  {
    id: "maya",
    name: "Maya's Homestay",
    room: "Triple Room",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTUxMzM5MjU5OTI4NDQ5MzQ5Mg==/original/f10250af-cdc8-47f6-b78c-9c32d075984e.png?im_w=720",
    text: "2 beds, shared bathroom. Buffalo-milk butter twice a week and a walk to the jungle for grass.",
    price: 18,
    rating: "5.0",
    reviews: 1,
  },
  {
    id: "shiva",
    name: "Shiva's Homestay",
    room: "Double Room",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1513395353077972582/original/d41459d8-6698-4955-8404-6408e2a2dd5d.jpeg?im_w=720",
    text: "1 bed, shared bathroom. A mud-and-stone house with river fishing most afternoons.",
    price: 15,
    rating: "5.0",
    reviews: 1,
  },
  {
    id: "sarada",
    name: "Sagar & Salina's Homestay",
    room: "Queen Room",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1602034645895890015/original/755c3b16-d1ab-4330-adc7-30520bedc524.jpeg?im_w=720",
    text: "1 bed, shared bathroom. Run by a kindergarten teacher — mountain and river views.",
    price: 17,
    rating: "5.0",
    reviews: 2,
  },
];

export const dayTrips = [
  {
    id: "swim-jungle",
    title: "Swimming and Jungle Walk",
    text: "A cool river swim on the Harpan Khola followed by a guided walk into the forest above the village.",
    price: 20,
    img: "/gallery/experience-swimming.jpg",
  },
  {
    id: "meditation-healing",
    title: "Meditation and Sound Healing",
    text: "Morning meditation at the village Ashram, followed by a traditional sound healing bowl session.",
    price: 30,
    img: "/gallery/experience-meditation.jpg",
  },
  {
    id: "cultural-cooking",
    title: "Guided Cultural Tour & Cooking Class",
    text: "A village walking tour, river walk, traditional costume photos, organic farming, and a Dal Bhat cooking class.",
    price: 35,
    img: "/gallery/experience-cultural-tour.jpg",
  },
];

export const whyStay = [
  { n: "01", title: "Real Family Life", text: "You stay inside an actual home — not a guesthouse built to look like one.", image: false },
  { n: "02", title: "Home-Cooked Meals", text: "Every meal grown on the property and cooked the way the family always has.", image: true, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80" },
  { n: "03", title: "Local-Led Days", text: "Farming, fishing, and hiking are led by the people who do them every day.", image: false },
  { n: "04", title: "Community Income", text: "What you spend stays in the village that hosts you, family by family.", image: false },
];

export const faqs = [
  { q: "What's included in a homestay booking?", a: "Breakfast, lunch, dinner, tea, coffee and buffalo milk are included in every room rate, along with access to the family's daily activities." },
  { q: "How do I book — is it through Airbnb?", a: "Booking is handled directly with the family over WhatsApp, so there's no third-party platform or fee in between." },
  { q: "How do I get from Pokhara to the village?", a: "By jeep, taxi, or local bus from Lakeside — all detailed on our How to Reach Us page, roughly an hour each way." },
  { q: "Can I book Experiences or Cooking Classes without staying overnight?", a: "Yes — day trips and cooking classes can be booked on their own, as inquiries over WhatsApp." },
];

export const reviews = [
  { name: "Grace", country: "Taiwan", rating: 5, text: "Fresh mountain air, a warm welcome, and a sound-healing session I still think about." },
  { name: "Sethu", country: "India", rating: 5, text: "Felt like being folded straight into the family from the moment I arrived." },
  { name: "Amanda", country: "USA", rating: 5, text: "Woke up to mountain views every morning and learned to cook with the family." },
  { name: "David", country: "USA", rating: 5, text: "An authentic homestay not far from Pokhara — clean rooms, warm hosts, worth it." },
  { name: "Millie", country: "UK", rating: 5, text: "The most giving people I've met — the highlight of my whole Nepal trip." },
  { name: "Cody", country: "USA", rating: 5, text: "Ama's cooking and a village that lives in real harmony with the hills around it." },
];

/* Treks run by Himalayan Journey — the same company, same founder
   (Kabi Raj) as the homestay. All three genuinely route through and
   stay overnight in Barang Village. Source: himalayanjourney.com/treks/ */
export const treks = [
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    days: "19 Days",
    difficulty: "Challenging",
    text: "A legendary circuit crossing the 5,416m Thorong La Pass, finishing with a community homestay right here in Barang Village.",
    img: "https://himalayanjourney.com/_astro/kali-gandaki-gorge.DaF7voGJ_ptelD.webp",
    url: "https://himalayanjourney.com/treks/annapurna-circuit/",
  },
  {
    id: "panchase-mardi",
    title: "Panchase & Mardi Trek",
    days: "18 Days",
    difficulty: "Moderate",
    text: "From Panchase Peak to Mardi Himal Base Camp, with two full days living in Barang Village woven into the journey.",
    img: "https://himalayanjourney.com/_astro/barang-village-aerial.BNXnQlIH_Zi74QA.webp",
    url: "https://himalayanjourney.com/treks/panchase-mardi/",
  },
  {
    id: "annapurna-community",
    title: "Annapurna Community Trek",
    days: "5 Days",
    difficulty: "Easy",
    text: "A gentle introduction to Himalayan trekking through Gurung and Magar villages, staying in community homestays along the way.",
    img: "https://himalayanjourney.com/_astro/photo-3.hTSEjOpM_Z1t0Tgx.webp",
    url: "https://himalayanjourney.com/treks/annapurna-community/",
  },
];
export const TREKS_ALL_URL = "https://himalayanjourney.com/treks/";

/* Partner travel companies — source: Himalayan Journey Partner
   Company Details document. Logo files were supplied only as Google
   Drive links, which can't be fetched automatically — using
   typographic placeholder tiles until real logo files are provided
   directly (see chat note). */
export const partners = [
  { name: "Machon Letvuna", country: "Israel", url: "https://letvuna.co.il/" },
  { name: "Apetyt na Świat", country: "Poland", url: "https://www.apetytnaswiat.pl/" },
  { name: "Terramotion", country: "Indonesia", url: "https://www.terramotion.id/" },
  { name: "Movepa", country: "Thailand", url: "https://www.facebook.com/MOVEPA.official" },
  { name: "Tugende", country: "Poland", url: "https://tugende.pl/" },
  { name: "Viewfinder Travel", country: "Thailand", url: "https://www.facebook.com/ViewfinderTravel" },
  { name: "Little Monsters Travel", country: "Singapore", url: "https://littlemonsterstravel.net/" },
  { name: "India Visit", country: "India", url: "http://www.indiavisit.co.in/" },
  { name: "Katanya Pendaki Trip", country: "Indonesia", url: "https://www.instagram.com/katanyapendaki.trip/" },
];

/* Festivals — condensed/paraphrased from the user-provided
   "Nepali Festivals" document. */
export const festivals = [
  { name: "Dashain", season: "Sept–Oct", text: "Nepal's longest, biggest festival — honoring Goddess Durga with family reunions and the tenth-day tika and jamara blessing." },
  { name: "Tihar", season: "Oct–Nov", text: "The Festival of Lights — five days honoring crows, dogs, cows, Goddess Laxmi, and the bond between brothers and sisters." },
  { name: "Teej", season: "Aug–Sept", text: "A vibrant women's festival of fasting, song, and dance for Parvati and Shiva, and a chance to reunite with family." },
  { name: "Maha Shivaratri", season: "Feb–Mar", text: "The 'Great Night of Shiva' — fasting, meditation, and night-long worship, centered on Pashupatinath Temple." },
  { name: "Holi Purnima", season: "Feb–Mar", text: "The Festival of Colors — powder, water, and citywide celebration welcoming the arrival of spring." },
  { name: "Ram Navami", season: "Mar–Apr", text: "Marks the birth of Lord Rama with temple prayers, fasting, and readings from the Ramayana." },
  { name: "Chhath Parva", season: "Oct–Nov", text: "Riverside worship of the sun god, with offerings at sunset and sunrise over several devoted days." },
  { name: "Buddha Jayanti", season: "Apr–May", text: "Celebrates the birth, enlightenment, and passing of Buddha, centered at Lumbini and Kathmandu's great stupas." },
  { name: "Ubhauli Festival", season: "Apr–May", text: "A Kirat/Rai seasonal festival marking the start of farming season with the circular Sakela dance." },
  { name: "Udhauli Festival", season: "Nov–Dec", text: "The harvest-season counterpart to Ubhauli — gratitude to nature and ancestors through the Sakela dance." },
  { name: "Yomari Punhi", season: "Nov–Dec", text: "A Newar harvest festival celebrated with steamed Yomari dumplings and prayers to Annapurna." },
  { name: "Tamu Lhosar", season: "Dec–Jan", text: "The Gurung New Year — traditional music, Ghatu and Sorathi dance, and family reunions." },
  { name: "Gyalpo Lhosar", season: "Feb–Mar", text: "The Sherpa New Year — spiritual renewal and spectacular masked Chham dances at monasteries." },
  { name: "Sonam Lhosar", season: "Jan–Feb", text: "The Tamang New Year — damphu drums, Tamang Selo music, and festive family gatherings." },
  { name: "Indra Jatra", season: "Aug–Sept", text: "A Kathmandu Valley festival honoring the rain god, famous for the Living Goddess Kumari's chariot procession." },
  { name: "Bisket Jatra", season: "April", text: "Bhaktapur's dramatic New Year festival, known for towering wooden chariots pulled through the streets." },
  { name: "Ropain Jatra", season: "June–July", text: "A joyful rice-planting festival — mud, music, and dancing together in the flooded paddy fields." },
  { name: "Ghode Jatra", season: "Mar–Apr", text: "Kathmandu's Festival of Horses, featuring equestrian displays and military demonstrations at Tundikhel." },
  { name: "Tongue Piercing Festival", season: "April", text: "A rare, deeply devotional ritual in Bode, Bhaktapur, honoring the local deity Barahi." },
  { name: "Maghe Sankranti", season: "January", text: "Marks the turn toward warmer days with sacred river bathing and seasonal foods like til ko laddu." },
  { name: "Janai Purnima", season: "August", text: "A sacred-thread renewal and protection ritual, with pilgrimages to lakes like Gosainkunda." },
  { name: "Gai Jatra", season: "Aug–Sept", text: "The Festival of Cows — remembering loved ones lost during the year through procession, humor, and satire." },
  { name: "Krishna Janmashtami", season: "Aug–Sept", text: "Celebrates Lord Krishna's birth with midnight prayers, fasting, and devotional song." },
];

export const impact = [
  {
    title: "Home Renovations",
    text: "A share of every stay goes back into repairing and upgrading the family homes that host guests — from roofing and room upgrades to basic sanitation, so hosting income directly improves where the family actually lives.",
  },
  {
    title: "Paying for an English Teacher",
    text: "We help fund an English teacher for children in the village, giving the next generation language skills that open doors — in school, in tourism, and beyond.",
  },
  {
    title: "Computer Classes",
    text: "Basic computer classes are supported for village children and young adults, building digital literacy that's increasingly essential for education and work outside the village.",
  },
];

export const navLinks = [
  { type: "hash", href: "#home", label: "Home" },
  { type: "hash", href: "#about", label: "About us" },
  { type: "hash", href: "#homestays", label: "Homestays" },
  { type: "hash", href: "#experiences", label: "Experiences" },
  { type: "hash", href: "#cooking", label: "Cooking Classes" },
  { type: "hash", href: "#treks", label: "Treks" },
  { type: "route", href: "/impact", label: "Our Impact" },
];

export const btnPrimary =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-white text-black transition-all duration-200 hover:bg-[var(--ink)] hover:text-white hover:-translate-y-0.5 hover:shadow-md";
export const btnDark =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[var(--ink)] text-white transition-all duration-200 hover:bg-black hover:-translate-y-0.5 hover:shadow-md";
export const btnOutline =
  "inline-flex items-center px-5 py-2.5 rounded-full text-xs font-medium border transition-all duration-200 hover:bg-[var(--ink)] hover:text-white hover:-translate-y-0.5";
