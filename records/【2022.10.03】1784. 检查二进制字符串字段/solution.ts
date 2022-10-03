/*
 * @Author: SoChichung
 * @Date: 2022-10-03 16:19:56
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-03 17:13:57
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function checkOnesSegment(s: string): boolean {
  let exp1 = /[1]+[0]+[1]/g;
  return !exp1.test(s);
}
