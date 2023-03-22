function solution(n, n1, n2) {
    var a = [];
    
    for(var i = 0;; i++) {
        if(i >= n1 && i <= n2) {
            a.push(n[i]);
        } else if(i > n2) {
            break;
        }
    }
    
    return a;
}