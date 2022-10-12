/*
 * @Author: SoChichung
 * @Date: 2022-10-12 12:06:24
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-12 12:06:32
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function numComponents(head: ListNode | null, nums: number[]): number {
  let set = new Set<number>();
  for (const i of nums) set.add(i);
  let res = 0;
  // let cur = 0
  while (head != null) {
    if (set.has(head.val)) {
      while (head != null && set.has(head.val)) {
        head = head.next;
      }
      res++;
      // res = Math.max(cur, res)
    } else {
      head = head.next;
    }
  }
  return res;
}
