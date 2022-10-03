/*
 * @Author: SoChichung
 * @Date: 2022-10-02 13:37:10
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-03 15:21:56
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function canTransform(start: string, end: string): boolean {
  let l = 0,
    r = 0;
  for (let i = 0; i < start.length; i++) {
    if (
      (start.charAt(i) == "R" && l < 0) ||
      (start.charAt(i) == "L" && r > 0)
    ) {
      return false;
    }
    r += start.charAt(i) == "R" ? 1 : 0;
    l += start.charAt(i) == "L" ? 1 : 0;
    r -= end.charAt(i) == "R" ? 1 : 0;
    l -= end.charAt(i) == "L" ? 1 : 0;
    if ((l != 0 && r != 0) || l > 0 || r < 0) {
      return false;
    }
  }
  return l == r && l == 0;
}
