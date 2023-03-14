function solution(n) {
    var a = 0;
    for(;n > 0;n--) {
        if(n % 2 == 0) a+=n;
    }
    return  a;
}