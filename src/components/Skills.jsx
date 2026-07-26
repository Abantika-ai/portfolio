import { useReveal } from '../hooks/useReveal.js';
import { skills } from '../data/content.js';

function SkillGroup({ group, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal card skill-group" style={{ transitionDelay: `${index * 60}ms` }}>
      <h3 className="skill-group-title">{group.category}</h3>
      <div className="tag-row">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();

  return (
    <section id="skills">
      <div className="container">
        <div ref={headRef} className="reveal">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">
            Skills & <span className="accent">stack</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <SkillGroup group={group} index={i} key={group.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
