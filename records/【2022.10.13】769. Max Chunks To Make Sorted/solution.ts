/*
 * @Author: SoChichung
 * @Date: 2022-10-13 12:57:31
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-13 12:57:41
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function maxChunksToSorted(arr: number[]): number {
  let n = arr.length,
    ans = 0;
  for (let i = 0, j = 0, min = n, max = -1; i < n; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    if (j == min && i == max) {
      ans++;
      j = i + 1;
      min = n;
      max = -1;
    }
  }
  return ans;
}
