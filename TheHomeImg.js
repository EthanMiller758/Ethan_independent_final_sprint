import "./TheHomeImgStyles.css";
import Apicture from "../assets/christian-wiediger-WkfDrhxDMC8-unsplash.jpg";
import { Link } from "react-router-dom";
const TheHomeImg = () => {
  return (
    <div className="home">
        <div className="mask">
            <img className="an-img" src={Apicture} alt="APicture" />
        </div>
        <div className="the-content">
            <p>Welcome to my portfolio website</p>
            <h1>I am a Software Developer.</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default TheHomeImg;