function solution(n) {
    var answer = 0;
    
    for(var i = 0; i < n; i++) {
        if(i % 3 == 0 || String(i).indexOf('3') != -1) {
            n++;
        }
        answer = i;
    }
    
    return answer;
}