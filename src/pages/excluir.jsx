import { Frame, Shell, PageHead } from "../components/Shell.jsx";
import { PLAY } from "../content.js";
export default function Excluir(){return <Shell><Frame><PageHead kicker="Conta" title="Excluir a conta do app." text="Peça a exclusão dentro do Copiloto, na área da conta. Isso não cancela sozinho uma compra já feita na Google Play."/><a className="mb-16 inline-flex min-h-12 items-center bg-ink px-5 font-semibold text-paper" href={PLAY}>Abrir na Play</a></Frame></Shell>;}
