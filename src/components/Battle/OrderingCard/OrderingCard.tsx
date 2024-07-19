import React, { ReactNode } from 'react';
import './OrderingCard.css';
import defaultTheme from '../../../themes/defaultTheme';
import { Card, CardRow } from '../StyledComponents';

interface CardProps {
  children: ReactNode;
}

const OrderingCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card theme={defaultTheme}>
      {React.Children.map(children, (child) => (
        <CardRow theme={defaultTheme}>{child}</CardRow>
      ))}
    </Card>
  );
};

export default OrderingCard;