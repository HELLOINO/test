function solution(m, n) {
   return String(Array.from(m).map(a => {
        return a.repeat(n);
    })).replaceAll(',', '');
}