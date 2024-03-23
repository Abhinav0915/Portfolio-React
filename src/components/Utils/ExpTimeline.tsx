interface Experience {
  date: string;
  title: string;
  description: string;
}

interface Props {
  experiences: Experience[];
}

function Timeline({ experiences }: Props) {
  return (
    <div className="timeline">
      <div className="line" />
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">{experience.date}</span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <span className="circle" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
