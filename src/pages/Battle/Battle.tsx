import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import './Battle.css';
import { AppContainer, AppSection, Footer } from '../../components/StyledComponents';
import PlayersCard from '../../components/Battle/PlayersCard/PlayersCard';
import IniciativeCard from '../../components/Battle/IniciativeCard/IniciativeCard';
import defaultTheme from '../../themes/defaultTheme';
import { getCharacters } from '../../services/battleService';
import DeletingBox from '../../components/svg/DeletingBox';

interface Character {
  id: number;
  name: string;
  class?: string;
  iniciative?: number;
}

const Battle = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const handleGetCharacters = async () => {
    const response = await getCharacters();

    if (response.characters) {
      console.log(response.characters);
      setCharacters(response.characters);
    } else {
      return [];
    }
  }

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='column' className="section">
        <div className='battle-container'>
          <div id="players-card-container">
            <PlayersCard>
              {characters.map((character) => (
                <div key={character.id}>
                  <span className='character-name'>{character.name || 'TengoLengo'}</span>
                  <span className='character-class'>{character.class || 'SemClasse'}</span>
                  <span className='character-iniciative-bonus'>{ '+' + character.iniciative || '+0'}</span>
                  <DeletingBox />
                </div>
              ))}
            </PlayersCard>
          </div>
          <div id="iniciative-card-container">
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
        </div>
      </AppSection>
      <Footer theme={defaultTheme} className='footer' />
    </AppContainer>
  );
};

export default Battle;