import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, Mountain } from "lucide-react";
import { waLink, navLinks, btnPrimary, btnDark } from "../data";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHashClick = (e, href) => {
    e.preventDefault();
    setNavOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(243,241,234,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(21,19,14,.08)" : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 pt-4 pb-4">
        <Link
          to="/"
          onClick={(e) => handleHashClick(e, "#home")}
          className="font-display text-2xl italic inline-flex items-center gap-2 transition-colors"
          style={{ color: scrolled ? "var(--ink)" : "#fff" }}
        >
          <Mountain size={20} /> Barang
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: scrolled ? "var(--ink)" : "rgba(255,255,255,.9)" }}>
          {navLinks.map((l) =>
            l.type === "route" ? (
              <Link key={l.href} to={l.href} className="link-underline" onClick={() => setNavOpen(false)}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={(e) => handleHashClick(e, l.href)} className="link-underline">
                {l.label}
              </a>
            )
          )}
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
          {navLinks.map((l) =>
            l.type === "route" ? (
              <Link key={l.href} to={l.href} onClick={() => setNavOpen(false)}>{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} onClick={(e) => handleHashClick(e, l.href)}>{l.label}</a>
            )
          )}
          <a href={waLink("Namaste! I'd like to know more about Barang Village Homestay.")} target="_blank" rel="noreferrer" className={btnPrimary + " w-fit"}>
            WhatsApp Us <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
