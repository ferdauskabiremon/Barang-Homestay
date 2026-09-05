import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import { impact, waLink, btnDark } from "../data";

export default function Impact() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--ink)", background: "var(--bg)" }}>
      <GlobalStyles />
      <Header />

      {/* ================= HERO ================= */}
      <div className="px-3 md:px-5 pt-3 md:pt-5">
        <section
          className="relative rounded-[28px] overflow-hidden h-[60vh] min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url(/gallery/about-left-farming.jpg)" }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,10,8,.35) 0%, rgba(11,10,8,.15) 30%, rgba(11,10,8,.6) 100%)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="eyebrow text-white/90">Beyond hospitality</p>
            <h1 className="font-display text-white text-4xl md:text-6xl mt-3 leading-[1.05] max-w-3xl">
              Our Impact on Barang Village
            </h1>
            <p className="text-sm md:text-base text-white/80 mt-5 max-w-xl">
              A share of what guests spend here goes straight back into the village — its homes, its children, and its future.
            </p>
          </div>
        </section>
      </div>

      {/* ================= IMPACT AREAS ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32">
        <p className="eyebrow">Where it goes</p>
        <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl leading-tight">
          Three ways your stay <span style={{ color: "var(--grey)" }}>gives back.</span>
        </h2>

        <div className="flex flex-col gap-6 mt-14">
          {impact.map((item, i) => (
            <div key={item.title} className="hover-lift rounded-2xl p-8 md:p-10 bg-white flex flex-col md:flex-row md:items-start gap-6" style={{ boxShadow: "0 1px 3px rgba(21,19,14,.08)" }}>
              <span className="font-display text-4xl md:text-5xl shrink-0" style={{ color: "var(--grey-light)" }}>
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="text-sm mt-3" style={{ color: "var(--grey)" }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-10 md:p-14 mt-16 text-center" style={{ background: "#EFE9DA" }}>
          <h3 className="font-display text-2xl md:text-3xl max-w-xl mx-auto leading-tight">
            Every booking is a small investment in this village's future.
          </h3>
          <p className="text-sm mt-4 max-w-md mx-auto" style={{ color: "var(--grey)" }}>
            Want to know more about a specific initiative, or support one directly? Reach out any time.
          </p>
          <a href={waLink("Namaste! I'd like to learn more about Barang Village's community impact initiatives.")} target="_blank" rel="noreferrer" className={btnDark + " mt-6"}>
            Ask us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
