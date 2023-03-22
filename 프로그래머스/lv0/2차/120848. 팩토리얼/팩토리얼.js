function solution(n) {
    var a = 0;
    
    for(var i = 1; ; i++) {
        n /= i;
    
        if(n < 1) {
            a = i - 1;
            break;
        }
    }
    
    return a;
}