// src/services/adventureService.js
const API_URL = 'http://localhost:3000';

export const SaveAdventure = async (name, description, iconUrl) => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure`;
  const requestBody = {
    name,
    description,
    url_icon: iconUrl,
  };

  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return { success: true, message: 'Aventura salva com sucesso!' };
    } else {
      return { success: false, message: 'Erro ao salvar aventura' };
    }
  } catch (error) {
    console.error('Erro ao tentar salvar aventura:', error);
    return { success: false, message: 'Erro ao salvar aventura. Tente novamente mais tarde.' };
  }
};