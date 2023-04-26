// import { useDispatch } from 'react-redux';

import noavatar from '..//..//images/noavatar.jpg';
import { CardBox, CardImgBox, CardTextBox, CardBtn } from './TweetCard.styled';

export const TweetCard = ({ avatar, tweets, followers }) => {
  // const dispatch = useDispatch();

  // const handleIsFollowed = () => dispatch(toggleIsFollowed(user.id));

  return (
    <CardBox>
      <CardImgBox>
        <img src={avatar ?? noavatar} alt="User avatar" />
      </CardImgBox>
      <CardTextBox>
        <p>{tweets} TWEETS</p>
        <p>{followers} FOLLOWERS</p>
      </CardTextBox>
      <CardBtn
        type="button"
        // className={isActive && 'isActive'}
        // onClick={handleIsFollowed}
      >
        FLW
        {/* {isActive ? 'Following' : 'Follow'} */}
      </CardBtn>
    </CardBox>
  );
};
