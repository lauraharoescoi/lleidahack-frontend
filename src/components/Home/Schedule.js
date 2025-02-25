import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Schedule.css';


const Schedule = (props) => {
  const rendered_events = props.events.map((event) =>
  {
    return(
        <VerticalTimelineElement key={event.time} date={event.time}>
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p className="vertical-timeline-element-description">
            {event.description}
          </p>
        </VerticalTimelineElement>
    );
  });

  return (
    <div style={{'backgroundColor': '#202225'}}>
        <VerticalTimeline>
            {rendered_events}
        </VerticalTimeline>
    </div>
  );
}

export default Schedule
