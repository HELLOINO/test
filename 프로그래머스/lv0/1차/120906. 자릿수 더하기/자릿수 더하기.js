function solution(n) {
    var b = 0;
    for(;;) {
        b += n>=0?n%10:0;
        n = Math.floor(n/10);
        if(n == 0) {
            break;
        }
    }
    
    return b;
}