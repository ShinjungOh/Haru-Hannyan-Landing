import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import styleToken from '@styles/styleToken.css';

export const typographyBase = {
  color: styleToken.color.gray2,
  letterSpacing: '-0.3px',
  lineHeight: 1.4,
  whiteSpace: 'pre-wrap',
};

export const typography = recipe({
  base: typographyBase,
  variants: {
    variant: {
      h1: {
        fontWeight: styleToken.font.weightBold,
        fontSize: '50px',
      },
      h2: {
        fontWeight: styleToken.font.weightBold,
        fontSize: '46px',
      },
      h3: {
        fontWeight: styleToken.font.weightBold,
        fontSize: '42px',
      },
      h4: {
        fontWeight: styleToken.font.weightBold,
        fontSize: '38px',
      },
      subtitle1: {
        fontWeight: styleToken.font.weightMedium,
        fontSize: '36px',
      },
      subtitle2: {
        fontWeight: styleToken.font.weightMedium,
        fontSize: '34px',
      },
      subtitle3: {
        fontWeight: styleToken.font.weightMedium,
        fontSize: '32px',
      },
      subtitle4: {
        fontWeight: styleToken.font.weightMedium,
        fontSize: '30px',
      },
      subtitle5: {
        fontWeight: styleToken.font.weightMedium,
        fontSize: '28px',
      },
      body1: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '24px',
      },
      body2: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '22px',
      },
      body3: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '20px',
      },
      body4: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '18px',
      },
      body5: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '16px',
      },
      body6: {
        fontWeight: styleToken.font.weightRegular,
        fontSize: '14px',
      },
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

export type TypographyVariants = RecipeVariants<typeof typography>;
