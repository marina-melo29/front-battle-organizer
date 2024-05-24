import backgroundImage from '../assets/images/backgrounds/purple_wpp.png';

export interface Theme {
  backgroundImage: string;
  color: string;
  buttonBgColor: string;
  buttonHoverBgColor: string;
}

const defaultTheme: Theme = {
  backgroundImage: backgroundImage,
  color: '#422b5e',
  buttonBgColor: '#FFF',
  buttonHoverBgColor: '#3f295b'
};

export default defaultTheme;
