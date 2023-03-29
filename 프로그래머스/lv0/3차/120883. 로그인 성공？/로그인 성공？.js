function solution(id_pw, db) {
    var answer = 'fail';
    var pass = 0;
    
    db.map(a => {
        if(id_pw[0] == a[0]) {
            answer = 'wrong pw';
            if(id_pw[1] == a[1]) {
                answer = 'login';
            }
            return answer;
        }
    });
    
    return answer;
}