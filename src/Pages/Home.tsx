import { useNavigate } from "react-router-dom";
import Biodata from "../Components/Biodata";
import Button from "../Components/Button";
import Header from "../Components/Header";
// import { usePlan } from "../context/PlanContext";
import useAuth from "../../hooks/useAuth";


const Home = () => {
  const navigate = useNavigate();

  // const { name, email, phoneNum } = usePlan();
  const { isEmailValid, isNameValid, isPhoneNumValid } = useAuth();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid && !isNameValid && !isPhoneNumValid) return null;

    navigate("/plan");
  };

  return (
    <form className="wrapper">
      <Header
        title="Personal info"
        description="Please provide your name, email address and phone number"
      />

      <Biodata />

      <Button title="Next Step" handleNext={handleNext} />
    </form>
  );
};

export default Home;
