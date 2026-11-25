import React from 'react';
import { PLAY_STORE_URL } from '../data/content';

export function PlanCard({ plan }) {
  return (
    <article className={`plan-card ${plan.featured ? 'is-featured' : ''}`}>
      <div className="plan-card-top">
        <div className="plan-header-row">
          <h3 className="plan-name">{plan.name}</h3>
          {plan.badge && <span className="plan-badge">{plan.badge}</span>}
        </div>

        <p className="plan-audience">{plan.audience}</p>

        <div className="plan-pricing">
          <span className="plan-price">{plan.price}</span>
          <span className="plan-period">{plan.period}</span>
        </div>
        <span className="plan-daily">{plan.dailyHint}</span>
      </div>

      <ul className="plan-features">
        {plan.highlights.map((item) => (
          <li key={item}>
            <span className="feature-dot" aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="plan-card-footer">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-block ${plan.featured ? 'btn-accent' : 'btn-outline'}`}
        >
          Escolher no app Android
        </a>
        <small className="plan-note">30 dias corridos • Sem renovação automática</small>
      </div>
    </article>
  );
}