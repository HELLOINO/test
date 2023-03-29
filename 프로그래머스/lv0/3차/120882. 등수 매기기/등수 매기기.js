function solution(score) {
    var val = [];
    
    score.map(a => {
        val.push(a[0] + a[1]);
    });

    for(var i = 0; i < val.length; i++) {
        var a = Math.max(...val);
        var count = 0;
        
        for(var j = 0; j < val.length; j++) {
            if(val[j] == a) {
                val[j] = -(i + 1);
                count++;
            }
        }
        if(count != 0) i += count - 1;
    }
    
    val.forEach((a,b) => {
       val[b] = -a;
    });
 
    return val;
}