import { useReveal } from '../hooks/useReveal.js';
import { publications } from '../data/content.js';

export default function Publications() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="publications">
      <div className="container">
        <div ref={headRef} className="reveal">
          <p className="eyebrow">Record</p>
          <h2 className="section-title">
            <span className="accent">Publications</span>
          </h2>
        </div>

        <div ref={listRef} className="reveal pub-list">
          {publications.map((pub) => (
            <a className="pub-row" href={pub.link} key={pub.title}>
              <span className="tag pub-type">{pub.type}</span>
              <span className="pub-main">
                <span className="pub-title">{pub.title}</span>
                <span className="pub-venue">
                  {pub.venue} · {pub.year}
                </span>
              </span>
              <span className="pub-arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
