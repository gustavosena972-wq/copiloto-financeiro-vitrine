import React from 'react';
import { NAV_ITEMS, PLAY_STORE_URL } from '../data/content';

export function Footer({ onSelectTab }) {
  return (
    <footer className="border-t border-line bg-paper text-ink">
      <div className="mx-auto flex w-[min(72rem,calc(100%-2rem))] flex-wrap gap-x-5 gap-y-3 py-8 text-[15px] text-muted">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} type="button" className="border-0 bg-transparent p-0 text-[15px] text-muted" onClick={() => onSelectTab(item.id)}>
            {item.label}
          </button>
        ))}
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Privacidade</a>
        <a href="/copiloto-financeiro-vitrine/termos.html">Termos</a>
        <a href="/copiloto-financeiro-vitrine/excluir-conta.html">Excluir conta</a>
      </div>
    </footer>
  );
}
