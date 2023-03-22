function solution(s) {
    var a = s[0]+s[1]<=s[2]?2:s[0]+s[2]<=s[1]?2:s[1]+s[2]<=s[0]?2:1;
    return a;
}