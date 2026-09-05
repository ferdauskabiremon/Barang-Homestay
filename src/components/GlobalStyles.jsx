import React from "react";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap');
      :root{
        --bg:#F3F1EA; --card:#FFFFFF; --ink:#15130E; --grey:#9B988A; --grey-light:#D8D5C9;
        --black:#0B0A08;
        --font-display:'Plus Jakarta Sans', sans-serif; --font-body:'Plus Jakarta Sans', sans-serif;
      }
      html{ scroll-behavior: smooth; }
      section, .scroll-target{ scroll-margin-top: 110px; }
      body{ font-family: var(--font-body); margin: 0; }
      .font-display{ font-family: var(--font-display); font-style: normal; font-weight: 600; letter-spacing: -0.01em; }
      .eyebrow{ font-family: var(--font-display); font-style: italic; font-weight: 500; font-size: 14px; color: var(--ink); }
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
  );
}
