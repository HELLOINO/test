function solution(order) {
    var answer = 0;
    
    Array.from(String(order)).map(a => {
       if(a == 3 || a == 6 || a == 9) {
           answer++;
       }
    });
    
    return answer;
}