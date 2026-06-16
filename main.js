/* ═══════════════════════════════════════════════════
   CAMPUS GYM – main.js
   Cursor, Navbar scroll, Reveal on scroll,
   Counter animation, Menu mobile, Form submit
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ── */
  const cursor         = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    }
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    if (cursorFollower) {
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top  = followerY + 'px';
    }
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  /* Cursor hover state on links/buttons */
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) { cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'; cursor.style.background = 'var(--claret)'; }
      if (cursorFollower) { cursorFollower.style.transform = 'translate(-50%,-50%) scale(1.5)'; }
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; cursor.style.background = 'var(--gold)'; }
      if (cursorFollower) { cursorFollower.style.transform = 'translate(-50%,-50%) scale(1)'; }
    });
  });

  /* ── Navbar: scroll effect ── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else                      navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
    document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
  });

  /* Close menu on link click */
  navLinksEl?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinksEl.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Reveal on scroll (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Animated counters ── */
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let countersStarted = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target   = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1800;
      const step     = 16;
      const increment = target / (duration / step);
      let current  = 0;

      const tick = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString('pt-PT');
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target.toLocaleString('pt-PT');
        }
      };
      tick();
    });
  }

  /* Trigger counters when hero stats come into view */
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        animateCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsEl);
  }

  /* ── Hero title stagger reveal ── */
  const titleLines = document.querySelectorAll('.hero-title .title-line');
  titleLines.forEach((line, i) => {
    line.style.opacity    = '0';
    line.style.transform  = 'translateY(30px)';
    line.style.transition = `opacity 0.6s ease ${0.3 + i * 0.12}s, transform 0.6s ease ${0.3 + i * 0.12}s`;
    setTimeout(() => {
      line.style.opacity   = '1';
      line.style.transform = 'translateY(0)';
    }, 100);
  });

  /* ── Form: fake submit (demo) ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '✓ Pedido enviado!';
      btn.style.background = '#25D366';
      btn.style.borderColor = '#25D366';
      btn.disabled = true;

      /* Redirect to WhatsApp with the form data */
      const nome       = form.querySelector('#nome')?.value || '';
      const telemovel  = form.querySelector('#telemovel')?.value || '';
      const objectivo  = form.querySelector('#objectivo')?.value || '';
      const msg = encodeURIComponent(
        `Olá! Sou ${nome}.\nTelemóvel: ${telemovel}.\nObjectivo: ${objectivo}.\nGostaria de saber mais sobre o Campus Gym!`
      );
      setTimeout(() => {
        window.open(`https://wa.me/351914762145?text=${msg}`, '_blank');
      }, 800);
    });
  }

  /* ── Smooth parallax on hero bg grid ── */
  const heroBg = document.querySelector('.hero-grid-bg');
  if (heroBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.25}px)`;
    }, { passive: true });
  }

  /* ── Add active class style to nav ── */
  const style = document.createElement('style');
  style.textContent = `.nav-link.active { color: var(--gold) !important; }`;
  document.head.appendChild(style);

});
