import { MouseEventHandler } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface FooterProp {
  title: string;
  handleNext: MouseEventHandler;
}

const Footer = ({ title, handleNext }: FooterProp) => {
  const navigate = useNavigate();
  return (
    <footer>
      <p onClick={() => navigate(-1)}>Go back</p>
      <Button title={title} handleNext={handleNext} />
    </footer>
  );
};

export default Footer;
