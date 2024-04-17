import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  width: '250px',
  height: '56px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  backgroundColor: `${styleToken.color.primary}`,
  color: `${styleToken.color.white}`,
  fontSize: '18px',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
});
