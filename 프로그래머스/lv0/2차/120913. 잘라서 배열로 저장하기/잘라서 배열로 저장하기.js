function solution(my_str, n) {
    var answer = [];
    var c = '';
    my_str = Array.from(my_str);
    
    my_str.forEach((a,b) => {
        c += a;
       if((b+1)%n == 0) {
           answer.push(c);
           c = '';
       } else if(b == my_str.length - 1) {
           answer.push(c);
       }
    });
    
    return answer;
}