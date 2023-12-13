import "./TheWorkCardStyles.css";
import TheWorkCard from "./TheWorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkCardData.map((value, index) =>{
            return(
                <TheWorkCard key={index} imgsrc={value.imgsrc} title={value.title} text={value.text} />
            )
           })}
        </div>
    </div>
  );
};

export default Work;