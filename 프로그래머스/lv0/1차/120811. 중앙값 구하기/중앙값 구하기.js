function solution(a) {
    return a.sort((a, b) => {return a-b})[(a.length - 1)/2];
}