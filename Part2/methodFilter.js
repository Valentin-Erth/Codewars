// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

// {S:888, A:888, B:888, C:888, D:888, X:888}
// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)
function countGrade(scores) {
    //coding here...
    let result = {};
    let S = scores.filter(x => x == 100).length;
    result.S = S;
    let A = scores.filter(x => x >= 90 && x < 100).length;
    result.A = A;
    let B = scores.filter(x => x >= 80 && x < 90).length;
    result.B = B;
    let C = scores.filter(x => x >= 60 && x < 80).length;
    result.C = C;
    let D = scores.filter(x => x >= 0 && x < 60).length;
    result.D = D;
    let X = scores.filter(x => x == -1).length;
    result.X = X;
    return result;
}

function countGrade(scores) {
    return {
        'S': scores.filter(function(x) { return x == 100 }).length,
        'A': scores.filter(function(x) { return (x < 100 && x >= 90) }).length,
        'B': scores.filter(function(x) { return (x < 90 && x >= 80) }).length,
        'C': scores.filter(function(x) { return (x < 80 && x >= 60) }).length,
        'D': scores.filter(function(x) { return (x < 60 && x >= 0) }).length,
        'X': scores.filter(function(x) { return x == -1 }).length,
    };
}