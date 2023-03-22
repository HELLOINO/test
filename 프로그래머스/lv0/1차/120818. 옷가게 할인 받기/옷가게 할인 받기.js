function solution(p) {
   return p = Math.floor(p>=500000?(p - (0.2 * p)):p>=300000?
        (p - (0.1 * p)):p>=100000?(p - (0.05 * p)):p);
}