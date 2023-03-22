function solution(s) {
    var answer = 0;
    
    s = s.split(" ");
    
    s.forEach((a,b) => {
       if(a == 'Z') {
           s[b-1] = 0; 
           s[b] = 0;
       } 
    });
    
    s.map(a => {
       answer += Number(a);
    });
        
    return answer;
}