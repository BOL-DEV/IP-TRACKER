import styles from "./Toggle.module.css";
import { usePlan } from "../context/PlanContext";

const BillingToggle = () => {
  const { isYearly, dispatch } = usePlan();

  const toggleBilling = () => {
    dispatch({ type: "TOGGLE_BILLING" });
  };

  return (
    <div className={styles.toggleContainer} onClick={toggleBilling}>
      <p className={isYearly ? styles.active : ""}>Monthly</p>
      <div className={`${styles.toggle} ${isYearly ? styles.active : ""}`}>
        <div className={styles.knob}></div>
      </div>
      <p className={!isYearly ? styles.active : ""}>Yearly</p>
    </div>
  );
};

export default BillingToggle;
