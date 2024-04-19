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
  '@media': {
    '(max-width: 768px)': {},
  },
});

export const infoContainer = style({
  width: '100dvw',
  height: '100%',
  padding: '80px 280px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      padding: '110px 60px',
    },
  },
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
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray1}`,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '40px',
    },
  },
});

export const infoDescription = style({
  fontSize: '20px',
  fontWeight: '500',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray2}`,
  margin: '16px 0 48px 0',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const carouselContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const carouselSection = style({
  width: '740px',
  height: '340px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const descriptionContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const descriptionTitle = style({
  fontSize: '46px',
  fontWeight: '600',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.white}`,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '40px',
    },
  },
});

export const descriptionDetail = style({
  fontSize: '20px',
  fontWeight: '400',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.white}`,
  margin: '16px 0 0 0',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '18px',
    },
  },
});
