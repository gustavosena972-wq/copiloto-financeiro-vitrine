import React from 'react';

export function HeroPreview() {
  return (
    <aside className="hero-card" aria-label="Resumo visual do aplicativo">
      <div className="hero-card-header">
        <span className="pill-badge">100% Registro Manual</span>
        <span className="hero-card-cycle">Ciclo de 30 dias</span>
      </div>

      <div className="metric-box">
        <span className="metric-label">Margem automática do período</span>
        <div className="metric-row">
          <strong className="metric-value">Entradas vs. Saídas</strong>
          <span className="metric-status">Em tempo real</span>
        </div>
        <p className="metric-caption">
          Revise lançamentos em tabelas limpas sem precisar montar fórmulas.
        </p>
      </div>

      <div className="preview-list">
        <div className="preview-item">
          <div>
            <strong>Sem vínculo bancário</strong>
            <span>Nenhuma senha ou Open Finance</span>
          </div>
          <span className="check-tag">Ativo</span>
        </div>

        <div className="preview-item">
          <div>
            <strong>Controle familiar compartilhado</strong>
            <span>De 2 membros até ilimitado conforme o plano</span>
          </div>
          <span className="check-tag">Pronto</span>
        </div>

        <div className="preview-item is-highlight">
          <div>
            <strong>IA Tamanduá integrada</strong>
            <span>Interpreta seus registros por cota de 30 dias</span>
          </div>
          <span className="check-tag blue">IA</span>
        </div>
      </div>
    </aside>
  );
}