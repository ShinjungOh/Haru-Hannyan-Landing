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
    '(max-width: 767px)': {},
  },
});

export const infoContainer = style({
  width: '100dvw',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '400px',
  alignItems: 'center',
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      gap: '200px',
    },
    '(max-width: 767px)': {
      gap: '100px',
    },
  },
});

export const infoSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const infoImage = style({
  width: '200px',
  marginRight: '20px',
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      width: '150px',
      marginRight: '0',
    },
    '(min-width: 671px) and (max-width: 768px)': {
      width: '120px',
      marginRight: '0',
    },
    '(max-width: 670px)': {
      display: 'none',
    },
  },
});

export const infoTitle = style({
  fontSize: '46px',
  fontWeight: '600',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray1}`,
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '40px',
    },
    '(max-width: 767px)': {
      fontSize: '32px',
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
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '18px',
    },
    '(max-width: 767px)': {
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
  '@media': {
    '(max-width: 767px)': {
      width: '380px',
      height: '380px',
    },
  },
});

export const descriptionContainer = style({
  width: '940px',
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
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '40px',
    },
    '(max-width: 767px)': {
      fontSize: '32px',
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
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '18px',
    },
    '(max-width: 767px)': {
      fontSize: '18px',
    },
  },
});
