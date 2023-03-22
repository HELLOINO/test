function solution(spell, dic) {
    var answer = 1;
    var c = 0;
    
    dic.map(a => {
       spell.map(b => {
           if(a.indexOf(b) == -1 && c != 5) {
               c = 2;
               answer = 2;
           }
       });
        if(c == 0 || c == 5) {
            c = 5;
            answer = 1;
        } else {
            c = 0;
        }
    });
    
    return answer;
}