function solution(my_string) {
    var answer = 0;
    var s = Array.from(my_string+"a");
    var d = '';
    
    s.map(a => {    
        if(a * 1 || a * 1 == '0') {
            d += a+'';
        } else {
           if(d != '') {
                answer += Number(d);
                d = '';
           }
        }
    });
    
    return answer;
}