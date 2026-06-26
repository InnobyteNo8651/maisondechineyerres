import { useState } from 'react';
import heroCalligraphyGirl from './assets/hero_calligraphy_girl.png';
import galleryClassroom from './assets/gallery_classroom.png';
import galleryLionDance from './assets/gallery_lion_dance.png';
import galleryTeaCeremony from './assets/gallery_tea_ceremony.png';

// Import Markdown Raw Strings
import heroFR from './content/fr/hero.md?raw';
import aboutFR from './content/fr/about.md?raw';
import featuresFR from './content/fr/features.md?raw';

import heroZH from './content/zh/hero.md?raw';
import aboutZH from './content/zh/about.md?raw';
import featuresZH from './content/zh/features.md?raw';

import heroEN from './content/en/hero.md?raw';
import aboutEN from './content/en/about.md?raw';
import featuresEN from './content/en/features.md?raw';

import { parseHero, parseAbout, parseFeatures } from './utils/markdown';

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

const translations = {
  FR: {
    accueil: 'Accueil',
    apropos: 'À propos',
    cours: 'Cours de chinois',
    activites: 'Activités culturelles',
    actualites: 'Actualités',
    adhesion: 'Adhésion',
    contact: 'Contact',
    register: "Je m'inscris",
    langLabel: 'Langue :',
    discoverCourses: 'Découvrir nos cours',
    discoverActivities: 'Découvrir nos activités',
    learnMore: 'En savoir plus',
    footerDesc: "Votre centre culturel d'échanges et d'apprentissage au cœur du Val d'Yerres.",
    footerLinks: 'Liens rapides',
    footerContact: 'Contact',
    footerEmail: 'Courriel : contact@maisonchineyerres.fr',
    footerLocation: 'Lieu : Val d\'Yerres, France',
    footerRights: 'Tous droits réservés.'
  },
  ZH: {
    accueil: '首页',
    apropos: '关于我们',
    cours: '中文课程',
    activites: '文化活动',
    actualites: '新闻动态',
    adhesion: '加入协会',
    contact: '联系我们',
    register: '立即报名',
    langLabel: '语言：',
    discoverCourses: '探索中文课程',
    discoverActivities: '探索文化活动',
    learnMore: '了解更多',
    footerDesc: '位于耶尔谷中心的文化交流与学习中心。',
    footerLinks: '快速链接',
    footerContact: '联系方式',
    footerEmail: '邮箱：contact@maisonchineyerres.fr',
    footerLocation: '地点：法国，耶尔谷',
    footerRights: '保留所有权利。'
  },
  EN: {
    accueil: 'Home',
    apropos: 'About Us',
    cours: 'Chinese Courses',
    activites: 'Cultural Activities',
    actualites: 'News',
    adhesion: 'Membership',
    contact: 'Contact',
    register: 'Sign Up',
    langLabel: 'Language:',
    discoverCourses: 'Discover our courses',
    discoverActivities: 'Discover our activities',
    learnMore: 'Learn more',
    footerDesc: 'Your cultural hub for learning and exchanges in the heart of Val d\'Yerres.',
    footerLinks: 'Quick Links',
    footerContact: 'Contact',
    footerEmail: 'Email: contact@maisonchineyerres.fr',
    footerLocation: 'Location: Val d\'Yerres, France',
    footerRights: 'All rights reserved.'
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [lang, setLang] = useState('FR');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang as 'FR' | 'ZH' | 'EN'] || translations.FR;

  const getContent = (currentLang: string) => {
    switch (currentLang) {
      case 'ZH':
        return {
          hero: parseHero(heroZH),
          about: parseAbout(aboutZH),
          features: parseFeatures(featuresZH)
        };
      case 'EN':
        return {
          hero: parseHero(heroEN),
          about: parseAbout(aboutEN),
          features: parseFeatures(featuresEN)
        };
      case 'FR':
      default:
        return {
          hero: parseHero(heroFR),
          about: parseAbout(aboutFR),
          features: parseFeatures(featuresFR)
        };
    }
  };

  const md = getContent(lang);

  const navigationItems = [
    { id: 'accueil', label: t.accueil, href: '#accueil' },
    { id: 'apropos', label: t.apropos, href: '#apropos' },
    { id: 'cours', label: t.cours, href: '#cours' },
    { id: 'activites', label: t.activites, href: '#activites' },
    { id: 'actualites', label: t.actualites, href: '#actualites' },
    { id: 'adhesion', label: t.adhesion, href: '#adhesion' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ];

  return (
    <div className="site-wrapper">
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
            <div className="lang-selector" id="lang-selector-btn" tabIndex={0}>
              <span>{lang}</span>
              <ChevronDownSVG />
              <div className="lang-dropdown">
                <button className="lang-option" id="lang-option-fr" onClick={() => setLang('FR')}>FR</button>
                <button className="lang-option" id="lang-option-zh" onClick={() => setLang('ZH')}>ZH</button>
                <button className="lang-option" id="lang-option-en" onClick={() => setLang('EN')}>EN</button>
              </div>
            </div>

            <button className="btn btn-primary btn-sm" id="header-btn-register">
              <ProfileSVG />
              {t.register}
            </button>
          </div>

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
            <div className="mobile-lang-selector" id="mobile-lang-selector-btn">
              <div className="mobile-lang-label">{t.langLabel}</div>
              <div className="mobile-lang-buttons">
                <button className={`mobile-lang-btn ${lang === 'FR' ? 'active' : ''}`} id="mobile-lang-btn-fr" onClick={() => setLang('FR')}>FR</button>
                <button className={`mobile-lang-btn ${lang === 'ZH' ? 'active' : ''}`} id="mobile-lang-btn-zh" onClick={() => setLang('ZH')}>ZH</button>
                <button className={`mobile-lang-btn ${lang === 'EN' ? 'active' : ''}`} id="mobile-lang-btn-en" onClick={() => setLang('EN')}>EN</button>
              </div>
            </div>

            <button className="btn btn-primary" id="mobile-btn-register" onClick={() => setIsMobileMenuOpen(false)}>
              <ProfileSVG />
              {t.register}
            </button>
          </div>
        </div>
      </header>

      <section className="hero-section" id="accueil">
        <div className="container hero-container fade-in-up">
          <div className="hero-content">
            <span className="hero-subtitle">{md.hero.tagline}</span>
            <h1 className="hero-title" id="hero-main-title">
              {md.hero.title}
              <span>{md.hero.subtitle}</span>
            </h1>
            <p className="hero-description">
              {md.hero.description}
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" id="hero-btn-courses">
                <BookSVG />
                {t.discoverCourses}
              </button>
              <button className="btn btn-secondary" id="hero-btn-activities">
                <ChineseKnotSVG />
                {t.discoverActivities}
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

      <section className="features-section" id="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card" id="feature-card-courses">
              <div className="feature-icon-wrapper">
                <BookSVG />
              </div>
              <h3 className="feature-title">{md.features[0]?.title || t.cours}</h3>
              <p className="feature-desc">
                {md.features[0]?.description}
              </p>
              <a href="#cours" className="feature-link" id="card-link-courses">
                {t.learnMore} <ArrowRightSVG />
              </a>
            </div>

            <div className="feature-card" id="feature-card-activities">
              <div className="feature-icon-wrapper">
                <ChineseKnotSVG />
              </div>
              <h3 className="feature-title">{md.features[1]?.title || t.activites}</h3>
              <p className="feature-desc">
                {md.features[1]?.description}
              </p>
              <a href="#activites" className="feature-link" id="card-link-activities">
                {t.learnMore} <ArrowRightSVG />
              </a>
            </div>

            <div className="feature-card" id="feature-card-sharing">
              <div className="feature-icon-wrapper">
                <UsersSVG />
              </div>
              <h3 className="feature-title">{md.features[2]?.title}</h3>
              <p className="feature-desc">
                {md.features[2]?.description}
              </p>
              <a href="#partage" className="feature-link" id="card-link-sharing">
                {t.learnMore} <ArrowRightSVG />
              </a>
            </div>

            <div className="feature-card" id="feature-card-events">
              <div className="feature-icon-wrapper">
                <CalendarSVG />
              </div>
              <h3 className="feature-title">{md.features[3]?.title}</h3>
              <p className="feature-desc">
                {md.features[3]?.description}
              </p>
              <a href="#actualites" className="feature-link" id="card-link-events">
                {t.learnMore} <ArrowRightSVG />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="apropos">
        <ChineseLanternSVG />
        <div className="container about-container">
          <div className="about-content fade-in-up">
            <h2 className="about-title" id="about-section-title">{md.about.title}</h2>
            <p className="about-text">
              {md.about.description}
            </p>
            <button className="btn btn-outline-white" id="about-btn-learn-more">
              {t.learnMore}
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

      <footer className="site-footer" id="contact">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>{md.hero.title} {md.hero.subtitle}</h3>
            <p>
              {t.footerDesc}
            </p>
          </div>
          <div className="footer-links">
            <h4>{t.footerLinks}</h4>
            <ul>
              <li><a href="#accueil" id="footer-link-accueil">{t.accueil}</a></li>
              <li><a href="#apropos" id="footer-link-apropos">{t.apropos}</a></li>
              <li><a href="#cours" id="footer-link-cours">{t.cours}</a></li>
              <li><a href="#activites" id="footer-link-activites">{t.activites}</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>{t.footerContact}</h4>
            <p>{t.footerEmail}</p>
            <p>{t.footerLocation}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {md.hero.title} {md.hero.subtitle}. {t.footerRights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
