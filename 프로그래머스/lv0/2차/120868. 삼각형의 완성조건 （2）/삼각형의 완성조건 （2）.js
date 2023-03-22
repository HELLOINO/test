function solution(sides) {
    var answer = 0;
    
    sides = sides.sort((a,b) => {
        return a - b;
    })
    
    for(var i = 1; sides[1] + sides[0] > i; i++) {
        if(sides[1] < sides[0] + i){
            answer++;
        }
    }
    
    return answer;
}