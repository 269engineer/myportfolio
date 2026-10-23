import { useState } from "react"

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <a href="https://github.com/269engineer">
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    </a>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const ArrowRight = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const services = [
  {
    number: "01",
    title: "Systèmes & Réseaux",
    text: "Concevoir, administrer et sécuriser des infrastructures fiables, des serveurs Linux aux réseaux d'entreprise.",
    tags: ["Linux", "Réseaux", "Cybersécurité"],
  },
  {
    number: "02",
    title: "Data & Intelligence artificielle",
    text: "Transformer les données en outils d'aide à la décision grâce au machine learning, au deep learning et à la BI.",
    tags: ["Python", "Big Data", "Power BI"],
  },
  {
    number: "03",
    title: "Solutions digitales",
    text: "Concevoir des applications utiles, de la modélisation à la mise en production, avec une approche orientée produit.",
    tags: ["React.js", "Spring Boot", "UML"],
  },
]

const projects = [
  {
    index: "01",
    category: "IoT · Intelligence artificielle",
    title: "Surveillance intelligente de la qualité de l'air",
    result: "Temps réel",
    resultLabel: "monitoring & alertes",
    tone: "project-green",
  },
  {
    index: "02",
    category: "Web · Transformation digitale",
    title: "Plateforme d'information de l'OCPR",
    result: "Full stack",
    resultLabel: "PHP · MySQL · JavaScript",
    tone: "project-lime",
  },
  {
    index: "03",
    category: "Deep Learning",
    title: "Reconnaissance des expressions faciales",
    result: "Modèle IA",
    resultLabel: "analyse d'images",
    tone: "project-sand",
  },
  {
    index: "04",
    category: "Java · E-commerce",
    title: "Boutique en ligne avec paiement Stripe",
    result: "Spring Boot",
    resultLabel: "CRUD & paiement en ligne",
    tone: "project-blue",
  },
]

const experience = [
  {
    period: "Mars — Juil. 2026",
    role: "Stagiaire PFE",
    company: "SLATEL · Rabat",
    detail:
      "Conception d'un système intelligent de surveillance et d'alerte de la qualité de l'air intérieur avec Node-RED, MQTT, Python, React.js et l'API Telegram.",
  },
  {
    period: "Août — Sept. 2025",
    role: "Stagiaire en développement mobile",
    company: "Eldovarse SARL · Rabat",
    detail:
      "Conception d'une solution de gestion de ferme intelligente — smart farming — avec Figma et la modélisation UML.",
  },
  {
    period: "Août — Oct. 2024",
    role: "Développeur web freelance",
    company: "OCPR · Moroni, Comores",
    detail:
      "Conception et développement du site d'information de l'Office Comorien des Produits de Rente avec HTML, CSS, Bootstrap, JavaScript, PHP et MySQL.",
  },
  {
    period: "Nov. 2022 — Juil. 2024",
    role: "Chef de maintenance informatique",
    company: "SHARLYoung Corporation · Moroni",
    detail:
      "Maintenance informatique, installation de réseaux d'entreprise et de téléphonie IP Grandstream, dispositifs de sécurité et systèmes automatiques.",
  },
]

