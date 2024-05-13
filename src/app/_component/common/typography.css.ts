import { style } from '@vanilla-extract/css';
import styleToken from '@styles/styleToken.css';

export const typographyBase = style({
  color: `${styleToken.color.gray2}`,
  letterSpacing: '-0.3px',
  lineHeight: 1.4,
  whiteSpace: 'pre-wrap',
});
