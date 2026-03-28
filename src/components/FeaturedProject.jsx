import Section from './SectionWrapper';


function FeaturedProject() {
  return (
    <Section id="featured" title="Featured Project" eyebrow="Deep Dive" className="section-featured">
      <div className="featured-card">
        <div className="featured-header">
          <div className="featured-header-emoji">🧋</div>
          <div className="featured-header-text">
            <h3>Bubblelicious</h3>
            <p>Online Ordering System</p>
          </div>
        </div>

        <div className="featured-body">
          <div>
            <div className="feat-block-title">
              <span className="feat-block-icon" style={{ background:'#fee2e2' }}>❗</span>
              The Problem
            </div>
            <p className="feat-block-text">
              A local bubble tea shop struggled with manual order-taking — resulting in long queues,
              frequent errors, and no way to track customer preferences or sales over time.
            </p>
            <div className="feat-block-title" style={{ marginTop: 24 }}>
              <span className="feat-block-icon" style={{ background:'#dcfce7' }}>✅</span>
              The Solution
            </div>
            <p className="feat-block-text">
              Built a full-stack MERN ordering system where customers browse the menu, customize
              orders, and check out online — while the owner gets a real-time admin dashboard.
            </p>
          </div>

          <div>
            <div className="feat-block-title">
              <span className="feat-block-icon" style={{ background:'#fff7ed' }}>⭐</span>
              Key Features
            </div>
            <ul className="feature-list">
              {[
                ['🛒','Online menu browsing with category filters'],
                ['🥤','Drink customization — size, sugar & ice level'],
                ['💳','Secure checkout with order confirmation'],
                ['📊','Admin dashboard with real-time analytics'],
                ['📦','Order history and live status tracking'],
                ['🔐','Role-based auth — Admin & Customer'],
                ['📱','Fully responsive on mobile and desktop'],
              ].map(([fi, txt]) => (
                <li key={txt}><span className="fi">{fi}</span><span>{txt}</span></li>
              ))}
            </ul>
            <div className="featured-tags">
              {['React','Node.js','Express','MongoDB','JWT','Tailwind'].map(t => (
                <span key={t} className="tag-orange">{t}</span>
              ))}
            </div>
            <div className="featured-btns">
              <a href="#" className="btn btn-primary btn-sm">🌐 Live Demo</a>
              <a href="#" className="btn btn-dark btn-sm">🐙 GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedProject;