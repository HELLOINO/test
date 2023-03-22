function solution(i, j, k) {
    var answer = 0;
    var a = '';
    var la = '';
    
    for(; i <= j; i++) {
        Array.from(String(i)).map(a => {
           if(a == k) {
               answer++;
           } 
        });
    }
    
    return answer;
}