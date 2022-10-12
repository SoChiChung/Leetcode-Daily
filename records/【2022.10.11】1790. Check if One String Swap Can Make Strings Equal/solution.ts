/*
 * @Author: SoChichung
 * @Date: 2022-10-11 20:17:08
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-12 11:03:26
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  let first = -1;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) != s2.charAt(i)) {
      if (first == -1) {
        first = i;
        continue;
      } else {
        let s = swapString(s1, first, i);
        console.log(first, i);
        console.log(s, s1, s2);
        return s2 == s;
      }
    }
  }
  return true;
}

function swapString(s1: string, index1: number, index2: number): string {
  return (
    s1.substring(0, index1) +
    s1.charAt(index2) +
    s1.substring(index1 + 1, index2 - index1) +
    s1.charAt(index1) +
    s1.substring(index2 + 1, s1.length)
  );
}
let s1 = "lccjbuceoxmp";
let s2 = "lccpbuceoxmj";
let s3 = "bdnaasda";
let s4 = "bankdasda";
console.log(s1.substring(3,11))
// console.log(swapString(s4, 1, 4));
// s1.substring(3 + 1, 11 - 3);
// console.log(s1);
// areAlmostEqual(s1, s2);
