import React, { useState } from "react";
import Menu from "../../components/Menu";
import defaultTheme from "../../themes/defaultTheme";
import { AppContainer } from '../../components/StyledComponents';
import './adventure.css';
import AdventureForm from "../../components/Adventure/AdventureForm/AdventureForm";
import AdventureList from "../../components/Adventure/AdventureList/AdventureList";
import AdventureEdit from "../../components/Adventure/AdventureEdit/AdventureEdit";
import ArrowBack from "../../assets/images/components/arrow-back.png"

const Adventure = () => {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showEditItem, setShowEditItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AdventureItem | null>(null);

  interface AdventureItem {
    name: string;
    description: string;
  }

  const handleShowForm = () => {
    setShowForm(true);
    setShowList(false);
    setShowEditItem(false);
  };

  const handleEditItem = (item: AdventureItem) => {
    setSelectedItem(item);
    setShowEditItem(true);
    setShowForm(false);
    setShowList(false);
  };

  const handleGoBack = () => {
    setShowForm(false);
    setShowList(true);
    setShowEditItem(false);
  };

  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      {showForm && (
        <>
          <img src={ArrowBack} className="go-back-icon" onClick={handleGoBack} />
          <AdventureForm />
        </>
      )}
      {showList && <AdventureList onShowForm={handleShowForm} onEditItem={handleEditItem} />}
      {showEditItem && (
        <>
          <img src={ArrowBack} className="go-back-icon" onClick={handleGoBack} />
          <AdventureEdit item={selectedItem} />
        </>
      )}
    </AppContainer>
  );
};

export default Adventure;
