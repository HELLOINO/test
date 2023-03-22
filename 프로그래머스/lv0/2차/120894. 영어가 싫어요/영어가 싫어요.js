function solution(numbers) {
    var answer = 0;
    var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    num.forEach((a,b) => {
        numbers = numbers.replaceAll(a, b);
    });
        
    return Number(numbers);
}