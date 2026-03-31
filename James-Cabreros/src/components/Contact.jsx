import { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';
import Section from './SectionWrapper';
import githubIcon from '../assets/icons8-github-64.png';
import gmailIcon from '../assets/icons8-gmail-96.png';

function Contact() {
  const [form, setForm] = useState({ name:'', email:'', msg:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!key) {
      console.warn('EmailJS public key is missing; check .env');
      return;
    }
    init(key);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are missing. Check .env file and restart dev server.');
      }

      const result = await send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: 'jamesviencent.cabreros@gmail.com',
          message: form.msg,
        }
      );

      console.log('EmailJS send result:', result);
      setSent(true);
      setForm({ name:'', email:'', msg:'' });
      setTimeout(() => setSent(false), 3500);
    } catch (error) {
      console.error('Email send failed:', error);
      const emsg = error?.text || error?.message || String(error);
      alert(`Failed to send message (${emsg}). Please check your EmailJS settings.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" eyebrow="Contact" className="section-alt">
      <div className="contact-grid">
        <div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesviencent.cabreros@gmail.com" className="contact-intro-link">
            <p className="contact-intro">
              I'm open to freelance projects, collaborations, and internship opportunities.
              Feel free to reach out — I'd love to connect!
            </p>
          </a>
          {[
            { icon: gmailIcon, label:'Email',    val:'jamesviencent.cabreros@gmail.com',        href:'mailto:jamesviencent@email.com', isImage: true },
            { icon:'💼', label:'LinkedIn', val:'linkedin.com/in/james-cabreros-72889b323/', href:'https://www.linkedin.com/in/james-cabreros-72889b323/#' },
            { icon: githubIcon, label:'GitHub',   val:'github.com/James-Cabreros',      href:'https://github.com/James-Cabreros', isImage: true },
          ].map(c => (
            <a key={c.label} href={c.href} className="contact-link">
              <div className="contact-link-icon">
                {c.isImage ? <img src={c.icon} alt={c.label} style={{width: '24px', height: '24px'}} /> : c.icon}
              </div>
              <div>
                <div className="contact-link-label">{c.label}</div>
                <div className="contact-link-value">{c.val}</div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>

        <form className="form" onSubmit={submit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" value={form.name} placeholder="James Cabreros" required
              onChange={e => setForm({...form, name: e.target.value})}/>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" value={form.email} placeholder="you@example.com" required
              onChange={e => setForm({...form, email: e.target.value})}/>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" value={form.msg} rows={4} required
              placeholder="Hey James, I'd love to work with you on..."
              onChange={e => setForm({...form, msg: e.target.value})}/>
          </div>
          <button type="submit" className={`btn btn-sm ${sent ? 'btn-success' : 'btn-primary'} btn-submit`}>
            {sent ? '✅ Message Sent!' : '✉️ Send Message'}
          </button>
        </form>
      </div>
    </Section>
  );
}

export default Contact;