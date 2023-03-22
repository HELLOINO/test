function solution(letter) {
    var answer = '';
    
    var morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    letter = letter.split(" ");
    
    for(var i = 0; i < letter.length; i++) {
        letter[i] = morse[letter[i]];
    }
    
    return letter.join("");
}