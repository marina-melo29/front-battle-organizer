import React, { useState } from "react";
import defaultTheme from "../../../themes/defaultTheme";
import { GenericFormContainer, GenericForm, FormSubmitButton, Label } from "./StyledComponents";

import { SaveAdventure } from "../../../services/adventureService";

const AdventureForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [urlIcon, setUrlIcon] = useState<File | null>(null);

  const handleSaveAdventure = async () => {
    const result = await SaveAdventure(name, description, "");

    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <GenericFormContainer theme={defaultTheme}>
      <GenericForm theme={defaultTheme} id="adventure-form" action="/" method="post">
        <Label theme={defaultTheme} htmlFor="name">Nome da Aventura</Label>
        <input name="name" type="text" onChange={(e) => setName(e.target.value)} />
        <Label theme={defaultTheme} htmlFor="description">Descrição</Label>
        <textarea name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <Label theme={defaultTheme} htmlFor="url-icon">Imagem da aventura</Label>
        <input accept="image/png, image/jpeg" type="file" name="url-icon" multiple onChange={(e) => setUrlIcon(e.target.files ? e.target.files[0] : null)} />
        <FormSubmitButton onClick={handleSaveAdventure} theme={defaultTheme} type="button">Salvar</FormSubmitButton>
      </GenericForm>
    </GenericFormContainer>
  );
};

export default AdventureForm;
