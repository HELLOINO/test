function solution(A, B) {
    var answer = 0;
    var a = Array.from(A);
    
    for(var i = 0; i < a.length; i++) {
        if(a.join("") != B) {    
            a.unshift(a[a.length - 1]);
            a.pop();
            answer++;
        }
    }
    
    return answer == a.length? -1 : answer;
}