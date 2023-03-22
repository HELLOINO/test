function solution(my_string, num1, num2) {
    var answer = '';
    
    Array.from(my_string).forEach((a, b, c) => {
        if(b == num1) {
            answer += c[num2];
        } else if(b == num2) {
            answer += c[num1];
        } else {
            answer += a;
        }
    });
   
    return answer;
}