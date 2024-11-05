function getFibonacciNumber(index) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= index; i += 1) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(getFibonacciNumber(0));
