function solution(before, after) {
    var answer = 0;
    
    before = Array.from(before).sort();
    after = Array.from(after).sort();
    
    if(before.join('') == after.join('')) {
        answer = 1;
    }
    
    return answer;
}