export const getSpeaker = async (id: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}speaker/api/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}