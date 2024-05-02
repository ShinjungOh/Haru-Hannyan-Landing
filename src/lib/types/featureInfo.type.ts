export type ImagePath = {
  [key: string]: {
    src: string;
    alt: string;
  };
};

export type FeatureInfo = {
  [key: string]: {
    number: number;
    title: string;
    description: string;
    image: string;
  };
};
