import styled from 'styled-components';


export const FriendListContainer = styled.div`
width: 400px;
margin: auto;

`;

export const FriendListItemContainer = styled.li`
 display: flex;
padding:20px;
gap: 20px;
background-color: ${({ 'data-is-online': isOnline }) => (isOnline ? 'green' : 'red')};
`;
