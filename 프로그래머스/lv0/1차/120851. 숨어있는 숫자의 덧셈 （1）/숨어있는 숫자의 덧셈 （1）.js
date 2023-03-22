function solution(m) {
    var b = 0;
    Array.from(m).map(a => {
       if(a*1) {
           b += a*1;
       } 
    });
    return b;
}