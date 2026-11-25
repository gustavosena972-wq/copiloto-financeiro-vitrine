# Copiloto Financeiro — Vitrine

Vitrine oficial do Copiloto Financeiro, aplicativo Android de controle financeiro pessoal e familiar.

## Stack atual

- React 19
- React DOM
- Vite
- Tailwind CSS 4
- JSX
- GitHub Actions / GitHub Pages

A vitrine agora usa uma estrutura React separada por páginas, baseada no código React recebido do workspace do Grok. A navegação usa hash para continuar compatível com o GitHub Pages.

## Estrutura principal

- `src/App.jsx` — roteamento da vitrine
- `src/content.js` — planos, FAQ e URL da Google Play
- `src/components/Shell.jsx` — cabeçalho, rodapé e estrutura visual
- `src/pages/` — páginas React da vitrine
- `src/styles.css` — Tailwind, identidade visual e responsividade
- `src/main.jsx` — entrada React
- `package.json` — dependências e scripts
- `vite.config.js` — configuração do Vite
- `.github/workflows/deploy.yml` — publicação no GitHub Pages

## Produto

- Android
- Controle financeiro pessoal e familiar
- Sem conexão bancária
- Passes de 30 dias
- Contratação pela Google Play

Google Play: https://play.google.com/store/apps/details?id=br.com.copiloto.financeiro

## Publicação

O projeto é publicado pelo GitHub Pages através do workflow de deploy. Alterar arquivos no repositório cria uma nova versão do código; a versão pública depende da conclusão do build e do deploy do GitHub Actions.
