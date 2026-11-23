# Copiloto Financeiro — Vitrine

Vitrine oficial do Copiloto Financeiro, aplicativo Android de controle financeiro pessoal e familiar.

## Stack atual

- React
- React DOM
- Vite
- JSX
- GitHub Actions / GitHub Pages

A interface principal foi migrada para componentes React. A vitrine usa rotas por hash para continuar funcionando no GitHub Pages sem backend adicional.

## Estrutura principal

- `src/App.jsx` — páginas e componentes da vitrine
- `src/styles.css` — identidade visual e responsividade
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
