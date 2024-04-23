import { style } from '@vanilla-extract/css';
import styleToken from '../../styles/styleToken.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '200px',
  backgroundColor: `${styleToken.color.white}`,
  // '@media': {
  //   '(min-width: 768px) and (max-width: 1299px)': {
  //     padding: '0 200px',
  //   },
  //   '(max-width: 767px)': {
  //     padding: '0',
  //   },
  // },
});

export const featureContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '180px',
  // border: `1px solid ${styleToken.color.gray3}`,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const infoImage = style({
  width: '280px',
});

export const titleContainer = style({
  width: '100%',
  height: '260px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
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
    },
    '(max-width: 767px)': {
      fontSize: '32px',
    },
  },
});

export const featureTitleContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const featureTitle = style({
  fontSize: '30px',
  fontWeight: 'bold',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.alert_success}`,
  textAlign: 'center',
  margin: '0 0 0 20px',
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
});

export const featureDescription = style({
  fontSize: '18px',
  fontWeight: 'lighter',
  fontFamily: 'SUIT-Regular',
  color: `${styleToken.color.gray2}`,
  margin: '30px 0 0 8px',
  lineHeight: '32px',
});

export const image = style({
  width: '100%',
  height: 'auto',
});
