console.log("sua lan 2 vao luc 19/08/2023 10:40 AM");
class GFG {
  checkPalindrome(s) {
    let n = s.length;
    let i = 0,
      j = n - 1;
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  Partition(res, s, idx, curr) {
    if (idx === s.length) {
      res.push([...curr]);
      return;
    }
    console.log(
      "------------------------------------idx::--------------------------idx là",
      idx
    );

    let t = "";

    // s=geeks
    for (let i = idx; i < s.length; i++) {
      t += s[i];
      console.log("chuỗi t là", t);
      console.log("chuỗi curr là ", curr);
      console.log("chuỗi res là ", res);

      if (this.checkPalindrome(t)) {
        curr.push(t);

        this.Partition(res, s, i + 1, curr);

        curr.pop();
      }
    }
  }
}

let ob = new GFG();

let res = [];
let s = "LEHUNGSON";
let idx = 0;
let curr = [];

ob.Partition(res, s, idx, curr);

for (let v of res) {
  let output = "";
  for (let it of v) {
    output += it + " ";
  }
  console.log("output palindrome là:", output);
}
