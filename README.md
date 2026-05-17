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
│       └── logo.png        → Logo aziendale
├── pages/
│   ├── retail.html         → Categoria: spazi commerciali
│   ├── hospitality.html    → Categoria: strutture ricettive
│   ├── residenziale.html   → Categoria: immobili residenziali
│   └── immobile.html       → Pagina dettaglio singolo immobile
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

## Prossimi step

- [x] Layout responsive (6 breakpoint: 390px → 1440px+)
- [ ] Aggiungere immagini reali delle proprietà
- [ ] Collegare il form contatti a un backend o servizio email (es. Formspree)
- [ ] Implementare pagine dettaglio dinamiche per ogni annuncio
- [ ] Aggiungere Google Maps nella sezione contatti
- [ ] SEO: meta description, Open Graph, sitemap.xml
