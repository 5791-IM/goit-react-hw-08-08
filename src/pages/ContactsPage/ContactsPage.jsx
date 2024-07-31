import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContacts from "../../redux/contacts/operations";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {contacts.length > 0 && <ContactList />}
      {error && <b>Unknown error. Try to reload the page.</b>}
    </div>
  );
}
