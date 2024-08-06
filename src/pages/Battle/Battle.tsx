import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import { useParams } from 'react-router-dom';
import './Battle.css';
import { AppContainer, AppSection, Footer, StyledH1, StyledH3 } from '../../components/StyledComponents';
import PlayersCard from '../../components/Battle/PlayersCard/PlayersCard';
import IniciativeCard from '../../components/Battle/IniciativeCard/IniciativeCard';
import defaultTheme from '../../themes/defaultTheme';
import { getCharacters, getAdventure } from '../../services/battleService';
import Edit from '../../components/svg/Edit';
import Check from '../../components/svg/Check';
import Close from '../../components/svg/Close';

interface Adventure {
  id: number;
  name: string;
  description: string;
  battle_order?: Array<any>;
  dungeon_master_id: number;
  url_icon: string;
}

interface Character {
  id: number;
  name: string;
  class?: string;
  iniciative?: number;
}

const Battle = () => {
  const { adventure_id } = useParams();
  const [adventure, setAdventure] = React.useState<Adventure | null>(null);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const getBattleAdventure = async () => {
    const response = await getAdventure(adventure_id);

    if (response.adventures) {
      setAdventure(response.adventures[0]);
    } else {
      return [];
    }
  }

  const getAdventureCharacters = async () => {
    const response = await getCharacters();

    if (response.characters) {
      setCharacters(response.characters);
    } else {
      return [];
    }
  }

  const handleEditingAdventure = () => {
    // iterar sobre o card de iniciativas para montar um array de hash de atributos
    // { battle_order: [player_1, players_3, player_2] }
  }

  const handleEditingAdventureTitle: () => void = () => {
    const titleInput = document.getElementById('battle-title-input');
    const confirmInput = document.getElementById('confirm-title-edit-icon');
    const cancelInput = document.getElementById('cancel-title-edit-icon');
    const titleEditIcon = document.querySelector('.edit-icons #edit-title-icon') as HTMLElement;

    if (titleInput?.getAttribute('contenteditable')) {
      titleInput.removeAttribute('contenteditable');
      titleEditIcon.style.display = 'block';
      confirmInput?.setAttribute('hidden', 'true');
      cancelInput?.setAttribute('hidden', 'true');
    } else {
      titleInput?.setAttribute('contenteditable', 'true');
      titleEditIcon.style.display = 'none';
      confirmInput?.removeAttribute('hidden');
      cancelInput?.removeAttribute('hidden');
    }
    // Pegar title
    // { title: 'newTitle' }
  }

  const handleEditingPlayers = () => {
    // iterar sobre o card de players para montar um array de hash de atributos
  }

  useEffect(() => {
    getBattleAdventure();
    getAdventureCharacters();
  }, []);

  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='column' className="section">
        <div className='battle-container'>
          <div className='battle-header'>
            <div className='battle-title'>
              <StyledH1 id='battle-title-input'>{adventure?.name || 'Escolha um nome'}</StyledH1>
            </div>
            <div className='edit-icons'>
              <span id='edit-title-icon' onClick={handleEditingAdventureTitle}><Edit /></span>
              <span id='confirm-title-edit-icon' className='confirm-icon' hidden>
                <Check />
              </span>
              <span id='cancel-title-edit-icon' className='close-icon' hidden>
                <Close />
              </span>
            </div>
          </div>
          <div id='players-card-container'>
            <StyledH3>Jogadores</StyledH3>
            <PlayersCard>
              {characters.map((character) => (
                <div key={character.id}>
                  <span className='character-name'>{character.name || 'TengoLengo'}</span>
                  <span className='character-class'>{character.class || 'SemClasse'}</span>
                  <span className='character-iniciative-bonus'>{ '+' + character.iniciative || '+0'}</span>
                </div>
              ))}
            </PlayersCard>
          </div>
          <div id='iniciative-card-container'>
            <StyledH3>Iniciativa</StyledH3>
            <IniciativeCard>
              <div>
                <span className='character-name'>Juao</span>
                <div className='character-iniciative'>
                  <span>20</span>
                </div>
                <span className='character-class'>Barbarian</span>
              </div>
              <div>
                <span className='character-name'>Marco</span>
                <div className='character-iniciative'>
                  <span>16</span>
                </div>
                <span className='character-class'>Paladin</span>
              </div>
            </IniciativeCard>
          </div>
          <div id='npc-card-container'>
            <StyledH3>NPCs e Monstros</StyledH3>
            <PlayersCard>
              ''
            </PlayersCard>
          </div>
        </div>
      </AppSection>
      <Footer theme={defaultTheme} className='footer' />
    </AppContainer>
  );
};

export default Battle;