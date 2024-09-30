import { usePlan } from "../context/PlanContext";
import PlanOption from "./PlanOption";
import styles from "./PlanOption.module.css";

const PlanOptions = () => {
  const { plans } = usePlan();

  return (
    <div className={styles.plans}>
      {plans.map((plan) => (
        <PlanOption key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PlanOptions;
