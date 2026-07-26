import { useReveal } from '../hooks/useReveal.js';
import { research } from '../data/content.js';

function ResearchCard({ item, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal card research-card" style={{ transitionDelay: `${index * 60}ms` }}>
      <h3 className="research-card-title">{item.title}</h3>
      <p className="research-card-desc">{item.description}</p>
      <div className="tag-row">
        {item.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Research() {
  const headRef = useReveal();

  return (
    <section id="research">
      <div className="container">
        <div ref={headRef} className="reveal">
          <p className="eyebrow">Research</p>
          <h2 className="section-title">
            What I actually <span className="accent">work on</span>
          </h2>
          <p className="section-sub">
            LZ's WIMP search depends on understanding the detector as well as the physics. These are the pieces I
            own.
          </p>
        </div>

        <div className="research-grid">
          {research.map((item, i) => (
            <ResearchCard item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
