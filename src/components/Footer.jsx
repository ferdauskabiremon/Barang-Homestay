import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";
import { navLinks } from "../data";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
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
          </div>
          <div className="flex gap-16 flex-wrap text-xs text-white/60">
            <div className="flex flex-col gap-3">
              <span className="text-white font-medium mb-1">Quick Links</span>
              {navLinks.slice(1).map((l) =>
                l.type === "route" ? (
                  <Link key={l.href} to={l.href} className="link-underline w-fit">{l.label}</Link>
                ) : (
                  <a key={l.href} href={l.href} onClick={(e) => handleHashClick(e, l.href)} className="link-underline w-fit">{l.label}</a>
                )
              )}
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
  );
}
