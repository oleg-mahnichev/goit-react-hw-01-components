import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f3f6f9; */
  border: 1px solid #ccc;
  padding: 20px;
  margin: auto;
  border-radius: 5px;
`;

export const DescriptionProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: #666;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #999;
`;


export const Stats = styled.ul`
  display: flex;
  padding: 0;
  background-color: #f3f6f9;
 border: 1px solid #ccc;
`;

export const StatItem = styled.li`
  text-align: center;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100px;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
