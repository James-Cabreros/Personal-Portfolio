import Section from './SectionWrapper';
import { TRAININGS } from '../data';

function Trainings() {
  return (
    <Section id="trainings" title="Trainings & Conferences" eyebrow="Learning Journey" className="section-alt">
      <div className="trainings-grid">
        {TRAININGS.map(t => (
          <div key={t.title} className="training-card">
            {t.image && (
              <img
                src={t.image}
                alt={t.title}
                style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '14px' }}
              />
            )}
            <div className="training-top">
              <div className="training-title">{t.title}</div>
              <span className="training-date">{t.date}</span>
            </div>
            <div className="training-line"/>
            <p className="training-desc">{t.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Trainings;