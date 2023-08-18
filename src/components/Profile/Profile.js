import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionProfil,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled.js';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <DescriptionProfil>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionProfil>
    <Stats>
      <StatItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatItem>
    </Stats>
  </ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// export const QuizCard = ({ quiz: { topic, level, time, questions } }) => {
//   return (
//     <Wrapper level={level}>
//       <Topic>{topic}</Topic>
//       <MetaWrapper>
//         <Text>
//           <b>Level:</b> {level}
//         </Text>
//         <Text>
//           <b>Time:</b> {time}
//         </Text>
//         <Text>
//           <b>Questions:</b> {questions}
//         </Text>
//       </MetaWrapper>
//       <Button>
//         <HiCalendar size={20} />
//       </Button>
//     </Wrapper>
//   );
// };