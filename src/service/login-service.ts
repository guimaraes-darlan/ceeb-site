export const loginRequest = async (email: string, password: string) => {
  return await fetch(`http://localhost:3000/login`, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}