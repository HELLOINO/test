function solution(my_string) {
  
    
    my_string = my_string.split(" ");
    my_string = Array.from(my_string);
    
    var answer = my_string[0];
    my_string.forEach((a,b,c) => {
       if(b >= 1) {
           if(a == '+') {
               answer = Number(answer) + Number(my_string[b+1]);
           } else if(a == '-') {
                answer = Number(answer) - Number(my_string[b+1]);
           }
       }
    });
    
    return answer;
}