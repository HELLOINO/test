function solution(age) {
    var answer = '';
    
    age = Array.from(String(age));
    
    age.map(a => {
        answer += (String.fromCharCode(Number(a)+97));
    });

    
    return answer;
}