import React, { ReactNode } from 'react';
import defaultTheme from '../../../themes/defaultTheme';
import './IniciativeCard.css';
import { Card, IniciativeCardRow } from '../StyledComponents';

interface CardProps {
  children: ReactNode;
}

const HandleBgColor = () => {
  // With future implementation, this function will return the color based on the users theme
  return '#4f2a83';
}

const IniciativeCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card theme={defaultTheme} className='iniciative-card-component custom-scrollbar'
          cardBgColor={HandleBgColor()}>
      {React.Children.map(children, (child) => (
        <IniciativeCardRow theme={defaultTheme}>{child}</IniciativeCardRow>
      ))}
    </Card>
  );
};

export default IniciativeCard;