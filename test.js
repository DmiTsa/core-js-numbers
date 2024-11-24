function getCountOfOddNumbers(number) {
    let count = 0;
    for (let i = 0; i <= number; i += 1) {
        if (i % 2 !== 0) {
            count += 1;
        }
    }
    return count;
}

console.log(getCountOfOddNumbers(0));

