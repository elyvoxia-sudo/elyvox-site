const translations = {
  en: {
    "nav.solution": "Solution",
    "nav.process": "Process",
    "nav.deliverables": "Deliverables",
    "nav.pricing": "Pricing",
    "nav.cta": "Free consultation",
    "hero.eyebrow": "Law 25 compliance in 7 days",
    "hero.title": "Law 25 compliance, automated for Quebec SMBs.",
    "hero.lead": "Elyvox.IA installs the technical foundation to collect, document and manage consent: banner, register, privacy policy, workflows and training.",
    "hero.primary": "Request a consultation",
    "hero.secondary": "View pricing",
    "hero.proof1": "days to launch",
    "hero.proof2": "site rebuild required",
    "hero.proof3": "built for Quebec",
    "visual.label": "Dashboard",
    "visual.status": "Active",
    "visual.item1": "Consent banner",
    "visual.item2": "Automated register",
    "visual.item3": "Published policy",
    "visual.ready": "Ready",
    "visual.item4": "Access requests",
    "visual.note": "documented consents this month",
    "problem.eyebrow": "The problem",
    "problem.title": "Law 25 requires proof, not just intention.",
    "problem.lead": "If your site collects personal information, you need to explain, record and manage consent. Elyvox.IA turns that scattered risk into a simple system.",
    "problem.riskTitle": "Without a system",
    "problem.riskBody": "Consents are scattered, access requests become manual and nobody really knows what to do when a question arrives.",
    "problem.calmTitle": "With Elyvox.IA",
    "problem.calmBody": "Proof is centralized, visitors are informed, your team follows a clear process and your tools stay up to date.",
    "process.eyebrow": "Method",
    "process.title": "A framed launch, without useless complexity.",
    "process.s1Title": "Diagnostic",
    "process.s1Body": "We review your forms, tools, collected data and risk level.",
    "process.s2Title": "Setup",
    "process.s2Body": "We configure the banner, register, automations and ready-to-publish documents.",
    "process.s3Title": "Handoff",
    "process.s3Body": "Your team receives training, a user guide and a monthly checklist.",
    "deliverables.eyebrow": "Deliverables",
    "deliverables.title": "Everything needed for an operational foundation.",
    "deliverables.d1Title": "Consent banner",
    "deliverables.d1Body": "Installation compatible with WordPress, Wix, Shopify, Squarespace or custom HTML.",
    "deliverables.d2Title": "Automated register",
    "deliverables.d2Body": "Proof of consent, access requests and key events in one place.",
    "deliverables.d3Title": "Privacy policy",
    "deliverables.d3Body": "A document adapted to your practices, ready to publish.",
    "deliverables.d4Title": "Automatic emails",
    "deliverables.d4Body": "Confirmations and follow-ups sent automatically.",
    "deliverables.d5Title": "Training",
    "deliverables.d5Body": "A clear session so the team understands the right habits.",
    "deliverables.d6Title": "Monthly support",
    "deliverables.d6Body": "Maintenance, updates and guidance.",
    "pricing.eyebrow": "Plans",
    "pricing.title": "Simple pricing to move fast.",
    "pricing.lead": "Start with the foundation, then add workflows and integrations when your reality requires it.",
    "pricing.essentialNote": "One-time setup + $39/month",
    "pricing.proNote": "One-time setup + $99/month",
    "pricing.enterpriseNote": "One-time setup + $199/month",
    "pricing.popular": "Most popular",
    "pricing.start": "Get started",
    "pricing.choosePro": "Choose Pro",
    "pricing.talk": "Discuss project",
    "pricing.e1": "Banner installed",
    "pricing.e2": "Airtable register configured",
    "pricing.e3": "Privacy policy",
    "pricing.e4": "30 min training",
    "pricing.p1": "Everything in Essential",
    "pricing.p2": "Access request workflow",
    "pricing.p3": "Automatic emails",
    "pricing.p4": "1h team training",
    "pricing.p5": "CRM integration",
    "pricing.x1": "Everything in Pro",
    "pricing.x2": "Complete data audit",
    "pricing.x3": "Multi-system integrations",
    "pricing.x4": "Grant application assistance",
    "pricing.x5": "Dedicated support",
    "faq.title": "Questions to clarify from the start.",
    "faq.q1": "Does my business need to comply with Law 25?",
    "faq.a1": "Yes, if it collects personal information in Quebec, even with a contact form or newsletter.",
    "faq.q2": "Is Elyvox.IA a law firm?",
    "faq.a2": "No. Elyvox.IA is a technical automation service. For final legal advice, consult a lawyer.",
    "faq.q3": "Does it work with my current site?",/* ═══════════════════════════════════════════
   PATCH LOI 25 — À ajouter à la fin de styles.css
   ═══════════════════════════════════════════ */

/* ─── Case à cocher consentement ─── */
.consent-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #F0FDF4;
  border: 1.5px solid #22C55E;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 8px;
}
.consent-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 2px;
  accent-color: #0f3460;
  cursor: pointer;
}
.consent-label span {
  font-size: 13px;
  line-height: 1.6;
  color: #166534;
}
.consent-label span a {
  color: #0f3460;
  font-weight: 600;
  text-decoration: underline;
}
.consent-label:has(input:checked) {
  background: #DCFCE7;
  border-color: #16A34A;
}

