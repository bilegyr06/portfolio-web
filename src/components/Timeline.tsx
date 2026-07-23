import type { JourneyItem } from "../data/portfolio";

type TimelineProps = {
  items: JourneyItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li className="timeline__item reveal" key={item.title} style={{ "--delay": `${index * 60}ms` }}>
          <span className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
