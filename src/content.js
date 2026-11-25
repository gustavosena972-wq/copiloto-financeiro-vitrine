export const PLAY =
  "https://play.google.com/store/apps/details?id=br.com.copiloto.financeiro";

export const plans = [
  {
    id: "pro",
    name: "Pro",
    price: "R$ 20",
    who: "Até 2 membros",
    ia: "IA até 30 usos",
    points: ["Receitas e despesas", "Cartões e contas", "Metas e patrimônio", "Tabelas e margem"],
  },
  {
    id: "max",
    name: "Max",
    price: "R$ 28",
    who: "Até 6 membros",
    ia: "IA até 100 usos",
    featured: true,
    points: ["Tudo do Pro", "Mais membros da casa", "Organização em conjunto", "Cota maior da IA"],
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "R$ 40",
    who: "Membros ilimitados",
    ia: "IA até 300 usos",
    points: ["Tudo do Max", "Relatórios avançados", "Patrimônio histórico", "Simulador"],
  },
];

export const faqs = [
  { q: "Preciso pagar?", a: "Sim. O app é pago. Pro, Max e Ultra duram 30 dias e a compra é na Google Play, sem renovação automática." },
  { q: "Conecta na conta do banco?", a: "Não. Você cadastra receitas, despesas e o resto. Nada é importado do banco." },
  { q: "Perdi o acesso. Como recupero?", a: "Entre com a mesma conta Google usada na Play. O passe de 30 dias fica ligado a essa compra." },
  { q: "Como excluo a conta?", a: "No app, em conta, peça a exclusão. A compra na Play segue as regras da loja e não some só porque a conta do app foi apagada." },
  { q: "A IA Tamanduá está sempre ligada?", a: "Cada plano tem uma cota por ciclo de 30 dias. Acabou a cota, o app continua; só a IA pausa até o próximo ciclo." },
];
