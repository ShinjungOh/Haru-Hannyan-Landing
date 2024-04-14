import { assignVars, createGlobalTheme, createGlobalThemeContract, globalStyle } from '@vanilla-extract/css';

export const global = createGlobalThemeContract({
  background: {
    color: 'bg-color',
  },
  foreground: {
    color: 'fg-color',
  },
});

createGlobalTheme(':root', global, {
  background: {
    color: 'white',
  },
  foreground: {
    color: 'black',
  },
});

const darkGlobalTheme = {
  background: {
    color: 'black',
  },
  foreground: {
    color: 'white',
  },
};

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(global, darkGlobalTheme),
    },
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
    },
  },
});

globalStyle('html, body', {
  maxWidth: '100dvw',
  overflowX: 'hidden',
});

globalStyle('body', {
  color: global.foreground.color,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
