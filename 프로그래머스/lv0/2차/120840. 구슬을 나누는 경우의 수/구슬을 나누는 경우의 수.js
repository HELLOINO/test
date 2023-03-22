function solution(balls, share) {
    var answer = 0;
    var n = 1;
    var a = 1;
    var m = 1;
        
    for(var i = 1; i <= balls; i++) {
        n *= i;
    }
    
    for(var i = 1; i <= share; i++) {
        m *= i;
    }
    
     for(var i = 1; i <= (balls-share); i++) {
        a *= i;
    }
    
    answer = Math.round(n / (a * m));
    
    return answer;
}