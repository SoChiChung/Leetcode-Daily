/*
 * @Author: SoChichung
 * @Date: 2022-08-18 23:17:12
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-18 23:25:28
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function maxEqualFreq(nums: number[]) {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();
  let max = 0;
  let maxEqualFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    const count = map2.get(nums[i]) ?? 0;
    if (count > 0) {
      map1.set(count, (map1.get(count) ?? 0) - 1);
    }
    map2.set(nums[i], count + 1);
    const curCount = map2.get(nums[i]) ?? 0;
    max = Math.max(max, curCount);
    map1.set(curCount, (map1.get(map2.get(nums[i]) ?? 0) ?? 0) + 1);
    const maxFreqCount = map1.get(max) ?? 0;
    const judge =
      max === 1 ||
      (maxFreqCount * max + (map1.get(max - 1) ?? 0) * (max - 1) === i + 1 &&
        maxFreqCount === 1) ||
      (maxFreqCount * max + 1 === i + 1 && map1.get(1) === 1);
    if (judge) {
      maxEqualFreq = Math.max(maxEqualFreq, i + 1);
    }
  }
  return maxEqualFreq;
}
