import { useReveal } from '../hooks/useReveal.js';
import { profile } from '../data/content.js';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact">
      <div className="container">
        <div ref={ref} className="reveal contact-panel card">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">
            Let's talk <span className="accent">physics</span>
          </h2>
          <p className="section-sub">
            Open to collaboration, questions about LZ, or just talking dark matter. Reach out any time.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.links.github}>
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.links.linkedin}>
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.links.scholar}>
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
