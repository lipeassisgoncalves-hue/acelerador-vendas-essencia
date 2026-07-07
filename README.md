# Acelerador de Vendas Essencia

Funil de vendas em React + Vite + Tailwind CSS para apresentar o Metodo Essencia, diagnosticar o momento da nail designer, simular potencial financeiro e direcionar para o checkout da Hotmart.

## Funcionalidades

- Pagina inicial responsiva com apresentacao do metodo.
- Quiz de diagnostico com barra de progresso.
- Resultado personalizado com 4 perfis de usuaria.
- Simulador financeiro com estimativa de faturamento atual e projetado.
- Secao de oferta com bonus, garantia e botao de checkout Hotmart.
- Botao flutuante de WhatsApp.
- Dados temporarios salvos no navegador com `localStorage`.

## 1. Como instalar

Na pasta do projeto, instale as dependencias:

```bash
npm install
```

No Windows PowerShell, se `npm` estiver bloqueado por politica de scripts, use:

```bash
npm.cmd install
```

## 2. Como rodar localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Ou, no Windows PowerShell:

```bash
npm.cmd run dev
```

Depois acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

Para gerar uma versao de producao:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## 3. Como publicar na Vercel

1. Suba este projeto para um repositorio no GitHub, GitLab ou Bitbucket.
2. Acesse [vercel.com](https://vercel.com) e crie um novo projeto.
3. Importe o repositorio.
4. A Vercel deve detectar automaticamente o framework como `Vite`.
5. Confirme as configuracoes:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Clique em `Deploy`.

Este projeto nao precisa de backend nem variaveis de ambiente para a versao atual.

## 4. Onde trocar o link da Hotmart

O link do checkout fica centralizado em:

```text
src/data/offer.js
```

Troque apenas esta constante:

```js
export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/SEU-LINK-AQUI'
```

Substitua pelo link real da Hotmart quando estiver pronto. Todos os botoes de compra usam essa mesma constante.

## Outros ajustes comerciais

No mesmo arquivo `src/data/offer.js`, voce tambem pode alterar:

- `whatsappUrl`: link do WhatsApp.
- `priceLabel`: preco parcelado exibido.
- `fullPriceLabel`: preco a vista exibido.
- `bonuses`: lista de bonus da oferta.

As perguntas e perfis do quiz ficam em:

```text
src/data/quiz.js
```
