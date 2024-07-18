import backgroundImage from '../assets/images/backgrounds/purple_wpp.png';
import homePresentationImage from '../assets/images/components/purple_dragon.png';
import seeMoreImage from '../assets/images/components/menu.png'

export interface Theme {
  backgroundImage: string;
  color: string;
  baseFontFamily: string;
  buttonBgColor: string;
  buttonHoverBgColor: string;
  formButtonBackgroundColor: string;
  formButtonBackgroundHover: string;
  homePresentationImage: string;
  baseMenuColor: string;
  seeMoreImage: string;
  cardsBorderColor: string;
}

const defaultTheme: Theme = {
  backgroundImage: backgroundImage,
  color: '#422b5e',
  baseFontFamily: 'Poppins',
  buttonBgColor: '#d5d5d5',
  buttonHoverBgColor: '#3f295b',
  baseMenuColor: '#281540',

  // Form styles

  formButtonBackgroundColor: '#513b6d',
  formButtonBackgroundHover: '#3e295a',

  // Menu

  seeMoreImage: seeMoreImage,

  // home

  homePresentationImage: homePresentationImage,

  // OrderingCard Component

  cardsBorderColor: '#e4dce5',
};

export default defaultTheme;
