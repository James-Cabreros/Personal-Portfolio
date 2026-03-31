import Section from './SectionWrapper';
function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Who I Am" className="section-alt">
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hi! I'm <strong>James Viencent M. Cabreros</strong>, a Computer Science graduating student
            focused on building full-stack web applications using the{" "}
            <span className="accent">MERN stack</span>.
          </p>

          <p>
            I develop complete systems—from responsive user interfaces to scalable backend logic—
            with an emphasis on clean design and efficient performance. My projects include
            real-world applications such as online ordering platforms and interactive web tools.
          </p>

          <p>
            I also have a strong foundation in <span className="accent">computer assembly and hardware</span>,
            giving me a deeper understanding of how software interacts with physical systems.
          </p>

          <p>
            Currently, I am expanding my skills in API development, system design, and modern
            frontend technologies.
          </p>
        </div>

        <div className="stats-grid">
          {[
            { icon:'🛠️', val:'4+',  label:'Projects Built' },
            { icon:'⚡', val:'13+', label:'Technologies' },
            { icon:'🏅', val:'6+',  label:'Certifications' },
            { icon:'📚', val:'3+',  label:'Years Learning' },
          ].map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.val}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


export default About;