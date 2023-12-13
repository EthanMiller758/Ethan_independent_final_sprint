import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectDetails from "../components/ProjectDetails";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectDetails />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;