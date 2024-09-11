import React, { ReactNode } from 'react';
import './PlayersCard.css';
import defaultTheme from '../../../themes/defaultTheme';
import { Card, CardRow } from '../StyledComponents';

interface CardProps {
  children: ReactNode;
  type?: string | "DEFAULT";
}

const PlayersCard: React.FC<CardProps> = ({ children, type }) => {
  let playerEditingMode = false;
  let NpcEditingMode = false;

  const handleToggleEditingIcons: (event: React.MouseEvent<HTMLSpanElement>) => void = (event) => {
    const container = (event.target as HTMLElement).closest('.players-card-component');
    console.log(container);


  }

  return (
    <Card theme={defaultTheme} className='players-card-component custom-scrollbar'>
      {React.Children.map(children, (child) => (
        <CardRow theme={defaultTheme}>
          {child}
        </CardRow>
      ))}
    </Card>
  );
};

export default PlayersCard;