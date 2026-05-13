/* ══════════════════════════════════════════════
   COMPREHENSION ENGINE — Belgium Dental Report
   Injects: glossary tooltips, key takeaways,
   plain-language boxes, accordions, glossary modal
══════════════════════════════════════════════ */

// ── 1. GLOSSARY DEFINITIONS ──────────────────
const GLOSSARY = {
  'INAMI': {
    full: 'Institut National d\'Assurance Maladie-Invalidité',
    def: 'Belgium\'s national health insurance agency. It sets the official reimbursement rates (tariffs) for all medical and dental acts. Every procedure has an INAMI code with a fixed reimbursement amount.'
  },
  'Mutualité': {
    full: 'Mutual Health Fund (Mutualité / Ziekenfonds)',
    def: 'Belgian health insurance funds (e.g. CM, Mutualité Chrétienne) that patients subscribe to. They reimburse the patient\'s share of medical costs based on INAMI rates.'
  },
  'Non-conventionné': {
    full: 'Non-contracted dentist',
    def: 'A dentist who has NOT signed the national INAMI convention. They can charge fees ABOVE the official tariff (called Suppléments d\'honoraires), which the patient pays out-of-pocket on top of the mutualité reimbursement.'
  },
  'Conventionné': {
    full: 'Contracted dentist',
    def: 'A dentist who HAS signed the INAMI convention. They are legally bound to charge ONLY the official INAMI tariff — no extra fees. Patients pay only their personal share (Ticket modérateur).'
  },
  'Ronselen': {
    full: 'Patient Solicitation (Dutch legal term)',
    def: 'The act of actively recruiting or hunting for patients through commercial advertising. Strictly prohibited under Belgian dental deontology. Even after the 2017 CJEU ruling, Ronselen remains illegal.'
  },
  'BIM': {
    full: 'Bénéficiaire de l\'Intervention Majorée',
    def: 'A Belgian social status giving vulnerable patients (low-income, elderly, disabled) a higher reimbursement rate from their mutualité, meaning they pay a much smaller out-of-pocket share for dental care.'
  },
  'Devis': {
    full: 'Written Cost Estimate (Devis / Kostenschatting)',
    def: 'A mandatory written treatment plan with exact prices that dentists must provide BEFORE starting any procedure costing more than €300. Required by Belgian law to prevent financial surprises.'
  },
  'Ticket modérateur': {
    full: 'Patient Co-payment',
    def: 'The portion of the dental fee that the patient pays personally after the mutualité reimbursement. For conventionné dentists, this is fixed. For non-conventionné dentists, additional fees are added on top.'
  },
  'Suppléments d\'honoraires': {
    full: 'Additional Fees / Surcharges',
    def: 'Extra charges that non-conventionné dentists add above the official INAMI tariff. These are NOT reimbursed by mutualités — the patient pays them entirely out of pocket.'
  },
  'Darija': {
    full: 'Moroccan Arabic Dialect',
    def: 'The spoken Arabic dialect of Morocco — significantly different from Modern Standard Arabic. For Moroccan diaspora patients, communication in Darija creates deep psychological trust and comfort.'
  },
  'CJEU': {
    full: 'Court of Justice of the European Union',
    def: 'The EU\'s highest court based in Luxembourg. Its rulings are binding on all EU member states. The 2017 Vanderborght ruling forced Belgium to change its absolute dental advertising ban.'
  },
  'VVT': {
    full: 'Verbond der Vlaamse Tandartsen',
    def: 'The Flemish Dental Association — the professional body that filed the criminal complaint against dentist Vanderborght, triggering the landmark 2017 CJEU ruling.'
  },
  'Doctena': {
    full: 'Doctena — Medical Booking Platform',
    def: 'The leading Belgian online appointment booking platform for doctors and dentists. High credibility because it\'s functional (not commercial advertising), making it legally safe for patient acquisition.'
  },
  'Directive 2000/31/EC': {
    full: 'EU e-Commerce Directive',
    def: 'The European Union\'s foundational law governing electronic commerce and online services. The CJEU used this directive to rule that Belgium\'s total online advertising ban for dentists was disproportionate.'
  },
  'Article 56 TFEU': {
    full: 'Treaty on the Functioning of the European Union — Freedom of Services',
    def: 'EU treaty article guaranteeing the free provision of services across member states. Belgium\'s advertising ban conflicted with this article by restricting cross-border dental service communication.'
  }
};

