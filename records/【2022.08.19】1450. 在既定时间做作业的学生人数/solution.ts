/*
 * @Author: SoChichung
 * @Date: 2022-08-19 05:38:26
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-20 04:59:52
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */

function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let sum = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (endTime[i] >= queryTime && startTime[i] <= queryTime) sum = sum + 1;
  }
  return sum;
}

// function busyStudent2(
//   startTime: number[],
//   endTime: number[],
//   queryTime: number
// ): number {}

function binary(
  arr: number[],
  start: number,
  end: number,
  target: number
): number | undefined {
  let mid: number = (start + end) >> 1;
  while (end >= start) {
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) {
      start = mid;
      mid = ((start + end) >> 1) + 1;
    } else {
      end = mid;
      mid = ((start + end) >> 1) - 1;
    }
  }
  return -1;
}
