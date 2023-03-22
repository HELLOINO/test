function solution(s) {
    var answer = [];
    
    s = Array.from(s)
    s.map(a => {
        var c = 0;
        s.map(b => {
            if(a == b) {
                c++;
            }
        });
        if(c == 1) {
            answer.push(a);
        }
    });
    
    return answer.sort().join("");
}