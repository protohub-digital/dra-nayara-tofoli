# Dra. Nayara Tofoli — Site Oficial

Site profissional da Dra. Nayara Tofoli, Cirurgiã-Dentista especialista em Harmonização Facial e Otomoldação em Colatina, ES.

**Stack:** Astro 5 · Tailwind CSS v4 · TypeScript · Cloudflare Pages

---

## Início rápido

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # preview do build local
```

---

## Estrutura

```
src/
  components/    # 16 componentes Astro reutilizáveis
  data/
    site.ts      # ÚNICA fonte de dados — edite aqui para mudar conteúdo
  layouts/
    Layout.astro # SEO, analytics, Schema.org
  pages/         # index, sobre, servicos, galeria, contato, 404
  styles/
    global.css   # Design tokens (Tailwind v4 @theme)
public/
  images/        # Fotos da galeria e perfil
  _headers       # Security headers (Cloudflare Pages)
  _redirects     # Redirects (Cloudflare Pages)
wrangler.toml    # Config Cloudflare Pages
```

---

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `PUBLIC_SITE_URL` | URL canônica do site |
| `PUBLIC_WHATSAPP_NUMBER` | Número com DDI (ex: 5527998440261) |
| `PUBLIC_GTM_ID` | Google Tag Manager (ex: GTM-XXXXXXX) |
| `PUBLIC_GA4_ID` | Google Analytics 4 (ex: G-XXXXXXXXXX) |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel / Facebook Pixel |
| `PUBLIC_GOOGLE_ADS_ID` | Google Ads Conversion ID |
| `PUBLIC_TIKTOK_PIXEL_ID` | TikTok Pixel (opcional) |

> **Cloudflare Pages:** Configure as variáveis em *Settings → Environment Variables* no dashboard da CF. Não é necessário arquivo `.env` no servidor.

---

## Deploy no Cloudflare Pages

### Via dashboard (recomendado)
1. Faça push para o GitHub
2. Conecte o repositório em [pages.cloudflare.com](https://pages.cloudflare.com)
3. Configurações de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Adicione as variáveis de ambiente
5. Deploy automático a cada `git push`

### Via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name dra-nayara-tofoli
```

---

## Domínio personalizado

Após o primeiro deploy, adicione o domínio em *Custom domains* no dashboard da Cloudflare Pages e aponte o DNS conforme instruído.

---

## Analytics

O site suporta GTM, GA4, Meta Pixel, Google Ads e TikTok Pixel via variáveis de ambiente. Sem ID configurado, o script não é injetado.
