export const listAllSpeakers = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}speaker/api/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
  });
}