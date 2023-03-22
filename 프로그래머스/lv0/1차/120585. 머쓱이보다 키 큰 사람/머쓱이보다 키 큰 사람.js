function solution(a, b) {
    var c = 0;
    
    a.map(a => {
        if(a>b) c++;
    });
    
    return c;
}