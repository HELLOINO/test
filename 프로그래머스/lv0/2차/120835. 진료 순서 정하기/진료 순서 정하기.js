function solution(emergency) {
    var answer = [];
    
    emergency.map(a => {
        var c = 1;
        
        emergency.map(b => {
           if(a < b) {
               c++;
           } 
        });
        answer.push(c);
    });
    
    return answer;
}