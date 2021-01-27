// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 
// needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 正则法
function strStr(haystack: string, needle: string): number {
  const r = new RegExp(needle);
  const result = haystack.match(r);

  if(result === null) {
    return -1;
  }
  return result.index;
};

export default strStr