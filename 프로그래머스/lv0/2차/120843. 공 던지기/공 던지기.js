function solution(numbers, k) {
    var answer = 0;
    
    k *= 2;
    
    answer = (k-2) % (numbers.length);
    
    return answer + 1;
}