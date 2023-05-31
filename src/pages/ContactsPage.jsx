import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/contactsFilter/ContactsFilter';
import { ContactsList } from 'components/contactsList/ContactsList';
import { ContactsForm } from 'components/contactsForm/ContactsForm';
import styles from './App.module.css';
import { Helmet } from 'react-helmet';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title className={styles.titleContacts}>Contacts</title>
      </Helmet>
      <ContactsForm />
      <div>{isLoading && 'Loading...'}</div>
      <Filter />
      <ContactsList />
    </div>
  );
}
