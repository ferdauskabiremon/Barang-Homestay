import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Plus, Minus, ArrowUpRight, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import {
  waLink, homestays, dayTrips, whyStay, faqs, reviews,
  treks, TREKS_ALL_URL, partners, festivals, btnPrimary, btnDark,
} from "../data";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const location = useLocation();
  const festivalStripRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location]);

  const scrollFestivals = (dir) => {
    if (festivalStripRef.current) {
      festivalStripRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--ink)", background: "var(--bg)" }}>
      <GlobalStyles />
      <Header />

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
            <a href="#homestays" className={btnPrimary + " mt-8 px-7 py-3.5 text-sm"}>
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
          <div className="w-1/4 rounded-2xl bg-cover bg-center hidden md:block" style={{ backgroundImage: "url(/gallery/about-left-farming.jpg)" }} />
          <div className="flex-1 rounded-2xl bg-cover bg-center relative" style={{ backgroundImage: "url(/gallery/about-middle-terraces.jpg)" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="#homestays" className={btnPrimary}>Read More</a>
            </div>
          </div>
          <div className="w-1/4 rounded-2xl bg-cover bg-center hidden md:block" style={{ backgroundImage: "url(/gallery/about-right-fishtail.jpg)" }} />
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
          <div className="hover-lift rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&q=80)" }}>
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
          <div className="hover-lift rounded-2xl h-80 bg-cover bg-center relative flex items-end p-8" style={{ backgroundImage: "url(/gallery/cooking-fullday-momo.jpg)" }}>
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

      {/* ================= TREKS (Himalayan Journey) ================= */}
      <section id="treks" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <p className="eyebrow">Multi-day adventures</p>
          <img src="/partners/himalayan-journey-logo.png" alt="Himalayan Journey" className="h-10" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl mt-2 max-w-2xl leading-tight">
          Treks, <span style={{ color: "var(--grey)" }}>Run by Himalayan Journey</span>
        </h2>
        <p className="text-sm mt-4 max-w-xl" style={{ color: "var(--grey)" }}>
          Himalayan Journey is our sister trekking company — same team, same founder, Kabi Raj. Several of their routes stop overnight right here in Barang Village.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {treks.map((t) => (
            <a key={t.id} href={t.url} target="_blank" rel="noreferrer" className="hover-lift rounded-2xl overflow-hidden bg-white block" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${t.img})`, backgroundColor: "#333" }}>
                <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 text-black">{t.days}</span>
                <span className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 text-black">{t.difficulty}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg">{t.title}</h3>
                <p className="text-xs mt-2" style={{ color: "var(--grey)" }}>{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--ink)" }}>
                  View trek details <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href={TREKS_ALL_URL} target="_blank" rel="noreferrer" className={btnDark}>
            Show All Treks <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="rounded-2xl p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center" style={{ background: "#EFE9DA" }}>
          <div>
            <p className="eyebrow">Recognition</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
              We won the Best Travellers award.
            </h2>
            <p className="text-sm mt-4" style={{ color: "var(--grey)" }}>
              Thank you, our amazing guests, for making us the proud winner of Airbnb Guest Favorite
              and Booking.com's Best Travelers Review Award. We sincerely appreciate your support and
              it was a pleasure to host each and every one of you.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img src="/awards/airbnb-guest-favorite.png" alt="Airbnb Guest Favorite award" className="w-40 md:w-48" />
            <img src="/awards/booking-award.png" alt="Booking.com Traveller Review Award 2025" className="w-40 md:w-48 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= FESTIVALS ================= */}
      <section id="festivals" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-2">
          <div>
            <p className="eyebrow">Living culture</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              Nepali Festivals <span style={{ color: "var(--grey)" }}>We Celebrate</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollFestivals(-1)} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-[var(--ink)] hover:text-white" style={{ borderColor: "var(--grey-light)" }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollFestivals(1)} className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-[var(--ink)] hover:text-white" style={{ borderColor: "var(--grey-light)" }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <p className="text-sm max-w-xl" style={{ color: "var(--grey)" }}>
          We highly encourage guests to join us during any of these festivals to experience true Nepali essence — village life feels completely different when it's in full celebration.
        </p>

        <div ref={festivalStripRef} className="flex gap-5 overflow-x-auto scrollbar-none pb-4 mt-10">
          {festivals.map((f) => (
            <div key={f.name} className="min-w-[280px] max-w-[280px] bg-white rounded-2xl overflow-hidden shrink-0 hover-lift" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${f.img})`, backgroundColor: "#ddd" }} />
              <div className="p-6">
                <p className="text-xs font-medium" style={{ color: "var(--grey)" }}>{f.season}</p>
                <h3 className="font-display text-lg mt-2">{f.name}</h3>
                <p className="text-xs mt-3" style={{ color: "var(--grey)" }}>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: "var(--grey)" }}>
          Photos are representative stock imagery, not all specific to each festival — swap in real event photos where you have them.
        </p>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <p className="eyebrow">Who we work with</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight">
          Our Partners <span style={{ color: "var(--grey)" }}>Around the World</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-12">
          {partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="hover-lift rounded-2xl p-6 bg-white flex flex-col items-center text-center gap-3" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden" style={{ background: "var(--bg)" }}>
                <img src={p.logo} alt={p.name} className="max-w-[70%] max-h-[70%] object-contain" />
              </div>
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--grey)" }}>{p.country}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section id="stories" className="scroll-target max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32">
        <p className="eyebrow">From our guests</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
          Reviews <span style={{ color: "var(--grey)" }}>from Airbnb</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reviews.map((r) => (
            <div key={r.name} className="hover-lift rounded-2xl p-6 bg-white" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <div className="flex items-center justify-between">
                <img src="/awards/airbnb-logo.png" alt="Airbnb" className="w-6 h-6" />
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="var(--ink)" style={{ color: "var(--ink)" }} />
                  ))}
                </div>
              </div>
              <p className="text-sm mt-4" style={{ color: "var(--ink)" }}>{r.text}</p>
              <p className="text-xs mt-4 font-medium" style={{ color: "var(--grey)" }}>{r.name} · {r.country}</p>
            </div>
          ))}
        </div>
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

      <Footer />
    </div>
  );
}
