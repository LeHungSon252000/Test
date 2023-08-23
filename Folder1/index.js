console.log("sua lan 2 vao luc 19/08/2023 10:40 AM");
// class GFG {
//   checkPalindrome(s) {
//     let n = s.length;
//     let i = 0,
//       j = n - 1;
//     while (i < j) {
//       if (s[i] !== s[j]) return false;
//       i++;
//       j--;
//     }
//     return true;
//   }

//   Partition(res, s, idx, curr) {
//     if (idx === s.length) {
//       res.push([...curr]);
//       return;
//     }
//     console.log(
//       "------------------------------------idx::--------------------------idx là",
//       idx
//     );

//     let t = "";

//     // s=geeks
//     for (let i = idx; i < s.length; i++) {
//       t += s[i];
//       console.log("chuỗi t là", t);
//       console.log("chuỗi curr là ", curr);
//       console.log(" số lượng chuỗi res là ", res.length);
//       console.log("chuỗi res là ", res);

//       if (this.checkPalindrome(t)) {
//         curr.push(t);

//         this.Partition(res, s, i + 1, curr);

//         curr.pop();
//       }
//     }
//   }
// }

// let ob = new GFG();

// let res = [];
// let s = "MOMANDDAD";
// let idx = 0;
// let curr = [];

// ob.Partition(res, s, idx, curr);

// for (let v of res) {
//   let output = "";
//   for (let it of v) {
//     output += it + " ";
//   }
//   console.log("output palindrome là:", output);
// }
//////-------------------------BÀI 2

// function checkPalindrome(str) {
//   // Calculating string length
//   const len = str.length;

//   // Traversing through the string
//   // upto half its length
//   for (let i = 0; i < len / 2; i++) {
//     // Comparing i th character
//     // from starting and len-i
//     // th character from end
//     if (str[i] != str[len - i - 1]) return false;
//   }

//   // If the above loop doesn't return then it is
//   // palindrome
//   return true;
// }
// console.log(`check ket qua 12322`, checkPalindrome("12322"));

///Given a set of characters and a positive integer k, print all possible strings of length k that can be formed from the given set.
///Cho một tập hợp các ký tự và một số nguyên dương k, hãy in tất cả các chuỗi có thể có độ dài k có thể được tạo thành từ tập hợp đã cho.
/**
 * Input: 
set[] = {'a', 'b'}, k = 3

Output:
aaa
aab
aba
abb
baa
bab
bba
bbb
 */

// function printAllKLength(set, k) {
//   let n = set.length;
//   printAllKLengthRec(set, "", n, k);
// }

// // The main recursive method
// // to print all possible
// // strings of length k
// function printAllKLengthRec(set, prefix, n, k) {
//   // Base case: k is 0,
//   // print prefix
//   if (k == 0) {
//     document.write(prefix + "<br>");
//     return;
//   }

//   // One by one add all characters
//   // from set and recursively
//   // call for k equals to k-1
//   for (let i = 0; i < n; ++i) {
//     console.log("k-th ::", k);
//     // Next character of input added
//     console.log("lan thu ", i);

//     let newPrefix = prefix + set[i];
//     console.log("prefix::", prefix);
//     console.log("set[i]::", set[i]);

//     console.log("newPrefix::", newPrefix);

//     // k is decreased, because
//     // we have added a new character
//     printAllKLengthRec(set, newPrefix, n, k - 1);
//   }
// }

// // Driver Code
// document.write("First Test<br>");
// let set1 = ["H", "L", "S"];
// let k = 2;
// printAllKLength(set1, k);

/**
 * Input : s = “235813”
Output : true
2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13

Input : s = “199100199”
Output : true
1 + 99 = 100, 99 + 100 = 199
 */

