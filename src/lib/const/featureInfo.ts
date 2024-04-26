export const IMAGE_PATH = {
  DIARY: {
    src: '/images/iphone_mockup_diary.png',
    alt: 'iphone_mockup_diary',
  },
  TIMELINE: {
    src: '/images/iphone_mockup_timeline.png',
    alt: 'iphone_mockup_timeline',
  },
  TEST: {
    src: '/images/iphone_mockup_test.png',
    alt: 'iphone_mockup_test',
  },
};

export const FEATURE_INFO = {
  diary: {
    number: 1,
    title: '일기 작성',
    description: '행복, 좋음, 보통, 나쁨, 화남 5가지 기분과\n다양한 16개의 감정을 선택해\n나의 하루를 표현해요.',
    image: IMAGE_PATH.DIARY.src,
  },
  timeline: {
    number: 2,
    title: '타임라인',
    description:
      '한 달의 일기를 한 눈에 모아보고\n기분의 흐름을 살펴봐요.\n유독 기분이 좋은 달에는 무슨 일이 있었나요?',
    image: IMAGE_PATH.TIMELINE.src,
  },
  test: {
    number: 3,
    title: '스트레스 자가 진단',
    description: '요즘 스트레스를 많이 받고 있나요?\n일주일마다 설문을 작성해\n스트레스의 변화를 측정해요.',
    image: IMAGE_PATH.TEST.src,
  },
};
