import styled from 'styled-components';
import { Theme } from '../../../themes/defaultTheme';

interface AdventureFormProps {
  theme: Theme;
};

// GenericFormContainer
export const GenericFormContainer = styled.div<AdventureFormProps>`
  height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  flex-direction: column;
  padding: 10px;
  color: #41295f;
  font-weight: 800;
  font-family: ${(props) => props.theme.baseFontFamily};
`;

// GoBackIcon
export const GoBackIcon = styled.img<AdventureFormProps>`
  height: 40px;
  margin-left: 10vw;
  cursor: pointer;
`;

// GenericForm
export const GenericForm = styled.form<AdventureFormProps>`
  background-color: ${(props) => props.theme.whiteColor};
  max-height: 100vh;
  max-width: 20vw;
  min-height: 40vh;
  min-width: 20vw;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 28px;

  input {
    margin-bottom: 20px;
    height: 32px;
    font-size: 12px;
    color: #41295f;
    font-weight: 800;
    border-radius: 5px;
    width: 80%;
    border: 0px;
  }

  textarea {
    margin-bottom: 20px;
    height: 100px;
    font-size: 12px;
    color: #41295f;
    font-weight: 800;
    border-radius: 5px;
    width: 80%;
  }
`;

// FormSubmitButton
export const FormSubmitButton = styled.button<AdventureFormProps>`
  margin-bottom: 20px;
  height: 40px;
  font-size: 12px;
  color: #F6F3F3;
  font-weight: 800;
  width: 80%;
  background: #41295f;
  cursor: pointer;
`;

// Label
export const Label = styled.label<AdventureFormProps>`
  margin-top: 20px;
  font-size: 12px;
`;
