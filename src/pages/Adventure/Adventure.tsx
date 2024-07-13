import React, { useState } from "react";
import Menu from "../../components/Menu";
import defaultTheme from "../../themes/defaultTheme";
import { AppContainer } from '../../components/StyledComponents';
import './adventure.css';
import AdventureForm from "../../components/Adventure/AdventureForm/AdventureForm";
import AdventureList from "../../components/Adventure/AdventureList/AdventureList";
import ArrowBack from "../../assets/images/components/arrow-back.png"
const Adventure = () => {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemId, setItemId] = useState('');
  const [goBack, setGoBack] = useState("");

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      {showForm ? (
        <>
          <img src={ArrowBack} className="go-back-icon" onClick={() => GoBack("AdventureList")} />
          <AdventureForm />
        </>
      ) : (
        <AdventureList onShowForm={handleShowForm} />
      )}
    </AppContainer>
  );
};


const GoBack = (screen: string) => {
  if (screen == "AdventureList") {

  }
}
export default Adventure;
