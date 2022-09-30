<!--
 * @Author: SoChichung
 * @Date: 2022-09-29 15:32:28
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-09-30 15:35:45
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
-->

# thoughts

(test)[https://leetcode.cn/problems/zero-matrix-lcci/]

## difficulty

- because when we traverse the matrix, if the current item is equal to zero, it is easy to set all the items in the same row to 0. However, it is hard to set the items in the same column to 0.
- What is more, when we traverse the next row if we meet 0, how shall we recognize the item if it is a non-zero or 0 initially?

## solution

- my solution is to set a new matrix called 'judge' for judgment which is required as below:
  - default value is 0
  - when `matrix[i][j]==0` set `judge[i][j]=0`
  - non-zero item is converted to 0 because there is a zero item in the same row or same column ,set `judge[i][j]=-1`

## traps

I met troubles in using `Array. fill()`
I set the judge like this initially:

```JavaScript
    let judge=new Array(rlength).fill(new Array(clength).fill(0))
```

But when I converted a non-zero item to -1, I found that all the items were changed.

- 坑：fill
