function solution(n, numlist) {
    var answer = [];
    numlist.map(a => {
        if(a%n==0) answer.push(a);
    })
    return answer;
}