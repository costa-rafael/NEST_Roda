# 🎡 NEST Roda da Sorte (Interactive Spin Wheel)

Uma aplicação web interativa, moderna e minimalista de "Roda da Sorte", desenvolvida especificamente para exposições e eventos (Monitor/Display mode).

[![Deploy to GitHub Pages](https://github.com/costa-rafael/NEST_Roda/actions/workflows/deploy.yml/badge.svg)](https://github.com/costa-rafael/NEST_Roda/actions/workflows/deploy.yml)

## ✨ Funcionalidades

- **Design Premium**: Inspirado na identidade visual do NEST, com uma paleta de verdes elegante e tipografia de alta visibilidade.
- **Modo Expositor**: Otimizada para ecrãs grandes (monitores/TVs), ocupando 100% da área útil sem elementos de distração.
- **Interação Natural**: Sem botões desnecessários; basta clicar ou tocar diretamente na roda para iniciar o sorteio.
- **Animações Fluidas**: Física de rotação suave (`ease-out`) com paragem precisa e aleatória.
- **Pop-up de Prémio**: Sistema de anúncio de vencedor em ecrã total para máximo impacto visual.
- **Configurável**: Lista de prémios facilmente editável via ficheiro JSON.

## 🛠️ Tecnologias

- **React + Vite**: Engine de frontend ultra-rápida.
- **Framer Motion**: Para animações de rotação suaves e cinemáticas.
- **SVG Dinâmico**: Renderização vetorial da roda para garantir nitidez em qualquer resolução (4K, Full HD, etc).
- **CSS Vanilla**: Estilização pura para máxima performance.

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## ⚙️ Configuração dos Prémios

Pode alterar as fatias da roda editando o ficheiro `src/data/options.json`. A roda ajusta-se automaticamente ao número de itens fornecidos.

```json
[
  { "id": 1, "text": "LINKEDIN REVIEW\nPWC" },
  { "id": 2, "text": "SEM PRÉMIO" },
  ...
]
```

## 🌐 Deployment (GitHub Pages)

Este projeto está configurado para ser publicado automaticamente via GitHub Actions. Sempre que for feito um *push* para o branch `main`, a versão online será atualizada.

---
Desenvolvido para o **NEST**. 🚀
