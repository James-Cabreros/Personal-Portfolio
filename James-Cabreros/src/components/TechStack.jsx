import Section from './SectionWrapper';
import { TECH_STACK } from '../data';

function TechStack() {
  return (
    <Section id="stack" title="Tech Stack" eyebrow="Tools I Use" className="section-pattern">
      <div className="stack-grid">
        {TECH_STACK.map(cat => (
          <div key={cat.cat} className={`stack-card ${cat.cls}`}>
            <div className="stack-cat">{cat.cat}</div>
            <div className="stack-items">
              {cat.items.map(item => (
                <span key={item} className="tag-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
