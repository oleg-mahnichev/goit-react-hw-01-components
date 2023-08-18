import styled from 'styled-components';

export const StatisticsContainer = styled.section`
 width: 400px;
  background-color: #f3f3f3;
  padding: 20px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Percentage = styled.span`
  color: #4caf50;
`;
