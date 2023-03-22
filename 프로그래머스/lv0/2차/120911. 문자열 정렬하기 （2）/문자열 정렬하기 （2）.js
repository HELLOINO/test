function solution(my_string) {
    my_string = Array.from(my_string.toLowerCase()).sort().join("");
    return my_string;
}