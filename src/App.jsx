import React, { useEffect, useState } from 'react';
import { FAQS, NAV_ITEMS, PLANS, PLAY_STORE_URL, REASONS, SECURITY_PILLARS } from './data/content';
import { Navbar } from './components/Navbar';
import { PlanCard } from './components/PlanCard';
import { PlanRecommender } from './components/PlanRecommender';
import { Footer } from './components/Footer';

const VALID_TABS = new Set(NAV_ITEMS.map((item) => item.id));

const VIEWS = [
  {
    id: 'mes',
    title: 'O mês',
    text: 'O que entrou e o que saiu, na ordem em que você lançou.',
    rows: [['Salário', 'Entrada'], ['Mercado', 'Saída'], ['Aluguel', 'Saída'], ['Transporte', 'Saída']],
  },
  {
    id: 'cartoes',
    title: 'Cartões e contas',
    text: 'Cada compromisso que você cadastrou, separado por onde ele está.',
    rows: [['Cartão da casa', 'Fatura'], ['Conta principal', 'Conta'], ['Cartão do mercado', 'Fatura'], ['Reserva', 'Conta']],
  },
  {
    id: 'metas',
    title: 'Metas',
    text: 'Um objetivo ao lado do que já foi separado para ele.',
    rows: [['Reserva do mês', 'Em andamento'], ['Viagem', 'Em andamento'], ['Troca do celular', 'Começando'], ['Fundo da casa', 'Em andamento']],
  },
  {
    id: 'margem',
    title: 'Margem',
    text: 'Entradas e saídas do período, para ver o que sobrou.',
    rows: [['Entradas', 'Período'], ['Saídas', 'Período'], ['Margem', 'Resultado'], ['Em aberto', 'A lançar']],
  },
];

function getInitialTab() {
  const hash = window.location.hash.replace('#', '').trim();
  return VALID_TABS.has(hash) ? hash : 'inicio';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [currentView, setCurrentView] = useState('mes');

  useEffect(() => {
    const onHashChange = () => setActiveTab(getInitialTab());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const view = VIEWS.find((item) => item.id === currentView) ?? VIEWS[0];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main>
        {activeTab === 'inicio' && (
          <>
            <section className="bg-paper">
              <div className="mx-auto w-[min(72rem,calc(100%-2rem))] py-16 md:py-24">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ocean">Android · Google Play</p>
                <h1 className="m-0 max-w-[16ch] text-4xl leading-[1.05] md:text-6xl">Para onde o seu dinheiro está indo?</h1>
                <p className="mt-5 max-w-xl text-lg text-muted">
                  Um lugar para o mês da casa: receitas, despesas, cartões, contas, metas e patrimônio.
                </p>
                <a className="mt-8 inline-flex min-h-12 items-center bg-ocean px-5 font-semibold text-white" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Baixar na Play
                </a>
              </div>
            </section>

            <section className="bg-paper pb-20">
              <div className="mx-auto grid w-[min(72rem,calc(100%-2rem))] items-start gap-10 md:grid-cols-[1.15fr_.85fr]">
                <div>
                  <h2 className="m-0 text-3xl">Olhe uma parte de cada vez</h2>
                  <div className="mt-6 grid gap-3">
                    {VIEWS.map((item) => {
                      const selected = item.id === currentView;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCurrentView(item.id)}
                          className={`p-5 text-left ${selected ? 'bg-white ring-2 ring-ocean' : 'bg-white ring-1 ring-line'}`}
                        >
                          <h3 className="m-0 text-2xl">{item.title}</h3>
                          <p className="mb-0 mt-1 text-muted">{item.text}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="md:sticky md:top-24">
                  <div className="mx-auto w-[min(100%,280px)] rounded-[2rem] bg-ink p-3 text-white shadow-[0_24px_50px_rgba(17,17,17,0.12)]">
                    <div className="rounded-[1.4rem] bg-ink px-4 pb-5 pt-6">
                      <p className="m-0 text-center text-[11px] uppercase tracking-[0.16em] text-white/50">Exemplo de tela</p>
                      <p className="mt-4 font-serif text-2xl">{view.title}</p>
                      <ul className="mt-4 grid list-none gap-2 p-0">
                        {view.rows.map(([name, kind]) => (
                          <li key={name} className="flex items-center justify-between bg-white/10 px-3 py-3 text-sm">
                            <span>{name}</span>
                            <span className="text-sea">{kind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                <p>A contratação é feita dentro do Copiloto Financeiro pela Google Play, liberando 30 dias corridos de acesso sem cobrança recorrente ao final do período.</p>
              </div>
              <PlanRecommender />
              <div className="plans-grid">{PLANS.map((plan) => <PlanCard key={plan.id} plan={plan} />)}</div>
            </div>
          </section>
        )}

        {activeTab === 'seguranca' && (
          <section className="section section-cream">
            <div className="container">
              <div className="section-head">
                <span className="eyebrow">Privacidade por arquitetura</span>
                <h2>Seus dados financeiros nunca passam por conexão bancária</h2>
                <p>Enquanto outros aplicativos pedem acesso às suas contas, o Copiloto Financeiro aposta no controle manual consciente e protegido.</p>
              </div>
              <div className="reasons-grid">{SECURITY_PILLARS.map((pillar) => <article key={pillar.title} className="reason-card"><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}</div>
            </div>
          </section>
        )}

        {activeTab === 'duvidas' && (
          <section className="section section-cream">
            <div className="container">
              <div className="section-head">
                <span className="eyebrow">Transparência total</span>
                <h2>Dúvidas frequentes</h2>
                <p>Respostas diretas sobre funcionamento, pagamento via Google Play e uso da IA Tamanduá.</p>
              </div>
              <div className="faq-list">{FAQS.map((faq) => <article key={faq.question} className="faq-item"><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div>
            </div>
          </section>
        )}

        {activeTab !== 'inicio' && (
          <section className="section section-dark cta-banner">
            <div className="container cta-banner-inner">
              <div>
                <span className="eyebrow eyebrow-light">Disponível para Android</span>
                <h2>Baixe o Copiloto Financeiro</h2>
                <p>Escolha seu plano e tenha controle dos seus números por 30 dias.</p>
              </div>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent">Baixar na Google Play</a>
            </div>
          </section>
        )}
      </main>

      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
