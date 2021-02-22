// 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
// 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 1; i < m; i++) {

    for (let j = 1; j < n; j++) {
      if (matrix[i][j] != matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
}

// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"
const matrix:number [][] = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
console.log(isToeplitzMatrix(matrix))
