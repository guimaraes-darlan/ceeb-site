export const listSpeakers = async (page: number) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}speaker/api?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
  });
}