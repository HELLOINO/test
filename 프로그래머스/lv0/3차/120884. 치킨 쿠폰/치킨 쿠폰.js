function solution(chicken) {
    var answer = Math.floor(chicken/10);
    var coo = answer;
    var nom = chicken%10;
    
    for(;;) {
        nom += coo%10;
        coo = Math.floor(coo/10);
 
        if(nom >= 10) {
            nom -= 10;
            coo += 1;
        }
        if(coo == 0) {
            break;
        } else {
            answer += coo;
        }
    }
    
    return answer;
}