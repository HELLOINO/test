function solution(s1, s2) {
    var c = 0;
    s1.map(a => {
        s2.map(b => {
           if(a == b) c++; 
        });
    });
    return c;
}