// ── 2. KEY TAKEAWAYS PER SECTION ─────────────
const TAKEAWAYS = {
  's1': {
    icon: 'fa-scale-balanced',
    title: 'Key Takeaway — Legal Framework',
    text: 'You can advertise — but only as an information provider, never as a commercial seller. Think of every communication as a "digital version of your clinic door sign": factual, neutral, no pressure, no promises.'
  },
  's2': {
    icon: 'fa-building-columns',
    title: 'Key Takeaway — The Vanderborght Case',
    text: 'The 2017 ruling did NOT legalise all advertising. It only banned the absolute blanket prohibition. The core principle — no aggressive commercial solicitation — remains fully in force today.'
  },
  's3': {
    icon: 'fa-chart-pie',
    title: 'Key Takeaway — Platform Strategy',
    text: 'Google Ads = safe (patient is already searching). Facebook/Instagram paid ads = legally dangerous (you are interrupting someone who wasn\'t looking). The intent gap is the legal boundary.'
  },
  's4': {
    icon: 'fa-users',
    title: 'Key Takeaway — Demographics',
    text: 'Each community has a completely different door to enter through. Belgian locals need price clarity. Moroccans need cultural trust. Polish patients need emergency safety nets. Expats need English and speed.'
  },
  's5': {
    icon: 'fa-rocket',
    title: 'Key Takeaway — 5 Strategies',
    text: 'These 5 strategies stack on top of each other. SEO brings them in. Community events build trust. Content proves expertise. Pricing transparency converts. Emergency slots create lifetime loyalty.'
  },
  's6': {
    icon: 'fa-trophy',
    title: 'Final Takeaway — The Big Picture',
    text: 'The Belgian dental market rewards cultural intelligence and legal compliance over aggressive advertising. Clinics that understand their communities deeply — and serve them in their own language — win sustainably.'
  }
};

// ── 3. PLAIN-LANGUAGE EXPLANATIONS ───────────
const PLAIN_BOXES = {
  's1': {
    label: 'In Simple Terms',
    text: 'Imagine Belgian dental advertising law as a strict dress code: you <strong>can</strong> wear formal attire (objective info, your specialties, your address). You <strong>cannot</strong> wear a billboard saying "I\'m the best tailor in town." The 2017 CJEU ruling loosened the dress code slightly — but the overall requirement for professionalism stayed the same.'
  },
  's2': {
    label: 'Why This Case Changed Everything',
    text: 'Before 2017, a dentist in Belgium could be <strong>criminally prosecuted</strong> just for having an informational website. Vanderborght went further (billboards, newspaper ads) and lost — but the CJEU used his case to force Belgium to modernise. Now information is legal; solicitation is not.'
  },
  's3': {
    label: 'Pull vs. Push — The Core Distinction',
    text: '<strong>Google Search = Pull.</strong> The patient types "dentist near me" — they pulled the information toward themselves. <strong>Facebook = Push.</strong> An algorithm shows your ad to someone scrolling photos of their cat — you pushed toward them uninvited. Belgian law sees "uninvited medical advertising" as pressuring patients, which violates patient autonomy principles.'
  },
  's4': {
    label: 'Why One Strategy Won\'t Work for All',
    text: 'A 60-year-old Belgian woman, a 35-year-old Moroccan mother, a 28-year-old Polish construction worker, and a 40-year-old EU diplomat all live within 5km of each other in Brussels — but they have <strong>completely different reasons</strong> to visit or avoid a dentist. Speaking only French to all of them is like having one key that fits no lock.'
  },
  's5': {
    label: 'Why These 5 Strategies Are Legal',
    text: 'None of these strategies involve paying to interrupt strangers with medical ads. Instead, they <strong>position the clinic</strong> where patients are already searching (SEO), <strong>build genuine community trust</strong> (partnerships), and <strong>demonstrate expertise</strong> (content) — all fully compliant with Belgian deontological principles.'
  }
};

