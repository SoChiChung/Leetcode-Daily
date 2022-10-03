/*
 * @Author: SoChichung
 * @Date: 2022-08-14 20:39:02
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-14 20:39:06
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (charArray) {
  max = 0;
  score = 0;
  for (let i = 1; i < charArray.length; i++) {
    left = getLeftScore(charArray.slice(0, i));
    right = getRightScore(charArray.slice(i, i.length));
    max = left + right > max ? left + right : max;
  }
  return max;
};
getLeftScore = (str) => {
  score = 0;
  for (let i = 0; i < str.length; i++) score += Number(str[i] == "0");
  return score;
};
getRightScore = (str) => {
  score = 0;
  for (let i = 0; i < str.length; i++) score += Number(str[i]);
  return score;
};
