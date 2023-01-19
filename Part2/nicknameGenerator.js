// Напишите функцию, nicknameGeneratorкоторая принимает имя строки в качестве аргумента и возвращает первые 3 или 4 буквы в качестве псевдонима.

// Если 3-я буква согласная, верните первые 3 буквы.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// Если 3-я буква гласная, верните первые 4 буквы.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
function nicknameGenerator(name) {
    //code goes here
    let r;
    let vow = "aeiou";
    if (vow.indexOf(name[2]) != -1) {
        r = name.slice(0, 4);
    } else {
        r = name.slice(0, 3);
    }

    return (name.length < 4) ? "Error: Name too short" : r;
}
const nicknameGenerator = (name) => name.length > 3 ?
    name.slice(0, 3 + 'aeiou'.includes(name[2])) :
    'Error: Name too short'