// function chuoiSoCong(s) {
//   const n = s.length;
//   console.log("so luong phan tu", n);
//   if (n < 3) {
//     return false;
//   }
//   let numbers = [];
//   for (let i = 0; i < n; i++) {
//     numbers.push(Number(s[i]));
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n - 2; k++) {
//         console.log(numbers[i], numbers[j], numbers[k]);
//         // if (numbers[i] + numbers[j] == numbers[k]) {
//         //   return true;
//         // }
//       }
//     }
//   }
//   return false;
// }

// var n = "00202";
// console.log(`ket qua cua ${n}`, chuoiSoCong(n));
// let a = 1;
// let b = 2;
// console.log(a + b);

const Dequy = (N, idx) => {
  if (N == idx) {
    console.log("So :", idx);
    return;
  }
  console.log("so: ", idx);
  return Dequy(N, idx + 1);
};
console.log("Exercise 1:");
Dequy(10, 1);
console.log("============================================");

console.log("Exercise 2:");

const DeQuy_Bai2 = (N) => {
  if (N == 1) {
    console.log("Number ", N);
    return;
  }
  console.log("Number:", N);
  return DeQuy_Bai2(N - 1);
};
DeQuy_Bai2(9);

console.log("============================================");

console.log("Exercise 3:");
const Sum_Bai3 = (arr, idx) => {
  if (idx >= arr.length - 1) {
    return arr[idx];
  }
  return arr[idx] + Sum_Bai3(arr, idx + 1);
};

const arr = [1, 2, 3];
// console.log("SUM BAI 3 NE ", Sum_Bai3(arr, 0));

const DeQUy_Bai3 = (arr) => {
  const Sum = Sum_Bai3(arr, 0);
  console.log("so Trung Binh:", Sum / arr.length);
};

DeQUy_Bai3(arr);
console.log("============================================");
console.log("Exercise 4:");

const DeQuy_Bai4 = (N) => {
  if (N <= 1) {
    return N;
  }
  return N + DeQuy_Bai4(N - 1);
};
console.log("ket qua bai 4", DeQuy_Bai4(5));
console.log("============================================");

/**
 * Given a decimal number as input, we need to write a program to convert the given decimal number into an equivalent binary number.
 */

const So10phan_SANG_2Phan = (N, res = "") => {
  let a = N % 2;
  a = parseInt(a);
  res = a + res;

  if (N <= 1) {
    console.log("res la", res);
    return 1;
  }
  console.log("res la", res);
  console.log("So N la", parseInt(N));
  console.log("so du a la ", parseInt(a));

  return So10phan_SANG_2Phan(parseInt(N / 2), res);
};
So10phan_SANG_2Phan(12);
console.log("============================================");

console.log("Bai 5, Exercise 5 , in Chuoi Dao Nguoc");
const InChuoiDaoNguoc = (str, idx, revstr = "") => {
  revstr = revstr + str[idx];

  console.log(" idx la thu ", idx, "revstr la ", revstr);

  if (idx <= 0) {
    console.log("reverse string la ", revstr);
    return revstr;
  }

  return InChuoiDaoNguoc(str, idx - 1, revstr);
};
var str = "LEHUSO";
var revstr = "";
InChuoiDaoNguoc(str, str.length - 1);
// console.log("BAI TAP:", InChuoiDaoNguoc(str, str.length));

console.log("============================================");

/**
 * Given a string calculate length of the string using recursion.
 */

const LengthOfString = (str, idx) => {
  if (idx <= 0) {
    return 1;
  }
  return 1 + LengthOfString(str, idx - 1);
};

const str2 = "LEHUSO123 4 5 6";
console.log(`so ky tu cua ${str2} la :`, LengthOfString(str2, str2.length - 1));
console.log("============================================");
/**
 * Given a number, we need to find sum of its digits using recursion.
Examples: 
 

Input : 12345
Output : 15

Input : 45632
Output :20
 */

const SumOfNum = (Num) => {
  if (Num <= 9) {
    return Num;
  }
  let a = Num % 10;
  return a + SumOfNum(parseInt(Num / 10));
};
const num = 123456710;
console.log(`tong so chu so ${num}`, SumOfNum(num));
console.log("============================================");

/**
 * Given an integer array of coins[ ] of size N representing different types of denominations and an integer sum, the task is to find the number of ways to make sum by using different denominations.  

Note: Assume that you have an infinite supply of each type of coin. 

Examples: 

Input: sum = 4, coins[] = {1,2,3}, 
Output: 4
Explanation: there are four solutions: {1, 1, 1, 1}, {1, 1, 2}, {2, 2}, {1, 3}. 
 */

const sum = 4;
const arr3 = [1, 2, 3];
const ChangeCoinEqualToSum = (sum, arr, idx, count = 0) => {};
console.log("============================================");

/*
Recursive Programs to find Minimum and Maximum elements of array
Read
Discuss
Courses
Practice
Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion.

Examples : 

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: min = -5, max = 8

Input: arr = {1, 4, 45, 6, 10, -8};
Output: min = -8, max = 45
BAI TAP 2
Input: sum = 10, coins[] = {2, 5, 3, 6}
Output: 5
Explanation: There are five solutions: 
{2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}.
*/
function count(coins, n, sum) {
  // If sum is 0 then there is 1 solution
  // (do not include any coin)
  if (sum == 0) return 1;

  // If sum is less than 0 then no
  // solution exists
  if (sum < 0) return 0;

  // If there are no coins and sum
  // is greater than 0, then no
  // solution exist
  if (n <= 0) return 0;

  // count is sum of solutions (i)
  // including coins[n-1] (ii) excluding coins[n-1]
  return count(coins, n - 1, sum) + count(coins, n, sum - coins[n - 1]);
}

// Driver program to test above function
var coins = [1, 2, 3];
var n = coins.length;
console.log("ham doi xu", count(coins, n, 4));

console.log("========================================================");
const FindMinAndMax = (
  arr,
  idx,
  min = Number.MAX_SAFE_INTEGER,
  max = Number.MIN_SAFE_INTEGER
) => {
  if (idx <= 0) {
    return {
      min,
      max,
    };
  }
  if (arr[idx] > max) {
    console.log("chay vo if MAX");
    max = arr[idx];
    console.log("max la: ", max);
  }
  if (arr[idx] < min) {
    console.log("chay vo if MIN");
    min = arr[idx];
    console.log("min la:", min);
  }
  return FindMinAndMax(arr, idx - 1, min, max);
};

const array1 = [1000, 3, 4, 5, -7, 0, 100];
console.log(
  "so be nhat va lon nhat la : ",
  FindMinAndMax(array1, array1.length - 1)
);
console.log("======================================");
