export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=br.com.copiloto.financeiro';

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'planos', label: 'Planos e preços' },
  { id: 'seguranca', label: 'Privacidade e dados' },
  { id: 'duvidas', label: 'Dúvidas frequentes' },
];

export const REASONS = [
  {
    tag: 'Privacidade real',
    title: 'Registro 100% manual, sem conectar seu banco',
    description:
      'Você não informa senhas bancárias, não ativa Open Finance e não importa extratos automaticamente. Seus dados financeiros só entram no aplicativo quando você decide registrar.',
  },
  {
    tag: 'Clareza visual',
    title: 'Organização em tabelas sem montar fórmulas',
    description:
      'Visualize receitas, despesas, cartões, contas, metas e patrimônio em tabelas diretas para revisar o mês com rapidez, sem precisar configurar planilhas complexas.',
  },
  {
    tag: 'Decisão no período',
    title: 'Cálculo automático da margem do período',
    description:
      'Acompanhe em tempo real a relação entre tudo o que entra e tudo o que sai no intervalo escolhido para saber exatamente quanto sobra no orçamento.',
  },
  {
    tag: 'Apoio inteligente',
    title: 'IA Tamanduá integrada aos seus registros',
    description:
      'Tire dúvidas e peça interpretações sobre os lançamentos que você mesmo cadastrou. Se a cota de 30 dias terminar, apenas a IA pausa — todo o restante do app continua funcionando.',
  },
];

export const PLANS = [
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 20,00',
    period: '/ 30 dias',
    dailyHint: 'Cerca de R$ 0,67 por dia',
    audience: 'Ideal para controle individual ou a dois com o essencial sempre organizado.',
    featured: false,
    badge: null,
    highlights: [
      'Até 2 membros no controle compartilhado',
      'IA Tamanduá com até 30 usos no ciclo de 30 dias',
      'Controle completo de receitas, despesas, cartões e contas',
      'Metas financeiras, patrimônio e visão em tabelas',
      'Cálculo automático da margem do período',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    price: 'R$ 28,00',
    period: '/ 30 dias',
    dailyHint: 'Cerca de R$ 0,93 por dia',
    audience: 'O equilíbrio ideal para famílias que precisam compartilhar o orçamento e consultar mais a IA.',
    featured: true,
    badge: 'Mais escolhido para famílias',
    highlights: [
      'Até 6 membros no controle compartilhado',
      'IA Tamanduá com até 100 usos no ciclo de 30 dias',
      'Todos os recursos do plano Pro incluídos',
      'Gestão conjunta de cartões, contas e metas da casa',
      'Acesso completo por 30 dias sem renovação automática',
    ],
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: 'R$ 40,00',
    period: '/ 30 dias',
    dailyHint: 'Cerca de R$ 1,33 por dia',
    audience: 'Para quem busca visão profunda de longo prazo, projeções e uso intenso da IA.',
    featured: false,
    badge: null,
    highlights: [
      'Membros ilimitados no controle compartilhado',
      'IA Tamanduá com até 300 usos no ciclo de 30 dias',
      'Relatórios avançados para análise detalhada do orçamento',
      'Patrimônio histórico e simulador financeiro integrados',
      'Todos os recursos dos planos Pro e Max incluídos',
    ],
  },
];

export const SECURITY_PILLARS = [
  {
    title: 'Zero vínculo bancário',
    description:
      'O Copiloto Financeiro não possui integração com bancos ou instituições financeiras. Não há risco de sincronização indevida nem exposição de credenciais bancárias.',
  },
  {
    title: 'Você no comando de cada dado',
    description:
      'Como o lançamento é manual, você mantém consciência real de cada gasto e decide exatamente o que fica registrado no controle pessoal ou familiar.',
  },
  {
    title: 'Pagamento seguro via Google Play',
    description:
      'A contratação dos 30 dias acontece diretamente dentro do app Android pela infraestrutura oficial da Google Play, sem renovação automática.',
  },
];

export const FAQS = [
  {
    question: 'O Copiloto Financeiro conecta na minha conta bancária?',
    answer:
      'Não. O registro é 100% manual. O aplicativo não usa Open Finance, não pede senhas de banco e não importa extratos automaticamente.',
  },
  {
    question: 'Como funciona o pagamento e o acesso aos planos?',
    answer:
      'Você escolhe entre os planos Pro (R$ 20,00), Max (R$ 28,00) ou Ultra (R$ 40,00) dentro do próprio aplicativo Android, com pagamento processado pela Google Play para liberar 30 dias corridos de uso.',
  },
  {
    question: 'O plano renova sozinho depois de 30 dias?',
    answer:
      'Não. Cada contratação libera 30 dias corridos de acesso sem renovação automática e sem cobrança surpresa no cartão.',
  },
  {
    question: 'O que acontece quando acaba a cota da IA Tamanduá?',
    answer:
      'Apenas a IA Tamanduá fica pausada até o próximo ciclo de 30 dias ou nova contratação. Todos os seus lançamentos, tabelas, cartões, metas e cálculos de margem continuam funcionando normalmente.',
  },
  {
    question: 'Para quais celulares o aplicativo está disponível?',
    answer:
      'O Copiloto Financeiro é um aplicativo exclusivo para Android, disponível oficialmente na Google Play.',
  },
];