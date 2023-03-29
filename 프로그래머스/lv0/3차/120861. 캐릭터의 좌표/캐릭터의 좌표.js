function solution(keyinput, board) {
    var answer = [0, 0];
    var x = ~~(board[0]/2);
    var y = ~~(board[1]/2);
    
    keyinput.map(a => {
       if(a == "left" && answer[0] != -x) {
           answer[0] -= 1;
       } else if(a == "right" && answer[0] != x) {
           answer[0] += 1;
       }
        
        if(a == "down" && answer[1] != -y) {
           answer[1] -= 1;
       } else if(a == "up" && answer[1] != y) {
           answer[1] += 1;
       }
    });

    return answer;
}