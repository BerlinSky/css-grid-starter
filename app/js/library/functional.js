// JS Funcational - Compose
export const compose = (...fnList) => x =>
  fnList.reduceRight((rest, fn) => fn(rest), x);
