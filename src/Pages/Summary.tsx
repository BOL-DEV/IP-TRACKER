// import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Total from "../Components/Total";

const Summary = () => {

  const navigate = useNavigate()

  const handleNext = ()=>{
    navigate("/finished")
  }

  return (
    <form className="wrapper">
      <Header
        title="Finishing up"
        description="Double-check everything looks OK before comfirming"
      />

      <Total/>

      <Footer title="Confirm" handleNext={handleNext}/>
    </form>
  );
};

export default Summary;
