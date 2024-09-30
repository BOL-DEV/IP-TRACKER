// import { useState } from "react";
import { usePlan } from "../context/PlanContext";
import styles from "./PlanOption.module.css";

interface PlanProps {
  plan: {
    name: string;
    monthPrice: number;
    yearPrice: number;
    icon: string;
  };
}

const PlanOption = ({ plan }: PlanProps) => {
  //   const [selectedPlan, setSelectedPlan] = useState("Arcade");

  const { selectedPlan, isYearly, dispatch } = usePlan();

  const handleClick = () => {
    dispatch({ type: "SELECT_PLAN", payload: plan.name });
  };

  return (
    <div
      className={`${styles.plan} ${
        selectedPlan === plan.name ? styles.selected : ""
      }`}
      onClick={handleClick}
    >
      <div>
        <img src={plan.icon} alt={plan.name} />
      </div>
      <div>
        <h4>{plan.name}</h4>
        <p>
          <span>$</span>
          {isYearly ? plan.yearPrice : plan.monthPrice}
          <span>{isYearly ? "/yr" : "/mo"}</span>
        </p>
        <p>{isYearly && "2 months free"}</p>
      </div>
    </div>
  );
};

export default PlanOption;
