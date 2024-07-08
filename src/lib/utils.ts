import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPathRoot(path: string): string {
  const text = path
  const parts = text.split('/')
  const result = parts[1]

  return result
}

export function fakeMedicineName() {
  const prefixes = ["Neo", "Pro", "Mega", "Ultra", "Maxi", "Forti", "Super", "Hyper"];
  const suffixes = ["cin", "dol", "mab", "fen", "tin", "zol", "pam", "ril"];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  const medicineName = randomPrefix + randomSuffix;

  return medicineName;
}


export function fakeTime() {
  // Gerar horas, minutos e segundos aleatórios
  const hour = Math.floor(Math.random() * 24); // Horas de 0 a 23
  const minute = Math.floor(Math.random() * 60); // Minutos de 0 a 59

  // Formatar os valores para garantir que tenham dois dígitos
  const formattedHour = hour < 10 ? '0' + hour : hour;
  const formattedMinute = minute < 10 ? '0' + minute : minute;

  // Retornar horário no formato HH:MM:SS
  return `${formattedHour}:${formattedMinute}`;
}
