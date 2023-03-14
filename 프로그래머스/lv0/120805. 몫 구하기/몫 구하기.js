function solution(num1, num2) {
    var answer = 0;
    
    for(var i = 0; num1 >= num2; i++) {
        num1 -= num2;
        answer++;
    }
    
    return answer;
}