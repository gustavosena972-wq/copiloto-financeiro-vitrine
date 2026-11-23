import { useEffect, useState } from "react";

const PLAY = "https://play.google.com/store/apps/details?id=br.com.copiloto.financeiro";

const plans = [
  { name: "Pro", price: "R$ 20", members: "Até 2 membros", ia: "IA até 30 usos", points: ["Receitas e despesas", "Cartões e contas", "Metas e patrimônio", "Tabelas e margem"] },
  { name: "Max", price: "R$ 28", members: "Até 6 membros", ia: "IA até 100 usos", points: ["Tudo do Pro", "Mais membros da casa", "Organização em conjunto", "Cota maior da IA"], featured: true },
  { name: "Ultra", price: "R$ 40", members: "Membros ilimitados", ia: "IA até 300 usos", points: ["Tudo do Max", "Relatórios avançados", "Patrimônio histórico", "Simulador"] },
];

const faqs = [
  ["Preciso pagar?", "Sim. O app é pago. Pro, Max e Ultra duram 30 dias e a compra é na Google Play, sem renovação automática."],
  ["Conecta na conta do banco?", "Não. Você cadastra receitas, despesas e o resto. Nada é importado do banco."],
  ["Perdi o acesso. Como recupero?", "Entre com a mesma conta Google usada na Play. O passe de 30 dias fica ligado a essa compra."],
  ["Como excluo a conta?", "A exclusão da conta deve ser solicitada pelo procedimento disponível no aplicativo. A compra na Google Play segue as regras da loja."],
  ["A IA Tamanduá está sempre ligada?", "Cada plano tem uma cota por ciclo de 30 dias. Acabou a cota, o app continua; só a IA pausa até o próximo ciclo."],
];

function useRoute() {
  const read = () => {
    const h = location.hash;
    if (!h || h === "#" || h === "#/") return "home";
    if (["#recursos", "#ferramentas", "#seguranca"].includes(h)) return "home";
    return h.replace("#/", "").split("?")[0] || "home";
  };
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => setRoute(read());
    addEventListener("hashchange", onChange);
    return () => removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

function Frame({ children, className = "" }) {
  return <div className={`frame ${className}`}>{children}</div>;
}

function Header() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const home = route === "home";
  const links = [
    [home ? "#recursos" : "#/recursos", "Recursos"],
    [home ? "#seguranca" : "#/seguranca", "Segurança"],
    ["#/planos", "Planos"],
    ["#/sobre", "Sobre"],
    ["#/perguntas-frequentes", "Dúvidas"],
  ];
  return <header className="site-header">
    <Frame className="nav">
      <a className="brand" href="#/"><span className="brand-mark">CF</span><span>Copiloto Financeiro</span></a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? "×" : "☰"}</button>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="play-button nav-play" href={PLAY}>Google Play</a>
    </Frame>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <Frame className="footer-inner">
      <div><a className="brand footer-brand" href="#/"><span className="brand-mark">CF</span><span>Copiloto Financeiro</span></a><p>Controle financeiro pessoal e familiar. Sem conexão bancária.</p></div>
      <div className="footer-links">
        <a href="#/planos">Planos</a><a href="#/recursos">Recursos</a><a href="#/seguranca">Segurança</a><a href="#/sobre">Sobre</a><a href="#/perguntas-frequentes">Dúvidas</a><a href="#/privacidade">Privacidade</a><a href="#/termos">Termos</a><a href="#/excluir-conta">Excluir conta</a>
      </div>
    </Frame>
  </footer>;
}

function Shell({ children }) { return <div className="site"><Header/><main>{children}</main><Footer/></div>; }

function PageHead({ kicker, title, text }) {
  return <section className="page-head"><Frame><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{text}</p></Frame></section>;
}

