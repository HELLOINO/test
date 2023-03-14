function solution(age) {
    var answer = 2022;
    
    for(; age > 1; age--) {
        answer--;
    }
    return answer;
}