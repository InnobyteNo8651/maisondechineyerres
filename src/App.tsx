import { useState } from 'react';
import heroCalligraphyGirl from './assets/hero_calligraphy_girl.png';
import galleryClassroom from './assets/gallery_classroom.png';
import galleryLionDance from './assets/gallery_lion_dance.png';
import galleryTeaCeremony from './assets/gallery_tea_ceremony.png';

// SVGs
const LogoSVG = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <circle cx="50" cy="50" r="45" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
    <path d="M20 75 H80" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 75 V45 C35 36.7157 41.7157 30 50 30 C58.2843 30 65 36.7157 65 45 V75" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
    <path d="M50 30 V75" stroke="var(--color-accent-gold)" strokeWidth="2" strokeDasharray="2 2" />
    <path d="M25 35 C35 25 65 25 75 35" stroke="var(--color-accent-gold)" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

const BookSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ChineseKnotSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20" />
    <path d="M7 7l10 10M17 7L7 10" />
    <rect x="8" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const UsersSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CalendarSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ArrowRightSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDownSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ProfileSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HamburgerSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChineseLanternSVG = () => (
  <svg className="deco-lantern" width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="0" x2="40" y2="20" stroke="var(--color-primary)" strokeWidth="2" />
    <rect x="25" y="20" width="30" height="8" rx="2" fill="var(--color-accent-gold)" />
    <ellipse cx="40" cy="55" rx="30" ry="28" fill="var(--color-primary)" />
    <path d="M25 55 C25 35, 55 35, 55 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
    <path d="M15 55 C15 30, 65 30, 65 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
    <path d="M25 55 C25 75, 55 75, 55 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
    <path d="M15 55 C15 80, 65 80, 65 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
    <line x1="40" y1="27" x2="40" y2="83" stroke="var(--color-accent-gold)" strokeWidth="2" />
    <rect x="25" y="82" width="30" height="8" rx="2" fill="var(--color-accent-gold)" />
    <circle cx="40" cy="94" r="4" fill="var(--color-accent-gold)" />
    <line x1="40" y1="98" x2="40" y2="120" stroke="var(--color-primary)" strokeWidth="3" />
    <line x1="37" y1="98" x2="35" y2="118" stroke="var(--color-primary)" strokeWidth="2" />
    <line x1="43" y1="98" x2="45" y2="118" stroke="var(--color-primary)" strokeWidth="2" />
  </svg>
);

