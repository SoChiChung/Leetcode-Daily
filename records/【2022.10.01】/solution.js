/*
 * @Author: SoChichung
 * @Date: 2022-10-01 17:10:33
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-10-01 17:15:52
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function reformatNumber(number) {
    var res = "";
    var index = 0;
    var lastdot = -1;
    while (index < number.length) {
        if (number[index] != " " && number[index] != "-") {
            res = res + number[index];
            if (res.length - lastdot > 3 && index != number.length - 1) {
                res = res + "-";
                lastdot = res.length - 1;
            }
        }
        index = index + 1;
    }
    //   if (lastdot == res.length - 2) {
    //     let tail = res.substring(lastdot - 3, res.length).split("");
    //     tail[tail.length - 2] = tail[tail.length - 3];
    //     tail[tail.length - 3] = "-";
    //     res = res.slice(0, lastdot - 3).concat(tail.join(""));
    //   }
    return res;
}
var number = "4802066218-13110231308 ";
var res = reformatNumber(number);
console.log(res);
