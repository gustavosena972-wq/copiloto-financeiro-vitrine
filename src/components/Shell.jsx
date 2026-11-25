import { useState } from "react";
import { PLAY } from "../content.js";

const links = [
  { to: "/", label: "Início" },
  { to: "/planos", label: "Planos" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/sobre", label: "Sobre" },
  { to: "/duvidas", label: "Dúvidas" },
];

export function Frame({ children, className = "" }) {
  return <div className={`mx-auto w-[min(72rem,calc(100%-2rem))] ${className}`}>{children}</div>;
}

export function Shell({ children }) {
  const [open, setOpen] = useState(false);
  const path = window.location.hash.replace(/^#\/?/, "/");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <Frame className="flex flex-wrap items-center gap-4 py-4">
          <a href="#/" className="flex items-center gap-3 font-serif text-xl tracking-tight" aria-label="Copiloto Financeiro, início">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-xs font-semibold tracking-wide text-paper">CF</span>
            Copiloto Financeiro
          </a>
          <button type="button" className="ml-auto grid h-11 w-11 place-items-center rounded-xl border border-line md:hidden"
            aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(v => !v)}>
            {open ? "×" : "☰"}
          </button>
          <nav className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 md:ml-auto md:flex md:w-auto md:flex-row md:items-center md:gap-5`} aria-label="Principal">
            {links.map(item => (
              <a key={item.to} href={`#${item.to}`} onClick={() => setOpen(false)}
                className={`min-h-11 py-2 text-[15px] ${path === item.to ? "text-accent" : "text-muted hover:text-ink"}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="hidden min-h-11 items-center rounded-xl bg-ink px-4 text-sm font-semibold text-paper md:inline-flex" href={PLAY}>Google Play</a>
        </Frame>
      </header>
      <main>{children}</main>
      <footer className="bg-sand">
        <Frame className="flex flex-wrap gap-x-5 gap-y-3 py-8 text-[15px] text-muted">
          <a href="#/">Início</a><a href="#/planos">Planos</a><a href="#/seguranca">Segurança</a>
          <a href="#/sobre">Sobre</a><a href="#/duvidas">Dúvidas</a><a href="#/privacidade">Privacidade</a>
          <a href="#/termos">Termos</a><a href="#/excluir">Excluir conta</a>
        </Frame>
      </footer>
    </div>
  );
}

export function PageHead({ kicker, title, text }) {
  return <header className="max-w-2xl py-12">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{kicker}</p>
    <h1 className="m-0 text-4xl leading-tight md:text-5xl">{title}</h1>
    <p className="mt-4 text-muted">{text}</p>
  </header>;
}
