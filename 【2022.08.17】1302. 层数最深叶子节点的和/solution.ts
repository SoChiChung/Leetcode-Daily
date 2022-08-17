/*
 * @Author: SoChichung
 * @Date: 2022-08-17 06:37:14
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-17 17:48:50
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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
type nodeinfo = { level: number; count: number };
function deepestLeavesSum(root: TreeNode | null): number {
    return deepsearch(root,{level:0,count:root.val}).count
 }

function deepsearch(
    node: TreeNode | null,
    { level, count }: nodeinfo
): nodeinfo {
    if (node === null) return { level: level - 1, count };
    //还有子节点
    if (!node.left && !node.right) { return { level: level + 1, count: node.val } }
    let leftinfo = deepsearch(node.left, { level: level + 1, count: count });
    let rightinfo = deepsearch(node.right, { level: level + 1, count: count });

    return leftinfo.level == rightinfo.level ? { level: leftinfo.level, count: leftinfo.count + rightinfo.count } : (leftinfo.level > rightinfo.level ? { level: leftinfo.level, count: leftinfo.count } : {
        level: rightinfo.level, count: rightinfo.count
    })