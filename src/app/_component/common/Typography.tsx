import { HTMLAttributes, PropsWithChildren } from 'react';
import styleToken from '@styles/styleToken.css';
import * as styles from './typography.css';

const VARIANT = {
  h1: { fontWeight: styleToken.font.weightBold, fontSize: '50px' },
  h2: { fontWeight: styleToken.font.weightBold, fontSize: '46px' },
  h3: { fontWeight: styleToken.font.weightBold, fontSize: '42px' },
  h4: { fontWeight: styleToken.font.weightBold, fontSize: '38px' },
  subtitle1: { fontWeight: styleToken.font.weightMedium, fontSize: '36px' },
  subtitle2: { fontWeight: styleToken.font.weightMedium, fontSize: '34px' },
  subtitle3: { fontWeight: styleToken.font.weightMedium, fontSize: '32px' },
  subtitle4: { fontWeight: styleToken.font.weightMedium, fontSize: '30px' },
  subtitle5: { fontWeight: styleToken.font.weightMedium, fontSize: '28px' },
  body1: { fontWeight: styleToken.font.weightRegular, fontSize: '24px' },
  body2: { fontWeight: styleToken.font.weightRegular, fontSize: '22px' },
  body3: { fontWeight: styleToken.font.weightRegular, fontSize: '20px' },
  body4: { fontWeight: styleToken.font.weightRegular, fontSize: '18px' },
  body5: { fontWeight: styleToken.font.weightRegular, fontSize: '16px' },
  body6: { fontWeight: styleToken.font.weightRegular, fontSize: '14px' },
} as const;

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'subtitle5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6';

type TypographyProps = {
  variant: TypographyVariant;
  color?: keyof typeof styleToken.color;
  size?: string;
  fontWeight?: keyof typeof styleToken.font;
} & HTMLAttributes<HTMLElement>;

export function Typography({
  children,
  variant,
  color,
  fontWeight,
  size,
  style,
  ...props
}: PropsWithChildren<TypographyProps>) {
  const combinedStyle = {
    color: color && styleToken.color[color],
    fontSize: size ? size : VARIANT[variant].fontSize,
    fontWeight: fontWeight ? styleToken.font[fontWeight] : VARIANT[variant].fontWeight,
    ...style,
  };

  return (
    <span className={styles.typographyBase} style={combinedStyle} {...props}>
      {children}
    </span>
  );
}
