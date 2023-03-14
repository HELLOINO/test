function solution(n) {
    var a = 1;
    var b = 0;
    
    for(;;) {
        b = a*a>n?2:a*a==n?1:0;
        if(b != 0) break;
        a++;
    }
    return b;
}