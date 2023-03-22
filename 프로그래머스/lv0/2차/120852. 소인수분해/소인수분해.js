function solution(n) {
    var answer = [];
    
    for(var i = 2; ; i++) {
        if(n%i == 0) {
            n = Math.floor(n/i);
            if(answer.indexOf(i) == -1) {
                answer.push(i);
            }
            
            i = 1;
        }

        if(n == 1) {
            break;
        }
    }
    
    return answer;
}