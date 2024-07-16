import React, { ReactNode } from 'react';
import defaultTheme from '../../themes/defaultTheme';
import { Card } from './StyledComponents';

interface CardProps {
  children: ReactNode;
}

const OrderingCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  );
};

export default OrderingCard;