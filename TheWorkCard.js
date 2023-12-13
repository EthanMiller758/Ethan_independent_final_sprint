import "./TheWorkCardStyles.css";

const TheWorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="python" />
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
    </div>
</div>
  );
};

export default TheWorkCard;