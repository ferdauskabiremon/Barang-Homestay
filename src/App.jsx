import React, { useState } from "react";
import {
  Menu, X, Plus, Minus, ArrowUpRight, Mountain
} from "lucide-react";

/* ---------------------------------------------------------------
   DATA — real content from baranghomestay.com, Airbnb & GetYourGuide
---------------------------------------------------------------- */

const WHATSAPP = "9779806595884";
const waLink = (msg) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`;

const homestays = [
  {
    id: "kabi",
    name: "Kabi's Homestay",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-23362326/original/a9538627-5a7b-4062-bdfe-1f4a2b01872a.jpeg?im_w=720",
    text: "Run by a trekking guide of 16+ years. Private rooms, the village's best mountain view, top-5% rated.",
  },
  {
    id: "maya",
    name: "Maya's Homestay",
    img: "https://baranghomestay.com/wp-content/uploads/2023/03/image_2023-03-26_213942182.png",
    text: "A colourful family home — buffalo-milk butter twice a week and a walk to the jungle for grass.",
  },
  {
    id: "shiva",
    name: "Shiva's Homestay",
    img: "https://baranghomestay.com/wp-content/uploads/2023/03/image_2023-03-26_213836839.png",
    text: "A mud-and-stone house built by a former trekking porter, with river fishing most afternoons.",
  },
];

const whyStay = [
  { n: "01", title: "Real Family Life", text: "You stay inside an actual home — not a guesthouse built to look like one.", image: false },
  { n: "02", title: "Home-Cooked Meals", text: "Every meal grown on the property and cooked the way the family always has.", image: true, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80" },
  { n: "03", title: "Local-Led Days", text: "Farming, fishing, and hiking are led by the people who do them every day.", image: false },
  { n: "04", title: "Community Income", text: "What you spend stays in the village that hosts you, family by family.", image: false },
];

const galleryImages = [
  { id: "hiking", label: "Hiking", img: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=900&q=80" },
  { id: "jungle", label: "Jungle Walk", img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=900&q=80" },
  { id: "farming", label: "Farming", img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900&q=80" },
  { id: "swimming", label: "Swimming", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80" },
  { id: "yoga", label: "Yoga & Meditation", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80" },
  { id: "fishing", label: "Fishing", img: "https://images.unsplash.com/photo-1445264718234-25b9106f5dad?w=900&q=80" },
  { id: "healing", label: "Healing Bowl Session", img: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=900&q=80" },
];

const faqs = [
  { q: "What's included in a homestay booking?", a: "Breakfast, lunch, dinner, tea, coffee and buffalo milk are included in every room rate, along with access to the family's daily activities." },
  { q: "How do I book — is it through Airbnb?", a: "Booking is handled directly with the family over WhatsApp, so there's no third-party platform or fee in between." },
  { q: "How do I get from Pokhara to the village?", a: "By jeep, taxi, or local bus from Lakeside — all detailed on our How to Reach Us page, roughly an hour each way." },
  { q: "Can I book Experiences or Cooking Classes without staying overnight?", a: "Yes — day trips and cooking classes can be booked on their own, as inquiries over WhatsApp." },
];

/* ---------------------------------------------------------------
   COMPONENT
---------------------------------------------------------------- */

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--ink)", background: "var(--bg)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        :root{
          --bg:#F3F1EA; --card:#FFFFFF; --ink:#15130E; --grey:#9B988A; --grey-light:#D8D5C9;
          --black:#0B0A08;
          --font-display:'Instrument Serif', serif; --font-body:'Plus Jakarta Sans', sans-serif;
        }
        .font-display{ font-family: var(--font-display); font-style: normal; }
        .eyebrow{ font-family: var(--font-display); font-style: italic; font-size: 15px; color: var(--ink); }
        .scrollbar-none::-webkit-scrollbar{ display:none; }
        .scrollbar-none{ -ms-overflow-style:none; scrollbar-width:none; }
        .hover-arrow:hover .arrow-shift{ transform: translate(2px,-2px); }
        .arrow-shift{ transition: transform .2s ease; }
      `}</style>

      {/* ================= HERO (rounded inset card) ================= */}
      <div className="px-3 md:px-5 pt-3 md:pt-5">
        <section
          className="relative rounded-[28px] overflow-hidden h-[92vh] min-h-[640px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80)" }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,10,8,.35) 0%, rgba(11,10,8,.15) 30%, rgba(11,10,8,.55) 100%)" }} />

          {/* nav */}
          <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6">
            <span className="font-display text-white text-2xl italic inline-flex items-center gap-2">
              <Mountain size={20} /> Barang
            </span>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#homestays">Homestays</a>
              <a href="#experiences">Experiences</a>
              <a href="#cooking">Cooking Classes</a>
            </nav>
            <a
              href={waLink("Namaste! I'd like to know more about Barang Village Homestay.")}
              target="_blank" rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black"
            >
              WhatsApp Us <ArrowUpRight size={14} />
            </a>
            <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {navOpen && (
            <div className="relative z-10 md:hidden mx-6 mt-4 p-5 rounded-2xl bg-black/70 flex flex-col gap-3 text-white text-sm">
              <a href="#about" onClick={() => setNavOpen(false)}>About us</a>
              <a href="#homestays" onClick={() => setNavOpen(false)}>Homestays</a>
              <a href="#experiences" onClick={() => setNavOpen(false)}>Experiences</a>
              <a href="#cooking" onClick={() => setNavOpen(false)}>Cooking Classes</a>
            </div>
          )}

          {/* hero copy */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 -mt-10">
            <p className="eyebrow text-white/90">Discover Barang</p>
            <h1 className="font-display text-white text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">
              A Village Life of Warmth, Farming, and Mountain Air
            </h1>
            <a
              href="#homestays"
              className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium"
            >
              Find your homestay
            </a>
          </div>

          {/* bottom strip */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 pb-6 text-white">
            <span className="text-xs md:text-sm font-medium">Airbnb Guest Favourite</span>
            <p className="hidden md:block text-xs text-white/75 text-center max-w-md">
              Step into a real Nepali village with curated stays, hands-on farming, and homemade meals shared family-style.
            </p>
            <span className="text-xs md:text-sm font-medium">Booking.com Award</span>
          </div>
        </section>
      </div>

      {/* ================= ABOUT US ================= */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
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
              <a href="#homestays" className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium">Read More</a>
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
            { n: "4", l: "family-run homestays" },
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

      {/* ================= HOMESTAYS (destination-card pattern) ================= */}
      <section id="homestays" className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow">Where to stay</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Stay With Village Families<br /><span style={{ color: "var(--grey)" }}>Who Call It Home</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm" style={{ color: "var(--grey)" }}>
              All-inclusive rooms — breakfast to dinner — booked directly with the family on WhatsApp, no platform in between.
            </p>
            <a href={waLink("Namaste! I'd like to see all your homestay options.")} target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center px-5 py-2.5 rounded-full text-xs font-medium border" style={{ borderColor: "var(--ink)" }}>
              View All Homestays
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {homestays.map((h) => (
            <a key={h.id} href={waLink(`Namaste! I'd like to ask about staying at ${h.name}.`)} target="_blank" rel="noreferrer" className="hover-arrow group">
              <div className="h-72 rounded-2xl bg-cover bg-center relative" style={{ backgroundImage: `url(${h.img})`, backgroundColor: "#ddd" }}>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="font-display text-xl">{h.name}</span>
                  <span className="arrow-shift w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
              <p className="text-xs mt-4" style={{ color: "var(--grey)" }}>{h.text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ================= WHY STAY WITH US (numbered grid) ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <p className="eyebrow">Why stay with us</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight">
          Choosing the right family <span style={{ color: "var(--grey)" }}>can change your whole trip.</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-5 mt-14 relative">
          {whyStay.map((w) => (
            <div key={w.n} className={`rounded-2xl p-6 relative ${w.image ? "text-white bg-cover bg-center h-56 flex flex-col justify-between" : "border h-56 flex flex-col justify-between"}`}
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

      {/* ================= COOKING CLASSES (split-image band) ================= */}
      <section id="cooking" className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex justify-end"><p className="eyebrow">Taste the village</p></div>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight text-right ml-auto">
          Cooking Classes, <span style={{ color: "var(--grey)" }}>Half-Day or Full-Day</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,10,8,.75) 100%)" }} />
            <div className="relative text-white">
              <span className="text-xs uppercase tracking-wide">Half Day</span>
              <h3 className="font-display text-2xl mt-2">Dal Bhat Cooking Class</h3>
              <a href={waLink("Namaste! I'd like to book the half-day Dal Bhat cooking class.")} target="_blank" rel="noreferrer"
                className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium">Ask on WhatsApp</a>
            </div>
          </div>
          <div className="rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1626804475297-411da4bf24d5?w=1200&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(11,10,8,.75) 100%)" }} />
            <div className="relative text-white">
              <span className="text-xs uppercase tracking-wide">Full Day</span>
              <h3 className="font-display text-2xl mt-2">Village Kitchen Tasting Menu</h3>
              <p className="text-xs mt-1 text-white/75">Dal Bhat · Dindo · Gundruk · Momo (new)</p>
              <a href={waLink("Namaste! I'd like to book the full-day village kitchen tasting menu.")} target="_blank" rel="noreferrer"
                className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium">Ask on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES GALLERY ================= */}
      <section id="experiences" className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="text-center">
          <p className="eyebrow">Experiences</p>
          <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
            Discover Village Life, Culture, <span style={{ color: "var(--grey)" }}>and Moments Outdoors</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-14 h-[420px]">
          {galleryImages.slice(0, 4).map((g, i) => (
            <div key={g.id} className={`rounded-2xl bg-cover bg-center relative ${i === 1 ? "col-span-2" : ""}`} style={{ backgroundImage: `url(${g.img})` }}>
              <span className="absolute bottom-3 left-3 text-white text-xs font-medium px-2 py-1 rounded-full bg-black/40">{g.label}</span>
              {i === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href={waLink("Namaste! I'd like to ask about your village experiences and day trips.")} target="_blank" rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium">Ask About Experiences</a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3 h-52">
          {galleryImages.slice(4, 7).map((g) => (
            <div key={g.id} className="rounded-2xl bg-cover bg-center relative" style={{ backgroundImage: `url(${g.img})` }}>
              <span className="absolute bottom-3 left-3 text-white text-xs font-medium px-2 py-1 rounded-full bg-black/40">{g.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-8 max-w-lg mx-auto" style={{ color: "var(--grey)" }}>
          Hiking, farming, fishing, swimming, jungle walks, yoga and a healing bowl session — all led by the village and bookable as a day trip.
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
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between text-left">
                    <span className="text-sm font-medium">{f.q}</span>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                  {openFaq === i && <p className="text-sm mt-3" style={{ color: "var(--grey)" }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl h-full min-h-[360px] bg-cover bg-center relative flex items-end p-8"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=80)" }}>
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(11,10,8,.75) 100%)" }} />
            <div className="relative text-white">
              <h3 className="font-display text-2xl">Still Have Questions?</h3>
              <p className="text-xs mt-2 text-white/80 max-w-xs">Message the family directly — response usually comes within the hour.</p>
              <a href={waLink("Namaste! I have a question about Barang Village Homestay.")} target="_blank" rel="noreferrer"
                className="mt-5 inline-flex px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium">Contact us</a>
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
              <button className="px-5 py-3 bg-white text-black text-sm font-medium">Subscribe</button>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-10 mt-20 pt-10 border-t border-white/10">
            <div className="max-w-xs">
              <p className="font-display text-white text-2xl">Explore Barang With Us</p>
              <p className="text-xs mt-3 text-white/50">Step into the heart of a Nepali village with curated stays, hands-on farming, and homemade meals.</p>
            </div>
            <div className="flex gap-16 flex-wrap text-xs text-white/60">
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium mb-1">Quick Links</span>
                <a href="#about">About us</a>
                <a href="#homestays">Homestays</a>
                <a href="#cooking">Cooking Classes</a>
                <a href="#experiences">Experiences</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium mb-1">Social Media</span>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium mb-1">Recognition</span>
                <span>Airbnb Guest Favourite</span>
                <span>Booking.com Best Traveller</span>
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
