import React, { useState } from 'react';
import { NAV_ITEMS, PLAY_STORE_URL } from '../data/content';

export function Navbar({ activeTab, onSelectTab }) {
  const [open, setOpen] = useState(false);

  const select = (id) => {
    setOpen(false);
    onSelectTab(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex w-[min(72rem,calc(100%-2rem))] flex-wrap items-center gap-4 py-4">
        <a href="#inicio" className="flex items-center gap-3 font-serif text-xl tracking-tight" onClick={(e) => { e.preventDefault(); select('inicio'); }}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ocean text-xs font-semibold tracking-wide text-white">CF</span>
          Copiloto Financeiro
        </a>

        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-xl border border-line text-xl md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? '×' : '☰'}
        </button>

        <nav className={`${open ? 'flex' : 'hidden'} w-full flex-col gap-1 md:ml-auto md:flex md:w-auto md:flex-row md:items-center md:gap-5`} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={activeTab === item.id ? 'page' : undefined}
              className={`min-h-11 border-0 bg-transparent py-2 text-left text-[15px] ${activeTab === item.id ? 'text-accent' : 'text-muted hover:text-ink'}`}
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a className="hidden min-h-11 items-center rounded-xl bg-ocean px-4 text-sm font-semibold text-white md:inline-flex" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          Google Play
        </a>
      </div>
    </header>
  );
}
