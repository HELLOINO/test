function solution(n) {
    var a = 0;
    for(var i = 0; i < n.length; i++) {
        a += n[i];
    }
    return a/n.length;
}