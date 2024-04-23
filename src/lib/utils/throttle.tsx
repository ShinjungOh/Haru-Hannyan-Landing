const throttle = (callback: () => void, limit: number) => {
  let timer: NodeJS.Timeout | null = null;

  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        callback();
      }, limit);
    }
  };
};

export default throttle;