const education = [
  {
    period: "2024 — 2026",
    degree:
      "Ingénieur d'État en Systèmes d'Information et Transformation Digitale",
    school: "Université Privée de Fès · Campus Rabat-Agdal",
  },
  {
    period: "2022 — 2023",
    degree: "Licence professionnelle en Administration et Sécurité des Réseaux",
    school: "IUT de l'Université des Comores · Moroni",
  },
  {
    period: "2022 — 2023",
    degree: "Formation en Maintenance Informatique et Réseaux",
    school: "ACTIC Academy · Moroni",
  },
  {
    period: "2020 — 2022",
    degree: "DUT en Génie Informatique",
    school: "IUT de l'Université des Comores · Moroni",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#accueil"
          onClick={closeMenu}
          aria-label="Retour à l'accueil"
        >
          AIM<span>.</span>
        </a>

        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
          aria-label="Navigation principale"
        >
          <a href="#expertise" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#projets" onClick={closeMenu}>
            Projets
          </a>
          <a href="#parcours" onClick={closeMenu}>
            Parcours
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Me contacter <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Ingénieur SI · Rabat, Maroc
          </p>
          <h1>
            Je conçois des
            <br />
            systèmes <em>intelligents</em>
            <br />
            et utiles.
          </h1>
          <p className="hero-intro">
            Je suis Aissa ISSA MOEVA, ingénieur en systèmes d'information et
            transformation digitale, animé par la data, l'IA, la cybersécurité
            et un fort esprit entrepreneurial.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary hero-projects-button"
              href="#projets"
            >
              Découvrir mes projets <ArrowRight />
            </a>
            <a className="text-link" href="#contact">
              Parlons de votre projet <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Monogramme d'Aissa ISSA MOEVA">
          <div className="image-frame">
            <div className="monogram-portrait">
              <span>AISSA</span>
              <strong>IM</strong>
              <small>Ingénieur SI</small>
            </div>
            <div className="image-badge">
              <span>Basé à</span>
              <strong>Salé · Maroc</strong>
            </div>
          </div>
          <p className="vertical-note">DATA · SYSTÈMES · INNOVATION</p>
          <div className="decorative-orbit" />
        </div>

        <div className="hero-footer">
          <span>Faites défiler pour explorer</span>
          <span className="scroll-line" />
        </div>
      </section>

      <section className="marquee" aria-label="Domaines d'expertise">
        <div className="marquee-track">
          <span>Stratégie SI</span>
          <i />
          <span>Intelligence artificielle</span>
          <i />
          <span>Cybersécurité</span>
          <i />
          <span>Développement</span>
          <i />
          <span>Big Data</span>
          <i />
          <span>Transformation digitale</span>
          <i />
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading">
          <p className="section-kicker">Ce que je fais</p>
          <h2>Des infrastructures aux solutions intelligentes.</h2>
          <p>
            Une expertise polyvalente pour concevoir des systèmes robustes,
            exploiter les données et digitaliser les usages.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <div className="service-icon">
                <span />
                <span />
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projets">
        <div className="projects-header">
          <div>
            <p className="section-kicker section-kicker-light">
              Projets sélectionnés
            </p>
            <h2>
              Des idées devenues
              <br />
              <em>résultats.</em>
            </h2>
          </div>
          <p>
            Des réalisations académiques et professionnelles où l'ingénierie
            répond à un besoin concret.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-row ${project.tone}`}
              key={project.index}
            >
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="project-result">
                <strong>{project.result}</strong>
                <span>{project.resultLabel}</span>
              </div>
              <div className="project-arrow">
                <ArrowUpRight size={22} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="parcours">
        <div className="experience-intro">
          <p className="section-kicker">Mon parcours</p>
          <h2>Apprendre, expérimenter, entreprendre.</h2>
          <p>
            Curieux et rigoureux, j'ai construit mon parcours entre les Comores
            et le Maroc, du terrain technique à l'ingénierie SI.
          </p>
          <div className="metric-row">
            <div>
              <strong>4</strong>
              <span>expériences professionnelles</span>
            </div>
            <div>
              <strong>4</strong>
              <span>projets majeurs</span>
            </div>
            <div>
              <strong>2</strong>
              <span>pays de parcours</span>
            </div>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.period}>
              <div className="timeline-marker">
                <span className={index === 0 ? "active" : ""} />
              </div>
              <div>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="education-header">
          <p className="section-kicker">Formation</p>
          <h2>Un parcours construit entre technologie et transformation.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <p>{item.period}</p>
              <h3>{item.degree}</h3>
              <span>{item.school}</span>
            </article>
          ))}
        </div>
        <div className="skills-band">
          <p>Technologies</p>
          <div>
            {[
              "Java",
              "Python",
              "PHP",
              "SQL",
              "JavaScript",
              "React.js",
              "Spring Boot",
              "Django",
              "Linux",
              "Oracle DB et VM",
              "Power BI",
              "Figma",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <p className="section-kicker section-kicker-light">
          Une idée en tête ?
        </p>
        <h2>
          Construisons quelque chose
          <br />
          d'<em>utile</em> ensemble.
        </h2>
        <p className="contact-copy">
          Une opportunité, un projet digital ou une idée entrepreneuriale ?
          Échangeons autour de vos besoins.
        </p>
        <a
          className="button button-lime"
          href="mailto:aissa.issa2001@gmail.com"
        >
          Démarrer une conversation <ArrowUpRight size={19} />
        </a>
        <a className="contact-email" href="mailto:aissa.issa2001@gmail.com">
          aissa.issa2001@gmail.com · +212 781 617167
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#accueil">
          AIM<span>.</span>
        </a>
        <p>Ingénieur SI · Transformation digitale · Entrepreneur</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aissa-issa-moeva"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/269aissa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="copyright">© 2026 Aissa ISSA MOEVA</p>
      </footer>
    </main>
  )
}
