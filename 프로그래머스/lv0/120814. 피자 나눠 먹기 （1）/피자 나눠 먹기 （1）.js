function solution(n) {
    var a = 0;

    for(;;) {    
        if(a*7 >= n) {
            break;
        } else {
            a++;
        }
    }
    
    return a;
    // 피자 가게 망해라.
}