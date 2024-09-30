import { useNavigate } from "react-router-dom";
import { usePlan } from "../context/PlanContext";
import styles from "./Total.module.css";

const Total = () => {
  const { isYearly, selectedPlan, plans, addOns, selectedAddOns } = usePlan();

  const selectedPlanDetails = plans.find((plan) => plan.name === selectedPlan);
  const addonsPrices = isYearly ? addOns.yearAddOns : addOns.monthAddOns;

  console.log(selectedPlanDetails);

  const totalAddOnPrice = selectedAddOns.reduce((total, addOn) => {
    const price = (() => {
      switch (addOn) {
        case "Online service":
          return addonsPrices.onlineService;
        case "Larger storage":
          return addonsPrices.largerStorage;
        case "Customizable profile":
          return addonsPrices.customizableProfile;
        default:
          return 0;
      }
    })();
    return total + price;
  }, 0);

  const totalPlanPrice = isYearly
    ? selectedPlanDetails?.yearPrice || 0
    : selectedPlanDetails?.monthPrice || 0;

  const grandTotal = totalPlanPrice + totalAddOnPrice;

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.total}>
        <div className={styles.plan}>
          <div>
            <h4>
              {selectedPlanDetails?.name}
              {isYearly ? " (Yearly)" : "(Monthly)"}
            </h4>
            <p onClick={() => navigate("/plan")}>Change</p>
          </div>
          <h3>
            ${totalPlanPrice}/{isYearly ? "yr" : "mo"}
          </h3>
        </div>

        <div className={styles.addons}>
          {selectedAddOns.map((addOn, i) => {
            const price = (() => {
              switch (addOn) {
                case "Online service":
                  return addonsPrices.onlineService;
                case "Larger storage":
                  return addonsPrices.largerStorage;
                case "Customizable profile":
                  return addonsPrices.customizableProfile;
                default:
                  return 0; // Default price if no match
              }
            })();

            return (
              <div className={styles.addon} key={i}>
                <p>{addOn}</p>
                <h5>
                  +${price}/{isYearly ? "yr" : "mo"}
                </h5>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sum}>
        <p>
          Total (<span>per {isYearly ? "year" : "month"}</span>)
        </p>
        <h4>
          +${grandTotal}/{isYearly ? "yr" : "mo"}
        </h4>
      </div>
    </>
  );
};

export default Total;
