import "./TheAboutContentStyles.css";
import { Link } from "react-router-dom";

const TheAboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <section>
            <h1>Who is Ethan Miller?</h1>
            <p>A guy who has experience in Python,JavaScript,
                React and more.
            </p>
            </section>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
                </div>
            </div>
  );
};

export default TheAboutContent;