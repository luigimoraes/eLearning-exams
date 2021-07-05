const addQuestionButton = document.querySelector("#add-question");
const delQuestionButton = document.querySelectorAll(".delete-question");
const saveExamButton = document.querySelector("#save-exam");
const baseQuestion = document.querySelector("#base-question");
const exam = document.querySelector("#exam");
const questionsArray = document.getElementsByClassName("question");
let questionValue = baseQuestion.getAttribute("value");

function createNewQuestion(e){
  const question = baseQuestion.cloneNode(true);
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

function saveAsJSON(e){
  let obj = {
    title: "Titulo da prova",
    questions: []
  };
  let options = [];
  
  obj.title = test.children[0].textContent;
  
  obj.questions = Array.from(questionsArray).map(el => {
    return {
      number: el.value,
      text: el.children[0].textContent,
      options: Array.from(el.children[1]).map(li => {
        return {
          text: li.children[1].textContent
        }
      })
    };
  });
  
  console.log(obj.questions[1].options);
}

addQuestionButton.addEventListener("click", createNewQuestion);
delQuestionButton[0].addEventListener("click", deleteQuestion);
saveExamButton.addEventListener("click", saveAsJSON);

feather.replace();