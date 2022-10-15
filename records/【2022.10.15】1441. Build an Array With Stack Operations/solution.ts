/*
 * @Author: SoChichung
 * @Date: 2022-10-15 12:38:34
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-15 12:38:54
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function buildArray(target: number[], n: number): string[] {
  let cur = 1;
  let res = [];
  let ti = 0;
  while (cur <= n && ti < target.length) {
    res.push("Push");
    if (cur == target[ti]) {
      ti++;
    } else {
      res.push("Pop");
    }
    cur++;
  }
  return res;
}
