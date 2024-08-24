import React, { ReactNode } from 'react';
import './PlayersCard.css';
import defaultTheme from '../../../themes/defaultTheme';
import { Card, CardRow } from '../StyledComponents';
import Edit from "../../../components/svg/Edit";
import Check from "../../../components/svg/Check";
import Close from "../../../components/svg/Close";

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
      <div className="players-edit-icons">
        <span className="edit-icon" onClick={handleToggleEditingIcons}><Edit /></span>
        <span className="confirm-players-editing confirm-icon" onClick={handleToggleEditingIcons} hidden>
          <Check />
        </span>
        <span className="cancel-players-editing close-icon" onClick={handleToggleEditingIcons} hidden>
          <Close />
        </span>
      </div>
      {React.Children.map(children, (child) => (
        <CardRow theme={defaultTheme}>{child}</CardRow>
      ))}
    </Card>
  );
};

export default PlayersCard;