<!--
 * @Author: SoChichung
 * @Date: 2022-10-02 11:19:23
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-02 12:56:40
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
-->

start = "RXXLRXRXL"
thend = "XRLXXRRLX"

## steps

the key point to solve this problem is the index of 'L' and the index of 'R'
it means if 'L' is on the left of 'X' at the start, it will be on the right of 'X' by transform.
So compare the index of 'L' at the start with the index of 'L' at the end. If the former is more than the latter,` return false.`
