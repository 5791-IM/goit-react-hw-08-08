import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.all}>
      <DocumentTitle>Register Page</DocumentTitle>
      <RegistrationForm />
    </div>
  );
}
