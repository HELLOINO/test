function solution(array) {
    var answer = 0;
    Array.from(array.join("")).map(a =>{
        if(a == 7) {
            answer++;
        }
    })
    return answer;
}