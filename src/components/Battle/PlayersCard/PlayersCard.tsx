import React, { ReactNode } from 'react';
import './PlayersCard.css';
import defaultTheme from '../../../themes/defaultTheme';
import { Card, CardRow } from '../StyledComponents';

interface CardProps {
  children: ReactNode;
}

const OrderingCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card theme={defaultTheme} className='players-card-component custom-scrollbar'>
      {React.Children.map(children, (child) => (
        <CardRow theme={defaultTheme}>{child}</CardRow>
      ))}
    </Card>
  );
};

export default OrderingCard;