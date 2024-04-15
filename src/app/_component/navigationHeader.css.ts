import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const navigationHeader = style({
  width: '100dvw',
  height: '60px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  borderBottom: `1px solid ${styleToken.color.gray5}`,
  backgroundColor: `${styleToken.color.background}`,
});
