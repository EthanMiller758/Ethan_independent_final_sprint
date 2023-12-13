import "./PricingCardsStyles.css";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="the-card">
                <h3>- The Basic -</h3>
                <span className="the-bar"></span>
                <p className="cash">$ 80</p>
                <p>- 4 Days -</p>
                <p>- 4 Pages - </p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="the-card">
                <h3>- The Premium -</h3>
                <span className="the-bar"></span>
                <p className="cash">$ 180</p>
                <p>- 3 Days -</p>
                <p>- 5 Pages - </p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="the-card">
                <h3>- The Business -</h3>
                <span className="the-bar"></span>
                <p className="cash">$ 280</p>
                <p>- 6 Days -</p>
                <p>- 8 Pages - </p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
    </div>
  );
};

export default PricingCard;