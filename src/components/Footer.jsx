import React from 'react';
import { NAV_ITEMS, PLAY_STORE_URL } from '../data/content';

export function Footer({ onSelectTab }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Copiloto Financeiro</strong>
          <p>
            Controle financeiro pessoal e familiar com lançamento 100% manual, tabelas claras e IA Tamanduá. Exclusivo para Android na Google Play.
          </p>
        </div>

        <div className="footer-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="footer-link-btn"
              onClick={() => onSelectTab(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-store-link"
          >
            Abrir na Google Play ↗
          </a>
        </div>
      </div>
    </footer>
  );
}