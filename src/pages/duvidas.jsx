import { Frame, Shell, PageHead } from "../components/Shell.jsx";
import { faqs } from "../content.js";
export default function Duvidas() {
  return <Shell><Frame><PageHead kicker="Dúvidas" title="Respostas curtas." text="Preço, banco, acesso e exclusão, sem rodeio." />
    <div className="max-w-2xl pb-16">{faqs.map(item=><details key={item.q} className="border-t border-line py-4"><summary className="cursor-pointer font-serif text-xl">{item.q}</summary><p className="mb-0 mt-3 text-muted">{item.a}</p></details>)}</div>
  </Frame></Shell>;
}
