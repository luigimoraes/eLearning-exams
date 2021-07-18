const addQuestionButton = document.querySelector("#add-question");
const delQuestionButton = document.querySelectorAll(".delete-question");
const saveExamButton = document.querySelector("#save-exam");
const baseQuestion = document.querySelector("#base-question");
const exam = document.querySelector("#exam");
const questionsArray = document.getElementsByClassName("question");
let questionNumber = baseQuestion.getAttribute("value");

function createNewQuestion(e){
  const question = baseQuestion.cloneNode(true);
  questionNumber = parseInt(questionNumber);
  
  question.removeAttribute("id");
  question.setAttribute("value", questionNumber+1);
  question.children[2].addEventListener("click", deleteQuestion);
  
  questionNumber += 1;
  exam.appendChild(question);
}

function deleteQuestion(e){
  e.target.parentNode.remove();
  questionNumber -= 1;
}

function saveAsJSON(e){
  let examObject = {
    title: "Titulo da prova",
    questions: ["test", "test3"]
  };
  examObject.title = exam.children[0].textContent;
  
  examObject.questions = Array.from(questionsArray).map(question => {
    return {
      number: question.value,
      text: question.children[0].textContent,
      options: getListItems(question.children[1])
    };
  });
  
  console.log(JSON.stringify(examObject));
}

function getListItems(ol){
  return Array.from(ol.children).map(li => {
    return { text: li.textContent }
  });
}

addQuestionButton.addEventListener("click", createNewQuestion);
delQuestionButton[0].addEventListener("click", deleteQuestion);
saveExamButton.addEventListener("click", saveAsJSON);

feather.replace();