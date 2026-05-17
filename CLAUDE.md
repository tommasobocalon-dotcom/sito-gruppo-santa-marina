# CLAUDE.md — Gruppo Santa Marina

Questo file fornisce il contesto del progetto a Claude Code per assistere nello sviluppo.

## Panoramica del progetto

Sito web istituzionale statico per **Gruppo Santa Marina Immobiliare**, agenzia immobiliare di lusso con sede a Venezia (Castello 5893). Il sito presenta le tre categorie di immobili — Retail, Hospitality, Residenziale — e le schede dettaglio dei singoli annunci.

## Stack tecnico

- **HTML5** puro e semantico (no framework)
- **CSS3** con custom properties (no Tailwind, no Bootstrap)
- **JavaScript** vanilla (no React, no Vue, no build step)
- **Google Fonts**: Cormorant Garamond + Inter
- Tutto statico: si apre direttamente nel browser

## Struttura file

```
index.html                → Homepage
assets/
  css/style.css           → Unico foglio di stile globale
  js/main.js              → Script unico (hamburger menu, ecc.)
  img/logo.png            → Logo aziendale (scaricato da Figma)
pages/
  retail.html             → Categoria commerciale
  hospitality.html        → Categoria ricettiva
  residenziale.html       → Categoria residenziale
  immobile.html           → Template dettaglio immobile
docs/
  prd.md                  → Product Requirements Document
  userstories.md          → User Stories
```

## Regola obbligatoria — aggiornamento documentazione

**Dopo ogni turno di conversazione in cui hai modificato file del progetto** (HTML, CSS, JS o qualsiasi altro file non-MD), devi aggiornare i seguenti file per riflettere i cambiamenti:

| File | Cosa aggiornare |
|---|---|
| `README.md` | Struttura file, stack, next steps, sezione responsive se cambia |
| `CLAUDE.md` | Convenzioni CSS, componenti, note importanti |
| `docs/prd.md` | Requisiti, roadmap (stato delle fasi), eventuali nuove feature |
| `docs/userstories.md` | Nuove user stories se la funzionalità è nuova, aggiornamento priorità |

Non chiedere conferma: aggiorna sempre i file MD alla fine del turno se hai toccato file di progetto.

## Convenzioni CSS

- Le variabili CSS sono definite in `:root` all'inizio di `style.css`
- Naming: BEM-like (`blocco__elemento--modificatore`)
- Breakpoint responsive (6 livelli):
  - `≥ 1440px` — large screens
  - `1280–1439px` — desktop stretto
  - `1025–1279px` — tablet landscape
  - `768–1024px` — tablet portrait
  - `≤ 767px` — mobile
  - `≤ 390px` — small phone
- La larghezza di progettazione base è **1440px**

## Variabili CSS principali

```css
--red:        #8c1623   /* rosso primario */
--gold:       #c9a55a   /* oro */
--dark:       #0f0f0f   /* quasi nero */
--gray-mid:   #6b6b6b   /* testo secondario */
--gray-light: #e8e6e3   /* bordi e separatori */
--deep-red:   #660a12   /* footer legal bar */
```

## Componenti ricorrenti

- **Navbar**: `.navbar` / `.navbar--inner` (homepage vs inner pages)
- **Footer**: stesso blocco HTML in tutte le pagine
- **Property card**: `.prop-card` usata nelle pagine categoria
- **Category header**: `.cat-header` con sfondo rosso
- **Form contatti**: nella homepage, sezione `#contatti`
- **Hero cards**: `.hero__cards` con `top: 50%; transform: translateY(-50%)` per centratura verticale; `justify-content: center; gap: 40px` per centratura orizzontale (da Figma: cards a y=310 in hero da 900px, margini 80px, gap 40px)

## Design system (da Figma)

Il design originale è disponibile su Figma:  
`https://www.figma.com/design/rMEQnsxKrv7m30q3IQINNM/gruppo-santa-marina`

Font heading: Cormorant Garamond (300 light, 600 semibold, italic)  
Font UI/body: Inter (400 regular, 600 semibold)

## Note importanti

- Le immagini delle proprietà sono **placeholder** (background scuro). Vanno sostituite con foto reali dentro `.prop-card__image` e `.detail-hero`
- Il form contatti non ha backend: va collegato a un servizio (es. Formspree, Netlify Forms)
- `pages/immobile.html` è un template statico: in produzione andrà reso dinamico (es. con parametri URL o CMS)
- Il logo (`assets/img/logo.png`) è scaricato da Figma e ha scadenza; va sostituito con il file definitivo
- I percorsi relativi nelle pagine in `pages/` usano `../` per risalire alla radice (es. `../assets/css/style.css`, `../index.html`)
