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

export const RemoveAdventure = async (id) => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure/${id}`;

  try {
    const response = await fetch(path, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      return { success: true, message: 'Aventura removida com sucesso!' };
    } else {
      return { success: false, message: 'Erro ao remover aventura' };
    }
  } catch (error) {
    console.error('Erro ao tentar remover aventura:', error);
    return { success: false, message: 'Erro ao remover aventura. Tente novamente mais tarde.' };
  }
};

export const UpdateAdventure = async (id, name, description, iconUrl) => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure/${id}`;
  const requestBody = {
    name,
    description,
    url_icon: iconUrl,
  };

  try {
    const response = await fetch(path, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return { success: true, message: 'Aventura atualizada com sucesso!' };
    } else {
      return { success: false, message: 'Erro ao atualizar aventura' };
    }
  } catch (error) {
    console.error('Erro ao tentar atualizar aventura:', error);
    return { success: false, message: 'Erro ao atualizar aventura. Tente novamente mais tarde.' };
  }
};

export const GetAdventures = async () => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure`;

  try {
    const response = await fetch(path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      return { success: false, message: 'Erro ao trazer aventuras' };
    }
  } catch (error) {
    console.error('Erro ao tentar trazer aventuras:', error);
    return { success: false, message: 'Erro ao trazer aventuras. Tente novamente mais tarde.' };
  }
};
