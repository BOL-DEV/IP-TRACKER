import { usePlan } from "../context/PlanContext";
import styles from "./Inputs.module.css";

interface InputProps {
  title: string;
  descripion: string;
}

const Inputs = () => {
  return (
    <div className={styles.container}>
      <Input title="Online service" descripion="Access to multiplayer games" />
      <Input title="Larger storage" descripion="Extra 1TB of cloud save" />
      <Input
        title="Customizable profile"
        descripion="Custom theme on your profile"
      />
    </div>
  );
};

const Input = ({ title, descripion }: InputProps) => {
  const { isYearly, addOns, selectedAddOns, dispatch } = usePlan();

  // console.log(addOns);

  // Map the title to the corresponding add-on key
  const priceMap: Record<string, keyof typeof addOns.monthAddOns> = {
    "Online service": "onlineService",
    "Larger storage": "largerStorage",
    "Customizable profile": "customizableProfile",
  };

  // Get the price for the current add-on based on the billing cycle
  const addOnKey = priceMap[title];
  const price = isYearly
    ? addOns.yearAddOns[addOnKey]
    : addOns.monthAddOns[addOnKey];

  const isChecked = selectedAddOns.includes(title);

  // console.log(isChecked);

  const handleToggle = () => {
    dispatch({ type: "SELECT_ADDONS", payload: title });
  };

  return (
    <div
      className={`${styles.subContainer} ${isChecked && styles.selected}`}
      onClick={handleToggle}
    >
      <div className={styles.flex}>
        <input type="checkbox" checked={isChecked} />
        <div>
          <h5>{title}</h5>
          <p>{descripion}</p>
        </div>
      </div>
      <h6>
        <span>+$</span>
        {price}
        <span>{isYearly ? "/yr" : "/mo"}</span>
      </h6>
    </div>
  );
};

export default Inputs;
