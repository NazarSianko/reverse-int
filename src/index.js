module.exports = function reverse (n) {
let arr = Array.from(Math.abs(n).toString());
    arr.reverse();
    let str = arr.join("");
    return +str;
}
