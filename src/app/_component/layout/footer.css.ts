import { style } from '@vanilla-extract/css';
import styleToken from '@styles/styleToken.css';

export const container = style({
  width: '100%',
  height: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${styleToken.color.whiteGray}`,
  padding: '0 100px',
  '@media': {
    '(max-width: 767px)': {
      height: '260px',
      padding: '0 30px',
    },
  },
});

export const contentsContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: '20px',
  color: `${styleToken.color.gray1}`,
  marginLeft: '6px',
});

export const iconContainer = style({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '20px',
  margin: '32px 0 0 0',
});

export const iconItem = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const iconImage = style({
  width: '36px',
  height: '36px',
  '@media': {
    '(max-width: 767px)': {
      width: '32px',
      height: '32px',
    },
  },
});
