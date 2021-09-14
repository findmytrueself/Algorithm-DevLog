function solution(n, words) {
    let answer = [];
    let usedWords = [];
    let word = '';
    let [countX, countY] = [1, 0];
    let sliceWords = words.slice();
    sliceWords.some((el) => {
        word = sliceWords.shift();
        if (sliceWords.length === 0) {
            countY++;
            if (usedWords.includes(word) === false) {
                return (answer = [0, 0]);
            } else {
                return (answer = [countY, countX]);
            }
        }
        if (word[word.length - 1] === sliceWords[0][0]) {
            if (usedWords.includes(word)) {
                countY++;
                return (answer = [countY, countX]);
            }
            countY++;
            usedWords.push(word);
            if (countY % n === 0) {
                countX++;
                countY = 0;
            }
        } else if (word[word.length - 1] !== sliceWords[0][0]) {
            if (usedWords.includes(word)) {
                countY++;
                return (answer = [countY, countX]);
            }
            countX++;
            return (answer = [countY, countX]);
        }
    });
    console.log(answer);
    return answer;
}

// debugger;
// solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]) // [3,3]
// solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]); [1,3]
// solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "e", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])
// solution(2,["land", "dream", "mom", "mom", "ror"]) // [2,2]
// solution(2, ['land', 'dream', 'mom', 'mom']) // [2,2]
// solution(2,["qwe", "eqwe", "eqwe"]) //[1,2]
// solution(2, ['qwe', 'eqwe', 'eqqwe', 'eqqwe']); // [1,2]
// solution(2, ['qwe', 'qwe']); //[2,1]
// solution(2, ['ewe', 'ewe']); // [2,1]
// solution(2, ['ewe', 'ewq']); // [0,0]
solution(10, ['kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']); // [9,1]
