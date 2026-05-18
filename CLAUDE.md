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

- **Navbar**: `.navbar` / `.navbar--inner` (homepage vs inner pages); il pulsante `.navbar__lang` è iniettato da JS
- **Footer**: stesso blocco HTML in tutte le pagine (con spans `.t-it`/`.t-en`)
- **Property card**: `.prop-card` usata nelle pagine categoria; usare `data-tipo`, `data-zona`, `data-prezzo-min` per i filtri
- **Category header**: `.cat-header` con sfondo rosso
- **Form contatti**: nella homepage, sezione `#contatti`; action punta a Formspree (ID da configurare)
- **Hero cards**: `.hero__cards` con `top: 50%; transform: translateY(-50%)` per centratura verticale; `justify-content: center; gap: 40px` per centratura orizzontale
- **Cookie banner**: iniettato da JS in `main.js`; preferenza in `localStorage('cookie-consent')`
- **Scroll-to-top**: `.scroll-top`, iniettato da JS; visibile dopo 400px
- **Filter bar**: `.filters` con `id="filter-bar"`; JS lo attiva automaticamente se presente
- **Language toggle**: `html[lang="en"] .t-it { display: none }` / `html[lang="it"] .t-en { display: none }` — tutti i testi visibili vanno wrappati in `<span class="t-it">...</span><span class="t-en">...</span>`

## Sistema di traduzione IT/EN

- Lingua default: `it` (da `localStorage('lang')`)
- Toggle iniettato via JS come `<button class="navbar__lang">` in ogni navbar
- Wrapping del testo: `<span class="t-it">Testo italiano</span><span class="t-en">English text</span>`
- Per blocchi di testo lunghi usare `<div class="t-it">...</div><div class="t-en">...</div>`
- Le CSS rules in `style.css` gestiscono la visibilità: `html[lang="en"] .t-it { display: none !important; }`

## AOS (Animate On Scroll)

- CDN: `https://unpkg.com/aos@2.3.4/dist/aos.css` in `<head>` e `aos.js` prima di `main.js`
- Init in `main.js`: `AOS.init({ once: true, duration: 700, offset: 60 })`
- Usare `data-aos="fade-up"`, `data-aos="fade-right"`, `data-aos="fade-left"` sugli elementi

## Google Maps

- Embed iframe senza API key: `https://maps.google.com/maps?q=Campo+Santa+Marina,+Venezia&output=embed&hl=it&z=16`
- Contenitore: `.contatti__map iframe` (CSS già configurato per `width: 100%; height: 100%`)

## Formspree

- Endpoint: `https://formspree.io/f/YOUR_FORM_ID` — sostituire `YOUR_FORM_ID` con l'ID reale dopo registrazione

## Design system (da Figma)

Il design originale è disponibile su Figma:  
`https://www.figma.com/design/rMEQnsxKrv7m30q3IQINNM/gruppo-santa-marina`

Font heading: Cormorant Garamond (300 light, 600 semibold, italic)  
Font UI/body: Inter (400 regular, 600 semibold)

## Note importanti

- Le immagini delle proprietà sono **placeholder** (background scuro). Vanno sostituite con foto reali dentro `.prop-card__image` e `.detail-hero`
- Il form contatti non ha backend: va collegato a un servizio (es. Formspree, Netlify Forms)
- `pages/immobile.html` è un template statico: in produzione andrà reso dinamico (es. con parametri URL o CMS)
- Il logo (`assets/img/logo.webp`) è in formato WebP (convertito da PNG); va sostituito con il file definitivo se necessario
- Tutte le immagini del sito sono in formato **WebP** (qualità 85, convertite con Python Pillow); non aggiungere JPG/PNG senza convertirli
- I percorsi relativi nelle pagine in `pages/` usano `../` per risalire alla radice (es. `../assets/css/style.css`, `../index.html`)
