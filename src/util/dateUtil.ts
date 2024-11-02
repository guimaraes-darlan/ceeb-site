import dayjs from "dayjs";

export const getDayOfWeek = (date: Date): string => {
  const day = dayjs(date).day();

  switch (day) {
    case 0: return 'Domingo';
    case 1: return 'Segunda';
    case 2: return 'Terça';
    case 3: return 'Quarta';
    case 4: return 'Quinta';
    case 5: return 'Sexta';
    case 6: return 'Sábado';
  }
  return "";
}

export const getMonth = (date: Date): string => {
  const month = dayjs(date).month();

  switch (month) {
    case 0: return 'Janeiro';
    case 1: return 'Fevereiro';
    case 2: return 'Março';
    case 3: return 'Abril';
    case 4: return 'Maio';
    case 5: return 'Junho';
    case 6: return 'Julho';
    case 7: return 'Agosto';
    case 8: return 'Setembro';
    case 9: return 'Outubro';
    case 10: return 'Novembro';
    case 11: return 'Dezembro';
  }
  return "";
}