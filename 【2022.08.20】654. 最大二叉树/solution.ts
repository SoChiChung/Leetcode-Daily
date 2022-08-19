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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length == 0) return null;
  if (nums.length == 1) return new TreeNode(nums[0]);
  let max = nums[0];
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(
    nums.slice(maxIndex + 1, nums.length)
  );
  return root;
}
