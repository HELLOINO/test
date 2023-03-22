function solution(n) {
    var a = [];
    
    for(var i = n.length - 1; i >= 0; i--) {
        a.push(n[i]);    
    }
    
    return a;
}