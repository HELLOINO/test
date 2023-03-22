function solution(m) {
    var a= [0, m];
    for(;;) {
        if(a[1]-5500>=0) {
            a[0]++;
            a[1]-=5500;
        } else {
            break;
        }
    }
    return a;
}