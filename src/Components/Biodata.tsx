import { usePlan } from "../context/PlanContext";
import styles from "./Biodata.module.css";

const Biodata = () => {
  const { dispatch, name, email, phoneNum } = usePlan();

  const handleUserName = (e) => {
    dispatch({ type: "USER_NAME", payload: e.target.value });
  };

  const handleUserEmail = (e) => {
    dispatch({ type: "USER_EMAIL", payload: e.target.value });
  };

  const handleUserPhoneNum = (e) => {
    dispatch({ type: "USER_PHONENUM", payload: e.target.value });
  };

  return (
    <div>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="e.g Stephen King"
          id="name"
          value={name}
          onChange={handleUserName}
        />
      </div>

      <div className={styles.input}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="e.g. stephekingn@example.com"
          id="email"
          value={email}
          onChange={handleUserEmail}
        />
      </div>

      <div className={styles.input}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          value={phoneNum}
          onChange={handleUserPhoneNum}
        />
      </div>
    </div>
  );
};

export default Biodata;
