function solution(num1, num2) {
    for(; num1 >= num2;) {
        num1 -= num2;
    }
    return num1;
}