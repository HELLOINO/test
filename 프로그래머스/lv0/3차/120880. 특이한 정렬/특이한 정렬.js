function solution(numlist, n) {
    var answer = [];
    
    var num2 = numlist.map(a => {
        return a - n > 0 ? Math.abs(a - n) - 0.5 : Math.abs(a - n);
    });
    
    for(var i = 0; i < num2.length; i++) {
        var min = Math.min(...num2);
  
        for(var j = 0; j < num2.length; j++) {
            if(min == num2[j]) {
                answer.push(numlist[j]);
                num2[j] = 99999;
                break;
            }
        }
    }
    
    return answer;
}