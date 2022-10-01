<!--
 * @Author: SoChichung
 * @Date: 2022-10-01 00:34:57
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-01 17:42:45
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
-->

[题目](https://leetcode.cn/problems/reformat-phone-number/)

# thoughts

I use a flag called lastdash to record the last index of the dash's appearance.
When traversing the string, push the number into the res while ignoring the non-number items.
Moreover, after traversing the string, it is time to handle the tail of the string.
Here are two occasions:

- if(lastdash==res.length-1)
  it means the last dash is just at the end of the string.
  So delete it.

* if (lastdash ==res.length - 2)
  it seems to be complicated, but it is easy.
  Just exchange the position of the last dash and the item behind it.
