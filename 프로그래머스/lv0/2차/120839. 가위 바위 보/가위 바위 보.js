function solution(rsp) {
    var answer = '';
    Array.from(rsp).map(a => {
       answer += (a==0?5:a==2?0:2); 
    });
    return answer;
}