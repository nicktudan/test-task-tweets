// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

// import { ContactForm } from '..//../components/ContactForm/ContactForm';
// import { ContactList } from '..//../components/ContactList/ContactList';
// import { Filter } from '..//../components/Filter/Filter';
// import { Loader } from '..//../components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import {TweetCard} from '..//../components/TweetCard/TweetCard'
import { BackLinkHref, Title } from './Tweets.styled';

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <BackLinkHref to={backLinkHref}>&#10229; Back</BackLinkHref>
      <Title>Cards Tweets</Title>
      <TweetCard />
    </div>
  );
};


export default Tweets;