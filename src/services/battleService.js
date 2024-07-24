const API_URL = 'http://localhost:3000';

export const getCharacters = async () => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/characters`;

  const response = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to get characters');
  }
};

export const getAdventure = async (id) => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure/${id}`;

  const response = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to get adventure');
  }
};