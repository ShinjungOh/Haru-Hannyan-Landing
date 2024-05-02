import { style } from '@vanilla-extract/css';
import styleToken from '@styles/styleToken.css';

export const navigationHeader = style({
  width: '100dvw',
  height: '60px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 80px',
  borderBottom: `1px solid ${styleToken.color.gray5}`,
  backgroundColor: `${styleToken.color.background}`,
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      padding: '0 40px',
    },
    '(max-width: 767px)': {
      padding: '0 20px',
    },
  },
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  color: `${styleToken.color.gray1}`,
  cursor: 'pointer',
});

export const LogoImage = style({
  width: '50px',
  height: '50px',
});
