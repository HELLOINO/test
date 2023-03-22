function solution(my_string) {
    var answer = [];
    
    Array.from(my_string).map(a=>{
        if(a*1==a) {
            answer.push(Number(a));
        }
    });
    
    return answer.sort();
}