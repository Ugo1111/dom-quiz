/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Inside which HTML element do we put the JavaScript?",
		"options" : [
			{"a": "&lt;script&gt;", 
			 "b":"&lt;javascript&gt;", 
			 "c":"&lt;scripting&gt;", 
			 "d":"&lt;js&gt;"}
			],
		"answer":"&lt;script&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Where is the correct place to insert a JavaScript?",
		"options" : [
			{"a": "The &lt;head&gt; section", 
			 "b":"The &lt;body&gt; section", 
			 "c":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct"}
			],
		"answer":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is the correct syntax for referring to an external script called 'xxx.js'?",
		"options" : [
			{"a": "&ltscript href=&quot;xxx.js&quot;>", 
			 "b":"&lt;script name=&quot;xxx.js&quot;&gt;", 
			 "c":"&lt;script src=&quot;xxx.js&quot;&gt;"}
			],
		"answer":"&lt;script src=&quot;xxx.js&quot;&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "The external JavaScript file must contain the &lt;script&gt; tag.",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "How do you write &quot;Hello World&quot; in an alert box?",
		"options" : [
			{"a": "alertBox(&quot;Hello World&quot;);", 
			 "b":"msg(&quot;Hello World&quot;);",
			 "c":"alert(&quot;Hello World&quot;);",
			 "d":"msgBox(&quot;Hello World&quot;);",
			}
			],
		"answer":"alert(&quot;Hello World&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "How do you create a function in JavaScript?",
		"options" : [
			{"a": "function myFunction()", 
			 "b":"function:myFunction()",
			 "c":"function = myFunction()",
			}
			],
		"answer":"function myFunction()",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "How do you call a function named &quot;myFunction&quot;?",
		"options" : [
			{"a": "call function myFunction()", 
			 "b":"call myFunction()",
			 "c":"myFunction()",
			}
			],
		"answer":"myFunction()",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "How to write an IF statement in JavaScript?",
		"options" : [
			{"a": "if i = 5 then", 
			 "b":"if i == 5 then",
			 "c":"if (i == 5)",
			 "d":" if i = 5",
			}
			],
		"answer":"if (i == 5)",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Which of the following is a disadvantage of using JavaScript?",
		"options" : [
			{"a": "Client-side JavaScript does not allow the reading or writing of files.", 
			 "b":"JavaScript can not be used for Networking applications because there is no such support available.",
			 "c":"JavaScript doesn't have any multithreading or multiprocess capabilities.",
			 "d":"All of the above."
			}
			],
		"answer":"All of the above.",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
		"options" : [
			{"a": "if (i <> 5)", 
			 "b":"if i <> 5",
			 "c":"if (i != 5)",
			 "d":"if i =! 5 then",
			}
			],
		"answer":"if (i != 5)",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "How does a WHILE loop start?",
		"options" : [
			{"a": "while i = 1 to 10", 
			 "b":"while (i &lt;= 10; i++)",
			 "c":"while (i &lt;= 10)"
			}
			],
		"answer":"while (i &lt;= 10)",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "How does a FOR loop start?",
		"options" : [
			{"a": "for (i = 0; i &lt;= 5)", 
			 "b":"for (i = 0; i &lt;= 5; i++)",
			 "c":"for i = 1 to 5",
			 "d":"for (i &lt;= 5; i++)"
			}
			],
		"answer":"for (i = 0; i &lt;= 5; i++)",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "How can you add a comment in a JavaScript?",
		"options" : [
			{"a": "//This is a comment", 
			 "b":"&sbquo;This is a comment",
			 "c":"&lt;!--This is a comment--&gt;"
			}
			],
		"answer":"//This is a comment",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "How to insert a comment that has more than one line?",
		"options" : [
			{"a": "/*This comment has more than one line*/", 
			 "b":"//This comment has more than one line//",
			 "c":"&lt;!--This comment has more than one line--&gt;"
			}
			],
		"answer":"/*This comment has more than one line*/",
		"score":0,
		"status": ""
	},
	{
		"id" : 15,
		"question" : "What is the correct way to write a JavaScript array?",
		"options" : [
			{"a": "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)", 
			 "b":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
			 "c":"var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
			 "d":"var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;"
			}
			],
		"answer":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
		"score":0,
		"status": ""
	},
	{
		"id" : 16,
		"question" : "How do you round the number 7.25, to the nearest integer?",
		"options" : [
			{"a": "rnd(7.25)", 
			 "b":"Math.round(7.25)",
			 "c":"Math.rnd(7.25)",
			 "d":"round(7.25)"
			}
			],
		"answer":"Math.round(7.25)",
		"score":0,
		"status": ""
	},
	{
		"id" : 17,
		"question" : "How do you find the number with the highest value of x and y?",
		"options" : [
			{"a": "Math.max(x, y)", 
			 "b":"Math.ceil(x, y)",
			 "c":"top(x, y)",
			 "d":"ceil(x, y)"
			}
			],
		"answer":"Math.max(x, y)",
		"score":0,
		"status": ""
	},
	{
		"id" : 18,
		"question" : "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
		"options" : [
			{"a": "w2 = window.new(&quot;http://www.w3schools.com&quot;);", 
			 "b":"w2 = window.open(&quot;http://www.w3schools.com&quot;);"

			}
			],
		"answer":"w2 = window.open(&quot;http://www.w3schools.com&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 19,
		"question" : "JavaScript is the same as Java.",
		"options" : [
			{"a": "true", 
			 "b":"false"

			}
			],
		"answer":"false",
		"score":0,
		"status": ""
	},
	{
		"id" : 20,
		"question" : "How can you detect the client&rsquo;s browser name?",
		"options" : [
			{"a": "navigator.appName", 
			 "b":"browser.name",
			 "c":"client.navName"
			}
			],
		"answer":"navigator.appName",
		"score":0,
		"status": ""
	},
	{
		"id" : 21,
		"question" : "Which event occurs when the user clicks on an HTML element?",
		"options" : [
			{"a": "onchange", 
			 "b":"onclick",
			 "c":"onmouseclick",
			 "d":"onmouseover"
			}
			],
		"answer":"onclick",
		"score":0,
		"status": ""
	},
	{
		"id" : 22,
		"question" : "How do you declare a JavaScript variable?",
		"options" : [
			{"a": "var carName;", 
			 "b":"variable carName;",
			 "c":"v carName;"
			}
			],
		"answer":"var carName;",
		"score":0,
		"status": ""
	},
	{
		"id" : 23,
		"question" : "Which operator is used to assign a value to a variable?",
		"options" : [
			{"a": "*", 
			 "b":"-",
			 "c":"=",
			 "d":"x"
			}
			],
		"answer":"=",
		"score":0,
		"status": ""
	},
	{
		"id" : 24,
		"question" : "What will the following code return: Boolean(10 &gt; 9)",
		"options" : [
			{"a": "NaN", 
			 "b":"false",
			 "c":"true"
			}
			],
		"answer":"true",
		"score":0,
		"status": ""
	},
	{
		"id" : 25,
		"question" : "Is JavaScript case-sensitive?",
		"options" : [
			{"a": "No", 
			 "b":"Yes"
			}
			],
		"answer":"Yes",
		"score":0,
		"status": ""
	},
  {
    "id": 26,
    "question": "What is the purpose of the 'localStorage' object in JavaScript?",
    "options": [
        {
            "a": "To fetch data from an external API",
            "b": "To store key-value pairs in a web browser",
            "c": "To create HTML elements dynamically",
            "d": "To execute server-side code"
        }
    ],
    "answer": "To store key-value pairs in a web browser",
    "score": 0,
    "status": ""
},
  {
    "id": 27,
    "question": "What is the purpose of the 'getElementById' method in JavaScript?",
    "options": [
        {
            "a": "To retrieve the value of a CSS property",
            "b": "To access an HTML element by its unique ID",
            "c": "To create a new HTML element",
            "d": "To remove an HTML element from the DOM"
        }
    ],
    "answer": "To access an HTML element by its unique ID",
    "score": 0,
    "status": ""
},
{
    "id": 28,
    "question": "What does the 'NaN' value represent in JavaScript?",
    "options": [
        {
            "a": "Not a Name",
            "b": "Not a Number",
            "c": "No Action Needed",
            "d": "New Array Name"
        }
    ],
    "answer": "Not a Number",
    "score": 0,
    "status": ""
},
{
    "id": 29,
    "question": "Which of the following is used to iterate through the properties of an object in JavaScript?",
    "options": [
        {
            "a": "for loop",
            "b": "if statement",
            "c": "while loop",
            "d": "for...in loop"
        }
    ],
    "answer": "for...in loop",
    "score": 0,
    "status": ""
},
{
    "id": 30,
    "question": "What is the purpose of the 'push' method in JavaScript arrays?",
    "options": [
        {
            "a": "To add elements to the beginning of an array",
            "b": "To remove elements from an array",
            "c": "To add elements to the end of an array",
            "d": "To reverse the order of elements in an array"
        }
    ],
    "answer": "To add elements to the end of an array",
    "score": 0,
    "status": ""
},
{
    "id": 31,
    "question": "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
    "options": [
        {
            "a": "var",
            "b": "let",
            "c": "const",
            "d": "variable"
        }
    ],
    "answer": "const",
    "score": 0,
    "status": ""
},
{
    "id": 32,
    "question": "What is the purpose of the 'this' keyword in JavaScript?",
    "options": [
        {
            "a": "To refer to the current date and time",
            "b": "To refer to the current HTML document",
            "c": "To refer to the current object",
            "d": "To refer to the previous webpage"
        }
    ],
    "answer": "To refer to the current object",
    "score": 0,
    "status": ""
},
{
    "id": 33,
    "question": "What is the result of '2' + 2 in JavaScript?",
    "options": [
        {
            "a": "4",
            "b": "22",
            "c": "Error",
            "d": "undefined"
        }
    ],
    "answer": "22",
    "score": 0,
    "status": ""
},
{
    "id": 34,
    "question": "Which JavaScript method is used to remove the last element from an array and return it?",
    "options": [
        {
            "a": "pop()",
            "b": "shift()",
            "c": "splice()",
            "d": "unshift()"
        }
    ],
    "answer": "pop()",
    "score": 0,
    "status": ""
},
{
    "id": 35,
    "question": "What is the purpose of the 'addEventListener' method in JavaScript?",
    "options": [
        {
            "a": "To create a new HTML element",
            "b": "To execute a function immediately",
            "c": "To add an event handler to an HTML element",
            "d": "To access the browser's console"
        }
    ],
    "answer": "To add an event handler to an HTML element",
    "score": 0,
    "status": ""
},
{
    "id": 36,
    "question": "Which JavaScript operator is used to compare both the value and the data type of two variables?",
    "options": [
        {
            "a": "==",
            "b": "===",
            "c": "!=",
            "d": "!=="
        }
    ],
    "answer": "===",
    "score": 0,
    "status": ""
},
  {
    "id": 37,
    "question": "What does the 'typeof' operator in JavaScript return when used with an array?",
    "options": [
        {
            "a": "Array",
            "b": "object",
            "c": "array",
            "d": "undefined"
        }
    ],
    "answer": "object",
    "score": 0,
    "status": ""
},
{
    "id": 38,
    "question": "Which function is used to convert a string to an integer in JavaScript?",
    "options": [
        {
            "a": "parseInt()",
            "b": "parseFloat()",
            "c": "stringToInt()",
            "d": "toInt()"
        }
    ],
    "answer": "parseInt()",
    "score": 0,
    "status": ""
},
{
    "id": 39,
    "question": "What is the purpose of the 'split' method in JavaScript?",
    "options": [
        {
            "a": "To join two strings together",
            "b": "To split a string into an array of substrings",
            "c": "To remove whitespace from a string",
            "d": "To reverse the characters in a string"
        }
    ],
    "answer": "To split a string into an array of substrings",
    "score": 0,
    "status": ""
},
{
    "id": 40,
    "question": "What is the 'DOM' in JavaScript?",
    "options": [
        {
            "a": "Document Object Model",
            "b": "Data Object Model",
            "c": "Document Object Manipulation",
            "d": "Data Object Manipulation"
        }
    ],
    "answer": "Document Object Model",
    "score": 0,
    "status": ""
},
{
    "id": 41,
    "question": "Which JavaScript method is used to remove the first element from an array and return it?",
    "options": [
        {
            "a": "pop()",
            "b": "shift()",
            "c": "splice()",
            "d": "unshift()"
        }
    ],
    "answer": "shift()",
    "score": 0,
    "status": ""
},
{
    "id": 42,
    "question": "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
    "options": [
        {
            "a": "To parse a JSON string into an object",
            "b": "To convert a JavaScript object into a JSON string",
            "c": "To remove elements from an array",
            "d": "To reverse the characters in a string"
        }
    ],
    "answer": "To convert a JavaScript object into a JSON string",
    "score": 0,
    "status": ""
},
{
    "id": 43,
    "question": "What is the purpose of the 'setTimeout' function in JavaScript?",
    "options": [
        {
            "a": "To execute a function immediately",
            "b": "To add an event handler to an HTML element",
            "c": "To delay the execution of a function",
            "d": "To create a new HTML element"
        }
    ],
    "answer": "To delay the execution of a function",
    "score": 0,
    "status": ""
},
{
    "id": 44,
    "question": "What is the purpose of the 'localStorage' object in JavaScript?",
    "options": [
        {
            "a": "To store data that persists even after the browser is closed",
            "b": "To store temporary data that is lost when the browser is closed",
            "c": "To store data in a remote server",
            "d": "To store data in memory for the current session"
        }
    ],
    "answer": "To store data that persists even after the browser is closed",
    "score": 0,
    "status": ""
},
{
    "id": 45,
    "question": "What is the purpose of the 'filter' method in JavaScript arrays?",
    "options": [
        {
            "a": "To remove elements from an array",
            "b": "To create a new array with all elements that pass a test",
            "c": "To sort the elements of an array",
            "d": "To reverse the order of elements in an array"
        }
    ],
    "answer": "To create a new array with all elements that pass a test",
    "score": 0,
    "status": ""
},
{
    "id": 46,
    "question": "What does the 'isNaN' function in JavaScript return?",
    "options": [
        {
            "a": "true if the value is not a number, false otherwise",
            "b": "true if the value is a number, false otherwise",
            "c": "undefined",
            "d": "null"
        }
    ],
    "answer": "true if the value is not a number, false otherwise",
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



