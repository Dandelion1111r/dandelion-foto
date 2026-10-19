// Jahr im Footer
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Mobiles Menü
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

// Galerie-Filter
const figures = [...document.querySelectorAll('.gallery figure')];
const emptyNote = document.getElementById('emptyCat');
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', b === btn));
  const f = btn.dataset.filter;
  let shown = 0;
  figures.forEach(fig => {
    fig.hidden = f !== 'alle' && fig.dataset.cat !== f;
    if (!fig.hidden) shown++;
  });
  if (emptyNote) emptyNote.hidden = shown > 0;
}));

// Lightbox
const lb = document.getElementById('lightbox');
if (lb && figures.length) {
  const lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
  let current = 0, lastFocus = null;
  const visible = () => figures.filter(f => !f.hidden);
  const show = i => {
    const list = visible();
    current = (i + list.length) % list.length;
    const img = list[current].querySelector('img');
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = list[current].querySelector('figcaption')?.textContent || '';
  };
  const openLb = fig => {
    lastFocus = document.activeElement;
    show(visible().indexOf(fig));
    lb.classList.add('open');
    document.getElementById('lbClose').focus();
  };
  const closeLb = () => { lb.classList.remove('open'); lastFocus?.focus(); };
  figures.forEach(fig => {
    fig.tabIndex = 0;
    fig.addEventListener('click', () => openLb(fig));
    fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(fig); } });
  });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', () => show(current - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(current + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

// Vorher / Nachher
document.querySelectorAll('.ba input').forEach(input => {
  const set = () => input.closest('.ba').style.setProperty('--pos', input.value + '%');
  input.addEventListener('input', set);
  set();
});

// Kontaktformular: öffnet das E-Mail-Programm mit vorausgefüllter Nachricht
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Anfrage: ${d.get('thema')} – ${d.get('name')}`;
    const body = `${d.get('nachricht')}\n\n${d.get('name')}\n${d.get('email')}`;
    location.href = `mailto:hallo@dandelion1111.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
