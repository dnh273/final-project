function total(...args: number[]): number {
  return args.reduce((acc, num) => acc + num, 0);
}

export default total;
