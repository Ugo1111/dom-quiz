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
},
{
    "id": 47,
    "question": "What is the purpose of the 'forEach' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To loop through each element and apply a function",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To loop through each element and apply a function",
    "score": 0,
    "status": ""
  },
  {
    "id": 48,
    "question": "Which keyword is used to declare a function in JavaScript?",
    "options": [
      {
        "a": "function",
        "b": "def",
        "c": "func",
        "d": "method"
      }
    ],
    "answer": "function",
    "score": 0,
    "status": ""
  },
  {
    "id": 49,
    "question": "What is the result of the expression '5 + 3' in JavaScript?",
    "options": [
      {
        "a": "8",
        "b": "'8'",
        "c": "53",
        "d": "'53'"
      }
    ],
    "answer": "8",
    "score": 0,
    "status": ""
  },
  {
    "id": 50,
    "question": "How do you declare a variable in JavaScript?",
    "options": [
      {
        "a": "var myVar;",
        "b": "let myVar;",
        "c": "const myVar;",
        "d": "myVar = 5;"
      }
    ],
    "answer": "var myVar;",
    "score": 0,
    "status": ""
  },
  {
    "id": 51,
    "question": "What is the purpose of the 'indexOf' method in JavaScript arrays?",
    "options": [
      {
        "a": "To add an element to the end of an array",
        "b": "To remove elements from an array",
        "c": "To find the index of a specified element",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To find the index of a specified element",
    "score": 0,
    "status": ""
  },
  {
    "id": 52,
    "question": "How can you convert a string to uppercase in JavaScript?",
    "options": [
      {
        "a": "toUpperCase()",
        "b": "toUpper()",
        "c": "upperCase()",
        "d": "string.upper()"
      }
    ],
    "answer": "toUpperCase()",
    "score": 0,
    "status": ""
  },
  {
    "id": 53,
    "question": "What is the purpose of the 'push' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To add an element to the beginning of an array",
        "c": "To sort the elements of an array",
        "d": "To add an element to the end of an array"
      }
    ],
    "answer": "To add an element to the end of an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 54,
    "question": "What does the 'setTimeout' function do in JavaScript?",
    "options": [
      {
        "a": "It sets a timer that executes a function after a specified delay",
        "b": "It returns the current date and time",
        "c": "It stops the execution of a function",
        "d": "It clears the console log"
      }
    ],
    "answer": "It sets a timer that executes a function after a specified delay",
    "score": 0,
    "status": ""
  },
  {
    "id": 55,
    "question": "Which operator is used for strict equality in JavaScript?",
    "options": [
      {
        "a": "==",
        "b": "===",
        "c": "=",
        "d": "!="
      }
    ],
    "answer": "===",
    "score": 0,
    "status": ""
  },
  {
    "id": 56,
    "question": "What is the result of 'typeof null' in JavaScript?",
    "options": [
      {
        "a": "'object'",
        "b": "'null'",
        "c": "'undefined'",
        "d": "'number'"
      }
    ],
    "answer": "'object'",
    "score": 0,
    "status": ""
  },
  {
    "id": 57,
    "question": "What is the purpose of the 'reduce' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To sort the elements of an array",
        "d": "To reduce an array to a single value by applying a function to each element"
      }
    ],
    "answer": "To reduce an array to a single value by applying a function to each element",
    "score": 0,
    "status": ""
  },
  {
    "id": 58,
    "question": "Which JavaScript function is used to parse JSON strings?",
    "options": [
      {
        "a": "parseJSON()",
        "b": "JSON.parse()",
        "c": "stringify()",
        "d": "jsonify()"
      }
    ],
    "answer": "JSON.parse()",
    "score": 0,
    "status": ""
  },
  {
    "id": 59,
    "question": "What is the purpose of the 'find' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To sort the elements of an array",
        "d": "To find the first element that passes a test in an array"
      }
    ],
    "answer": "To find the first element that passes a test in an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 60,
    "question": "How do you declare a multi-line string in JavaScript?",
    "options": [
      {
        "a": "Using backticks (`)",
        "b": "Using double quotes (\")",
        "c": "Using single quotes (')",
        "d": "Using triple quotes (\"\")"
      }
    ],
    "answer": "Using backticks (`)",
    "score": 0,
    "status": ""
  },
  {
    "id": 61,
    "question": "What is the purpose of the 'splice' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To sort the elements of an array",
        "d": "To add or remove elements from an array at a specified index"
      }
    ],
    "answer": "To add or remove elements from an array at a specified index",
    "score": 0,
    "status": ""
  },
  {
    "id": 62,
    "question": "How can you check if a variable is undefined in JavaScript?",
    "options": [
      {
        "a": "isUndefined(variable)",
        "b": "variable == null",
        "c": "typeof variable === 'undefined'",
        "d": "if (variable === undefined)"
      }
    ],
    "answer": "typeof variable === 'undefined'",
    "score": 0,
    "status": ""
  },
  {
    "id": 63,
    "question": "What is the result of '1 + '1'' in JavaScript?",
    "options": [
      {
        "a": "2",
        "b": "'2'",
        "c": "11",
        "d": "'11'"
      }
    ],
    "answer": "'11'",
    "score": 0,
    "status": ""
  },
  {
    "id": 64,
    "question": "What is the purpose of the 'concat' method in JavaScript arrays?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To join two or more arrays and return a new array",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To join two or more arrays and return a new array",
    "score": 0,
    "status": ""
  },
  {
    "id": 65,
    "question": "Which statement is used to exit a loop in JavaScript?",
    "options": [
      {
        "a": "break",
        "b": "return",
        "c": "continue",
        "d": "exit"
      }
    ],
    "answer": "break",
    "score": 0,
    "status": ""
  },
  {
    "id": 66,
    "question": "What does the 'this' keyword refer to in JavaScript?",
    "options": [
      {
        "a": "The current function",
        "b": "The parent function",
        "c": "The global object",
        "d": "The object that is executing the current function"
      }
    ],
    "answer": "The object that is executing the current function",
    "score": 0,
    "status": ""
  },
  {
    "id": 67,
    "question": "How can you check if a variable is an array in JavaScript?",
    "options": [
      {
        "a": "isArray(variable)",
        "b": "typeof variable === 'array'",
        "c": "variable instanceof Array",
        "d": "Array.isArray(variable)"
      }
    ],
    "answer": "variable instanceof Array",
    "score": 0,
    "status": ""
  },
  {
    "id": 68,
    "question": "What is the purpose of the 'split' method in JavaScript?",
    "options": [
      {
        "a": "To remove elements from an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To split a string into an array of substrings based on a specified delimiter",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To split a string into an array of substrings based on a specified delimiter",
    "score": 0,
    "status": ""
  },
  {
    "id": 69,
    "question": "How do you define a JavaScript function?",
    "options": [
      {
        "a": "function myFunction() { }",
        "b": "def myFunction():",
        "c": "myFunction() = {}",
        "d": "function = myFunction() { }"
      }
    ],
    "answer": "function myFunction() { }",
    "score": 0,
    "status": ""
  },
  {
    "id": 70,
    "question": "Which JavaScript method is used to remove the last element from an array?",
    "options": [
      {
        "a": "pop()",
        "b": "removeLast()",
        "c": "splice()",
        "d": "shift()"
      }
    ],
    "answer": "pop()",
    "score": 0,
    "status": ""
  },
  {
    "id": 71,
    "question": "What is the purpose of the 'unshift' method in JavaScript arrays?",
    "options": [
      {
        "a": "To add an element to the end of an array",
        "b": "To remove the first element of an array",
        "c": "To add an element to the beginning of an array",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To add an element to the beginning of an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 72,
    "question": "What does the 'event.preventDefault()' method do in JavaScript?",
    "options": [
      {
        "a": "It stops the execution of a function",
        "b": "It prevents the default behavior of an HTML element",
        "c": "It clears the console log",
        "d": "It returns the current date and time"
      }
    ],
    "answer": "It prevents the default behavior of an HTML element",
    "score": 0,
    "status": ""
  },
  {
    "id": 73,
    "question": "What is a closure in JavaScript?",
    "options": [
      {
        "a": "A built-in JavaScript function",
        "b": "A way to declare a function",
        "c": "A function that has access to its parent scope, even after the parent function has finished executing",
        "d": "A function with no parameters"
      }
    ],
    "answer": "A function that has access to its parent scope, even after the parent function has finished executing",
    "score": 0,
    "status": ""
  },
  {
    "id": 74,
    "question": "What is the purpose of the 'Object.keys()' method in JavaScript?",
    "options": [
      {
        "a": "To add keys to an object",
        "b": "To return an array of an object's own enumerable property names",
        "c": "To remove keys from an object",
        "d": "To create a new object"
      }
    ],
    "answer": "To return an array of an object's own enumerable property names",
    "score": 0,
    "status": ""
  },
  {
    "id": 75,
    "question": "What is the purpose of the 'event.stopPropagation()' method in JavaScript?",
    "options": [
      {
        "a": "It prevents the default behavior of an HTML element",
        "b": "It stops the execution of a function",
        "c": "It clears the console log",
        "d": "It stops the event from propagating to parent elements"
      }
    ],
    "answer": "It stops the event from propagating to parent elements",
    "score": 0,
    "status": ""
  },
  {
    "id": 76,
    "question": "What is the purpose of the 'localStorage' object in JavaScript?",
    "options": [
      {
        "a": "To store data in the browser permanently",
        "b": "To store data in the browser temporarily for the current session",
        "c": "To store data on the server",
        "d": "To store data in a cookie"
      }
    ],
    "answer": "To store data in the browser permanently",
    "score": 0,
    "status": ""
  },
  {
    "id": 77,
    "question": "How do you access the first element of an array in JavaScript?",
    "options": [
      {
        "a": "array.first",
        "b": "array[0]",
        "c": "array(1)",
        "d": "array.getElement(0)"
      }
    ],
    "answer": "array[0]",
    "score": 0,
    "status": ""
  },
  {
    "id": 78,
    "question": "What is the purpose of the 'addEventListener' method in JavaScript?",
    "options": [
      {
        "a": "To add an element to the DOM",
        "b": "To remove an element from the DOM",
        "c": "To attach an event handler to an element",
        "d": "To create a new element"
      }
    ],
    "answer": "To attach an event handler to an element",
    "score": 0,
    "status": ""
  },
  {
    "id": 79,
    "question": "What is the purpose of the 'NaN' value in JavaScript?",
    "options": [
      {
        "a": "To represent a non-existent object",
        "b": "To indicate a division by zero",
        "c": "To represent a value that is not a valid number",
        "d": "To represent infinity"
      }
    ],
    "answer": "To represent a value that is not a valid number",
    "score": 0,
    "status": ""
  },
  {
    "id": 80,
    "question": "What is the purpose of the 'slice' method in JavaScript?",
    "options": [
      {
        "a": "To add elements to an array",
        "b": "To create a new array with all elements that pass a test",
        "c": "To remove elements from an array",
        "d": "To create a new array containing a portion of an existing array"
      }
    ],
    "answer": "To create a new array containing a portion of an existing array",
    "score": 0,
    "status": ""
  },
  {
    "id": 81,
    "question": "How do you declare a global variable in JavaScript?",
    "options": [
      {
        "a": "var myVar;",
        "b": "let myVar;",
        "c": "const myVar;",
        "d": "myVar = 5;"
      }
    ],
    "answer": "var myVar;",
    "score": 0,
    "status": ""
  },
  {
    "id": 82,
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
    "id": 83,
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
  },
  {
    "id": 84,
    "question": "What is the purpose of the 'toFixed' method in JavaScript?",
    "options": [
      {
        "a": "To round a number to the nearest integer",
        "b": "To convert a number to a string",
        "c": "To format a number with a fixed number of decimal places",
        "d": "To calculate the square root of a number"
      }
    ],
    "answer": "To format a number with a fixed number of decimal places",
    "score": 0,
    "status": ""
  },
  {
    "id": 85,
    "question": "What is the purpose of the 'Math.random()' function in JavaScript?",
    "options": [
      {
        "a": "To generate a random boolean value",
        "b": "To generate a random number between 0 (inclusive) and 1 (exclusive)",
        "c": "To generate a random integer",
        "d": "To generate a random string"
      }
    ],
    "answer": "To generate a random number between 0 (inclusive) and 1 (exclusive)",
    "score": 0,
    "status": ""
  },
  {
    "id": 86,
    "question": "What is the purpose of the 'Math.floor()' function in JavaScript?",
    "options": [
      {
        "a": "To round a number to the nearest integer",
        "b": "To round a number to the nearest multiple of 10",
        "c": "To calculate the absolute value of a number",
        "d": "To calculate the square root of a number"
      }
    ],
    "answer": "To round a number to the nearest integer",
    "score": 0,
    "status": ""
  },
  {
    "id": 87,
    "question": "What is the purpose of the 'Math.max()' function in JavaScript?",
    "options": [
      {
        "a": "To find the maximum value in an array",
        "b": "To find the minimum value in an array",
        "c": "To calculate the square root of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To find the maximum value in an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 88,
    "question": "What is the purpose of the 'Math.min()' function in JavaScript?",
    "options": [
      {
        "a": "To find the maximum value in an array",
        "b": "To find the minimum value in an array",
        "c": "To calculate the square root of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To find the minimum value in an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 89,
    "question": "What is the purpose of the 'Math.abs()' function in JavaScript?",
    "options": [
      {
        "a": "To find the maximum value in an array",
        "b": "To find the minimum value in an array",
        "c": "To calculate the square root of a number",
        "d": "To calculate the absolute value of a number"
      }
    ],
    "answer": "To calculate the absolute value of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 90,
    "question": "What is the purpose of the 'Math.sqrt()' function in JavaScript?",
    "options": [
      {
        "a": "To find the maximum value in an array",
        "b": "To calculate the square root of a number",
        "c": "To find the minimum value in an array",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To calculate the square root of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 91,
    "question": "What is the purpose of the 'Math.pow()' function in JavaScript?",
    "options": [
      {
        "a": "To find the maximum value in an array",
        "b": "To calculate the square of a number",
        "c": "To find the minimum value in an array",
        "d": "To calculate the power of a number"
      }
    ],
    "answer": "To calculate the power of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 92,
    "question": "What is the purpose of the 'parseInt()' function in JavaScript?",
    "options": [
      {
        "a": "To convert a string to an integer",
        "b": "To convert a number to a string",
        "c": "To round a number to the nearest integer",
        "d": "To calculate the square root of a number"
      }
    ],
    "answer": "To convert a string to an integer",
    "score": 0,
    "status": ""
  },
  {
    "id": 93,
    "question": "What is the purpose of the 'parseFloat()' function in JavaScript?",
    "options": [
      {
        "a": "To convert a string to a floating-point number",
        "b": "To convert a number to a string",
        "c": "To round a number to the nearest integer",
        "d": "To calculate the square root of a number"
      }
    ],
    "answer": "To convert a string to a floating-point number",
    "score": 0,
    "status": ""
  },
  {
    "id": 94,
    "question": "What is the purpose of the 'Array.isArray()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To add elements to an array",
        "d": "To remove elements from an array"
      }
    ],
    "answer": "To check if a variable is an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 95,
    "question": "What is the purpose of the 'Array.from()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To add elements to an array",
        "d": "To create a new array from an array-like object or iterable"
      }
    ],
    "answer": "To create a new array from an array-like object or iterable",
    "score": 0,
    "status": ""
  },
  {
    "id": 96,
    "question": "What is the purpose of the 'Array.of()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To add elements to an array",
        "d": "To create a new array with the specified elements"
      }
    ],
    "answer": "To create a new array with the specified elements",
    "score": 0,
    "status": ""
  },
  {
    "id": 97,
    "question": "What is the purpose of the 'Array.reverse()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To reverse the order of elements in an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 98,
    "question": "What is the purpose of the 'Array.sort()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To sort the elements of an array",
    "score": 0,
    "status": ""
  },
  {
    "id": 99,
    "question": "What is the purpose of the 'Array.splice()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To add or remove elements from an array at a specified index"
      }
    ],
    "answer": "To add or remove elements from an array at a specified index",
    "score": 0,
    "status": ""
  },
  {
    "id": 100,
    "question": "What is the purpose of the 'Array.join()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To join all elements of an array into a string"
      }
    ],
    "answer": "To join all elements of an array into a string",
    "score": 0,
    "status": ""
  },  
  {
    "id": 101,
    "question": "What is the purpose of the 'Array.concat()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To concatenate two or more arrays and return a new array"
      }
    ],
    "answer": "To concatenate two or more arrays and return a new array",
    "score": 0,
    "status": ""
  },
  {
    "id": 102,
    "question": "What is the purpose of the 'Array.includes()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To check if an array contains a specific element",
        "d": "To sort the elements of an array"
      }
    ],
    "answer": "To check if an array contains a specific element",
    "score": 0,
    "status": ""
  },
  {
    "id": 103,
    "question": "What is the purpose of the 'Array.fill()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To fill all the elements of an array with a static value"
      }
    ],
    "answer": "To fill all the elements of an array with a static value",
    "score": 0,
    "status": ""
  },
  {
    "id": 104,
    "question": "What is the purpose of the 'Array.find()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To find the first element in an array that satisfies a provided testing function"
      }
    ],
    "answer": "To find the first element in an array that satisfies a provided testing function",
    "score": 0,
    "status": ""
  },
  {
    "id": 105,
    "question": "What is the purpose of the 'Array.findIndex()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To find the index of the first element in an array that satisfies a provided testing function"
      }
    ],
    "answer": "To find the index of the first element in an array that satisfies a provided testing function",
    "score": 0,
    "status": ""
  },
  {
    "id": 106,
    "question": "What is the purpose of the 'Array.map()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To create a new array with the results of calling a provided function on every element in the array"
      }
    ],
    "answer": "To create a new array with the results of calling a provided function on every element in the array",
    "score": 0,
    "status": ""
  },
  {
    "id": 107,
    "question": "What is the purpose of the 'Array.filter()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To create a new array with all elements that pass a test"
      }
    ],
    "answer": "To create a new array with all elements that pass a test",
    "score": 0,
    "status": ""
  },
  {
    "id": 108,
    "question": "What is the purpose of the 'Array.reduce()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To reduce an array to a single value by applying a function to each element"
      }
    ],
    "answer": "To reduce an array to a single value by applying a function to each element",
    "score": 0,
    "status": ""
  },
  {
    "id": 109,
    "question": "What is the purpose of the 'Array.every()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To check if all elements in an array pass a test"
      }
    ],
    "answer": "To check if all elements in an array pass a test",
    "score": 0,
    "status": ""
  },
  {
    "id": 110,
    "question": "What is the purpose of the 'Array.some()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To check if at least one element in an array passes a test"
      }
    ],
    "answer": "To check if at least one element in an array passes a test",
    "score": 0,
    "status": ""
  },
  {
    "id": 111,
    "question": "What is the purpose of the 'Array.slice()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To create a shallow copy of an array from a specified start to end index"
      }
    ],
    "answer": "To create a shallow copy of an array from a specified start to end index",
    "score": 0,
    "status": ""
  },
  {
    "id": 112,
    "question": "What is the purpose of the 'Array.splice()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To add or remove elements from an array at a specified index"
      }
    ],
    "answer": "To add or remove elements from an array at a specified index",
    "score": 0,
    "status": ""
  },
  {
    "id": 113,
    "question": "What is the purpose of the 'Array.reduceRight()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array from right to left",
        "d": "To reduce an array to a single value by applying a function to each element from right to left"
      }
    ],
    "answer": "To reduce an array to a single value by applying a function to each element from right to left",
    "score": 0,
    "status": ""
  },
  {
    "id": 114,
    "question": "What is the purpose of the 'Array.join()' method in JavaScript?",
    "options": [
      {
        "a": "To create a new array",
        "b": "To check if a variable is an array",
        "c": "To reverse the order of elements in an array",
        "d": "To join all elements of an array into a string with a specified separator"
      }
    ],
    "answer": "To join all elements of an array into a string with a specified separator",
    "score": 0,
    "status": ""
  },
  {
    "id": 115,
    "question": "What is the purpose of the 'String.length' property in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the number of characters in a string",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return the number of characters in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 116,
    "question": "What is the purpose of the 'String.charAt()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the character at a specified index in a string",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return the character at a specified index in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 117,
    "question": "What is the purpose of the 'String.indexOf()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the first index at which a specified substring is found in a string",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return the first index at which a specified substring is found in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 118,
    "question": "What is the purpose of the 'String.lastIndexOf()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the last index at which a specified substring is found in a string",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return the last index at which a specified substring is found in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 119,
    "question": "What is the purpose of the 'String.slice()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return a portion of a string from a specified start to end index",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return a portion of a string from a specified start to end index",
    "score": 0,
    "status": ""
  },
  {
    "id": 120,
    "question": "What is the purpose of the 'String.substring()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return a portion of a string between two specified indices",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To return a portion of a string between two specified indices",
    "score": 0,
    "status": ""
  },
  {
    "id": 121,
    "question": "What is the purpose of the 'String.trim()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To remove whitespace from both ends of a string",
        "c": "To convert a string to lowercase",
        "d": "To convert a string to uppercase"
      }
    ],
    "answer": "To remove whitespace from both ends of a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 122,
    "question": "What is the purpose of the 'String.toUpperCase()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To convert a string to lowercase",
        "c": "To convert a string to uppercase",
        "d": "To reverse a string"
      }
    ],
    "answer": "To convert a string to uppercase",
    "score": 0,
    "status": ""
  },
  {
    "id": 123,
    "question": "What is the purpose of the 'String.toLowerCase()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To convert a string to lowercase",
        "c": "To convert a string to uppercase",
        "d": "To reverse a string"
      }
    ],
    "answer": "To convert a string to lowercase",
    "score": 0,
    "status": ""
  },
  {
    "id": 124,
    "question": "What is the purpose of the 'String.startsWith()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To check if a string starts with a specified substring",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To check if a string starts with a specified substring",
    "score": 0,
    "status": ""
  },
  {
    "id": 125,
    "question": "What is the purpose of the 'String.endsWith()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To check if a string ends with a specified substring",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To check if a string ends with a specified substring",
    "score": 0,
    "status": ""
  },
  {
    "id": 126,
    "question": "What is the purpose of the 'String.split()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To split a string into an array of substrings based on a specified delimiter",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To split a string into an array of substrings based on a specified delimiter",
    "score": 0,
    "status": ""
  },
  {
    "id": 127,
    "question": "What is the purpose of the 'String.replace()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To replace a specified substring with another substring in a string",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To replace a specified substring with another substring in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 128,
    "question": "What is the purpose of the 'String.charAt()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the character at a specified index in a string",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the character at a specified index in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 129,
    "question": "What is the purpose of the 'String.concat()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To concatenate two or more strings and return a new string",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To concatenate two or more strings and return a new string",
    "score": 0,
    "status": ""
  },
  {
    "id": 130,
    "question": "What is the purpose of the 'String.charCodeAt()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To return the Unicode value of the character at a specified index in a string",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the Unicode value of the character at a specified index in a string",
    "score": 0,
    "status": ""
  },
  {
    "id": 131,
    "question": "What is the purpose of the 'String.search()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To search for a specified substring in a string and return the index of the first occurrence",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To search for a specified substring in a string and return the index of the first occurrence",
    "score": 0,
    "status": ""
  },
  {
    "id": 132,
    "question": "What is the purpose of the 'String.match()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To match a string against a regular expression and return an array of matches",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To match a string against a regular expression and return an array of matches",
    "score": 0,
    "status": ""
  },
  {
    "id": 133,
    "question": "What is the purpose of the 'String.padStart()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To add padding characters to the start of a string until it reaches a specified length",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To add padding characters to the start of a string until it reaches a specified length",
    "score": 0,
    "status": ""
  },
  {
    "id": 134,
    "question": "What is the purpose of the 'String.padEnd()' method in JavaScript?",
    "options": [
      {
        "a": "To check if a string is empty",
        "b": "To add padding characters to the end of a string until it reaches a specified length",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To add padding characters to the end of a string until it reaches a specified length",
    "score": 0,
    "status": ""
  },
  {
    "id": 135,
    "question": "What is the purpose of the 'Date.now()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the current date and time as a timestamp",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the current date and time as a timestamp",
    "score": 0,
    "status": ""
  },
  {
    "id": 136,
    "question": "What is the purpose of the 'Date.getFullYear()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the current year as a four-digit number",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the current year as a four-digit number",
    "score": 0,
    "status": ""
  },
  {
    "id": 137,
    "question": "What is the purpose of the 'Date.getMonth()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the current month as a zero-based index (0 for January)",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the current month as a zero-based index (0 for January)",
    "score": 0,
    "status": ""
  },
  {
    "id": 138,
    "question": "What is the purpose of the 'Date.getDate()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the day of the month (1-31) of a given date",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the day of the month (1-31) of a given date",
    "score": 0,
    "status": ""
  },
  {
    "id": 139,
    "question": "What is the purpose of the 'Date.getDay()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the day of the week (0-6) of a given date (0 for Sunday)",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the day of the week (0-6) of a given date (0 for Sunday)",
    "score": 0,
    "status": ""
  },
  {
    "id": 140,
    "question": "What is the purpose of the 'Date.getHours()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the hour (0-23) of a given date",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the hour (0-23) of a given date",
    "score": 0,
    "status": ""
  },
  {
    "id": 141,
    "question": "What is the purpose of the 'Date.getMinutes()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the minutes (0-59) of a given date",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the minutes (0-59) of a given date",
    "score": 0,
    "status": ""
  },
  {
    "id": 142,
    "question": "What is the purpose of the 'Date.getSeconds()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the seconds (0-59) of a given date",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the seconds (0-59) of a given date",
    "score": 0,
    "status": ""
  },
  {
    "id": 143,
    "question": "What is the purpose of the 'Date.getMilliseconds()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the milliseconds (0-999) of a given date",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the milliseconds (0-999) of a given date",
    "score": 0,
    "status": ""
  },
  {
    "id": 144,
    "question": "What is the purpose of the 'Date.toString()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the date and time in a human-readable format",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the date and time in a human-readable format",
    "score": 0,
    "status": ""
  },
  {
    "id": 145,
    "question": "What is the purpose of the 'Date.toISOString()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the date and time in ISO 8601 format",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the date and time in ISO 8601 format",
    "score": 0,
    "status": ""
  },
  {
    "id": 146,
    "question": "What is the purpose of the 'Date.toUTCString()' method in JavaScript?",
    "options": [
      {
        "a": "To return the current date and time as a string",
        "b": "To return the date and time in UTC (Coordinated Universal Time) format",
        "c": "To convert a string to uppercase",
        "d": "To convert a string to lowercase"
      }
    ],
    "answer": "To return the date and time in UTC (Coordinated Universal Time) format",
    "score": 0,
    "status": ""
  },
  {
    "id": 147,
    "question": "What is the purpose of the 'Math.abs()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To convert a number to a string",
        "d": "To convert a string to a number"
      }
    ],
    "answer": "To return the absolute value of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 148,
    "question": "What is the purpose of the 'Math.ceil()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To round a number up to the nearest integer",
        "d": "To round a number down to the nearest integer"
      }
    ],
    "answer": "To round a number up to the nearest integer",
    "score": 0,
    "status": ""
  },
  {
    "id": 149,
    "question": "What is the purpose of the 'Math.floor()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To round a number up to the nearest integer",
        "d": "To round a number down to the nearest integer"
      }
    ],
    "answer": "To round a number down to the nearest integer",
    "score": 0,
    "status": ""
  },
  {
    "id": 150,
    "question": "What is the purpose of the 'Math.round()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To round a number up to the nearest integer",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To round a number to the nearest integer",
    "score": 0,
    "status": ""
  },
  {
    "id": 151,
    "question": "What is the purpose of the 'Math.max()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To return the maximum value from a list of numbers",
        "d": "To return the minimum value from a list of numbers"
      }
    ],
    "answer": "To return the maximum value from a list of numbers",
    "score": 0,
    "status": ""
  },
  {
    "id": 152,
    "question": "What is the purpose of the 'Math.min()' method in JavaScript?",
    "options": [
      {
        "a": "To return the absolute value of a number",
        "b": "To round a number to the nearest integer",
        "c": "To return the maximum value from a list of numbers",
        "d": "To return the minimum value from a list of numbers"
      }
    ],
    "answer": "To return the minimum value from a list of numbers",
    "score": 0,
    "status": ""
  },
  {
    "id": 153,
    "question": "What is the purpose of the 'Math.random()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return a random integer between two specified numbers",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return a random number between 0 and 1",
    "score": 0,
    "status": ""
  },
  {
    "id": 154,
    "question": "What is the purpose of the 'Math.pow()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the result of raising a number to a specified exponent",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the result of raising a number to a specified exponent",
    "score": 0,
    "status": ""
  },
  {
    "id": 155,
    "question": "What is the purpose of the 'Math.sqrt()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the square root of a number",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the square root of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 156,
    "question": "What is the purpose of the 'Math.log()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the natural logarithm (base e) of a number",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the natural logarithm (base e) of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 157,
    "question": "What is the purpose of the 'Math.exp()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return e raised to the power of a specified number",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return e raised to the power of a specified number",
    "score": 0,
    "status": ""
  },
  {
    "id": 158,
    "question": "What is the purpose of the 'Math.sin()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the sine of a number (in radians)",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the sine of a number (in radians)",
    "score": 0,
    "status": ""
  },
  {
    "id": 159,
    "question": "What is the purpose of the 'Math.cos()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the cosine of a number (in radians)",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the cosine of a number (in radians)",
    "score": 0,
    "status": ""
  },
  {
    "id": 160,
    "question": "What is the purpose of the 'Math.tan()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the tangent of a number (in radians)",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the tangent of a number (in radians)",
    "score": 0,
    "status": ""
  },
  {
    "id": 161,
    "question": "What is the purpose of the 'Math.atan()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the arctangent (inverse tangent) of a number (in radians)",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the arctangent (inverse tangent) of a number (in radians)",
    "score": 0,
    "status": ""
  },
  {
    "id": 162,
    "question": "What is the purpose of the 'Math.atan2()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "c": "To return the absolute value of a number",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
    "score": 0,
    "status": ""
  },
  {
    "id": 163,
    "question": "What is the purpose of the 'Math.abs()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the absolute value of a number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the absolute value of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 164,
    "question": "What is the purpose of the 'Math.log10()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the base 10 logarithm of a number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the base 10 logarithm of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 165,
    "question": "What is the purpose of the 'Math.log2()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return the base 2 logarithm of a number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the base 2 logarithm of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 166,
    "question": "What is the purpose of the 'Math.exp()' method in JavaScript?",
    "options": [
      {
        "a": "To return a random number between 0 and 1",
        "b": "To return e raised to the power of a specified number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return e raised to the power of a specified number",
    "score": 0,
    "status": ""
  },
  {
    "id": 167,
    "question": "What is the purpose of the 'Math.cbrt()' method in JavaScript?",
    "options": [
      {
        "a": "To return the cube root of a number",
        "b": "To return e raised to the power of a specified number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the cube root of a number",
    "score": 0,
    "status": ""
  },
  {
    "id": 168,
    "question": "What is the purpose of the 'Math.sign()' method in JavaScript?",
    "options": [
      {
        "a": "To return the sign of a number (1 for positive, -1 for negative, 0 for zero)",
        "b": "To return e raised to the power of a specified number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the sign of a number (1 for positive, -1 for negative, 0 for zero)",
    "score": 0,
    "status": ""
  },
  {
    "id": 169,
    "question": "What is the purpose of the 'Math.trunc()' method in JavaScript?",
    "options": [
      {
        "a": "To return the integer part of a number by removing its fractional part",
        "b": "To return e raised to the power of a specified number",
        "c": "To return the arctangent (inverse tangent) of the quotient of two specified numbers",
        "d": "To round a number to the nearest integer"
      }
    ],
    "answer": "To return the integer part of a number by removing its fractional part",
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