/* ─── Footer légal ─── */
.footer-legal {
  padding-top: 16px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 8px;
}
.footer-legal p {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
  line-height: 1.6;
  margin-bottom: 6px;
}
.footer-legal a {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-legal a:hover {
  color: #ffffff;
}

    "faq.a3": "Yes. The solution can be installed on common platforms and custom HTML sites.",
    "faq.q4": "Can I cancel maintenance?",
    "faq.a4": "Yes, with 30 days notice. Maintenance keeps your system updated and reduces missed tasks.",
    "contact.eyebrow": "Free consultation",
    "contact.title": "We review your site and tell you what to install first.",
    "contact.lead": "The form opens a pre-filled email. It is intentionally simple for launch; we will connect a real backend when Render and access are ready.",
    "contact.location": "Montreal, Quebec, Canada",
    "contact.legal": "Elyvox.IA does not provide legal advice. Consult a lawyer for final validation.",
    "form.name": "Full name",
    "form.email": "Email",
    "form.company": "Company",
    "form.phone": "Phone",
    "form.message": "Main need",
    "form.submit": "Send request",
    "footer.rights": "© 2026 Elyvox.IA. All rights reserved."
  }
};

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const form = document.querySelector("[data-lead-form]");
const planLinks = document.querySelectorAll("[data-plan]");
const originalText = new Map();

document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText.set(node, node.textContent);
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("elyvox-lang", lang);
  langButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.langButton === lang));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = lang === "en" && translations.en[key] ? translations.en[key] : originalText.get(node);
  });
}

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langButton));
});

planLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (form?.elements.plan) form.elements.plan.value = link.dataset.plan;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Consultation Elyvox.IA - ${data.get("company") || data.get("name")}`);
  const body = encodeURIComponent([
    `Nom: ${data.get("name")}`,
    `Courriel: ${data.get("email")}`,
    `Téléphone: ${data.get("phone") || ""}`,
    `Entreprise: ${data.get("company") || ""}`,
    `Forfait: ${data.get("plan") || "Non précisé"}`,
    "",
    "Besoin:",
    data.get("message") || ""
  ].join("\n"));

  window.location.href = `mailto:elyvox.ia@gmail.com?subject=${subject}&body=${body}`;
  form.querySelector('button[type="submit"]').textContent = document.documentElement.lang === "en" ? "Email prepared" : "Courriel préparé";
});

setLanguage(localStorage.getItem("elyvox-lang") || "fr");
