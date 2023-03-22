function solution(n) {
    var answer = 0;
    
    for(var i = 4; i <= n; i++) {
        for(var j = 2; j < i; j++) {
            if(i%j == 0) {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}