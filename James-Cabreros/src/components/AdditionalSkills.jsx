import Section from './SectionWrapper';
import { ADDITIONAL_SKILLS } from '../data';

function AdditionalSkills() {
  return (
    <Section id="skills" title="Additional Skills" eyebrow="Beyond Code" className="section-pattern">
      <div className="skills-grid">
        {ADDITIONAL_SKILLS.map(s => (
          <div key={s.label} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <div>
              <div className="skill-label">{s.label}</div>
              <div className="skill-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AdditionalSkills;