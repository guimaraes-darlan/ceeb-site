export const generateReport = async (month: number, year: number) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}report/api?month=${month}&year=${year}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}