import { useReveal } from '../hooks/useReveal.js';
import { timeline } from '../data/content.js';

function TimelineItem({ item, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal timeline-item ${item.current ? 'timeline-item-current' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="timeline-marker" />
      <div className="timeline-body">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const headRef = useReveal();

  return (
    <section id="timeline">
      <div className="container">
        <div ref={headRef} className="reveal">
          <p className="eyebrow">Journey</p>
          <h2 className="section-title">
            PhD <span className="accent">timeline</span>
          </h2>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem item={item} index={i} key={item.year} />
          ))}
        </div>
      </div>
    </section>
  );
}
