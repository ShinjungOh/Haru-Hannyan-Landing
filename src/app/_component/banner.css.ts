import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  width: '100dvw',
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: `${styleToken.color.primary}`,
  border: `1px solid ${styleToken.color.gray2}`,
});
