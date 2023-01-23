export interface Theme {
  name: string;
  properties: any;
}

export const defaultTheme: Theme = {
  name: 'defaultTheme',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 100%, 50%, 1)',
    '--title-color': 'hsl(var(--hue-color), 8%, 15%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 45%)',
    '--input-color': 'hsl(var(--hue-color), 70%, 96%)',
    '--body-color': 'hsl(var(--hue-color), 60%, 99%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 90%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 80%)',
    '--container-color': '#fff',
  },
};

export const light: Theme = {
  name: 'light',
  properties: {
    '--body-bg-color': '#DCDCDC',
    '--title-color': '#000080',
    '--button-bg-color': '#ADD8E6',
    '--button-border-color': '#ffffff',
    '--button-text-color': '#FFFFFF',
    '--magic-box-bg-color': '#ffffff',
    '--magic-box-text-color': '#483D8B',
  },
};

export const yellow: Theme = {
  name: 'yellow',
  properties: {
    '--hue-color': '39',
    '--saturation': '100%',
    '--brightness': '50%',
    '--opacity': 1,
  },
};

export const blue: Theme = {
  name: 'blue',
  properties: {
    '--hue-color': '228',
    '--saturation': '100%',
    '--brightness': '25%',
    '--opacity': 1,
  },
};

export const green: Theme = {
  name: 'green',
  properties: {
    '--hue-color': '173',
    '--saturation': '90%',
    '--brightness': '36%',
    '--opacity': 1,
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--first-color-second': 'hsl(var(--hue-color), 30%, 8%)',
    '--title-color': 'hsl(var(--hue-color), 8%, 95%)',
    '--text-color': 'hsl(var(--hue-color), 8%, 75%)',
    '--input-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--body-color': 'hsl(var(--hue-color), 70%, 6%)',
    '--container-color': 'hsl(var(--hue-color), 29%, 16%)',
    '--scroll-bar-color': 'hsl(var(--hue-color), 12%, 48%)',
    '--scroll-thumb-color': 'hsl(var(--hue-color), 12%, 36%)',
  },
};
