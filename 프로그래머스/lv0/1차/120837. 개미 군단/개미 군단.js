function solution(hp) {
    var a = 0;
    
    a = Math.floor(hp/5);
    hp = hp%5;
    
    a += Math.floor(hp/3);
    hp = hp%3;

    a += hp;
    
    return a;
}