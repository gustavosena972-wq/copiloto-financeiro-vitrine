# Copiloto Financeiro — Vitrine

Este repositório contém exclusivamente a vitrine pública do Copiloto Financeiro.

## Aplicativo real

O aplicativo Android oficial é o produto principal e está disponível na Google Play:

**[Abrir o Copiloto Financeiro na Google Play](https://play.google.com/store/apps/details?id=br.com.copiloto.financeiro)**

A vitrine **não copia o código do Android** e não cria uma segunda versão do aplicativo. Ela apenas apresenta o produto e direciona o usuário para a versão oficial distribuída pela Google Play.

## Responsabilidade

- Vitrine institucional
- Apresentação de recursos e planos
- Páginas públicas de privacidade, termos e exclusão de conta
- Assets e conteúdo visual da vitrine
- Link para o aplicativo Android oficial

## Fora deste repositório

O núcleo do produto permanece em `copiloto-financeir`:

- aplicativo Android
- Supabase e banco de dados
- Edge Functions
- migrations e segurança
- testes do aplicativo
- integrações internas

## Regra de trabalho

Alterações neste repositório devem ficar restritas à experiência pública da vitrine. Alterações no aplicativo, backend ou banco devem continuar no repositório principal.

## Arquivos

- `index.html`
- `privacidade.html`
- `termos.html`
- `excluir-conta.html`

## Importante

O repositório da vitrine é separado do projeto principal. Nenhum código, banco ou configuração interna do aplicativo deve ser duplicado aqui apenas para permitir visualização.
