import { HTMLAttributes, PropsWithChildren } from 'react';
import styleToken from '@styles/styleToken.css.ts';
import { typography, TypographyVariants } from './typography.css';

type TypographyProps = {
  variant: TypographyVariants['variant'];
  color?: keyof typeof styleToken.color;
  fontWeight?: keyof typeof styleToken.font;
} & HTMLAttributes<HTMLElement>;

export function Typography({
  children,
  variant,
  color,
  fontWeight,
  style,
  ...props
}: PropsWithChildren<TypographyProps>) {
  const combinedStyle = {
    color: color && styleToken.color[color],
    fontWeight: fontWeight ? styleToken.font[fontWeight] : typography.variants[variant],
    ...style,
  };

  return (
    <span className={typography({ variant })} style={combinedStyle} {...props}>
      {children}
    </span>
  );
}
