# Gruppo Santa Marina — Immobiliare Veneziano

Sito web istituzionale e vetrina immobiliare per **Gruppo Santa Marina Immobiliare**, agenzia di riferimento per il mercato immobiliare di lusso a Venezia.

---

## Struttura del progetto

```
gruppo-santa-marina/
├── index.html              → Homepage (hero, chi siamo, contatti)
├── assets/
│   ├── css/
│   │   └── style.css       → Foglio di stile globale
│   ├── js/
│   │   └── main.js         → Interattività (menu mobile, ecc.)
│   └── img/
│       └── logo.webp       → Logo aziendale (convertito in WebP)
├── pages/
│   ├── retail.html                              → Categoria: spazi commerciali
│   ├── hospitality.html                         → Categoria: strutture ricettive
│   ├── residenziale.html                        → Categoria: immobili residenziali
│   ├── immobile.html                            → Template dettaglio immobile
│   ├── residenziale/
│   │   ├── residenza-san-polo.html              → slider 15 foto
│   │   ├── residenza-santanzolo.html            → slider 15 foto
│   │   ├── residenza-cortina.html               → slider 15 foto
│   │   ├── isola-di-crevan.html
│   │   ├── residenza-san-leonardo.html
│   │   ├── villa-ca-barbero.html
│   │   ├── palazzo-venier.html
│   │   ├── ca-grimani-loft.html
│   │   ├── residenza-torcello.html
│   │   ├── appartamento-rialto.html
│   │   └── attico-san-marco.html
│   ├── hospitality/
│   │   ├── calle-xxii-marzo.html               → slider 5 foto
│   │   ├── boutique-via-moda.html              → slider 4 foto
│   │   ├── bb-palazzo-grimani.html
│   │   ├── boutique-hotel-dorsoduro.html
│   │   ├── hotel-laguna-torcello.html
│   │   ├── locanda-del-doge.html
│   │   ├── pensione-veneziana.html
│   │   ├── residenza-epoca-accademia.html
│   │   ├── hotel-tre-stelle.html               → slider 4 foto, KEY MONEY €1.100.000
│   │   ├── hotel-canal-grande.html             → slider 5 foto, €50.000.000
│   │   ├── hotel-una-stella.html               → slider 4 foto, KEY MONEY €450.000
│   │   └── hotel-palazzo-terracielo.html       → slider 5 foto, €8.500.000
│   └── attivita-commerciali/
│       ├── merceria-orologio.html              → slider 4 foto
│       ├── campo-san-bartolomeo.html           → slider 4 foto
│       ├── marzaria-san-salvador.html          → slider 4 foto
│       ├── bottega-arte.html
│       ├── flagship-store-frezzeria.html
│       ├── locale-cannaregio.html
│       ├── negozio-canal-grande.html
│       ├── palazzetto-commerciale.html     → slider 9 foto
│       ├── showroom-rialto.html
│       ├── spazio-espositivo-murano.html
│       ├── negozio-calle-spadaria.html     → slider 5 foto, key money €150.000
│       ├── locale-lista-spagna.html        → slider 5 foto, key money €150.000
│       ├── locazione-merceria-orologio.html → slider 5 foto, affitto €10.000/mese
│       ├── negozio-calle-fuseri.html       → slider 5 foto, key money €100.000
│       ├── flagship-frezzaria.html         → slider 5 foto, affitto €20.000/mese
│       ├── ristorante-castello.html        → key money €1.200.000, 36+22 coperti
│       ├── ristorante-dorsoduro.html       → key money €750.000, 30+48 coperti
│       ├── ristorante-cannaregio.html      → key money €820.000, 50 coperti
│       ├── ristorante-cannaregio-2.html    → key money €1.550.000, 50+40 coperti
│       ├── ristorante-santa-croce.html     → key money €1.500.000, 40+22 coperti
│       ├── ristorante-castello-2.html      → key money €3.000.000, 80+100 coperti
│       ├── ristorante-san-marco.html       → key money €1.500.000, 90+50 coperti
│       ├── ristorante-cannaregio-3.html    → key money €1.300.000, 40+20 coperti
│       └── pizza-al-taglio.html            → su richiesta, Strada Nova
└── docs/
    ├── prd.md              → Product Requirements Document
    └── userstories.md      → User Stories
```

---

## Tecnologie utilizzate

