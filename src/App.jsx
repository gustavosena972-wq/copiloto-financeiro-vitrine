import React, { useEffect, useState } from 'react';
import {
  FAQS,
  NAV_ITEMS,
  PLANS,
  PLAY_STORE_URL,
  REASONS,
  SECURITY_PILLARS,
} from './data/content';
import { Navbar } from './components/Navbar';
import { HeroPreview } from './components/HeroPreview';
import { PlanCard } from './components/PlanCard';
import { PlanRecommender } from './components/PlanRecommender';
import { Footer } from './components/Footer';

const VALID_TABS = new Set(NAV_ITEMS.map((item) => item.id));

function getInitialTab() {
  const hash = window.location.hash.replace('#', '').trim();
  return VALID_TABS.has(hash) ? hash : 'inicio';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main>
        {activeTab === 'inicio' && (
          <>
            <section className="section section-cream hero-section">
              <div className="container hero-grid">
                <div className="hero-copy">
                  <span className="eyebrow">Exclusivo para Android • Google Play</span>
                  <h1>
                    Controle financeiro pessoal e familiar sem conectar seu banco.
                  </h1>
                  <p className="hero-lead">
                    Organize receitas, despesas, cartões, contas, metas e patrimônio com registro 100% manual, tabelas diretas e o apoio da IA Tamanduá — pagando apenas pelos 30 dias que usar, sem renovação automática.
                  </p>

                  <div className="hero-actions">
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Baixar na Google Play
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleSelectTab('planos')}
                    >
                      Ver planos de 30 dias
                    </button>
                  </div>

                  <p className="hero-trust">
                    Sem Open Finance • Sem senhas bancárias • Sem assinatura recorrente
                  </p>
                </div>

                <HeroPreview />
              </div>
            </section>

            <section className="section section-white">
              <div className="container">
                <div className="section-head">
                  <span className="eyebrow">Como funciona na prática</span>
                  <h2>Feito para quem quer clareza, não burocracia</h2>
                  <p>
                    Cada recurso do Copiloto Financeiro foi desenhado para manter o controle na sua mão sem depender de integrações bancárias.
                  </p>
                </div>

                <div className="reasons-grid">
                  {REASONS.map((reason) => (
                    <article key={reason.title} className="reason-card">
                      <span className="reason-tag">{reason.tag}</span>
                      <h3>{reason.title}</h3>
                      <p>{reason.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section section-cream">
              <div className="container">
                <div className="section-head">
                  <span className="eyebrow">Planos e valores transparentes</span>
                  <h2>Pague apenas pelos 30 dias que usar</h2>
                  <p>
                    Sem assinatura que renova sozinha. Todos os planos liberam o controle completo de receitas, despesas, cartões, contas, metas e patrimônio — sem conectar seu banco. Você escolhe entre Pro, Max ou Ultra conforme o número de pessoas da casa e a quantidade de consultas na IA Tamanduá.
                  </p>
                </div>

                <PlanRecommender />

                <div className="plans-grid">
                  {PLANS.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'planos' && (
          <section className="section section-cream">
            <div className="container">
              <div className="section-head">
                <span className="eyebrow">Escolha no aplicativo Android</span>
                <h2>Planos de 30 dias sem renovação automática</h2>
                <p>
                  A contratação é feita dentro do Copiloto Financeiro pela Google Play, liberando 30 dias corridos de acesso sem cobrança recorrente ao final do período.
                </p>
              </div>

              <PlanRecommender />

              <div className="plans-grid">
                {PLANS.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>

              <div className="info-banner">
                <strong>Sobre a cota da IA Tamanduá:</strong>
                <span>
                  Cada plano inclui uma cota mensal de consultas à IA Tamanduá (30 no Pro, 100 no Max e 300 no Ultra). Se a cota acabar antes dos 30 dias, apenas a IA fica pausada — todo o restante do aplicativo continua funcionando normalmente.
                </span>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'seguranca' && (
          <section className="section section-white">
            <div className="container">
              <div className="section-head">
                <span className="eyebrow">Privacidade por arquitetura</span>
                <h2>Seus dados financeiros nunca passam por conexão bancária</h2>
                <p>
                  Enquanto outros aplicativos pedem acesso às suas contas, o Copiloto Financeiro aposta no controle manual consciente e protegido.
                </p>
              </div>

              <div className="reasons-grid">
                {SECURITY_PILLARS.map((pillar) => (
                  <article key={pillar.title} className="reason-card">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'duvidas' && (
          <section className="section section-cream">
            <div className="container">
              <div className="section-head">
                <span className="eyebrow">Transparência total</span>
                <h2>Dúvidas frequentes</h2>
                <p>
                  Respostas diretas sobre funcionamento, pagamento via Google Play e uso da IA Tamanduá.
                </p>
              </div>

              <div className="faq-list">
                {FAQS.map((faq) => (
                  <article key={faq.question} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section section-dark cta-banner">
          <div className="container cta-banner-inner">
            <div>
              <span className="eyebrow eyebrow-light">Disponível para Android</span>
              <h2>Comece seu controle financeiro manual hoje mesmo</h2>
              <p>
                Baixe o Copiloto Financeiro na Google Play, escolha o plano ideal para sua casa e tenha clareza total dos seus números por 30 dias.
              </p>
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Baixar na Google Play
            </a>
          </div>
        </section>
      </main>

      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}