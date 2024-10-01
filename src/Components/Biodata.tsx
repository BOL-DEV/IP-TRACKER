import { usePlan } from "../context/PlanContext";
import styles from "./Biodata.module.css";

const Biodata = () => {
  const { dispatch, name, email, phoneNum } = usePlan();

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "USER_NAME", payload: e.target.value });
  };

  const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "USER_EMAIL", payload: e.target.value });
  };

  const handleUserPhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "USER_PHONENUM", payload: e.target.value });
  };

  const namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const isNameValid = namePattern.test(name);

  const phoneNumPattern = /^[+]?[0-9]{11}$/;
  const isPhoneNumValid = phoneNumPattern.test(phoneNum);

  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailPattern.test(email);

  

  return (
    <div>
      <div className={styles.input}>
        <div className={styles.flex}>
          <label htmlFor="name">Name</label>
          <p>
            {!name
              ? "This field is require"
              : !isNameValid
              ? "Name is not formmated well"
              : ""}
          </p>
        </div>
        <input
          type="text"
          placeholder="e.g Stephen King"
          id="name"
          value={name}
          onChange={handleUserName}
        />
      </div>

      <div className={styles.input}>
        <div className={styles.flex}>
          <label htmlFor="email">Email Address</label>
          <p>
            {!email
              ? "This field is require"
              : !isEmailValid
              ? "Email does not exist"
              : ""}
          </p>
        </div>
        <input
          type="email"
          placeholder="e.g. stephekingn@example.com"
          id="email"
          value={email}
          onChange={handleUserEmail}
        />
      </div>

      <div className={styles.input}>
        <div className={styles.flex}>
          <label htmlFor="phone">Phone Number</label>
          <p>
            {!phoneNum
              ? "This field is require"
              : !isPhoneNumValid
              ? "Phone number is not formmated well"
              : ""}
          </p>
        </div>
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