- HTML5 semantico
- CSS3 puro con custom properties (nessun framework)
- JavaScript vanilla
- Google Fonts: **Cormorant Garamond** + **Inter**
- **AOS** (Animate On Scroll) v2.3.4 — via CDN, no build step
- **Formspree** — form contatti (placeholder endpoint, da configurare)
- **Google Maps** — embed iframe senza API key

---

## Design system

| Token | Valore |
|---|---|
| Rosso primario | `#8c1623` |
| Oro | `#c9a55a` |
| Scuro | `#0f0f0f` |
| Grigio testo | `#6b6b6b` |
| Grigio bordi | `#e8e6e3` |
| Rosso scuro (footer) | `#660a12` |

Font heading: `Cormorant Garamond` (300, 600, italic)  
Font body/UI: `Inter` (400, 600)

---

## Responsive design

Il sito è ottimizzato per 6 livelli di schermo:

| Breakpoint | Range | Comportamento |
|---|---|---|
| Large | ≥ 1440px | Padding 120px, hero 960px, font scalati |
| Desktop | 1280–1439px | Layout base Figma (1440px) |
| Tablet landscape | 1025–1279px | Centro logo nascosto, listings 3 col compatte |
| Tablet portrait | 768–1024px | Hamburger menu, listings 2 col, footer 2×2 |
| Mobile | ≤ 767px | Stack completo, hero dark + card in flow |
| Small phone | ≤ 390px | Font e padding ulteriormente ridotti |

## Come avviare il progetto

Il sito è **completamente statico**, non richiede build tools né server.

```bash
# Apri direttamente nel browser
open index.html

# Oppure usa un server locale (consigliato per evitare CORS)
npx serve .
# oppure
python -m http.server 8080
```

---

## Pagine

| Pagina | URL | Descrizione |
|---|---|---|
| Homepage | `index.html` | Hero slider, Chi Siamo, form contatti |
| Retail | `pages/retail.html` | Griglia 6 spazi commerciali |
| Hospitality | `pages/hospitality.html` | Griglia 6 strutture ricettive |
| Residenziale | `pages/residenziale.html` | Griglia 6 immobili residenziali |
| Dettaglio | `pages/immobile.html` | Scheda immobile con galleria e prezzo |

---

## Documentazione automatica

Ogni volta che Claude Code modifica file di progetto, i file MD vengono aggiornati automaticamente:
- `CLAUDE.md` — istruzioni di sviluppo
- `README.md` — panoramica e guida
- `prd.md` — requisiti e roadmap
- `userstories.md` — user stories

Questa regola è definita in `CLAUDE.md` e nell'hook Stop in `.claude/settings.json`.

## Funzionalità aggiunte (v1.1)

| Feature | Stato | Note |
|---|---|---|
| Google Maps embed | ✅ | iframe senza API key, sezione contatti |
| Form Formspree | ✅ | endpoint placeholder `YOUR_FORM_ID` da sostituire |
| Cookie banner GDPR | ✅ | iniettato via JS, preferenza in localStorage |
| Scroll-to-top button | ✅ | iniettato via JS, visibile dopo 400px di scroll |
| Animazioni AOS scroll | ✅ | CDN, init in main.js, `data-aos` su sezioni homepage |
| Switch lingua IT/EN | ✅ | `.t-it`/`.t-en` spans, localStorage, toggle in navbar |
| Filtri listing pages | ✅ | `data-tipo`, `data-zona`, `data-prezzo-min` su ogni card |
| Ottimizzazione immagini WebP | ✅ | 237 immagini convertite da JPG/PNG a WebP (qualità 85) |

## Prossimi step

- [x] Layout responsive (6 breakpoint: 390px → 1440px+)
- [x] Google Maps nella sezione contatti
- [x] Form contatti → Formspree (configurare ID reale)
- [x] Cookie banner GDPR
- [x] Scroll-to-top
- [x] Animazioni AOS
- [x] Switch lingua IT/EN (tutte le pagine)
- [x] Filtri nelle pagine categoria
- [x] Ottimizzazione immagini WebP (237 file convertiti)
- [x] Navbar con dropdown IMMOBILI (3 categorie) su tutte le pagine
- [x] Pre-fill form contatti da pagina dettaglio (campo Oggetto)
- [x] 9 pagine dettaglio ristoranti + cards collegate in retail.html
- [x] Responsive mobile completo per slider e separator ristorazione
- [ ] Configurare Formspree con ID account reale
- [ ] SEO: meta description, Open Graph, sitemap.xml
- [ ] Deploy (hosting + dominio)
