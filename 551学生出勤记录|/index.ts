// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
// 'A' : Absent，缺勤
// 'L' : Late，迟到
// 'P' : Present，到场
// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
// 你需要根据这个学生的出勤记录判断他是否会被奖赏。

function checkRecord(s: string): boolean {
  let a = 0;
  let l = 0;
  let next = '';

  for (const child of s.split('')) {
    // 是否存在连续LLL
    if (child === next) {
      if (child === 'L') {
        l++
        if (l >= 2) return false;
        next = child
        continue
      }
    }

    // 对a进行统计
    if (child === 'A') {
      a++
    }

    l = 0;
    next = child
  }

  if (l >= 2 || a >= 2) return false
  return true;
}

// console.log(checkRecord('PPALLP'))
// console.log(checkRecord('LALL'))
// console.log(checkRecord('PPALLL'))
// console.log(checkRecord('LLLALL'))
// console.log(checkRecord("ALLAPPL"))
// console.log(checkRecord("PPALLP"))
