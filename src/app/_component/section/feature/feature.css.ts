import { style } from '@vanilla-extract/css';
import styleToken from '@styles/styleToken.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '100px',
  backgroundColor: `${styleToken.color.white}`,
  '@media': {
    '(max-width: 767px)': {
      gap: '60px',
    },
  },
});

export const titleContainer = style({
  width: '100%',
  height: '360px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    '(max-width: 767px)': {
      width: '80%',
      height: '280px',
    },
  },
});

export const title = style({
  width: '940px',
  transition: 'transform 1.0s ease-out',
  transform: 'translateY(100%)',
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      width: '680px',
    },
    '(max-width: 767px)': {
      width: '440px',
    },
  },
});

export const titleVisible = style({
  transform: 'translateY(0)',
});

export const featureContainer = style({
  width: '100dvw',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '180px',
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      gap: '100px',
    },
    '(max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  '@media': {
    '(max-width: 767px)': {
      alignItems: 'center',
      order: 1,
    },
  },
});

export const infoImage = style({
  width: '280px',
  '@media': {
    '(max-width: 767px)': {
      width: '180px',
      order: 2,
    },
  },
});

export const infoImageTest = style({
  width: '380px',
  '@media': {
    '(max-width: 767px)': {
      width: '280px',
      order: 2,
    },
  },
});

export const featureTitleContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '@media': {
    '(max-width: 767px)': {
      textAlign: 'center',
    },
  },
});

export const circle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  border: `2px solid ${styleToken.color.gray3}`,
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray2}`,
  '@media': {
    '(max-width: 767px)': {
      width: '36px',
      height: '36px',
      fontSize: '16px',
    },
  },
});
