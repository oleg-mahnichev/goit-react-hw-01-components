import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  width: 400px;
  margin: auto;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeadCell = styled.th`
  padding: 8px 12px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableBodyCell = styled.td`
  padding: 8px 12px;
  text-align: center;
`;