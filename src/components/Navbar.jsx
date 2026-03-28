import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';

function Navbar({ dark, toggleDark }) {
  const active = useActiveSection();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => go('home')}>
          <span>J</span>VC
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map(id => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}
                onClick={e => { e.preventDefault(); go(id); }}>
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-icon" onClick={toggleDark} title="Toggle dark mode">
            {dark ? '☀️' : '🌙'}
          </button>
          <button className="btn-icon hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(id => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
            onClick={e => { e.preventDefault(); go(id); }}>
            {id}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;