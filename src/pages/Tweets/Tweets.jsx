import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import { Filter } from '..//../components/Filter/Filter';
import { Loader } from '..//../components/Loader/Loader';
import { TweetList } from '..//../components/TweetList/TweetList';

import { fetchUsers } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { BackLinkHref, Title } from './Tweets.styled';

const Tweets = () => {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

   useEffect(() => {
    dispatch(fetchUsers());
   }, [dispatch]);
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <BackLinkHref to={backLinkHref}>&#10229; Back</BackLinkHref>
      <Title>Cards Tweets</Title>
      {isLoading && <Loader />}
      <TweetList />
    </div>
  );
};


export default Tweets;