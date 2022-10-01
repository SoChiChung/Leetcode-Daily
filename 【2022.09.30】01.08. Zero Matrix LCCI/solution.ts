/*
 * @Author: SoChichung
 * @Date: 2022-09-30 10:49:40
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-09-30 18:29:48
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let rlength = matrix.length;
  let clength = matrix[0].length;
  let judge = new Array(rlength);
  for (let i = 0; i < rlength; i++) judge[i] = new Array(clength).fill(0);

  for (let i = 0; i < rlength; i++) {
    for (let j = 0; j < clength; j++) {
      if (matrix[i][j] == 0 && judge[i][j] == 0) {
        for (let n = 0; n < clength; n++) {
          if (matrix[i][n] != 0) {
            matrix[i][n] = 0;
            judge[i][n] = -1;
          }
        }
        for (let m = 0; m < rlength; m++) {
          if (matrix[m][j] != 0) {
            matrix[m][j] = 0;
            judge[m][j] = -1;
          }
        }
      }
    }
  }
}
