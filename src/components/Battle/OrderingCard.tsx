import React, { ReactNode } from 'react';
import defaultTheme from '../../themes/defaultTheme';
import { Card, CardRow } from './StyledComponents';

interface CardProps {
  children: ReactNode;
}

const OrderingCard: React.FC<CardProps> = ({ children }) => {
  console.log(children);
  return (
    <Card theme={defaultTheme}>
      {React.Children.map(children, (child) => (
        <CardRow>{child}</CardRow>
      ))}
    </Card>
  );
};

export default OrderingCard;