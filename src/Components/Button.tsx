import { MouseEventHandler } from "react";

interface ButtonProp {
  title: string;
  handleNext: MouseEventHandler
}



const Button = ({ title, handleNext }: ButtonProp) => {
  
  return <button onClick={handleNext}>{title}</button>;
};

export default Button;
