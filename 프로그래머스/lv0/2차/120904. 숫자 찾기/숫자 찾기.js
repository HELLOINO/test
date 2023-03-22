function solution(num, k) {
    var a = String(num).indexOf(k);
    
    if(a != -1) {
        a++;
    }
    
    return a;
}