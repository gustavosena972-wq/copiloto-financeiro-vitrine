import React, { useState } from 'react';
import { PLANS, PLAY_STORE_URL } from '../data/content';

const MEMBER_OPTIONS = [
  { id: 'solo', label: '1 ou 2 pessoas' },
  { id: 'family', label: '3 a 6 pessoas' },
  { id: 'large', label: 'Mais de 6 pessoas' },
];

const AI_OPTIONS = [
  { id: 'light', label: 'Uso leve (até 30/mês)' },
  { id: 'medium', label: 'Uso frequente (até 100/mês)' },
  { id: 'heavy', label: 'Uso intenso + simulador' },
];

export function PlanRecommender() {
  const [members, setMembers] = useState('family');
  const [aiUsage, setAiUsage] = useState('medium');

  let recommendedId = 'pro';
  if (members === 'large' || aiUsage === 'heavy') {
    recommendedId = 'ultra';
  } else if (members === 'family' || aiUsage === 'medium') {
    recommendedId = 'max';
  }

  const recommendedPlan = PLANS.find((p) => p.id === recommendedId) || PLANS[1];

  return (
    <div className="recommender-box" aria-label="Recomendador de plano">
      <div className="recommender-controls">
        <div>
          <span className="recommender-label">1. Quantas pessoas vão usar?</span>
          <div className="recommender-pills">
            {MEMBER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`rec-pill ${members === opt.id ? 'is-selected' : ''}`}
                onClick={() => setMembers(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="recommender-label">2. Como pretende usar a IA Tamanduá?</span>
          <div className="recommender-pills">
            {AI_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`rec-pill ${aiUsage === opt.id ? 'is-selected' : ''}`}
                onClick={() => setAiUsage(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="recommender-result">
        <div>
          <span className="eyebrow" style={{ marginBottom: 4 }}>Plano indicado para o seu perfil</span>
          <h3>
            Copiloto {recommendedPlan.name} — {recommendedPlan.price}{' '}
            <small>{recommendedPlan.period}</small>
          </h3>
          <p>{recommendedPlan.audience}</p>
        </div>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Baixar e ativar o {recommendedPlan.name}
        </a>
      </div>
    </div>
  );
}