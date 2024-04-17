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
});

export const info = style({
  width: '100dvw',
  height: '100%',
  padding: '80px 180px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const infoTitle = style({
  fontSize: '46px',
  fontWeight: '600',
  color: `${styleToken.color.gray1}`,
});

export const infoDescription = style({
  fontSize: '20px',
  fontWeight: '500',
  color: `${styleToken.color.gray2}`,
  margin: '16px 0 48px 0',
});

export const description = style({
  width: '100dvw',
  height: '100%',
  padding: '80px 180px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const descriptionSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const descriptionTitle = style({
  fontSize: '46px',
  fontWeight: '600',
  color: `${styleToken.color.white}`,
});

export const descriptionDetail = style({
  fontSize: '20px',
  fontWeight: '400',
  color: `${styleToken.color.white}`,
  margin: '16px 0 0 0',
});
