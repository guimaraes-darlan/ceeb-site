export const loginRequest = async (email: string, password: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}login`, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}