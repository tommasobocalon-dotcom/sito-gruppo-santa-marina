# PRD — Product Requirements Document
## Gruppo Santa Marina Immobiliare

**Versione:** 1.0  
**Data:** Maggio 2026  
**Autore:** Tommaso Bocalon  
**Stato:** In sviluppo

---

## 1. Obiettivo del prodotto

Realizzare un sito web istituzionale per **Gruppo Santa Marina Immobiliare**, punto di riferimento per il mercato immobiliare di lusso a Venezia. Il sito deve comunicare esclusività, affidabilità e radicamento nel territorio veneziano, permettendo ai potenziali acquirenti e investitori di scoprire le proprietà disponibili e mettersi in contatto con l'agenzia.

---

## 2. Utenti target

| Segmento | Descrizione |
|---|---|
| Acquirenti privati | Persone facoltose in cerca di immobili residenziali esclusivi a Venezia |
| Investitori | Aziende o privati interessati a immobili commerciali o ricettivi come asset |
| Imprenditori hospitality | Chi cerca strutture da gestire come hotel, locanda o B&B |
| Acquirenti internazionali | Stranieri attratti dall'immobiliare veneziano (mercato premium) |

---

## 3. Pagine e contenuti

### 3.1 Homepage (`index.html`)
- **Navbar**: logo + link di navigazione (Servizi, Chi Siamo, Contatti)
- **Hero**: immagine di impatto con tre card categoria (Retail, Hospitality, Residenziale)
- **Chi Siamo**: citazione + testo istituzionale con heading grande
- **Contatti**: form di contatto + informazioni sede con mappa

### 3.2 Categoria Retail (`retail.html`)
- Header con titolo categoria e descrizione
- Griglia di annunci (2 righe × 3 card): negozi, showroom, locali commerciali

### 3.3 Categoria Hospitality (`hospitality.html`)
- Header con titolo categoria e descrizione
- Griglia di annunci: hotel boutique, locande, B&B, residenze d'epoca

### 3.4 Categoria Residenziale (`residenziale.html`)
- Header con titolo categoria e descrizione
- Griglia di annunci: palazzi, loft, ville, appartamenti, attici

### 3.5 Dettaglio Immobile (`immobile.html`)
- Hero a tutta larghezza con foto principale e counter galleria
- Titolo, badge categoria, localizzazione
- Stats: superficie, livello, locali, servizi
- Descrizione estesa
- Griglia foto secondarie
- Card laterale sticky con prezzo e CTA "Richiedi informazioni"

---

## 4. Requisiti funzionali

| ID | Requisito | Priorità |
|---|---|---|
| RF-01 | Navigazione tra tutte le pagine tramite navbar e footer | Alta |
| RF-02 | Form contatti con campi: nome, telefono, email, messaggio | Alta |
| RF-03 | Menu hamburger su mobile | Alta |
| RF-04 | Link "Torna agli annunci" nella pagina dettaglio | Media |
| RF-05 | Breadcrumb nelle pagine categoria e dettaglio | Media |
| RF-06 | Anchor link alle sezioni (Chi Siamo, Contatti) | Media |
| RF-07 | Collegamento form a servizio email esterno | Alta |
| RF-08 | Galleria foto navigabile nella pagina dettaglio | Bassa |
| RF-09 | Mappa interattiva Google Maps nella sezione contatti | Media |

---

## 5. Requisiti non funzionali

| ID | Requisito | Dettaglio |
|---|---|---|
| RNF-01 | Performance | Nessun framework pesante; CSS e JS minimi |
| RNF-02 | Responsività | Layout adattivo con 6 breakpoint: 390px · 768px · 1025px · 1280px · 1440px+ |
| RNF-03 | Accessibilità | Tag semantici, attributi `alt`, contrasto colori adeguato |
| RNF-04 | SEO | Meta title, meta description, Open Graph per ogni pagina |
| RNF-05 | Compatibilità | Chrome, Firefox, Safari, Edge — ultime 2 versioni |
| RNF-06 | Velocità caricamento | Immagini in formato WebP (qualità 85), Google Fonts con `display=swap` |

---

## 6. Design system

Il design di riferimento è su Figma:  
`https://www.figma.com/design/rMEQnsxKrv7m30q3IQINNM/gruppo-santa-marina`

**Palette colori:**
- Rosso primario: `#8c1623`
- Oro: `#c9a55a`
- Scuro: `#0f0f0f`
- Grigio testo: `#6b6b6b`
- Grigio bordi: `#e8e6e3`

**Tipografia:**
- Titoli/logo: Cormorant Garamond (Light 300, SemiBold 600, Italic)
- UI/body: Inter (Regular 400, SemiBold 600)

---

## 7. Fuori scope (v1.0) — aggiornato v1.1

~~- Ricerca e filtri per gli immobili~~ → **Implementata in v1.1**  
~~- Multilinguismo (IT/EN)~~ → **Implementata in v1.1**  

Ancora fuori scope:
- CMS o backend per la gestione degli annunci
- Area riservata agenti
- Chat live o chatbot
- Integrazione MLS / portali immobiliari (Idealista, Immobiliare.it)

---

## 8. Requisiti aggiuntivi v1.1

| ID | Requisito | Priorità | Stato |
|---|---|---|---|
| RF-10 | Cookie banner GDPR conforme | Alta | ✅ |
| RF-11 | Form contatti collegato a Formspree | Alta | ✅ (ID placeholder) |
| RF-12 | Google Maps embed sezione contatti | Media | ✅ |
| RF-13 | Switch lingua IT/EN con persistenza | Alta | ✅ (tutte le 26 pagine dettaglio tradotte) |
| RF-14 | Filtri per tipo, zona, prezzo nelle pagine categoria | Media | ✅ |
| RF-15 | Scroll-to-top button | Bassa | ✅ |
| RF-16 | Animazioni AOS allo scroll | Bassa | ✅ |
| RF-17 | Ottimizzazione immagini WebP | Media | ✅ (237 immagini convertite) |
| RF-18 | Navbar con dropdown IMMOBILI su tutte le pagine | Alta | ✅ |
| RF-19 | Pre-fill campo Oggetto form da pagina dettaglio | Media | ✅ |
| RF-20 | Sezione Ristorazione in retail.html con 9 pagine dettaglio | Alta | ✅ |
| RF-21 | Responsive mobile slider e separator ristorazione | Alta | ✅ |

---

## 9. Roadmap

| Fase | Attività | Stato |
|---|---|---|
| Fase 1 | Struttura HTML e CSS base da Figma | ✅ Completata |
| Fase 1b | Responsive design (6 breakpoint: 390px → 1440px+) | ✅ Completata |
| Fase 2 | Contenuti reali (testi, foto proprietà) | 🔄 In corso |
| Fase 3 | Form contatti → Formspree | ✅ Completata (ID da configurare) |
| Fase 4 | Mappa Google Maps | ✅ Completata |
| Fase 4b | Cookie banner GDPR | ✅ Completata |
| Fase 4c | Switch lingua IT/EN | ✅ Completata |
| Fase 4d | Filtri listing pages | ✅ Completata |
| Fase 5 | SEO on-page (meta tag, sitemap) | ⏳ Da fare |
| Fase 6 | Test cross-browser e mobile | ⏳ Da fare |
| Fase 7 | Deploy (hosting + dominio) | ⏳ Da fare |
