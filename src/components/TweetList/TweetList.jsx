// import { PropTypes } from 'prop-types';
import { TweetCard } from '../TweetCard/TweetCard';

import { TweetsList } from './TweetList.styled';

export const TweetList = ({ users }) => {

  return (
    <TweetsList>
      {users.map(user => (
        <li key={user.id}>
          <TweetCard user={user} />
        </li>
      ))}
    </TweetsList>
  );
};

// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired,
// };
