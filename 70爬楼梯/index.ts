// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

// 递归法
function climbStairs(n: number): number {
  if (n === 1 || n === 2 || n === 3) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 动态规划
function climbStairs2(n: number): number {
  let p: number = 0, q: number = 0, r: number = 1;
  
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
export default climbStairs2;
