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

function chuoiSoCong(s) {
  const n = s.length;
  console.log("so luong phan tu", n);
  if (n < 3) {
    return false;
  }
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Number(s[i]));
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n - 2; k++) {
        console.log(numbers[i], numbers[j], numbers[k]);
        // if (numbers[i] + numbers[j] == numbers[k]) {
        //   return true;
        // }
      }
    }
  }
  return false;
}

var n = "00202";
console.log(`ket qua cua ${n}`, chuoiSoCong(n));
let a = 1;
let b = 2;
console.log(a + b);