// ── 4. ACCORDION EXTRA DETAILS ───────────────
const ACCORDIONS = {
  's1': [
    {
      icon: 'fa-gavel',
      title: 'What happens if you violate these rules?',
      content: `<p>Violations are handled by the <strong>Ordre des Dentistes</strong> (Order of Dentists), the professional disciplinary body in Belgium. Consequences escalate in severity:</p>
      <ul>
        <li><strong>Warning (Avertissement)</strong> — first offence, minor breach</li>
        <li><strong>Censure</strong> — formal reprimand added to your professional record</li>
        <li><strong>Suspension</strong> — temporary loss of the right to practise</li>
        <li><strong>Revocation</strong> — permanent loss of dental licence</li>
        <li><strong>Criminal prosecution</strong> — possible for serious or repeated violations (pre-2017 primary mechanism)</li>
      </ul>
      <p>The risk is not hypothetical — the VVT (Flemish Dental Association) actively monitors online activity of dentists and files complaints.</p>`
    },
    {
      icon: 'fa-file-contract',
      title: 'What exactly can you write on your website?',
      content: `<p>Permitted content on a dental clinic website in Belgium (2024):</p>
      <ul>
        <li>Your name, qualifications, university degrees (no invented titles)</li>
        <li>Your clinic address, phone, email, opening hours</li>
        <li>List of services offered (implants, orthodontics, paediatric dentistry, etc.)</li>
        <li>Your specialisations and postgraduate training</li>
        <li>Languages spoken at the clinic</li>
        <li>Online appointment booking system</li>
        <li>INAMI tariff display (mandatory since March 2024)</li>
        <li>Neutral educational articles about dental health (not about your clinic)</li>
      </ul>
      <p>What you <strong>cannot</strong> write: "best prices," "painless guaranteed," patient stories, before/after photos, star ratings used as marketing tools, or any promise of treatment outcomes.</p>`
    }
  ],
  's3': [
    {
      icon: 'fa-google',
      title: 'How to set up a legally compliant Google Ad',
      content: `<p>Follow these rules to keep your Google Search ad 100% within Belgian deontological boundaries:</p>
      <ul>
        <li><strong>Headline:</strong> "[Clinic Name] — Dentist in [City]" — no adjectives like "best," "affordable," "top"</li>
        <li><strong>Description:</strong> List services neutrally: "Implants · Orthodontics · Paediatric Dentistry · INAMI Conventionné"</li>
        <li><strong>Keywords:</strong> Target specific pain-point searches: "emergency dentist Brussels," "dentist Saturday Brussels," "Arabic-speaking dentist Brussels"</li>
        <li><strong>Landing page:</strong> Must match ad content — no promotional language, display your INAMI tariffs, provide factual information only</li>
        <li><strong>Avoid:</strong> "Special offer," "Free consultation," "Discount," "Best dentist," any outcome guarantee</li>
      </ul>
      <p>Google also requires healthcare advertisers to complete their certification process and may ask for your professional licence number.</p>`
    }
  ],
  's4': [
    {
      icon: 'fa-mosque',
      title: 'Understanding the Moroccan community: deeper context',
      content: `<p>The Moroccan diaspora in Belgium spans 3+ generations with very different behaviours:</p>
      <ul>
        <li><strong>1st generation (60+):</strong> Often speak limited French/Dutch, most rely on community networks for healthcare referrals, highest distrust of unfamiliar institutions</li>
        <li><strong>2nd generation (30–55):</strong> Bilingual, navigate Belgian system better but maintain strong community ties and cultural values around healthcare</li>
        <li><strong>3rd generation (under 30):</strong> Fully integrated but may still prefer a dentist who "understands where they come from"</li>
      </ul>
      <p>The common thread: <strong>trust is earned through community, not advertising.</strong> A recommendation from a respected person in the community (imam, association leader, friend) carries more weight than any Google ad.</p>
      <p>Children's dental health is an especially powerful entry point — mothers are highly receptive to non-judgmental guidance on preventing childhood cavities, especially content delivered in Darija.</p>`
    },
    {
      icon: 'fa-plane-arrival',
      title: 'Understanding the Polish community: medical tourism logic',
      content: `<p>Polish medical tourism to Poland follows clear economic logic that a Belgian clinic must <strong>understand rather than fight</strong>:</p>
      <ul>
        <li>A dental implant in Poland: ~€800–1,200. In Belgium: ~€2,000–3,500. Even with flights (€80–150 round trip), Poland wins financially</li>
        <li>Polish dentists are trained to EU standards — quality is genuinely comparable</li>
        <li>The trip doubles as a family visit — emotional value is layered on top</li>
      </ul>
      <p><strong>The Belgian clinic's realistic opportunity:</strong></p>
      <ul>
        <li>Dental emergencies that cannot wait for a Poland trip</li>
        <li>Follow-up care, peri-implantitis treatment, crown adjustments for work done in Poland</li>
        <li>Children's routine check-ups (parents won't fly a child to Poland for a check-up)</li>
        <li>Workers who need quick treatment to maintain their job capacity</li>
      </ul>
      <p>The winning approach: <strong>never criticise Polish dentistry.</strong> Acknowledge the economics honestly and position as the trusted local safety net.</p>`
    }
  ],
  's5': [
    {
      icon: 'fa-magnifying-glass',
      title: 'How to implement Multilingual SEO — step by step',
      content: `<p><strong>Step 1: Create language-specific landing pages</strong></p>
      <ul>
        <li>Arabic page URL: <code>/ar/dentiste-arabophone-bruxelles</code> — title in Arabic, content about Arabic-speaking staff, INAMI explanation in Arabic</li>
        <li>Polish page URL: <code>/pl/polski-dentysta-bruksela</code> — explain Belgian insurance in Polish, list Polish-speaking staff</li>
        <li>English page URL: <code>/en/english-dentist-brussels</code> — focus on expat insurance, Doctena booking link</li>
      </ul>
      <p><strong>Step 2: Optimise Google Business Profile</strong></p>
      <ul>
        <li>List ALL languages spoken in the "Languages" attribute</li>
        <li>Add opening hours including evenings/Saturdays</li>
        <li>Upload 10+ high-quality clinic photos</li>
        <li>Respond to ALL reviews within 24 hours</li>
      </ul>
      <p><strong>Step 3: Automate review requests</strong> — most clinic management software (Dental Suite, Logosoft) can send an automatic SMS/email 2 hours after appointment: "Thank you for your visit. If you're satisfied, a Google review helps other patients find us." Keep it neutral and non-pressuring.</p>`
    },
    {
      icon: 'fa-calendar-check',
      title: 'How the Emergency Slot system works in practice',
      content: `<p><strong>The setup:</strong> Reserve 2–3 time slots per day (e.g. 12:30–13:15 and 17:45–18:30) in your booking system. Label them explicitly as "Urgence / Emergency / Dringend."</p>
      <p><strong>Why it works:</strong></p>
      <ul>
        <li>Patients in acute pain search Doctena/Google at 7am or on weekends — they book the first available same-day slot regardless of distance</li>
        <li>Emergency patients have zero price sensitivity — pain overrides cost calculation</li>
        <li>Emergency patients are the most grateful — resolving acute pain creates deep emotional loyalty</li>
      </ul>
      <p><strong>The conversion strategy:</strong></p>
      <ul>
        <li>During the emergency appointment, conduct a full clinical assessment</li>
        <li>Provide a written Devis for any follow-up treatment needed</li>
        <li>Explain their INAMI coverage in their language</li>
        <li>Book a follow-up appointment before they leave</li>
        <li>Send a post-visit SMS checking on their recovery</li>
      </ul>
      <p>One emergency patient handled with empathy and competence typically brings <strong>3–5 family members</strong> over the following year through word-of-mouth.</p>`
    }
  ]
};

