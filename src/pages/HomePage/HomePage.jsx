import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "../LoginPage/LoginPage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.all}>
      <DocumentTitle>Home Page</DocumentTitle>
      <h3>
        {isLoggedIn
          ? `Welcome, ${user.name}!
                Open Contacts page to see your contacts.`
          : "Log in if you have an account or register if you don't."}
      </h3>
    </div>
  );
}
