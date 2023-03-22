function solution(n) {
    var ab = 0;
    
    for(var i = 0; i <= n; i++) {
        if(i * Math.floor(n/i) == n) {
            ab++;
        }
    }
    
    return ab;
}