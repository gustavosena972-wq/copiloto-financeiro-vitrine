import { Frame, Shell, PageHead } from "../components/Shell.jsx";
import { PLAY, plans } from "../content.js";
export default function Planos() {
  return <Shell><Frame><PageHead kicker="Planos" title="Três passes de 30 dias." text="A compra é na Google Play. Não renova sozinha. A cota da IA Tamanduá sobe do Pro ao Ultra." />
    <div className="grid gap-4 pb-16 md:grid-cols-3">{plans.map(plan=><article key={plan.id} className={`flex flex-col p-5 ${plan.featured ? "bg-ink text-paper" : "border border-line bg-white"}`}>
      <h2 className="m-0 text-3xl">{plan.name}</h2><p className={`my-3 font-serif text-4xl ${plan.featured ? "text-paper" : "text-accent"}`}>{plan.price}</p>
      <p className={`m-0 text-sm ${plan.featured ? "text-paper/80" : "text-muted"}`}>{plan.who}</p><p className={`mt-1 text-sm ${plan.featured ? "text-paper" : "text-accent"}`}>{plan.ia} / 30 dias</p>
      <ul className={`my-5 grid list-none gap-2 p-0 ${plan.featured ? "text-paper/80" : "text-muted"}`}>{plan.points.map(point=><li key={point}>{point}</li>)}</ul>
      <a className={`mt-auto inline-flex min-h-12 items-center justify-center px-4 font-semibold ${plan.featured ? "bg-paper text-ink" : "bg-ink text-paper"}`} href={PLAY}>Escolher na Play</a>
    </article>)}</div></Frame></Shell>;
}
