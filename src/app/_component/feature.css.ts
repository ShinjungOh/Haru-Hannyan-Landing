import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '200px',
  backgroundColor: `${styleToken.color.white}`,
  '@media': {
    '(max-width: 767px)': {
      gap: '150px',
    },
  },
});

export const featureContainer = style({
  width: '100%',
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

export const titleContainer = style({
  width: '100%',
  height: '260px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  '@media': {
    '(max-width: 767px)': {
      width: '90%',
      height: '180px',
    },
  },
});

export const title = style({
  width: '940px',
  fontSize: '46px',
  fontWeight: '600',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray1}`,
  '@media': {
    '(min-width: 768px) and (max-width: 1299px)': {
      fontSize: '40px',
      width: '680px',
    },
    '(max-width: 767px)': {
      fontSize: '32px',
      width: '440px',
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

export const featureTitle = style({
  fontSize: '30px',
  fontWeight: '700',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.alert_success}`,
  textAlign: 'center',
  margin: '0 0 0 20px',
  '@media': {
    '(max-width: 767px)': {
      fontSize: '24px',
      margin: '0 0 0 10px',
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

export const featureDescription = style({
  fontSize: '18px',
  fontWeight: '100',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray2}`,
  margin: '30px 0 0 8px',
  lineHeight: '32px',
  '@media': {
    '(max-width: 767px)': {
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '24px',
      margin: '20px 0 0 0',
    },
  },
});