function Home() {
  const reasons = [
    ["01", "Para onde o dinheiro vai", "Receitas e despesas do mês, só com o que você cadastrou."],
    ["02", "Cartões e contas", "Compromissos reunidos. O banco não entra nessa conta."],
    ["03", "Casa e metas", "Família no mesmo plano, com metas e patrimônio."],
    ["04", "Tabelas e margem", "O mês em tabela e a relação entre o que entra e o que sai."],
  ];
  return <>
    <section className="hero bg-paper"><Frame className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Copiloto Financeiro · Android</p>
        <h1>Para onde o seu dinheiro está indo?</h1>
        <p className="hero-text">App de Gustavo Sena para organizar a casa. Você registra. Nada é puxado do banco.</p>
        <div className="actions"><a className="button primary" href={PLAY}>Baixar na Google Play</a><a className="button outline" href="#/recursos">Conhecer o aplicativo</a></div>
        <div className="trust-row"><span>01 · Sem conexão bancária</span><span>02 · Uso pessoal e familiar</span><span>03 · Acesso por 30 dias</span></div>
      </div>
      <div className="hero-visual">
        <div className="visual-card"><p>O mês, do seu jeito</p><h2>Entradas, saídas e o que sobra</h2><div className="bars">{[8,12,10,16,14,20,16].map((h,i)=><i key={i} style={{height:`${h * 4}px`}}/>)}</div><small>Sem número inventado. O gráfico só existe depois do lançamento.</small></div>
      </div>
    </Frame></section>

    <section className="section white"><Frame className="split">
      <div><p className="eyebrow">A proposta</p><h2>Projeto independente. Um app, não um banco.</h2></div>
      <div className="text-column"><p>Gustavo Sena faz o Copiloto para controle pessoal e familiar. A vitrine fala do Android. Não há conexão com sua conta bancária.</p><p>Os dados ficam em São Paulo, com infraestrutura alternativa no Reino Unido e nos EUA. A compra é um passe de 30 dias na Google Play, sem renovação automática.</p><a className="text-link" href="#/sobre">Sobre o projeto →</a></div>
    </Frame></section>

    <section className="section sand" id="recursos"><Frame>
      <p className="eyebrow">Por que escolher</p><h2>Quatro coisas, sem planilha espalhada.</h2>
      <div className="reason-grid">{reasons.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="actions"><a className="button primary" href="#/recursos">Ver o aplicativo por dentro</a><a className="button outline" href="#/planos">Conhecer os planos</a></div>
    </Frame></section>

    <section className="section bg-paper" id="ferramentas"><Frame>
      <div className="section-heading"><div><p className="eyebrow">Ferramentas</p><h2>Organização além do básico.</h2></div><p>O Copiloto reúne recursos para acompanhar o que você cadastrou sem complicar o dia a dia.</p></div>
      <div className="feature-grid"><article><h3>Tabelas</h3><p>Visualize os lançamentos de forma tabular para acompanhar o mês.</p></article><article><h3>Margem de lucro</h3><p>Acompanhe a relação entre entradas e saídas.</p></article><article><h3>IA Tamanduá</h3><p>Pro até 30 usos, Max até 100 e Ultra até 300 por ciclo.</p></article><article><h3>Sem conexão bancária</h3><p>Você cadastra os dados. O app não importa movimentações da conta.</p></article></div>
    </Frame></section>

    <section className="section white" id="seguranca"><Frame>
      <div className="section-heading"><div><p className="eyebrow">Segurança e privacidade</p><h2>Clareza também significa saber como seus dados são tratados.</h2></div><p>Você cadastra as informações e pode consultar os detalhes sobre tratamento, armazenamento e seus direitos.</p></div>
      <div className="feature-grid"><article><h3>Você cadastra</h3><p>Receitas, despesas e demais informações entram pelo app. Nada vem do banco.</p></article><article><h3>Onde fica</h3><p>Estrutura principal em São Paulo, com infraestrutura alternativa no Reino Unido e nos EUA.</p></article><article><h3>O que não faz</h3><p>Não lê sua conta bancária e não importa movimentações automaticamente.</p></article><article><h3>Detalhes legais</h3><p>Consulte a Política de Privacidade para os detalhes aplicáveis.</p><a className="text-link" href="#/privacidade">Ler política →</a></article></div>
    </Frame></section>
  </>;
}

function Plans() {
  return <><PageHead kicker="Planos" title="Três passes de 30 dias." text="A compra é na Google Play. Não renova sozinha. A cota da IA Tamanduá sobe do Pro ao Ultra."/><Frame><div className="plans-grid">{plans.map(p=><article className={`plan-card ${p.featured ? "featured" : ""}`} key={p.name}><span className="plan-tag">{p.featured ? "MAIS ESCOLHIDO" : p.name === "Ultra" ? "ACESSO COMPLETO" : "PARA COMEÇAR"}</span><h2>{p.name}</h2><div className="price">{p.price}<small>/ 30 dias</small></div><p className="members">{p.members} · {p.ia}</p><ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul><a className="button primary full" href={PLAY}>Escolher na Google Play</a></article>)}</div><section className="notice"><h2>O que vem em todos os planos</h2><p><strong>Tabelas</strong> para organizar lançamentos · <strong>Margem de lucro</strong> para acompanhar entradas e saídas · <strong>IA Tamanduá</strong> com cota por ciclo de 30 dias.</p></section></Frame></>;
}

function Resources() {
  const [tab,setTab]=useState("controle");
  const data={
    controle:["Controle financeiro",[["Receitas","Cadastre entradas e consulte o que foi recebido no período."],["Despesas","Registre gastos e veja os lançamentos do mês."],["Cartões","Organize cartões e acompanhe compromissos."],["Contas","Mantenha suas contas cadastradas."]]],
    familia:["Família",[["Membros","Inclua os membros previstos no plano."],["Organização compartilhada","Reúna as informações financeiras da casa."],["Tamanho da família","Compare os planos conforme a quantidade de membros."]]],
    planejamento:["Planejamento",[["Metas","Cadastre objetivos e acompanhe os valores registrados."],["Acompanhamento","Consulte seus registros para planejar os próximos passos."],["Dívidas","Registre compromissos relacionados às dívidas."]]],
    patrimonio:["Patrimônio e relatórios",[["Patrimônio","Cadastre seus bens e acompanhe suas informações."],["Relatórios","Consulte os dados organizados com mais contexto."],["Histórico","Acompanhe registros anteriores."]]]
  };
  return <><PageHead kicker="Recursos do aplicativo" title="Mais do que registrar: acompanhe sua vida financeira em um só lugar." text="Conheça a experiência do aplicativo e veja como cada área ajuda a organizar sua vida financeira."/><Frame><section className="app-showcase"><div><p className="eyebrow">Conheça o aplicativo</p><h2>Veja por dentro do Copiloto Financeiro.</h2><p>Conheça visualmente a experiência do aplicativo antes de baixar.</p><a className="button primary" href={PLAY}>Baixar na Google Play</a></div><div className="phone-mock"><div className="phone-top">Copiloto Financeiro <span>Visão geral</span></div><div className="mock-balance">Seus registros</div><div className="mock-line"><span>Receitas</span><b>—</b></div><div className="mock-line"><span>Despesas</span><b>—</b></div><div className="mock-panel"><span>Metas</span><b>68%</b><div><i/></div></div><div className="mock-panel"><span>Cartões e contas</span><p>Cartão principal · Conta corrente</p></div></div></section><div className="tabs">{Object.keys(data).map(k=><button className={tab===k?"active":""} onClick={()=>setTab(k)} key={k}>{data[k][0]}</button>)}</div><section className="resource-panel"><h2>{data[tab][0]}</h2><div className="resource-grid">{data[tab][1].map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section></Frame></>;
}

function Security(){return <><PageHead kicker="Segurança" title="Seus números ficam onde você colocou." text="Linguagem direta: o que o app guarda, onde, e o que ele não acessa."/><Frame><div className="security-grid"><article><h2>Você cadastra</h2><p>Receitas, despesas e o resto entram pelo app. Nada vem do banco.</p></article><article><h2>Onde fica</h2><p>Estrutura principal em São Paulo. Há infraestrutura alternativa no Reino Unido e nos EUA para continuidade.</p></article><article><h2>O que não faz</h2><p>Não lê sua conta bancária e não importa movimentações automaticamente.</p></article></div><p className="bottom-note">Detalhes jurídicos na <a href="#/privacidade">Política de Privacidade</a>.</p></Frame></>}

function About(){return <><PageHead kicker="Sobre" title="Um app Android, de Gustavo Sena." text="Projeto independente de controle financeiro pessoal e familiar. A vitrine é para Android."/><Frame><div className="prose"><p>A pergunta da casa é simples: para onde o dinheiro está indo. A resposta vem do que a pessoa cadastra, não de uma conexão com o banco.</p><p>O Copiloto reúne receitas, despesas, cartões, contas, metas e patrimônio para deixar a organização financeira mais acessível no dia a dia.</p></div></Frame></>}

function FAQ(){return <><PageHead kicker="Dúvidas" title="Respostas curtas." text="Preço, banco, acesso e exclusão, sem rodeio."/><Frame><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></Frame></>}

function AppPage(){return <><PageHead kicker="O aplicativo" title="Organize sua vida financeira dentro do Copiloto." text="Veja o que o aplicativo oferece e baixe pela Google Play. Os planos e preços ficam na página de Planos."/><Frame><div className="feature-grid page-features"><article><h3>Organização do dia a dia</h3><p>Registre entradas, saídas, compromissos e informações financeiras em um só lugar.</p></article><article><h3>Família e objetivos</h3><p>Organize membros e acompanhe metas conforme o plano.</p></article><article><h3>Patrimônio e visão geral</h3><p>Registre patrimônio e consulte informações organizadas.</p></article><article><h3>Sem conexão bancária</h3><p>Você cadastra as informações. O Copiloto não acessa sua conta bancária.</p></article></div><div className="actions page-actions"><a className="button primary" href={PLAY}>Baixar na Google Play</a><a className="button outline" href="#/recursos">Ver recursos e telas</a></div></Frame></>}

function Legal({kind}) {
  const data={
    privacidade:["Política de Privacidade","Informações sobre os dados tratados pelo aplicativo, suas finalidades e os direitos aplicáveis."],
    termos:["Termos de Uso","Regras de utilização do Copiloto Financeiro e dos passes contratados pela Google Play."],
    "excluir-conta":["Excluir conta","Orientações para solicitar a exclusão da conta e informações relacionadas à compra na Google Play."]
  };
  const [title,text]=data[kind]||data.privacidade;
  return <><PageHead kicker="Informações legais" title={title} text={text}/><Frame><section className="legal-box"><h2>{title}</h2><p>Esta página está integrada à navegação React da vitrine. Antes da publicação definitiva, o texto legal completo deve ser mantido aqui, sem substituir o documento jurídico por este resumo.</p></section></Frame></>;
}

function App(){
  const route=useRoute();
  useEffect(()=>{scrollTo(0,0); if(route==="home" && location.hash.startsWith("#") && ["#recursos","#ferramentas","#seguranca"].includes(location.hash)) requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:"smooth"}));},[route]);
  const page={home:<Home/>,planos:<Plans/>,recursos:<Resources/>,seguranca:<Security/>,sobre:<About/>,app:<AppPage/>, "perguntas-frequentes":<FAQ/>,privacidade:<Legal kind="privacidade"/>,termos:<Legal kind="termos"/>, "excluir-conta":<Legal kind="excluir-conta"/>}[route] || <Home/>;
  return <Shell>{page}</Shell>;
}

export default App;
