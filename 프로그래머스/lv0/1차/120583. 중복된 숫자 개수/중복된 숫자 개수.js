function solution(a, n) {
    var an = 0;
    
    for(var i = 0; i < a.length; i++) {
        a[i]==n?
            an++:null;
    }
    return an;
}