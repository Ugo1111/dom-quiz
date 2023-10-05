/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [ 
  {
    "id": 1,
    "question": "Inside which HTML element do we put the JavaScript?",
    "options": [
      {"a": "&lt;script&gt;"},
      {"b": "&lt;javascript&gt;"},
      {"c": "&lt;scripting&gt;"},
      {"d": "&lt;js&gt;"}
    ],
    "answer": "&lt;script&gt;",
    "score": 0,
    "status": ""
  },
  {
    "id": 2,
    "question": "How can you access the first child element of an HTML element using JavaScript?",
    "options": [
      {"a": "firstChildElement"},
      {"b": "firstElementChild"},
      {"c": "getElementByIndex(0)"},
      {"d": "getChildElement(0)"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 3,
    "question": "What is the purpose of the `querySelectorAll` method in the DOM?",
    "options": [
      {"a": "Selects the first element that matches a specified CSS selector"},
      {"b": "Selects all elements with a given class name"},
      {"c": "Selects elements by their tag name"},
      {"d": "Selects elements by their attribute values"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 4,
    "question": "Which DOM event occurs when the mouse pointer enters an element?",
    "options": [
      {"a": "onmouseenter"},
      {"b": "onmouseover"},
      {"c": "onmousemove"},
      {"d": "onmousein"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 5,
    "question": "How do you add a new attribute to an HTML element in JavaScript?",
    "options": [
      {"a": "Using the `setAttribute()` method"},
      {"b": "Using the `addAttribute()` method"},
      {"c": "Using the `createAttribute()` method"},
      {"d": "Using the `setAttr()` method"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 6,
    "question": "What is the purpose of the `removeAttribute()` method in JavaScript?",
    "options": [
      {"a": "It removes the entire element from the DOM."},
      {"b": "It removes a specified attribute from an element."},
      {"c": "It deletes an element's content."},
      {"d": "It clears the text content of an element."}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 7,
    "question": "Which DOM property is used to get or set the value of an HTML input element?",
    "options": [
      {"a": "inputText"},
      {"b": "textValue"},
      {"c": "inputValue"},
      {"d": "value"}
    ],
    "answer": "d",
    "score": 0,
    "status": ""
  },
  {
    "id": 8,
    "question": "What does the `querySelector` method do?",
    "options": [
      {"a": "Selects the first element that matches a specified CSS selector"},
      {"b": "Selects all elements with a given class name"},
      {"c": "Selects elements by their tag name"},
      {"d": "Selects elements by their attribute values"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 9,
    "question": "How can you check if an HTML element has a specific CSS class in JavaScript?",
    "options": [
      {"a": "Using the `hasClass()` method"},
      {"b": "By using the `classList.contains()` method"},
      {"c": "Using the `hasClassName()` method"},
      {"d": "By checking the `className` property"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 10,
    "question": "Which DOM method is used to scroll an element into view?",
    "options": [
      {"a": "scrollToElement()"},
      {"b": "scrollIntoView()"},
      {"c": "scrollByElement()"},
      {"d": "scrollToView()"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 11,
    "question": "What is the purpose of the `addEventListener` method in JavaScript?",
    "options": [
      {"a": "To create a new HTML element"},
      {"b": "To attach an event handler function to an HTML element"},
      {"c": "To remove an HTML element"},
      {"d": "To change the color of an HTML element"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 12,
    "question": "How do you remove an HTML element from the DOM using JavaScript?",
    "options": [
      {"a": "Using the `deleteElement()` method"},
      {"b": "Using the `removeElement()` method"},
      {"c": "Using the `eraseElement()` method"},
      {"d": "Using the `removeChild()` method"}
    ],
    "answer": "d",
    "score": 0,
    "status": ""
  },
  {
    "id": 13,
    "question": "Which DOM property allows you to change the content of an HTML element?",
    "options": [
      {"a": "innerText"},
      {"b": "textContent"},
      {"c": "innerHTML"},
      {"d": "outerText"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  },
  {
    "id": 14,
    "question": "What does the `getAttribute` method in JavaScript return?",
    "options": [
      {"a": "The inner text of an element"},
      {"b": "The HTML content of an element"},
      {"c": "The value of a specified attribute of an element"},
      {"d": "The ID of an element"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  },
  {
    "id": 15,
    "question": "Which DOM event occurs when an HTML form element loses focus?",
    "options": [
      {"a": "onblur"},
      {"b": "onfocus"},
      {"c": "onchange"},
      {"d": "onsubmit"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 16,
    "question": "What is the purpose of the `getElementById` method in JavaScript?",
    "options": [
      {"a": "To select all elements with a given class name"},
      {"b": "To select elements by their tag name"},
      {"c": "To access an HTML element by its ID"},
      {"d": "To create a new HTML element"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  },
  {
    "id": 17,
    "question": "How do you create a text node in the DOM using JavaScript?",
    "options": [
      {"a": "Using the `createTextNode()` method"},
      {"b": "Using the `createTextElement()` method"},
      {"c": "Using the `appendTextNode()` method"},
      {"d": "Using the `addTextElement()` method"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 18,
    "question": "Which DOM method is used to insert an element before another element in the DOM?",
    "options": [
      {"a": "insertBefore()"},
      {"b": "appendBefore()"},
      {"c": "insertAfter()"},
      {"d": "prepend()"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 19,
    "question": "What is the purpose of the `document.write()` method in JavaScript?",
    "options": [
      {"a": "It writes a message to the console."},
      {"b": "It writes text directly into the HTML document."},
      {"c": "It creates a new HTML document."},
      {"d": "It appends text to an element's content."}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 20,
    "question": "How do you access the value of a selected option in a <select> element using JavaScript?",
    "options": [
      {"a": "selectValue"},
      {"b": "selectedIndex"},
      {"c": "selectedOption"},
      {"d": "selectedValue"}
    ],
    "answer": "d",
    "score": 0,
    "status": ""
  },
  {
    "id": 21,
    "question": "Which DOM event occurs when an element is resized?",
    "options": [
      {"a": "onresize"},
      {"b": "onresizeend"},
      {"c": "onresizestart"},
      {"d": "onresizechange"}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 22,
    "question": "What is the purpose of the `createElement` method in JavaScript?",
    "options": [
      {"a": "It creates a new HTML element with the specified tag name."},
      {"b": "It creates a text node."},
      {"c": "It creates a new CSS style."},
      {"d": "It creates a new JavaScript object."}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 23,
    "question": "How do you access the last child element of an HTML element using JavaScript?",
    "options": [
      {"a": "lastChildElement"},
      {"b": "lastElementChild"},
      {"c": "getElementByIndex(-1)"},
      {"d": "getChildElement(-1)"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 24,
    "question": "Which DOM property is used to get or set the value of an HTML input element?",
    "options": [
      {"a": "inputText"},
      {"b": "textValue"},
      {"c": "inputValue"},
      {"d": "value"}
    ],
    "answer": "d",
    "score": 0,
    "status": ""
  },
  {
    "id": 25,
    "question": "What is the purpose of the `stopPropagation()` method in JavaScript event handling?",
    "options": [
      {"a": "Stops the event from bubbling up the DOM tree."},
      {"b": "Stops the event from capturing down the DOM tree."},
      {"c": "Stops the event from propagating to the next sibling element."},
      {"d": "Stops the event from firing at all."}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 26,
    "question": "Which DOM method is used to scroll an element into view?",
    "options": [
      {"a": "scrollToElement()"},
      {"b": "scrollIntoView()"},
      {"c": "scrollByElement()"},
      {"d": "scrollToView()"}
    ],
    "answer": "b",
    "score": 0,
    "status": ""
  },
  {
    "id": 27,
    "question": "What is the purpose of the `replaceChild()` method in the DOM?",
    "options": [
      {"a": "It replaces one child element with another child element within a parent element."},
      {"b": "It removes an element from the DOM."},
      {"c": "It creates a new element."},
      {"d": "It appends an element to another element."}
    ],
    "answer": "a",
    "score": 0,
    "status": ""
  },
  {
    "id": 28,
    "question": "What does the `scrollHeight` property in the DOM represent?",
    "options": [
      {"a": "The width of an element"},
      {"b": "The height of the viewport"},
      {"c": "The total height of an element's content, including overflow"},
      {"d": "The height of the document"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  },
  {
    "id": 29,
    "question": "Which DOM method is used to add a CSS class to an HTML element in JavaScript?",
    "options": [
      {"a": "addClass()"},
      {"b": "appendClass()"},
      {"c": "toggleClass()"},
      {"d": "className()"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  },
  {
    "id": 30,
    "question": "How do you prevent the default behavior of an event in JavaScript?",
    "options": [
      {"a": "event.cancel()"},
      {"b": "event.stop()"},
      {"c": "event.preventDefault()"},
      {"d": "event.ignoreDefault()"}
    ],
    "answer": "c",
    "score": 0,
    "status": ""
  }
]

  
}





/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the quiz questions
shuffleArray(quiz.JS);

// Select the first 15 questions
quiz.JS = quiz.JS.slice(0, 10);

var quizApp = function() {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;

  this.displayQuiz = function(cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
      $("#tque").html(totalque);
      $("#previous").attr("disabled", false);
      $("#next").attr("disabled", false);
     $("#qid").html(this.currentque + 1 ); //this shows number of questions attempted

      $("#question").html(quiz.JS[this.currentque].question);
      $("#question-options").html("");
      for (var key in quiz.JS[this.currentque].options[0]) {
        if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
          $("#question-options").append(
            "<div class='form-check option-block'>" +
            "<label class='form-check-label'>" +
            "<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
            quiz.JS[this.currentque].options[0][key] +
            "</span></label>"
          );
        }
      }
    }
    if (this.currentque <= 0) {
      $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
      $('#next').attr('disabled', true);
      for (var i = 0; i < totalque; i++) {
        this.score = this.score + quiz.JS[i].score;
      }
      return this.showResult(this.score);
    }
  }

  this.showResult = function(scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
      var res;
      if (quiz.JS[j].score == 0) {
        res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
      } else {
        res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
      }
      $("#result").append(
        '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
        '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
        '<div class="last-row"><b>Score:</b> &nbsp;' + res +

        '</div>'
      );
    }
  }

  this.checkAnswer = function(option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/\</g, "&lt;") //for <
    option = option.replace(/\>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")

    if (option == quiz.JS[this.currentque].answer) {
      if (quiz.JS[this.currentque].score == "") {
        quiz.JS[this.currentque].score = 1;
        quiz.JS[this.currentque].status = "correct";
      }
    } else {
      quiz.JS[this.currentque].status = "wrong";
    }
  }

  this.changeQuestion = function(cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
  }
}

var jsq = new quizApp();

var selectedopt;
$(document).ready(function() {
  jsq.displayQuiz(0);

  $('#question-options').on('change', 'input[type=radio][name=option]', function(e) {
    $(this).prop("checked", true);
    selectedopt = $(this).val();
  });

  $('#next').click(function(e) {
    e.preventDefault();
    if (selectedopt) {
      jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
  });

  $('#previous').click(function(e) {
    e.preventDefault();
    if (selectedopt) {
      jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
  });
});



