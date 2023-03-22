function solution(n) {
    var ac = 0;
    
    n.forEach((a,b,c) => {
        n.forEach((a2,b2,c2) => {
            ac = b!=b2?
                (ac<a*a2?
                 a*a2:ac)
            :ac;
        });        
    });
    
    return ac;
    
    // n.forEach((a,b,c) => {
    //     n.forEach((a2, b2, c2) => {
    //        if(b != b2) {
    //            if(ac < a * a2) {
    //                ac = a * a2;
    //            }
    //        } 
    //     });
    // });
}