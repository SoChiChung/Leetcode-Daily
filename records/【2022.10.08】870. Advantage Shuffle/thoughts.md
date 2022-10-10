<!--
 * @Author: SoChichung
 * @Date: 2022-10-08 12:04:23
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-10 14:14:31
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
-->

# thoughts

[quiz](https://leetcode.cn/problems/advantage-shuffle/)

## steps

1. traverse nums2 and nums1 when : nums1[i]>nums2[j]:
2. set a array called `flag` to record the whether there is nums1[i]>nums2[j]
3. set a array called `output` as the result
4. if nums2[j]< nums1[i] :
   1. if output[j] is not defined :
      just let output[j]=nums1[i] and flag[j] coverted -1 to 1
   2. if output[j] is defined:
      1. if flag[j] ==1
         1. convert output[j] to minimum of output[j] and nums1[i]
         2. and put the maxmum in the place where flag[m] is -1
         3. compare nums[m] and maxmum if maxmum is bigger just set flag[m] to 1
      2. if flag[j]==-1
         1. convert output[j] to nums1[i]
         2. and put the inital output[j] in the place where flag[m] is -1
         3. compare nums[m] and maxmum if maxmum is bigger just set flag[m] to 14.
      3. set a value named isset to judge if there is a nums1[i] less than all the value of nums2 if it is false put it in the place where flag[m] is -1
