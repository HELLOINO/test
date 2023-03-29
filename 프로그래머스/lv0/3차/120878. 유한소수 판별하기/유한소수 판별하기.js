function solution(a, b) {
    var answer = 0;
    
    for(var i = 2; ; i++) {
        if(a%i == 0 && b%i == 0) {
            a = ~~(a/i);
            b = ~~(b/i);
            i = 1;
        }
        
        if(a < i) break;
    }
    
    for(;;) {
        if(b%2 == 0)        b /= 2;
        else if(b%5 == 0)   b /= 5;
        else                break;
    }
    
    answer = b==1?1:2;
    
    return answer;
}