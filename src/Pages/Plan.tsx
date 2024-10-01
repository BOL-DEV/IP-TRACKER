// import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PlanOptions from "../Components/PlanOptions";
import Toggle from "../Components/Toggle";

const Plan = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/addons");
  };

  return (
    <form className="wrapper">
      <Header
        title="Select your plan"
        description="You have the options of monthly or yearly billing"
      />

      <PlanOptions />

      <Toggle />

      <Footer title="Next Step" handleNext={handleNext} />
    </form>
  );
};

export default Plan;
