// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

// import { ContactForm } from '..//../components/ContactForm/ContactForm';
// import { ContactList } from '..//../components/ContactList/ContactList';
// import { Filter } from '..//../components/Filter/Filter';
// import { Loader } from '..//../components/Loader/Loader';

// import { TitlePhonebook, TitleContacts } from './Tweets.styled';

const Tweets = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
    <h2>Cards Tweets</h2>
      {/* <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading && <Loader />}
      <ContactList /> */}
    </>
  );
};


export default Tweets;