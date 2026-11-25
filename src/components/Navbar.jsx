import React from 'react';
import { NAV_ITEMS, PLAY_STORE_URL } from '../data/content';

export function Navbar({ activeTab, onSelectTab }) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="#inicio" className="brand" onClick={(e) => { e.preventDefault(); onSelectTab('inicio'); }}>
          <span className="brand-mark" aria-hidden="true">CF</span>
          <span className="brand-text">
            <strong>Copiloto Financeiro</strong>
            <small>Controle manual • Android</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return <button key={item.id} type="button" aria-current={isActive ? 'page' : undefined} className={`nav-link ${isActive ? 'is-active' : ''}`} onClick={() => onSelectTab(item.id)}>{item.label}</button>;
          })}
        </nav>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Baixar na Google Play</a>
      </div>
    </header>
  );
}
