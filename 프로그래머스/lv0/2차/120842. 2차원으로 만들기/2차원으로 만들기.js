function solution(num_list, n) {
    var answer = [];
    var d = [];
    
    num_list.forEach((a, b, c) => { 
        d.push(a);
        if((b + 1)%n == 0) {
            answer.push(d);
            d = [];
        }
    });

    return answer;
}