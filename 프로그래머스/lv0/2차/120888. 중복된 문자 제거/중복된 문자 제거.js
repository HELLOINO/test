function solution(my_string) {
    var answer = [];
    return [...new Set(my_string)].join('');
    var d = Array.from(my_string);
    var c = 0;
    
    for(var i = 0; i < d.length; i++) {
        c = 0;
        for(var j = i - 1; j >= 0; j--) {
            if(d[i] == d[j]) {
                c++;
                break;
            }
        }
        if(c == 0) {
            answer.push(d[i]);
        }
    }
    
    return answer.join("");
}