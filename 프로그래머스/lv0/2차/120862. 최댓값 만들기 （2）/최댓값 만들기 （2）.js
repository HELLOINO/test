function solution(numbers) {
    var answer = -1000000000;
    
    numbers.forEach((a,b) => {
        numbers.forEach((a1,b1) => {
            if(b != b1) {
                if(a*a1 > answer) answer = a*a1;
            }
        });
    });
    
    return answer;
}