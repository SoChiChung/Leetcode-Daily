/*
 * @Author: SoChichung
 * @Date: 2022-08-22 22:48:16
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-22 22:48:25
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function printTree(root: TreeNode | null): string[][] {
  let height = getHeight(root, 0);
  let res = new Array(height + 1).fill("");
  for (let i = 0; i < res.length; i++)
    res[i] = new Array(Math.pow(2, height + 1) - 1).fill("");
  const row = 0;
  const col = (Math.pow(2, height + 1) - 1 - 1) / 2;
  res[row][col] = root.val + "";

  print(root.left, height, row + 1, col - Math.pow(2, height - row - 1), res);
  print(root.right, height, row + 1, col + Math.pow(2, height - row - 1), res);
  return res;
}
function getHeight(root: TreeNode | null, cur: number): number {
  if (!root || (!root.left && !root.right)) return cur;
  let left = getHeight(root.left, cur + 1);
  let right = getHeight(root.right, cur + 1);
  return left > right ? left : right;
}
function print(
  node: TreeNode,
  height: number,
  row: number,
  col: number,
  arr: any
) {
  if (node == null) return;
  arr[row][col] = node.val + "";
  print(node.left, height, row + 1, col - Math.pow(2, height - row - 1), arr);
  print(node.right, height, row + 1, col + Math.pow(2, height - row - 1), arr);
}
