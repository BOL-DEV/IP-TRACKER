import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

interface StepProps {
  step: number;
  title: string;
}

const SideBar = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Step step={1} title="YOUR INFO" />
      </NavLink>

      <NavLink
        to="/plan"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Step step={2} title="SELECT PLAN" />
      </NavLink>

      <NavLink
        to="/addons"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Step step={3} title="ADD ONS" />
      </NavLink>

      <NavLink
        to="/summary"
        className={({ isActive }) => {
          return isActive ? styles.active : "";
        }}
      >
        <Step step={4} title="SUMMARY" />
      </NavLink>
    </div>
  );
};

const Step = ({ step, title }: StepProps) => {
  return (
    <div className={styles.steps}>
      <button>{step}</button>
      <div className={styles.none}>
        <p>STEP {step}</p>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SideBar;
