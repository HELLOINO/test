function solution(my_string) {
    var a = Array.from(my_string);
    var b = Array.from(my_string);
    var answer = [];
    
    for(var i = 0; i < a.length; i++) {
        if(a[i] == b[i].toUpperCase()) {
            answer.push(a[i].toLowerCase());
        } else {
            answer.push(a[i].toUpperCase());
        }
    }

    return answer.join("");
}