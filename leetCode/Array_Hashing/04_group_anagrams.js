/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]p

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.


 */

const isAnagram = (s, t) => {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();
  if (sortedS.length === sortedT.length) {
    for (let i = 0; i < sortedS.length; i++) {
      if (sortedS[i] !== sortedT[i]) return false;
    }
    return true;
  }
  return false;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  let returnedArray = [];
  for (let i = 0; i < strs.length; i++) {
    let newSet = [strs[i]];
    for (let j = i; j < strs.length; j++) {
        if (j !== i && isAnagram(strs[i], strs[j]))
            newSet.push(strs[j]);
    }
    returnedArray.push(newSet);
  }
  return returnedArray;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
