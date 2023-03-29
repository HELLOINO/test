function solution(dots) {
    var answer = 0;
    var max = [-9999, -9999];
    var min = [9999, 9999];
    
    for(var i = 0; i < dots.length; i++) {
        for(var j = 0; j < dots[i].length; j++) {
            if(max[j] < dots[i][j]) {
                max[j] = dots[i][j];
            }

            if(min[j] > dots[i][j]) {
                min[j] = dots[i][j];
            } 
        }
    }
    
    answer = (max[0] - min[0]) * (max[1] - min[1]); 
    return answer;
}