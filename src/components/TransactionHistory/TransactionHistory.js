import React from 'react';
import PropTypes from 'prop-types';
import { TransactionHistoryContainer, TransactionTable, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
    <TransactionHistoryContainer>
        <TransactionTable>
            <TableHead>
                <tr>
                    <TableHeadCell>Type</TableHeadCell>
                    <TableHeadCell>Amount</TableHeadCell>
                    <TableHeadCell>Currency</TableHeadCell>
                </tr>
            </TableHead>
            <TableBody>
                {items.map(item => (
                    <TableBodyRow key={item.id}>
                        <TableBodyCell>{item.type}</TableBodyCell>
                        <TableBodyCell>{item.amount}</TableBodyCell>
                        <TableBodyCell>{item.currency}</TableBodyCell>
                    </TableBodyRow>
                ))}
            </TableBody>
        </TransactionTable>
    </TransactionHistoryContainer>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

