function sum(nums){
    for(let i = 0; i < nums.length; i++ ) {
        for(let n = 0; n < nums.length; n++) {
                if(nums[i] + nums[n] === 0) {
                    return true
        } 
        }
    }
    return false
}
//runtime 0(n^2)
//space 0(n)
let nums = [-15, 20, 30, 15, 5]
console.log(sum(nums))

function Unique(string) {
    let uniqueChars = new Set([])
    for (let i = 0; i < string.length; i++) {
      uniqueChars.add(string[i])
    }
    return uniqueChars.size === string.length
  }
// runtime 0(1)
// space 0(n)
  console.log(Unique('moon'))

const pangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26
// rutime 0(n)
// space 0(n)
 console.log(pangram("The quick brown fox jumps over the lazy dog!"))

 function findLongestWord([arr]) {
    var longestWord = arr.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
//runtime 0(n log(n))
// space 0(n)
console.log(findLongestWord(["The cow jumpeds over the moon"]));