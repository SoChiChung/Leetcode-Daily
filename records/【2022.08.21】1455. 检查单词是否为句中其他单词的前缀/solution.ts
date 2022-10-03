/*
 * @Author: SoChichung
 * @Date: 2022-08-21 18:21:58
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-21 18:28:35
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function isPrefixOfWord(sentence: string, searchWord: string): number {
    let arr=sentence.split(' ')
    let reg=new RegExp('^'+searchWord+'')
    for (let i=0;i<arr.length;i++){
        if(reg.test(arr[i]))
            return i+1
    }
    return -1
};
let searchWord = "burg";
let reg = new RegExp("^" + searchWord + ")
