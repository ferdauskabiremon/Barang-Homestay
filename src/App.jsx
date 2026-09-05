import React, { useState, useEffect } from "react";
import { Menu, X, Plus, Minus, ArrowUpRight, Mountain, Star } from "lucide-react";

/* ---------------------------------------------------------------
   DATA — real content from baranghomestay.com, Airbnb & GetYourGuide.
   PRICES: Airbnb doesn't expose a static nightly rate without dates
   selected, and GetYourGuide's pricing is behind JS rendering, so
   only Kabi's base room price below is a confirmed third-party figure
   (hopnepal.com lists it "Starting from USD 15"). Every other price
   is a placeholder estimate — swap in real rates before launch.
---------------------------------------------------------------- */

const WHATSAPP = "9779806595884";
const waLink = (msg) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`;

const homestays = [
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

const dayTrips = [
  {
    id: "swim-jungle",
    title: "Swimming and Jungle Walk",
    text: "A cool river swim on the Harpan Khola followed by a guided walk into the forest above the village.",
    price: 20,
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
  },
  {
    id: "meditation-healing",
    title: "Meditation and Sound Healing",
    text: "Morning meditation at the village Ashram, followed by a traditional sound healing bowl session.",
    price: 30,
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80",
  },
  {
    id: "cultural-cooking",
    title: "Guided Cultural Tour & Cooking Class",
    text: "A village walking tour, river walk, traditional costume photos, organic farming, and a Dal Bhat cooking class.",
    price: 35,
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80",
  },
];

const whyStay = [
  { n: "01", title: "Real Family Life", text: "You stay inside an actual home — not a guesthouse built to look like one.", image: false },
  { n: "02", title: "Home-Cooked Meals", text: "Every meal grown on the property and cooked the way the family always has.", image: true, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80" },
  { n: "03", title: "Local-Led Days", text: "Farming, fishing, and hiking are led by the people who do them every day.", image: false },
  { n: "04", title: "Community Income", text: "What you spend stays in the village that hosts you, family by family.", image: false },
];

const faqs = [
  { q: "What's included in a homestay booking?", a: "Breakfast, lunch, dinner, tea, coffee and buffalo milk are included in every room rate, along with access to the family's daily activities." },
  { q: "How do I book — is it through Airbnb?", a: "Booking is handled directly with the family over WhatsApp, so there's no third-party platform or fee in between." },
  { q: "How do I get from Pokhara to the village?", a: "By jeep, taxi, or local bus from Lakeside — all detailed on our How to Reach Us page, roughly an hour each way." },
  { q: "Can I book Experiences or Cooking Classes without staying overnight?", a: "Yes — day trips and cooking classes can be booked on their own, as inquiries over WhatsApp." },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#homestays", label: "Homestays" },
  { href: "#experiences", label: "Experiences" },
  { href: "#cooking", label: "Cooking Classes" },
];

/* Simple text-styled brand badges — standing in for licensed logo
   assets. Swap for the real Airbnb/Booking.com logo files (with
   permission to use them) before launch. */
function AirbnbBadge({ dark }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: dark ? "#FF385C" : "#ffffff" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 5 12.5 5 16a7 7 0 0014 0c0-3.5-4-9-7-14z" /></svg>
      airbnb
    </span>
  );
}
function BookingBadge({ dark }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: dark ? "#003580" : "#ffffff" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
      Booking.com
    </span>
  );
}

const btnPrimary =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-white text-black transition-all duration-200 hover:bg-[var(--ink)] hover:text-white hover:-translate-y-0.5 hover:shadow-md";
const btnDark =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[var(--ink)] text-white transition-all duration-200 hover:bg-black hover:-translate-y-0.5 hover:shadow-md";
const btnOutline =
  "inline-flex items-center px-5 py-2.5 rounded-full text-xs font-medium border transition-all duration-200 hover:bg-[var(--ink)] hover:text-white hover:-translate-y-0.5";

/* ---------------------------------------------------------------
   COMPONENT
---------------------------------------------------------------- */

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--ink)", background: "var(--bg)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        :root{
          --bg:#F3F1EA; --card:#FFFFFF; --ink:#15130E; --grey:#9B988A; --grey-light:#D8D5C9;
          --black:#0B0A08;
          --font-display:'Instrument Serif', serif; --font-body:'Plus Jakarta Sans', sans-serif;
        }
        html{ scroll-behavior: smooth; }
        section, .scroll-target{ scroll-margin-top: 110px; }
        body{ font-family: var(--font-body); }
        .font-display{ font-family: var(--font-display); font-style: normal; }
        .eyebrow{ font-family: var(--font-display); font-style: italic; font-size: 15px; color: var(--ink); }
        .scrollbar-none::-webkit-scrollbar{ display:none; }
        .scrollbar-none{ -ms-overflow-style:none; scrollbar-width:none; }
        .hover-arrow:hover .arrow-shift{ transform: translate(3px,-3px); background:#fff; }
        .arrow-shift{ transition: all .2s ease; }
        .hover-lift{ transition: transform .25s ease, box-shadow .25s ease; }
        .hover-lift:hover{ transform: translateY(-4px); box-shadow: 0 12px 28px rgba(11,10,8,.12); }
        .link-underline{ position:relative; }
        .link-underline::after{ content:''; position:absolute; left:0; right:100%; bottom:-3px; height:1px; background:currentColor; transition: right .25s ease; }
        .link-underline:hover::after{ right:0; }
        input:focus{ outline: 2px solid var(--ink); }
      `}</style>

      {/* ================= FIXED HEADER ================= */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(243,241,234,.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(21,19,14,.08)" : "none",
        }}
      >
        {/* trust badge row — top of header, left-aligned */}
        <div className="px-6 md:px-10 pt-3 flex items-center gap-4">
          <AirbnbBadge dark={scrolled} />
          <BookingBadge dark={scrolled} />
        </div>

        {/* main nav row */}
        <div className="flex items-center justify-between px-6 md:px-10 pt-2 pb-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-2xl italic inline-flex items-center gap-2 transition-colors"
            style={{ color: scrolled ? "var(--ink)" : "#fff" }}
          >
            <Mountain size={20} /> Barang
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: scrolled ? "var(--ink)" : "rgba(255,255,255,.9)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="link-underline">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Namaste! I'd like to know more about Barang Village Homestay.")}
            target="_blank" rel="noreferrer"
            className={scrolled ? btnDark + " hidden md:inline-flex" : btnPrimary + " hidden md:inline-flex"}
          >
            WhatsApp Us <ArrowUpRight size={14} />
          </a>
          <button
            className="md:hidden transition-colors"
            style={{ color: scrolled ? "var(--ink)" : "#fff" }}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden mx-6 mb-4 p-5 rounded-2xl flex flex-col gap-4 text-sm" style={{ background: "var(--ink)", color: "#fff" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}>{l.label}</a>
            ))}
            <a href={waLink("Namaste! I'd like to know more about Barang Village Homestay.")} target="_blank" rel="noreferrer" className={btnPrimary + " w-fit"}>
              WhatsApp Us <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO (rounded inset card) ================= */}
      <div id="home" className="scroll-target px-3 md:px-5 pt-3 md:pt-5">
        <section
          className="relative rounded-[28px] overflow-hidden h-[92vh] min-h-[640px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80)" }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,10,8,.35) 0%, rgba(11,10,8,.15) 30%, rgba(11,10,8,.55) 100%)" }} />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="eyebrow text-white/90">Discover Barang</p>
            <h1 className="font-display text-white text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">
              A Village Life of Warmth, Farming, and Mountain Air
            </h1>
            <a href="#homestays" onClick={(e) => handleNavClick(e, "#homestays")} className={btnPrimary + " mt-8 px-7 py-3.5 text-sm"}>
              Find your homestay
            </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center px-6 md:px-10 pb-6 text-white">
            <p className="hidden md:block text-xs text-white/75 text-center max-w-md">
              Step into a real Nepali village with curated stays, hands-on farming, and homemade meals shared family-style.
            </p>
          </div>
        </section>
      </div>

      {/* ================= ABOUT US ================= */}
      <section id="about" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex justify-end">
          <p className="eyebrow">About us</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-3xl leading-tight">
          We open our homes to travellers from around the world,{" "}
          <span style={{ color: "var(--grey)" }}>sharing food, farming, and mountain life.</span>
        </h2>

        <div className="flex gap-3 mt-14 h-64 md:h-96">
          <div className="w-1/4 rounded-2xl bg-cover bg-center hidden md:block" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&q=80)" }} />
          <div className="flex-1 rounded-2xl bg-cover bg-center relative" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=1200&q=80)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="#homestays" onClick={(e) => handleNavClick(e, "#homestays")} className={btnPrimary}>Read More</a>
            </div>
          </div>
          <div className="w-1/4 rounded-2xl bg-cover bg-center hidden md:block" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=600&q=80)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10 text-sm" style={{ color: "var(--grey)" }}>
          <p>Every stay is run directly by a local family — not a hotel standing in for one. Meals are grown on the property and served the way the family always has.</p>
          <p>From sunrise hikes toward Panchase to evenings by the kitchen fire, we bring you into the actual rhythm of Barang, not a performance of it.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t" style={{ borderColor: "var(--grey-light)" }}>
          {[
            { n: "5", l: "homestay rooms across 4 families" },
            { n: "9 yrs", l: "hosting Pokhara visitors" },
            { n: "4.9/5", l: "average guest rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-5xl">{s.n}</div>
              <div className="text-xs md:text-sm mt-2" style={{ color: "var(--grey)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOMESTAYS ================= */}
      <section id="homestays" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow">Where to stay</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Stay With Village Families<br /><span style={{ color: "var(--grey)" }}>Who Call It Home</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: "var(--grey)" }}>
            All-inclusive rooms — breakfast to dinner — booked directly with the family on WhatsApp, no platform in between.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {homestays.map((h) => (
            <div key={h.id} className="hover-lift rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: `url(${h.img})`, backgroundColor: "#ddd" }}>
                <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 text-black">
                  ${h.price} <span style={{ color: "var(--grey)" }}>/ night</span>
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 text-black">
                  <Star size={11} fill="var(--ink)" /> {h.rating}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{h.name}</h3>
                <p className="text-xs mt-0.5" style={{ color: "var(--grey)" }}>{h.room} · {h.reviews} review{h.reviews !== 1 ? "s" : ""}</p>
                <p className="text-xs mt-3" style={{ color: "var(--grey)" }}>{h.text}</p>
                <a
                  href={waLink(`Namaste! I'd like to book the ${h.room} at ${h.name} (approx $${h.price}/night).`)}
                  target="_blank" rel="noreferrer"
                  className={btnDark + " mt-5 w-full justify-center"}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-6" style={{ color: "var(--grey)" }}>
          Prices shown are estimated starting rates — exact nightly pricing is confirmed over WhatsApp.
        </p>
      </section>

      {/* ================= WHY STAY WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <p className="eyebrow">Why stay with us</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight">
          Choosing the right family <span style={{ color: "var(--grey)" }}>can change your whole trip.</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-5 mt-14 relative">
          {whyStay.map((w) => (
            <div key={w.n} className={`hover-lift rounded-2xl p-6 relative ${w.image ? "text-white bg-cover bg-center h-56 flex flex-col justify-between" : "border h-56 flex flex-col justify-between"}`}
              style={w.image ? { backgroundImage: `url(${w.img})`, backgroundColor: "#333" } : { borderColor: "var(--grey-light)" }}>
              {w.image && <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(11,10,8,.35)" }} />}
              <span className="relative text-xs" style={{ color: w.image ? "rgba(255,255,255,.8)" : "var(--grey)" }}>{w.n}</span>
              <div className="relative">
                <h4 className="font-display text-xl">{w.title}</h4>
                <p className="text-xs mt-2" style={{ color: w.image ? "rgba(255,255,255,.85)" : "var(--grey)" }}>{w.text}</p>
              </div>
            </div>
          ))}
          <div className="hidden md:block absolute border-t border-dashed" style={{ borderColor: "var(--grey-light)", top: "50%", left: "27%", width: "23%" }} />
        </div>
      </section>

      {/* ================= COOKING CLASSES ================= */}
      <section id="cooking" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex justify-end"><p className="eyebrow">Taste the village</p></div>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight text-right ml-auto">
          Cooking Classes, <span style={{ color: "var(--grey)" }}>Half-Day or Full-Day</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="hover-lift rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,10,8,.75) 100%)" }} />
            <span className="absolute top-5 left-5 text-xs font-medium px-3 py-1.5 rounded-full bg-white text-black">${25} / person</span>
            <div className="relative text-white">
              <span className="text-xs uppercase tracking-wide">Half Day</span>
              <h3 className="font-display text-2xl mt-2">Dal Bhat Cooking Class</h3>
              <a href={waLink("Namaste! I'd like to book the half-day Dal Bhat cooking class (approx $25/person).")} target="_blank" rel="noreferrer" className={btnPrimary + " mt-4"}>
                Book Now
              </a>
            </div>
          </div>
          <div className="hover-lift rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1626804475297-411da4bf24d5?w=1200&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,10,8,.75) 100%)" }} />
            <span className="absolute top-5 left-5 text-xs font-medium px-3 py-1.5 rounded-full bg-white text-black">${40} / person</span>
            <div className="relative text-white">
              <span className="text-xs uppercase tracking-wide">Full Day</span>
              <h3 className="font-display text-2xl mt-2">Village Kitchen Tasting Menu</h3>
              <p className="text-xs mt-1 text-white/75">Dal Bhat · Dindo · Gundruk · Momo (new)</p>
              <a href={waLink("Namaste! I'd like to book the full-day village kitchen tasting menu (approx $40/person).")} target="_blank" rel="noreferrer" className={btnPrimary + " mt-4"}>
                Book Now
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs mt-6 text-right" style={{ color: "var(--grey)" }}>Prices are per-person estimates — confirm final pricing over WhatsApp.</p>
      </section>

      {/* ================= EXPERIENCES / DAY TRIPS ================= */}
      <section id="experiences" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="text-center">
          <p className="eyebrow">Experiences</p>
          <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
            All Experiences Are <span style={{ color: "var(--grey)" }}>Guided Day Trips</span>
          </h2>
          <p className="text-sm mt-4 max-w-lg mx-auto" style={{ color: "var(--grey)" }}>
            Every package below runs as a guided day trip from the village — led by the families who do these things every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {dayTrips.map((d) => (
            <div key={d.id} className="hover-lift rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: `url(${d.img})` }}>
                <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 text-black">${d.price} / person</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{d.title}</h3>
                <p className="text-xs mt-3" style={{ color: "var(--grey)" }}>{d.text}</p>
                <a
                  href={waLink(`Namaste! I'd like to book the "${d.title}" day trip (approx $${d.price}/person).`)}
                  target="_blank" rel="noreferrer"
                  className={btnDark + " mt-5 w-full justify-center"}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-6" style={{ color: "var(--grey)" }}>
          Prices are per-person estimates based on comparable guided tours — confirm final pricing over WhatsApp.
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Explore our FAQ section for <span style={{ color: "var(--grey)" }}>answers on your stay.</span>
            </h2>
            <p className="text-sm mt-4" style={{ color: "var(--grey)" }}>We're here to help — browse the FAQ below or message us directly.</p>

            <div className="mt-10">
              {faqs.map((f, i) => (
                <div key={f.q} className="py-5 border-t" style={{ borderColor: "var(--grey-light)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between text-left group">
                    <span className="text-sm font-medium group-hover:opacity-60 transition-opacity">{f.q}</span>
                    <span className="transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {openFaq === i && <p className="text-sm mt-3" style={{ color: "var(--grey)" }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="hover-lift rounded-2xl h-full min-h-[360px] bg-cover bg-center relative flex items-end p-8"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(11,10,8,.75) 100%)" }} />
            <div className="relative text-white">
              <h3 className="font-display text-2xl">Still Have Questions?</h3>
              <p className="text-xs mt-2 text-white/80 max-w-xs">Message the family directly — response usually comes within the hour.</p>
              <a href={waLink("Namaste! I have a question about Barang Village Homestay.")} target="_blank" rel="noreferrer" className={btnPrimary + " mt-5"}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER / NEWSLETTER ================= */}
      <footer style={{ background: "var(--black)" }} className="pt-20 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center text-center">
            <Mountain size={26} className="text-white" />
            <h3 className="font-display text-white text-3xl md:text-4xl mt-4">Subscribe to our Newsletter</h3>
            <div className="mt-6 flex w-full max-w-md rounded-full overflow-hidden border border-white/25">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder-white/50 outline-none" />
              <button className="px-5 py-3 bg-white text-black text-sm font-medium transition-colors hover:bg-white/80">Subscribe</button>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-10 mt-20 pt-10 border-t border-white/10">
            <div className="max-w-xs">
              <p className="font-display text-white text-2xl">Explore Barang With Us</p>
              <p className="text-xs mt-3 text-white/50">Step into the heart of a Nepali village with curated stays, hands-on farming, and homemade meals.</p>
              <div className="flex items-center gap-4 mt-4">
                <AirbnbBadge />
                <BookingBadge />
              </div>
            </div>
            <div className="flex gap-16 flex-wrap text-xs text-white/60">
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium mb-1">Quick Links</span>
                {navLinks.slice(1).map((l) => (
                  <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="link-underline w-fit">{l.label}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium mb-1">Social Media</span>
                <a href="#" className="link-underline w-fit">Instagram</a>
                <a href="#" className="link-underline w-fit">Facebook</a>
                <a href="#" className="link-underline w-fit">Youtube</a>
              </div>
            </div>
          </div>

          <div className="font-display leading-none select-none mt-16 text-center" style={{ color: "#1B1A16", fontSize: "min(20vw, 200px)" }}>
            Barang
          </div>
          <div className="flex justify-between items-center text-[11px] text-white/40 mt-4">
            <span>© 2026 Barang Village Homestay. All rights reserved.</span>
            <span>Prototype</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
