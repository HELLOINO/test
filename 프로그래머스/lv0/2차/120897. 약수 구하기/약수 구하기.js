function solution(n) {
    var answer = [];
    
    for(var i = 0; i <= n; i++) {
        if(n%i == 0) {
            answer.push(i);
        }
    }
    
    return answer;
}