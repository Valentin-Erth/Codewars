function alienLanguage(str) {
    str = str.toUpperCase();
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++)
        words[i] = words[i].slice(0, words[i].length - 1) + (words[i][words[i].length - 1]).toLowerCase();
    str = words.join(" ");
    return str;