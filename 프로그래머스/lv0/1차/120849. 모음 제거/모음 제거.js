function solution(m) {
    var c = ['a', 'e', 'i', 'o', 'u'];
    
    c.map(a => {
       m = m.replaceAll(a, '');
    });
    
    return m;
}