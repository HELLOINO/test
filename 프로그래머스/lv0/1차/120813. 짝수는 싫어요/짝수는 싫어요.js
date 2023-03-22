function solution(n) {
    var a = [];
    for(;;) {
        n%2!=0?a.push(n):null;
        n--;
        if(n==0){
            break;
        }
    }
    return a.sort((a,b) => a-b);
}