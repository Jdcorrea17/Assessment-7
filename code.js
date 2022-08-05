function sum(nums){
    for(let i = 0; i < nums.length; i++ ) {
        for(let n = 0; n < nums.length; n++) {
            if(i !== n) {
                if(nums[i] + nums[n] === 0) {
                    console.log(true)
                } else {
                    console.log(false)
                }
            }
        }
    }
}

let nums = [-15, 20, 30, 15, 5]
console.log(sum(nums))

function Unique(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(Unique('moose'))

function pangram(arr) {
    let strArr = arr.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        } else {
            return true
        }
    }
}

 console.log(pangram("The quick brown fox jumps over the lazy dog!"))

 function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
console.log(findLongestWord("The cow jumped over the moon"));