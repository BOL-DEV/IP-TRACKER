import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isNameValid, isEmailValid, isPhoneNumValid } = useAuth();

  const isFormValid = isNameValid && isEmailValid && isPhoneNumValid;

  return isFormValid ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
