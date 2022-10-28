export const AsyncWrapper = (fn: unknown) => {
  // @ts-expect-error todo
  return (...args) => {
    // @ts-expect-error todo
    return fn(...(args as unknown)) as unknown;
  };
};