// ── 5. INJECT GLOSSARY TOOLTIPS ──────────────
function injectGlossaryTooltips() {
  const terms = Object.keys(GLOSSARY);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!node.parentElement || ['SCRIPT','STYLE','CODE'].includes(node.parentElement.tagName)) return;
    let html = node.textContent;
    let replaced = false;
    terms.forEach(term => {
      const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})\\b`, 'g');
      if (regex.test(html)) {
        html = html.replace(new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})\\b`,'g'),
          `<span class="jargon">${term}<span class="jargon-tip"><strong>${GLOSSARY[term].full}</strong><span>${GLOSSARY[term].def}</span></span></span>`);
        replaced = true;
      }
    });
    if (replaced) {
      const span = document.createElement('span');
      span.innerHTML = html;
      node.parentElement.replaceChild(span, node);
    }
  });
}

// ── 6. INJECT KEY TAKEAWAYS ──────────────────
function injectTakeaways() {
  Object.entries(TAKEAWAYS).forEach(([id, t]) => {
    const section = document.getElementById(id);
    if (!section) return;
    const box = document.createElement('div');
    box.className = 'takeaway';
    box.innerHTML = `
      <div class="takeaway-icon"><i class="fa-solid ${t.icon}"></i></div>
      <div class="takeaway-body">
        <strong>${t.title}</strong>
        <p>${t.text}</p>
      </div>`;
    section.querySelector('.inner').appendChild(box);
  });
}