const StylizedCloudSVG = ({ className }: { className: string }) => (
  <svg className={className} width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50 C20 40, 35 35, 45 40 C50 30, 75 25, 85 35 C95 25, 115 35, 110 50 Z" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <path d="M10 45 C15 35, 30 35, 35 45" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [lang, setLang] = useState('FR');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'apropos', label: 'À propos', href: '#apropos' },
    { id: 'cours', label: 'Cours de chinois', href: '#cours' },
    { id: 'activites', label: 'Activités culturelles', href: '#activites' },
    { id: 'actualites', label: 'Actualités', href: '#actualites' },
    { id: 'adhesion', label: 'Adhésion', href: '#adhesion' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="container header-container">
          <a 
            href="#accueil" 
            className="logo-link" 
            id="header-logo-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <LogoSVG />
            <div className="logo-text">
              Maison de Chine
              <span>de Val d'Yerres</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                id={`nav-link-${item.id}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-actions">
            {/* Language Selector */}
            <div className="lang-selector" id="lang-selector-btn" tabIndex={0}>
              <span>{lang}</span>
              <ChevronDownSVG />
              <div className="lang-dropdown">
                <button className="lang-option" id="lang-option-fr" onClick={() => setLang('FR')}>FR</button>
                <button className="lang-option" id="lang-option-zh" onClick={() => setLang('ZH')}>ZH</button>
                <button className="lang-option" id="lang-option-en" onClick={() => setLang('EN')}>EN</button>
              </div>
            </div>

            {/* Crimson CTA button with profile icon */}
            <button className="btn btn-primary btn-sm" id="header-btn-register">
              <ProfileSVG />
              Je m'inscris
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseSVG /> : <HamburgerSVG />}
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} id="mobile-nav-menu">
          <nav className="mobile-nav-links">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="mobile-nav-actions">
            {/* Language Selector */}
            <div className="mobile-lang-selector" id="mobile-lang-selector-btn">
              <div className="mobile-lang-label">Langue :</div>
              <div className="mobile-lang-buttons">
                <button className={`mobile-lang-btn ${lang === 'FR' ? 'active' : ''}`} id="mobile-lang-btn-fr" onClick={() => setLang('FR')}>FR</button>
                <button className={`mobile-lang-btn ${lang === 'ZH' ? 'active' : ''}`} id="mobile-lang-btn-zh" onClick={() => setLang('ZH')}>ZH</button>
                <button className={`mobile-lang-btn ${lang === 'EN' ? 'active' : ''}`} id="mobile-lang-btn-en" onClick={() => setLang('EN')}>EN</button>
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn btn-primary" id="mobile-btn-register" onClick={() => setIsMobileMenuOpen(false)}>
              <ProfileSVG />
              Je m'inscris
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="accueil">
        <div className="container hero-container fade-in-up">
          <div className="hero-content">
            <span className="hero-subtitle">Langue • Culture • Partage</span>
            <h1 className="hero-title" id="hero-main-title">
              Maison de Chine
              <span>de Val d'Yerres</span>
            </h1>
            <p className="hero-description">
              Une passerelle culturelle au cœur du Val d'Yerres. Rejoignez nos cours de langue chinoise 
              et découvrez la richesse de nos activités traditionnelles dans une ambiance chaleureuse 
              et conviviale.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" id="hero-btn-courses">
                <BookSVG />
                Découvrir nos cours
              </button>
              <button className="btn btn-secondary" id="hero-btn-activities">
                <ChineseKnotSVG />
                Découvrir nos activités
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <StylizedCloudSVG className="hero-deco-cloud cloud-top-left" />
            <div className="hero-image-frame">
              <img 
                src={heroCalligraphyGirl} 
                alt="Calligraphy Learning" 
                id="hero-image-main" 
              />
            </div>
            <StylizedCloudSVG className="hero-deco-cloud cloud-bottom-right" />
          </div>
        </div>
      </section>

      {/* Grid of 4 Card Components */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="features-grid">
            {/* Card 1: Cours de chinois */}
            <div className="feature-card" id="feature-card-courses">
              <div className="feature-icon-wrapper">
                <BookSVG />
              </div>
              <h3 className="feature-title">Cours de chinois</h3>
              <p className="feature-desc">
                Apprentissage du mandarin pour tous les âges et tous les niveaux, animé par des professeurs expérimentés.
              </p>
              <a href="#cours" className="feature-link" id="card-link-courses">
                En savoir plus <ArrowRightSVG />
              </a>
            </div>

            {/* Card 2: Activités cultureelles */}
            <div className="feature-card" id="feature-card-activities">
              <div className="feature-icon-wrapper">
                <ChineseKnotSVG />
              </div>
              <h3 className="feature-title">Activités culturelles</h3>
              <p className="feature-desc">
                Calligraphie, cérémonie du thé, danse du lion, cuisine traditionnelle et bien d'autres ateliers captivants.
              </p>
              <a href="#activites" className="feature-link" id="card-link-activities">
                Découvrir les ateliers <ArrowRightSVG />
              </a>
            </div>

            {/* Card 3: Partage & Échanges */}
            <div className="feature-card" id="feature-card-sharing">
              <div className="feature-icon-wrapper">
                <UsersSVG />
              </div>
              <h3 className="feature-title">Partage & Échanges</h3>
              <p className="feature-desc">
                Rencontres interculturelles, tables de conversation linguistique et moments de convivialité partagés.
              </p>
              <a href="#partage" className="feature-link" id="card-link-sharing">
                Rejoindre la communauté <ArrowRightSVG />
              </a>
            </div>

            {/* Card 4: Événements */}
            <div className="feature-card" id="feature-card-events">
              <div className="feature-icon-wrapper">
                <CalendarSVG />
              </div>
              <h3 className="feature-title">Événements</h3>
              <p className="feature-desc">
                Célébrations du Nouvel An Chinois, festivals d'automne, conférences culturelles et expositions artistiques.
              </p>
              <a href="#actualites" className="feature-link" id="card-link-events">
                Voir l'agenda <ArrowRightSVG />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="apropos">
        <ChineseLanternSVG />
        <div className="container about-container">
          <div className="about-content fade-in-up">
            <h2 className="about-title" id="about-section-title">À propos de nous</h2>
            <p className="about-text">
              Fondée avec la passion du partage et de la découverte, la Maison de Chine de Val d'Yerres 
              propose des programmes éducatifs et des ateliers culturels pour favoriser le rapprochement 
              et l'échange interculturel.
            </p>
            <button className="btn btn-outline-white" id="about-btn-learn-more">
              En savoir plus
            </button>
          </div>

          <div className="about-gallery-wrapper">
            <StylizedCloudSVG className="deco-cloud-left" />
            <div className="about-gallery">
              <div className="gallery-img gallery-img-1" id="about-gallery-img-container-1">
                <img src={galleryClassroom} alt="Classroom learning" id="about-gallery-img-1" />
              </div>
              <div className="gallery-img gallery-img-2" id="about-gallery-img-container-2">
                <img src={galleryLionDance} alt="Lion dance performance" id="about-gallery-img-2" />
              </div>
              <div className="gallery-img gallery-img-3" id="about-gallery-img-container-3">
                <img src={galleryTeaCeremony} alt="Tea ceremony tradition" id="about-gallery-img-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" id="contact">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>Maison de Chine de Val d'Yerres</h3>
            <p>
              Votre centre culturel d'échanges et d'apprentissage au cœur du Val d'Yerres.
            </p>
          </div>
          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#accueil" id="footer-link-accueil">Accueil</a></li>
              <li><a href="#apropos" id="footer-link-apropos">À propos</a></li>
              <li><a href="#cours" id="footer-link-cours">Cours de chinois</a></li>
              <li><a href="#activites" id="footer-link-activites">Activités culturelles</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Courriel : contact@maisonchineyerres.fr</p>
            <p>Lieu : Val d'Yerres, France</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Maison de Chine de Val d'Yerres. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
