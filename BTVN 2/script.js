let chieuCao = 5;

for (let i = 1; i <= chieuCao; i++) {
    let khoangTrang = chieuCao - i;
    let hangTamGiac = "";
    for (let j = 1; j <= khoangTrang; j++) {
        hangTamGiac += " ";
    }
    for (let k = 1; k <= 2 * i - 1 ; k++) {
        hangTamGiac += "1";
    }
    console.log(hangTamGiac);
}

let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0 || myArr[i] === 0) {
        console.log(myArr[i]);
    }
}

let myAnswers = [];
let questions = ["có đói không?", "muốn bánh mì không?", "muốn kẹo ko?", "ko cho", "kệ"];

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    myAnswers.push(userAnswer);
}

console.log(myAnswers);