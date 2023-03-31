function sumZero (array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i] + array[j] === 0 && i !== j){
                return true
            }
        }
    }
    return false
}

console.log(sumZero([1, 0, 3, -12]))

// The sumZero function has a runtime complexity of O(n^2).  Worst case, the function will have to run through the array one time for every element in the array
// The space complexity is constant. i and j are used to store temporary data, then are erased.


function uniqueChar(str){
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < str.length; j++){
            if (str[i] === str[j] && i !== j){
                return false
            }
        }
    }
    return true
}

console.log(uniqueChar("Moonday"))

// The uniqueChar function also has a runtime complexity of O(n^2).
// The space complexity is also constant.


function pangram(str){
    str = str.toLowerCase();
    let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < alphabetArr.length; j++){
            if (str[i] === alphabetArr[j]){
                alphabetArr.splice(j, 1)
            }
        }
    }
    if (alphabetArr.length === 0){
        return true;
    } else {
        return false;
    }
}

console.log(pangram("Amazingly few discotheques provide jukeboxes"))

// The pangram function is O(n).  Though an array and a string are getting compared, the array has a finite length, and thus does not affect the time complexity in the same way that a potentially infinite array would.
// The space complexity is constant because the alphabetArr array does not grow (but it does shrink, so would that technically be linear even though it is finite?)


function findLongestWord(wordArray){
    let longest = 0
    for (let i = 0; i< wordArray.length; i++){
        if (wordArray[i].length > longest){
            longest = wordArray[i].length;
        }
    }
    return longest
}

console.log(findLongestWord(["hi", "hello", "qwertyuiop"]))

// The findLongestWord function has a time complexity of O(n).  The array can be infinite, but it only loops through it once and returns the length of the longest word.
// The space complexity is linear.  As the length of the longest word grows, so does the size of the "longest" variable.  This could end up being an infinite number of digits long.