function solution(array, n) {
    var answer = -1000;

    array.sort((a, b) => a - b).map(a => {
        if(Math.abs(n-a) < Math.abs(n-answer)) {
            answer = a;
        }
    });
    
    return answer;
}