import { usePlan } from "../src/context/PlanContext";

const useAuth = () => {
  const { name, email, phoneNum } = usePlan();

  const namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const isNameValid = namePattern.test(name);

  const phoneNumPattern = /^[+]?[0-9]{11,13}$/;
  const isPhoneNumValid = phoneNumPattern.test(phoneNum);

  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailPattern.test(email);

  return { isNameValid, isEmailValid, isPhoneNumValid };
};

export default useAuth;
