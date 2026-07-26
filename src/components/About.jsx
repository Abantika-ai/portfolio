import { useReveal } from '../hooks/useReveal.js';
import { about } from '../data/content.js';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about">
      <div className="container">
        <div ref={ref} className="reveal about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              Three years into the <span className="accent">search</span>
            </h2>
            {about.paragraphs.map((p, i) => (
              <p className="about-paragraph" key={i}>
                {p}
              </p>
            ))}
          </div>

          <div className="about-focus card">
            <h3 className="about-focus-title">Current focus</h3>
            <ul className="about-focus-list">
              {about.focus.map((item) => (
                <li key={item}>
                  <span className="about-focus-marker" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
