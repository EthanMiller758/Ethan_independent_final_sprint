import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
                <div>
                    <p>124 This Street</p>
                    <p>Newfoundland and Labrador</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />
                123-456-7892</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />
                ethan.miller@keyin.com</h4>
 
                </div>
            </div>
            <div className="right">
                <h4>About this website</h4>
                <p>I've designed this website to help 
                    me with finding employment in Software 
                    Development.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color: "white", marginRight: "2rem"}} />
                <FaTwitter size={30} style={{color: "white", marginRight: "2rem"}} />
                <FaLinkedin size={30} style={{color: "white", marginRight: "2rem"}} />
                
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;