let addQuestion = document.querySelector("#add-question");
let baseQuestion = document.querySelector("#base-question");
let test = document.querySelector("#test");

function createNewQuestion(e){
  let question = baseQuestion.cloneNode(true);
  
  test.appendChild(question);
}

addQuestion.addEventListener("click", createNewQuestion);

feather.replace();