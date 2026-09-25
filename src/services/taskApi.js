const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    throw new Error('Failed to load tasks');
  }

  return response.json();
}
