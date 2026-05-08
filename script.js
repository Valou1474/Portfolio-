// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu après un clic sur un lien.
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Animation légère à l'apparition des sections.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Mise en valeur du lien de navigation actif.
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => {
          item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

// Compteurs du hero.
const counters = document.querySelectorAll("[data-counter]");
let countersStarted = false;

function animateCounter(counter) {
  const target = Number(counter.dataset.counter);
  const duration = 1100;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * easedProgress).toString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    if (!countersStarted && entries.some((entry) => entry.isIntersecting)) {
      countersStarted = true;
      counters.forEach(animateCounter);
      counterObserver.disconnect();
    }
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => counterObserver.observe(counter));

// Ligne terminal animée dans la carte profil.
const terminalLine = document.querySelector(".terminal-line");
const terminalText = "Bachelor IT | SC-900 | Alternance 2026";
let terminalIndex = 0;

function typeTerminalLine() {
  if (!terminalLine) return;
  terminalLine.textContent = terminalText.slice(0, terminalIndex);
  terminalIndex += 1;

  if (terminalIndex <= terminalText.length) {
    window.setTimeout(typeTerminalLine, 42);
  }
}

window.setTimeout(typeTerminalLine, 700);

// Bouton retour en haut.
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Formulaire : ouvre un email prérempli vers l'adresse informatique.
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const recipient = contactForm.dataset.recipient || "valentin.leblanc.informatique@gmail.com";
    const subject = encodeURIComponent(`Contact portfolio - ${name || "Nouveau message"}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    formMessage.textContent = "Votre application mail va s’ouvrir avec le message prêt à envoyer.";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

