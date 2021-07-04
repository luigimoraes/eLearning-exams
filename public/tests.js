let addQuestionButton = document.querySelector("#add-question");
let delQuestionButton = document.querySelectorAll(".delete-question");
let baseQuestion = document.querySelector("#base-question");
let test = document.querySelector("#test");
let questionValue = baseQuestion.getAttribute("value");

function createNewQuestion(e){
  let question = baseQuestion.cloneNode(true);
  questionValue = parseInt(questionValue);
  
  question.removeAttribute("id");
  question.setAttribute("value", questionValue+1);
  question.children[2].addEventListener("click", deleteQuestion);
  
  questionValue += 1;
  test.appendChild(question);
}

function deleteQuestion(e){
  e.target.parentNode.remove();
  questionValue -= 1;
}

addQuestionButton.addEventListener("click", createNewQuestion);
delQuestionButton[0].addEventListener("click", deleteQuestion);

feather.replace();