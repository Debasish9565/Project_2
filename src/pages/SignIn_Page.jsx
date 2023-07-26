import { useEffect } from "react";
import { SignIn } from "../components/SignIn/SignIn";

export const SignInPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <SignIn />;
};
