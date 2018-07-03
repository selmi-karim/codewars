var S = "abcabcabcb"
var freq = {};
for (var i = 0; i < S.length; i++) {
    var character = S.charAt(i);
    if (freq[character]) {
        freq[character]++;
    } else {
        freq[character] = 1;
    }
}
for (var key in freq) {
    if (freq.hasOwnProperty(key)) {
        //console.log(key + " -> " + freq[key]);
        var r = "";
        for (var i = 0; i < freq[key]; i++) r += key
        console.log(r)
    }
}

