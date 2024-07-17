import React, { useState, useEffect } from "react";
import defaultTheme from "../../../themes/defaultTheme";
import { GenericFormContainer, GenericForm, FormSubmitButton, Label } from "./StyledComponents";
import { MenuTitle } from "../../StyledComponents";

import { UpdateAdventure } from "../../../services/adventureService";
interface AdventureItem {
  name: string;
  description: string;
}

interface AdventureEditProps {
  item: AdventureItem | null;
  handleSave: () => void;
}
const AdventureEdit: React.FC<AdventureEditProps> = ({ item, handleSave }) => {

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item]);

  if (!item) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  if (!item) {
    return null;
  }

  const handleUpdateAdventure = async () => {
    const result = await UpdateAdventure(name, description, "");

    if (result.success) {
      alert(result.message);
      handleSave();
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <GenericFormContainer theme={defaultTheme}>
        <MenuTitle theme={defaultTheme}>Editar Aventura</MenuTitle>
        <GenericForm theme={defaultTheme} id="adventure-form" action="/" method="post">
          <Label theme={defaultTheme} htmlFor="name">Nome da Aventura</Label>
          <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <Label theme={defaultTheme} htmlFor="description">Descrição</Label>
          <textarea name="description" placeholder={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <Label theme={defaultTheme} htmlFor="url-icon">Imagem da aventura</Label>
          <input accept="image/png, image/jpeg" type="file" name="url-icon" multiple />
          <FormSubmitButton onClick={handleUpdateAdventure} theme={defaultTheme} type="button">Salvar</FormSubmitButton>
        </GenericForm>
      </GenericFormContainer>
    </>
  );
};

export default AdventureEdit;
