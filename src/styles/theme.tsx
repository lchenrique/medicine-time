/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MyTheme {
  light: Light
  dark: Dark
}

export interface Light {
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  popover: string
  popoverForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  ring: string
  radius: string
  auxiliary: string
}

export interface Dark {
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  popover: string
  popoverForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  ring: string
  auxiliary: string
}


export const theme:MyTheme = {
  light: {
    background: '0, 0%, 100%',
    foreground: '222.2, 84%, 4.9%',
    muted: '210, 40%, 96.1%',
    mutedForeground: '215.4, 16.3%, 46.9%',
    popover: '0, 0%, 100%',
    popoverForeground: '222.2, 84%, 4.9%',
    card: '0, 0%, 100%',
    cardForeground: '222.2, 84%, 4.9%',
    border: '214.3, 31.8%, 91.4%',
    input: '214.3, 31.8%, 91.4%',
    primary: '190.19, 99.13%, 36.7%',
    primaryForeground: '210, 40%, 98%',
    secondary: '210, 40%, 96.1%',
    secondaryForeground: '222.2, 47.4%, 11.2%',
    accent: '230.94, 100%, 98.03%',
    accentForeground: '222.2, 47.4%, 11.2%',
    destructive: '0, 92.99%, 56.11%',
    destructiveForeground: '210, 40%, 98%',
    ring: '190.05, 98.93%, 36.67%',
    radius: '0.5rem',
    auxiliary: '270, 99%, 37%'
  },
  dark: {
    background: '210.57, 29.91%, 5.92%',
    foreground: '222.22, 13.85%, 61.76%',
    muted: '232.5, 15.44%, 18.32%',
    mutedForeground: '233.79, 11.37%, 50%',
    popover: '234.55, 17.46%, 12.35%',
    popoverForeground: '234, 12.4%, 52.55%',
    card: '221.89, 23.91%, 11.17%',
    cardForeground: '221.89, 13.77%, 61.64%',
    border: '215.09, 15.15%, 16.7%',
    input: '232, 20%, 14.71%',
    primary: '190.05, 100%, 13.85%',
    primaryForeground: '190.05, 100%, 50%',
    secondary: '222.22, 22.25%, 9.44%',
    secondaryForeground: '222.22, 13.85%, 61.76%',
    accent: '234.55, 17.83%, 9.47%',
    accentForeground: '0, 0%, 82.75%',
    destructive: '341.89, 97.4%, 29.23%',
    destructiveForeground: '341.79, 87.87%, 80.98%',
    ring: '190.12, 100%, 50%',
    auxiliary: '270, 99%, 37%'
  }
};
