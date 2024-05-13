import { style } from '@vanilla-extract/css';
import styleToken from '@styles/styleToken.css';

export const container = style({
  width: '100dvw',
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '@media': {
    '(max-width: 767px)': {
      height: '400px',
    },
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

export const button = style({
  width: '250px',
  height: '56px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  backgroundColor: `${styleToken.color.primary}`,
  color: `${styleToken.color.white}`,
  fontFamily: 'SUIT-Regular',
  border: 'none',
  cursor: 'pointer',
  '@media': {
    '(max-width: 767px)': {
      width: '200px',
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
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '40px',
    },
    '(max-width: 767px)': {
      fontSize: '28px',
    },
  },
});

export const descriptionDetail = style({
  margin: '16px 0 0 0',
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '18px',
    },
    '(max-width: 767px)': {
      margin: '8px 0 0 0',
      fontSize: '18px',
    },
  },
});
