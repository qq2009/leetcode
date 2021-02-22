// 示例 1:
// 给定数组 nums = [1,1,2],
// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
// 你不需要考虑数组中超出新长度后面的元素。
import {removeDuplicates} from './index'

let arr = [1, 1, 2];
arr = [1,2]
arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr);
console.log(arr);
