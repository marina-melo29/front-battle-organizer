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

export const updateAdventure = async (params) => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/adventure`;

  const response = await fetch(path, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(params),
  });

  if (response.ok) {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } else {
    throw new Error('Failed to set adventure');
  }
};