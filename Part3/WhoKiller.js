// Некоторые люди были убиты!
// Вам удалось сузить круг подозреваемых до нескольких человек. К счастью, вы знаете всех, кого подозреваемые видели в день убийства.

// Задача.
// Дан словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// а также список имен погибших людей:

// ['Lucas', 'Bill']
// вернуть имя одного убийцы, в нашем случае, 'James'потому что он единственный человек, который видел и то, 'Lucas'и другое.'Bill'

function killer(suspectInfo, dead) {
    //your code here...
    let Killer;
    let size = dead.length;
    for (let prop in suspectInfo) {
        if (suspectInfo[prop].filter(el => dead.includes(el) === true).length == size) {
            Killer = prop;
        }
    }
    return Killer;
}

function killer(suspectInfo, dead) {
    for (let [name, list] of Object.entries(suspectInfo)) {
        if (list.includes(...dead)) {
            return name;
        }
    }
}