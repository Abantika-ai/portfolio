import HeroCanvas from './HeroCanvas.jsx';
import { profile } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="container hero-content">
        <p className="eyebrow">{profile.experiment} · Direct Detection of Dark Matter</p>
        <h1 className="hero-title">
          {profile.name}
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#research">
            See my research
          </a>
        </div>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
