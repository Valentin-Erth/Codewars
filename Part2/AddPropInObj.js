/*Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions. Значение usersAnswerдолжно быть установлено равным null. Решение должно работать для массива любой длины.

Например:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];*/
for (let item of questions) {
    if (item.usersAnswer === undefined) {
        item.usersAnswer = null;
    }
}
questions.forEach(function(i) {
    i.usersAnswer = null;
});

for (i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
};