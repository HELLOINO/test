function solution(array) {
    var arrays = [];
    
    arrays.push(array.reduce((a, b) => {
        return Math.max(a, b);
    }));
    
    arrays.push(array.indexOf(arrays[0]));
    
    return arrays;
}