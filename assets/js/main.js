document.addEventListener('DOMContentLoaded', function () {

  // ─── Language (must run first to set html[lang]) ───
  var lang = localStorage.getItem('lang') || 'it';
  document.documentElement.lang = lang;

  // Salva i placeholder italiani originali prima di sovrascriverli
  document.querySelectorAll('[data-placeholder-en]').forEach(function (el) {
    el.dataset.placeholderIt = el.placeholder;
  });

  function applyLang(l) {
    // Testo delle <option> con data-it / data-en
    document.querySelectorAll('option[data-it]').forEach(function (opt) {
      opt.textContent = l === 'en' ? opt.dataset.en : opt.dataset.it;
    });
    // Placeholder dei campi form
    document.querySelectorAll('[data-placeholder-en]').forEach(function (el) {
      el.placeholder = l === 'en' ? el.dataset.placeholderEn : el.dataset.placeholderIt;
    });
  }

  applyLang(lang);

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var langBtn = document.createElement('button');
    langBtn.className = 'navbar__lang';
    langBtn.id = 'lang-toggle';
    langBtn.setAttribute('aria-label', 'Cambia lingua / Switch language');
    langBtn.textContent = lang === 'it' ? 'EN' : 'IT';
    navbar.appendChild(langBtn);

    langBtn.addEventListener('click', function () {
      lang = lang === 'it' ? 'en' : 'it';
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      langBtn.textContent = lang === 'it' ? 'EN' : 'IT';
      applyLang(lang);
    });
  }

  // ─── AOS init ───
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 700, offset: 60 });
  }

  // ─── Cookie Banner ───
  if (!localStorage.getItem('cookie-consent')) {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML =
      '<p class="cookie-banner__text">' +
        '<span class="t-it">Utilizziamo cookie per migliorare la tua esperienza. Leggi la nostra <a href="#">Cookie Policy</a>.</span>' +
        '<span class="t-en">We use cookies to improve your experience. Read our <a href="#">Cookie Policy</a>.</span>' +
      '</p>' +
      '<div class="cookie-banner__actions">' +
        '<button class="cookie-banner__decline" id="cookie-decline">' +
          '<span class="t-it">Solo necessari</span><span class="t-en">Necessary only</span>' +
        '</button>' +
        '<button class="cookie-banner__accept" id="cookie-accept">' +
          '<span class="t-it">Accetta tutti</span><span class="t-en">Accept all</span>' +
        '</button>' +
      '</div>';
    document.body.appendChild(banner);

    function dismissBanner(choice) {
      localStorage.setItem('cookie-consent', choice);
      banner.style.transition = 'opacity 0.3s';
      banner.style.opacity = '0';
      setTimeout(function () { banner.remove(); }, 320);
    }
    document.getElementById('cookie-accept').addEventListener('click', function () { dismissBanner('all'); });
    document.getElementById('cookie-decline').addEventListener('click', function () { dismissBanner('necessary'); });
  }

  // ─── Scroll to Top ───
  var scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.setAttribute('aria-label', 'Torna su');
  scrollBtn.innerHTML = '&#8679;';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', function () {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Hamburger ───
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── Filters ───
  var filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    var cards = Array.from(document.querySelectorAll('.prop-card'));
    var rows  = Array.from(document.querySelectorAll('.listings__row'));

    var selTipo  = document.getElementById('filter-tipo');
    var selZona  = document.getElementById('filter-zona');
    var selPrezzo = document.getElementById('filter-prezzo');
    var btnReset = document.getElementById('filter-reset');

    function applyFilters() {
      var tipo   = selTipo  ? selTipo.value  : '';
      var zona   = selZona  ? selZona.value  : '';
      var prezzo = selPrezzo ? parseInt(selPrezzo.value, 10) : 0;

      cards.forEach(function (card) {
        var matchTipo  = !tipo  || card.dataset.tipo  === tipo;
        var matchZona  = !zona  || card.dataset.zona  === zona;
        var matchPrezzo = !prezzo || (parseInt(card.dataset.prezzoMin, 10) || 0) <= prezzo;
        card.classList.toggle('hidden', !(matchTipo && matchZona && matchPrezzo));
      });

      rows.forEach(function (row) {
        var visible = row.querySelectorAll('.prop-card:not(.hidden)').length > 0;
        row.classList.toggle('row-empty', !visible);
      });
    }

    if (selTipo)   selTipo.addEventListener('change', applyFilters);
    if (selZona)   selZona.addEventListener('change', applyFilters);
    if (selPrezzo) selPrezzo.addEventListener('change', applyFilters);

    if (btnReset) {
      btnReset.addEventListener('click', function () {
        if (selTipo)   selTipo.value   = '';
        if (selZona)   selZona.value   = '';
        if (selPrezzo) selPrezzo.value = '';
        applyFilters();
      });
    }
  }

  // ─── Detail CTA: salva nome immobile e naviga ───
  var detailCta   = document.querySelector('a.detail-card-cta');
  var detailTitle = document.querySelector('h1.detail-title');
  if (detailCta && detailTitle) {
    var propName = detailTitle.innerHTML
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    propName = propName.split(' ')
      .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
      .join(' ');
    detailCta.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.setItem('richiesta_immobile', propName);
      var href = detailCta.getAttribute('href');
      var base = href.replace(/#.*$/, '');
      var hash = (href.match(/#.*$/) || [''])[0];
      window.location.href = base + '?immobile=' + encodeURIComponent(propName) + hash;
    });
  }

  // ─── Lightbox ───
  var photos = Array.from(document.querySelectorAll('.detail-photo img'));
  if (!photos.length) return;

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<button class="lightbox__close" aria-label="Chiudi">&#215;</button>' +
    '<button class="lightbox__btn lightbox__btn--prev" aria-label="Foto precedente">&#8592;</button>' +
    '<img class="lightbox__img" src="" alt="">' +
    '<button class="lightbox__btn lightbox__btn--next" aria-label="Foto successiva">&#8594;</button>' +
    '<p class="lightbox__counter"></p>';
  document.body.appendChild(lb);

  var lbImg     = lb.querySelector('.lightbox__img');
  var lbCounter = lb.querySelector('.lightbox__counter');
  var lbClose   = lb.querySelector('.lightbox__close');
  var lbPrev    = lb.querySelector('.lightbox__btn--prev');
  var lbNext    = lb.querySelector('.lightbox__btn--next');
  var multiPhoto = photos.length > 1;
  var current = 0;

  lbPrev.style.display = multiPhoto ? '' : 'none';
  lbNext.style.display = multiPhoto ? '' : 'none';

  function openAt(idx) {
    current = (idx + photos.length) % photos.length;
    lbImg.src = photos[current].src;
    lbImg.alt = photos[current].alt;
    lbCounter.textContent = multiPhoto ? (current + 1) + ' / ' + photos.length : '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  photos.forEach(function (img, i) {
    img.closest('.detail-photo').style.cursor = 'zoom-in';
    img.closest('.detail-photo').addEventListener('click', function () { openAt(i); });
  });

  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', function (e) { e.stopPropagation(); openAt(current - 1); });
  lbNext.addEventListener('click', function (e) { e.stopPropagation(); openAt(current + 1); });

  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLb();
    if (e.key === 'ArrowLeft')   openAt(current - 1);
    if (e.key === 'ArrowRight')  openAt(current + 1);
  });

  var touchStartX = 0;
  lb.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? openAt(current + 1) : openAt(current - 1);
  }, { passive: true });

});
