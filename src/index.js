module.exports = function reverse (n) {
    let a = Array.from(n.toString());
    a.reverse();
    let b = a.join("");
    return +b;
    
}
