'use client';

import * as buttonStyles from './baseButton.css';
import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '../../lib/const/pageAddress';

export default function BaseButton() {
  const router = useRouter();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <button className={buttonStyles.container} onClick={onClickAppLink}>
      하루한냥 바로가기
    </button>
  );
}
