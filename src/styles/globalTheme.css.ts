import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalFontFace,
  globalStyle,
} from '@vanilla-extract/css';

globalFontFace('SUIT-Regular', {
  src: `url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

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
  fontFamily: 'SUIT-Regular, sans-serif',
});

globalStyle('body', {
  color: global.foreground.color,
});

globalStyle('h1, h2, h3, h4, h5, h6, p, span', {
  fontFamily: 'SUIT-Regular',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
