import noavatar from "..//..//images/noavatar.jpg"
import { CardBox, CardImgBox, CardTextBox, CardBtn } from './TweetCard.styled';

export const TweetCard = ({ avatar, tweets, followers }) => {
  return (
    <CardBox>
      <CardImgBox>
        <img src={avatar ?? noavatar} alt="User avatar" />
      </CardImgBox>
      <CardTextBox>
        <p>{tweets} TWEETS</p>
        <p>{followers} FOLLOWERS</p>
      </CardTextBox>
      <CardBtn type="button">FLW</CardBtn>
    </CardBox>
  );
};