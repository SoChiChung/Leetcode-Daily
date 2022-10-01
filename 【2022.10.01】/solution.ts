/*
 * @Author: SoChichung
 * @Date: 2022-10-01 17:10:33
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-01 17:25:54
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function reformatNumber(number: string): string {
  let res = "";
  let index = 0;
  let lastdash = -1;
  while (index < number.length) {
    if (number[index] != " " && number[index] != "-") {
      res = res + number[index];
      if (res.length - lastdash > 3 && index != number.length - 1) {
        res = res + "-";
        lastdash = res.length - 1;
      }
    }
    index = index + 1;
  }
  if (lastdash == res.length - 1) res = res.substring(0, res.length - 1);
  if (lastdash == res.length - 2) {
    let tail = res.substring(lastdash - 3, res.length).split("");
    tail[tail.length - 2] = tail[tail.length - 3];
    tail[tail.length - 3] = "-";
    res = res.slice(0, lastdash - 3).concat(tail.join(""));
  }
  return res;
}
