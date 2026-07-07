/* ==========================================================================
   DTW Tutorials — Main JavaScript
   Interactivity: Nav, Scroll Reveals, Counters, Carousel, Typewriter, Form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- 1. Mobile Navigation ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const navEl = document.getElementById('nav');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 2. Sticky Header Background ---------- */
  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleScroll() {
    const scrollY = window.scrollY;

    if (navEl) {
      if (scrollY > scrollThreshold) {
        navEl.classList.add('scrolled');
      } else {
        navEl.classList.remove('scrolled');
      }
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load

  /* ---------- 3. Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ---------- 4. Scroll Reveal (Intersection Observer) ---------- */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ---------- 5. Stats Counter Animation ---------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const start = performance.now();

    function step(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easedProgress * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  /* ---------- 6. Typewriter Effect ---------- */
  const typewriterEl = document.getElementById('typewriter');

  if (typewriterEl) {
    const phrases = [
      'Ace JAMB.',
      'Crush WAEC.',
      'Own Post UTME.',
      'Win Scholarships.',
      'Build Your Future.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 500;

    function typewrite() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = pauseAfterType;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = pauseAfterDelete;
      }

      setTimeout(typewrite, delay);
    }

    // Start after hero animation completes
    setTimeout(typewrite, 1200);
  }

  /* ---------- 7. Video Carousel ---------- */
  const videosTrack = document.getElementById('videos-track');
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');

  if (videosTrack && carouselPrev && carouselNext) {
    const getScrollAmount = () => {
      const firstCard = videosTrack.querySelector('.video-card');
      if (!firstCard) return 300;
      return firstCard.offsetWidth + 24; // card width + gap
    };

    carouselPrev.addEventListener('click', () => {
      videosTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    carouselNext.addEventListener('click', () => {
      videosTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    // Enable keyboard navigation
    videosTrack.setAttribute('tabindex', '0');
    videosTrack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        videosTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        videosTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      }
    });
  }

  /* ---------- 8. Testimonials Auto-Rotation ---------- */
  const testimonialsTrack = document.getElementById('testimonials-track');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;
  let testimonialInterval;
  const totalTestimonials = testimonialDots.length;

  function goToTestimonial(index) {
    if (!testimonialsTrack) return;
    currentTestimonial = index;
    const offset = -(index * 100);
    testimonialsTrack.style.transform = `translateX(${offset}%)`;

    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
  }

  function nextTestimonial() {
    goToTestimonial((currentTestimonial + 1) % totalTestimonials);
  }

  function startTestimonialAutoplay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function stopTestimonialAutoplay() {
    clearInterval(testimonialInterval);
  }

  // Dot click navigation
  testimonialDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'), 10);
      goToTestimonial(index);
      stopTestimonialAutoplay();
      startTestimonialAutoplay(); // Restart timer
    });
  });

  // Pause on hover
  const testimonialsCarousel = document.getElementById('testimonials-carousel');
  if (testimonialsCarousel) {
    testimonialsCarousel.addEventListener('mouseenter', stopTestimonialAutoplay);
    testimonialsCarousel.addEventListener('mouseleave', startTestimonialAutoplay);
  }

  // Start autoplay
  if (totalTestimonials > 0) {
    startTestimonialAutoplay();
  }

  /* ---------- 9. Active Nav Highlighting on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ---------- 10. FormSpree & Visme Custom Handling ---------- */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const vismeContainer = document.getElementById('visme-container');

  const SUBMISSION_LIMIT = 70;
  let submissionCount = parseInt(localStorage.getItem('dtw_form_submissions_count') || '0', 10);

  // Helper to switch to Formspree form (default fallback)
  function switchToFormspree() {
    if (vismeContainer) vismeContainer.style.display = 'none';
    if (contactForm) contactForm.style.display = 'flex';
  }

  // Helper to switch to Visme form
  function switchToVisme() {
    if (contactForm) contactForm.style.display = 'none';
    if (vismeContainer) vismeContainer.style.display = 'block';
  }

  // Determine if connection is slow/bad latency
  let isConnectionSlow = false;
  if (navigator.connection) {
    const conn = navigator.connection;
    if (conn.saveData || 
        ['slow-2g', '2g', '3g'].includes(conn.effectiveType) || 
        (conn.rtt && conn.rtt > 800)) {
      isConnectionSlow = true;
    }
  }

  // Determine form to load
  if (submissionCount < SUBMISSION_LIMIT && !isConnectionSlow) {
    const vismeScript = document.createElement('script');
    vismeScript.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    vismeScript.async = true;

    // Timeout fallback (4s)
    const loadTimeout = setTimeout(() => {
      console.warn("Visme script loading timed out. Falling back to default Formspree form.");
      vismeScript.remove();
      switchToFormspree();
    }, 4000);

    vismeScript.onload = () => {
      clearTimeout(loadTimeout);
      setTimeout(() => {
        switchToVisme();
        console.log("Visme animated contact form loaded successfully.");
      }, 500);
    };

    vismeScript.onerror = () => {
      clearTimeout(loadTimeout);
      console.warn("Failed to load Visme script. Falling back to default Formspree form.");
      switchToFormspree();
    };

    document.body.appendChild(vismeScript);
  } else {
    // Show static Formspree form by default if connection is slow or submission limit is met
    switchToFormspree();
  }

  // FormSpree submit handler
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', () => {
      const submitBtn = contactForm.querySelector('[data-fs-submit-btn]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
    });

    const successObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && formSuccess.textContent.trim()) {
          formSuccess.classList.add('active');
          contactForm.style.display = 'none';

          // Increment count
          let count = parseInt(localStorage.getItem('dtw_form_submissions_count') || '0', 10);
          count++;
          localStorage.setItem('dtw_form_submissions_count', count.toString());
          console.log(`Formspree submitted! Current count: ${count}/70`);
        }
      });
    });

    successObserver.observe(formSuccess, { childList: true, characterData: true, subtree: true });
  }

  // Listen for Visme iframe message events
  window.addEventListener('message', (event) => {
    const isVismeMessage = event.origin.includes('visme.co') || 
                           (event.data && typeof event.data === 'string' && event.data.includes('visme'));
                           
    if (isVismeMessage) {
      let data = event.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) {
          // not JSON
        }
      }

      // Check for common submission keywords in the message payload
      const isSubmitEvent = (data && (data.type === 'visme-form-submit' || data.event === 'submit' || data.type === 'submit')) ||
                            (typeof event.data === 'string' && (event.data.includes('submit') || event.data.includes('completed')));

      if (isSubmitEvent) {
        let count = parseInt(localStorage.getItem('dtw_form_submissions_count') || '0', 10);
        count++;
        localStorage.setItem('dtw_form_submissions_count', count.toString());
        console.log(`Visme form submitted! Current count: ${count}/70`);

        if (count >= SUBMISSION_LIMIT) {
          switchToFormspree();
        }
      }
    }
  });

  /* ---------- 11. Lazy Load YouTube Iframes ---------- */
  // YouTube iframes are already lazy loaded via loading="lazy" attribute
  // This provides an additional performance boost for browsers that support IO
  const iframes = document.querySelectorAll('iframe[loading="lazy"]');

  if (iframes.length > 0 && 'IntersectionObserver' in window) {
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          if (iframe.dataset.src) {
            iframe.src = iframe.dataset.src;
          }
          iframeObserver.unobserve(iframe);
        }
      });
    }, { rootMargin: '200px' });

    iframes.forEach(iframe => iframeObserver.observe(iframe));
  }

  /* ---------- 12. Reduce Motion Preference ---------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--duration-fast', '0ms');
    document.documentElement.style.setProperty('--duration-normal', '0ms');
    document.documentElement.style.setProperty('--duration-slow', '0ms');

    // Immediately reveal all elements
    revealElements.forEach(el => el.classList.add('revealed'));

    // Stop testimonial auto-rotation
    stopTestimonialAutoplay();
  }
});
