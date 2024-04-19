import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  width: '100dvw',
  height: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '60px',
  backgroundColor: `${styleToken.color.gray5}90`,
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  gap: '2px',
  position: 'relative',
  top: '120px',
});

export const logoItem = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',
});

export const LogoImage = style({
  width: '36px',
  height: '36px',
});
