import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 200px',
  backgroundColor: `${styleToken.color.white}`,
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      padding: '30px',
    },
    '(max-width: 767px)': {
      padding: '0',
    },
  },
});

export const image = style({
  width: '100%',
  height: 'auto',
});
