export function runWithTimer<T>(task: () => T): T {
  const start = new Date().getTime();
  const res = task();
  const end = new Date().getTime();

  console.info(`Task ran in ${end - start}ms`);

  return res;
}
