/*
 * @Author: SoChichung
 * @Date: 2022-08-16 08:47:35
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-16 08:47:47
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length != word2.length) return false;
  let letterMap1 = letterMap(word1);
  let letterMap2 = letterMap(word2);

  for (let key of letterMap1.keys()) {
    if (!letterMap2.has(key)) return false;
  }

  return (
    JSON.stringify([...letterMap2.values()].sort()) ==
    JSON.stringify([...letterMap1.values()].sort())
  );
}

function letterMap(word) {
  let map = new Map();
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else map.set(letter, 1);
  }
  return map;
}
