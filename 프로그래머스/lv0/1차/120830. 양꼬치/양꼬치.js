function solution(n, k) {
    var a = 0;
    a += n * 12000;
    k -= Math.floor(n/10);
    if(k > 0) a += k * 2000;

    return a;
}