// import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Inputs from "../Components/Inputs";

const AddOns = () => {

  const navigate = useNavigate()

    const handleNext = () => {
      navigate("/summary");
    };
  return (
    <form className="wrapper">
      <Header
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />

      <Inputs/>

      <Footer title="Next Step" handleNext={handleNext}/>
    </form>
  );
};

export default AddOns;
