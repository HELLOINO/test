function solution(n) {
    var a = [0, 0];
    
    // n.map(function(c) {
    //     return c%2==0?a[0]++:a[1]++;
    // });
    n.map(c => {
        return c%2==0?a[0]++:a[1]++;
    });
    
    return a;
}