import backgroundImage from '../assets/images/backgrounds/purple_wpp.png';
import homePresentationImage from '../assets/images/components/purple_dragon.png';

export interface Theme {
  backgroundImage: string;
  color: string;
  baseFontFamily: string;
  buttonBgColor: string;
  buttonHoverBgColor: string;
  formButtonBackgroundColor: string;
  formButtonBackgroundHover: string;
  homePresentationImage: string;
}

const defaultTheme: Theme = {
  backgroundImage: backgroundImage,
  color: '#422b5e',
  baseFontFamily: 'Poppins',
  buttonBgColor: '#FFF',
  buttonHoverBgColor: '#3f295b',

  //form styles

  formButtonBackgroundColor: '#513b6d',
  formButtonBackgroundHover: '#3e295a',

  // home
  homePresentationImage: homePresentationImage
};

export default defaultTheme;
