import { Frame, Shell } from "../components/Shell.jsx";
import { PLAY, plans } from "../content.js";

const reasons = [
  { n: "01", t: "Para onde o dinheiro vai", d: "Receitas e despesas do mês, só com o que você cadastrou." },
  { n: "02", t: "Cartões e contas", d: "Compromissos reunidos. O banco não entra nessa conta." },
  { n: "03", t: "Casa e metas", d: "Família no mesmo plano, com metas e patrimônio." },
  { n: "04", t: "Tabelas e margem", d: "O mês em tabela e a relação entre o que entra e o que sai." },
];

export default function Home() {
  return <Shell>
    <section className="bg-paper">
      <Frame className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Copiloto Financeiro · Android</p>
          <h1 className="m-0 max-w-[14ch] text-4xl leading-[1.05] md:text-6xl">Para onde o seu dinheiro está indo?</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">App de Gustavo Sena para organizar a casa. Você registra. Nada é puxado do banco.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="inline-flex min-h-12 items-center rounded-xl bg-ink px-5 font-semibold text-paper" href={PLAY}>Baixar na Google Play</a>
            <a className="inline-flex min-h-12 items-center rounded-xl border border-ink px-5 font-semibold" href="#/planos">Ver planos</a>
          </div>
        </div>
        <aside className="bg-mist p-6 md:p-8">
          <p className="m-0 text-xs font-semibold uppercase tracking-wider text-accent">O mês, do seu jeito</p>
          <p className="mt-3 font-serif text-3xl">Entradas, saídas e o que sobra</p>
          <div className="mt-8 flex h-24 items-end gap-2" aria-hidden>
            {[8,12,10,16,14,20,16].map((h,i)=><span key={i} className="flex-1 bg-accent" style={{height:`${h * 4}px`}} />)}
          </div>
          <p className="mt-4 text-sm text-muted">Sem número inventado. O gráfico só existe depois do lançamento.</p>
        </aside>
      </Frame>
    </section>
    <section className="bg-white">
      <Frame className="grid gap-8 py-16 md:grid-cols-[.8fr_1.2fr] md:py-20">
        <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">A empresa</p><h2 className="mt-3 text-3xl md:text-4xl">Projeto independente. Um app, não um banco.</h2></div>
        <div className="grid gap-6 text-muted md:grid-cols-2">
          <p className="m-0">Gustavo Sena faz o Copiloto para controle pessoal e familiar. A vitrine fala só do Android. Não há versão web do aplicativo.</p>
          <p className="m-0">Os dados ficam em São Paulo, com infraestrutura alternativa no Reino Unido e nos EUA. A compra é um passe de 30 dias na Google Play, sem renovar sozinha.</p>
          <a className="inline-flex items-center gap-1 font-semibold text-accent" href="#/sobre">Sobre o projeto →</a>
        </div>
      </Frame>
    </section>
    <section className="bg-sand">
      <Frame className="py-16 md:py-20">
        <h2 className="m-0 max-w-xl text-3xl md:text-4xl">Quatro coisas, sem planilha espalhada.</h2>
        <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-2">
          {reasons.map(item=><li key={item.n} className="bg-white p-5"><span className="text-sm tracking-widest text-accent">{item.n}</span><h3 className="my-2 text-2xl">{item.t}</h3><p className="m-0 text-muted">{item.d}</p></li>)}
        </ul>
      </Frame>
    </section>
    <section className="bg-paper">
      <Frame className="py-16 md:py-20">
        <div className="mb-6 flex items-end justify-between gap-4"><h2 className="m-0 text-3xl">Três passes. Trinta dias.</h2><a className="font-semibold text-accent" href="#/planos">Comparar →</a></div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(plan=><article key={plan.id} className={`p-5 ${plan.featured ? "bg-ink text-paper" : "bg-white"}`}><h3 className="m-0 text-2xl">{plan.name}</h3><p className={`my-2 font-serif text-3xl ${plan.featured ? "text-paper" : "text-accent"}`}>{plan.price}</p><p className={`m-0 text-sm ${plan.featured ? "text-paper/80" : "text-muted"}`}>{plan.who} · {plan.ia}</p></article>)}
        </div>
      </Frame>
    </section>
  </Shell>;
}
