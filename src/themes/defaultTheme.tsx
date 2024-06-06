import backgroundImage from '../assets/images/backgrounds/purple_wpp.png';

export interface Theme {
  backgroundImage: string;
  color: string;
  baseFontFamily: string;
  buttonBgColor: string;
  buttonHoverBgColor: string;
  formButtonBackgroundColor: string;
  formButtonBackgroundHover: string;
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
};

export default defaultTheme;
