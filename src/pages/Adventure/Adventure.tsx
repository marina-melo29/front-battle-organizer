import React, { useState } from "react";
import Menu from "../../components/Menu"
import defaultTheme from "../../themes/defaultTheme";
import { AppContainer } from '../../components/StyledComponents';
import './adventure.css'
import AdventureForm from "../../components/Adventure/AdventureForm/AdventureForm";
import AdventureList from "../../components/Adventure/AdventureList/AdventureList";
const Adventure = () => {

  return (
    <AppContainer theme={defaultTheme}>
      <Menu></Menu>
      {/* <AdventureForm></AdventureForm> */}
      <AdventureList />
    </AppContainer>
  );
};

export default Adventure;
