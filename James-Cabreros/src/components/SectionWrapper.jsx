function Section({ id, title, eyebrow, children, className = '' }) {
  const vis = true;
  return (
    <section id={id} className={`section ${className}${vis ? ' visible' : ''}`}>
      <div className="container">
        {title && (
          <div className="section-header">
            <div className="section-eyebrow">
              <div className="eyebrow-line"/>
              <span className="eyebrow-text">{eyebrow}</span>
            </div>
            <h2 className="section-title">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
