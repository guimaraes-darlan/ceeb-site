export const getRequestErrors = async (response: Response): Promise<string[]> => {
  const data = await response.json();
  if (response.status === 422) {
    return data.message;
  } else {
    return [data.message];
  }
}