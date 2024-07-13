import React, { useState } from "react";
import defaultTheme from "../../../themes/defaultTheme";
import { StyledFormButton } from "../../StyledComponents";
import './adventure.css'
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
    <>
    <div className="generic-form-container">
      <form className="generic-form" id="adventure-form" action="/" method="post">
        <label htmlFor="name">Nome da Aventura</label>
        <input name="name" type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="description">Descrição</label>
        <textarea name="description" onChange={(e) => setDescription(e.target.value)} ></textarea  >
        <label htmlFor="url-icon">Imagem da aventura</label>
        <input accept="image/png, image/jpeg" type="file" name="url-icon" multiple onChange={(e) => setUrlIcon(e.target.files ? e.target.files[0] : null)} />
        <StyledFormButton onClick={handleSaveAdventure} theme={defaultTheme} type="button">Salvar</StyledFormButton>
      </form>
    </div>
    </>
  );
};

export default AdventureForm;
