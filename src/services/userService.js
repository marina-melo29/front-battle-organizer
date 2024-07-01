// src/services/authService.js
const API_URL = 'http://localhost:3000';

export const isAuthenticated = async () => {
  const token = localStorage.getItem('authToken');
  const path = `${API_URL}/is_authenticated`;

  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  return response.ok;
};
