import { CODE_SYMBOLS } from '../data';
import ProfileImage from './ProfileImage';

import bannerBg from '../assets/Portfolio-bg.png';

function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" style={{  display: 'flex', flexDirection: 'column' }}>
      <div className="hero-banner" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {CODE_SYMBOLS.map((sym, i) => (
          <span key={i} className="hero-banner-symbol" style={{
            top:      `${8 + (i * 19) % 72}%`,
            left:     `${4 + (i * 8.1) % 90}%`,
            fontSize: `${0.85 + (i % 3) * 0.35}rem`,
            animation: "none",
          }}>{sym}</span>
        ))}
      </div>

      <div className="hero-card-wrap">
        <div className="hero-card">
          <div className="hero-top">
            <ProfileImage/>
            <div className="hero-info">
              <h1 className="hero-name">James Viencent M.Cabreros</h1>
              <p className="hero-title">Full-Stack Developer · MERN Stack</p>
            </div>
          </div>

          <div className="hero-tagline">
            <p>"I build responsive web applications that solve real-world problems using modern technologies."</p>
          </div>

          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => go('about')}>🚀 View Work</button>
            <a href="#" className="btn btn-dark" download>📄 Download Resume</a>
            <button className="btn btn-outline" onClick={() => go('contact')}>✉️ Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;