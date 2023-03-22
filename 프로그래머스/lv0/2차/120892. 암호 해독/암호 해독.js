function solution(cipher, code) {
    var answer = '';
    Array.from(cipher).forEach((a, b, c)=>{
        answer += (b+1)%code==0?a:'';
    });
    return answer;
}