// ── 7. INJECT PLAIN-LANGUAGE BOXES ───────────
function injectPlainBoxes() {
  Object.entries(PLAIN_BOXES).forEach(([id, pb]) => {
    const section = document.getElementById(id);
    if (!section) return;
    const sh = section.querySelector('.sh');
    if (!sh) return;
    const box = document.createElement('div');
    box.className = 'plain-box';
    box.innerHTML = `
      <div class="plain-label"><i class="fa-solid fa-lightbulb"></i> ${pb.label}</div>
      <p>${pb.text}</p>`;
    sh.insertAdjacentElement('afterend', box);
  });
}

// ── 8. INJECT ACCORDIONS ─────────────────────
function injectAccordions() {
  Object.entries(ACCORDIONS).forEach(([id, items]) => {
    const section = document.getElementById(id);
    if (!section) return;
    const container = document.createElement('div');
    container.style.marginTop = '24px';
    items.forEach(item => {
      const wrap = document.createElement('div');
      wrap.className = 'acc-wrap';
      wrap.innerHTML = `
        <div class="acc-head">
          <i class="fa-solid ${item.icon} acc-icon"></i>
          <span>${item.title}</span>
          <i class="fa-solid fa-chevron-down acc-chev"></i>
        </div>
        <div class="acc-content"><div class="acc-content-inner">${item.content}</div></div>`;
      wrap.querySelector('.acc-head').addEventListener('click', () => {
        wrap.classList.toggle('open');
      });
      container.appendChild(wrap);
    });
    section.querySelector('.inner').appendChild(container);
  });
}

// ── 9. GLOSSARY MODAL ────────────────────────
function buildGlossaryModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'gloss-modal';

  const entries = Object.entries(GLOSSARY).map(([term, data]) => `
    <div class="gloss-entry">
      <div class="gloss-term">${term}</div>
      <div class="gloss-origin">${data.full}</div>
      <div class="gloss-def">${data.def}</div>
    </div>`).join('');

  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" id="gloss-close"><i class="fa-solid fa-xmark"></i></button>
      <div style="font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#fff;margin-bottom:6px">
        <i class="fa-solid fa-book" style="color:var(--accent2);margin-right:10px"></i>Glossary of Key Terms
      </div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:4px">
        ${Object.keys(GLOSSARY).length} Belgian legal, healthcare, and sociological terms explained in plain language.
        Hover over any <span class="jargon" style="pointer-events:none">underlined term</span> in the report for a quick definition.
      </p>
      <div class="gloss-grid">${entries}</div>
    </div>`;

  document.body.appendChild(modal);

  document.getElementById('gloss-close').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

  const btn = document.createElement('button');
  btn.id = 'gloss-btn';
  btn.innerHTML = '<i class="fa-solid fa-book"></i> Glossary';
  btn.addEventListener('click', () => modal.classList.add('open'));
  document.body.appendChild(btn);
}

// ── 10. STAT CONTEXT LABELS ──────────────────
function injectStatContext() {
  const stats = document.querySelectorAll('.stat-b');
  const contexts = [
    'Why it matters: The CJEU ruling that unlocked legal dental advertising in Belgium',
    'Why it matters: More than half of dentists can charge you extra fees — transparency is critical',
    'Why it matters: Financial fear is your clinic\'s biggest invisible competitor',
    'Why it matters: Local search intent converts faster than any paid social campaign'
  ];
  stats.forEach((s, i) => {
    if (contexts[i]) {
      const ctx = document.createElement('div');
      ctx.className = 'stat-context';
      ctx.textContent = contexts[i];
      s.appendChild(ctx);
    }
  });
}

// ── 11. INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectPlainBoxes();      // plain-language context boxes
  injectTakeaways();       // key takeaway per section
  injectAccordions();      // expand-for-more sections
  injectStatContext();     // why each stat matters
  buildGlossaryModal();    // floating glossary button + modal
  // Tooltip injection last (modifies DOM text nodes)
  setTimeout(injectGlossaryTooltips, 100);
});
