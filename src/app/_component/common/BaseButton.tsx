'use client';

import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '@lib/const/pageAddress.ts';
import * as buttonStyles from './button.css';

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  const router = useRouter();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <button className={buttonStyles.container} onClick={onClickAppLink}>
      {title}
    </button>
  );
}
