import { useRef, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Section from './SectionWrapper';
import { PROJECTS } from '../data';
import githubLogoBlack from '../assets/icons8-github-logo-100.png';       // your black logo
import githubLogoWhite from '../assets/icons8-github-64.png'; // your white logo — rename to match

function Projects() {
  const scrollRef = useRef();
  const [isDark, setIsDark] = useState(document.body.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const githubLogo = isDark ? githubLogoWhite : githubLogoBlack;
  const nudge = (dir) => scrollRef.current?.scrollBy({ left: dir * 310, behavior: 'smooth' });

  return (
    <Section id="projects" title="Projects" eyebrow="What I've Built" className="section-alt">
      <div className="projects-scroll-wrap">
        <button className="scroll-nav-btn scroll-nav-prev" onClick={() => nudge(-1)}>←</button>
        <button className="scroll-nav-btn scroll-nav-next" onClick={() => nudge(1)}>→</button>

        <div className="projects-scroll" ref={scrollRef}>
          {PROJECTS.map(p => (
            
            <Card key={p.title} className={`project-card ${p.cls}`} style={{ width: '288px', flexShrink: 0 }}>
              <Card.Body>
                <div className="project-emoji">{p.emoji}</div>
                <Card.Title className="project-title">{p.title}</Card.Title>
                <Card.Text className="project-desc">{p.desc}</Card.Text>
                <div className="project-tags mb-3">
                  {p.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                </div>
                <div className="project-btns">
                  <a href={p.github || '#'} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img src={githubLogo} alt="GitHub"
                      style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                    GitHub
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <p className="scroll-hint">← Swipe or scroll to see all projects →</p>
    </Section>
  );
}

export default Projects;