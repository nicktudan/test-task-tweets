// import { PropTypes } from 'prop-types';
import { TweetCard } from '../TweetCard/TweetCard';

import { TweetsList } from './TweetList.styled';

export const TweetList = ({ users }) => {

  return (
    <TweetsList>
      {users && users.map(user => {
        return (
          <TweetCard
            key={user.id}
            avatar={user.avatar}
            tweets={user.tweets}
            followers={user.followers}
            id={user.id}
          />
        );
      })}
    </TweetsList>
  );
};

// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired,
// };
