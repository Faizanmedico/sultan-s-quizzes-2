
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const hintBtn = document.getElementById('hint-btn');
    const reviewBtn = document.getElementById('review-btn');
    
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const explanationElement = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const currentScoreElement = document.getElementById('current-score');
    const timeLeftElement = document.getElementById('time-left');
    
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');
    const percentageElement = document.getElementById('percentage');
    const feedbackElement = document.getElementById('feedback');
    const timeSpentElement = document.getElementById('time-spent');

    // Dark Mode Elements
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.querySelector('.toggle-icon');
    const toggleText = document.querySelector('.toggle-btn span:last-child');

    // Quiz Questions with explanations and hints
    const questions = [




          {
            question: 'Which of these is NOT a valid Python variable name?',
            answers: [
              { text: '_var', correct: false },
              { text: '2var', correct: true },
              { text: 'var_name', correct: false },
              { text: 'varName', correct: false }
            ]
          },
          {
            question: 'What does // operator do in Python?',
            answers: [
              { text: 'Floor division', correct: true },
              { text: 'Integer division', correct: true },
              { text: 'Both a and b', correct: true },
              { text: 'Exponentiation', correct: false }
            ]
          },
          {
            question: "What is the output of print(3 * 'ab')?",
            answers: [
              { text: 'ababab', correct: true },
              { text: '3ab', correct: false },
              { text: 'Error', correct: false },
              { text: 'ab ab ab', correct: false }
            ]
          },
          {
            question: 'Which function converts a string to lowercase?',
            answers: [
              { text: 'lower()', correct: true },
              { text: 'toLower()', correct: false },
              { text: 'caseLower()', correct: false },
              { text: 'lcase()', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\nx = 5\nif x > 2:\n    print("A")\nelif x > 3:\n    print("B")\nelse:\n    print("C")',
            answers: [
              { text: 'A', correct: true },
              { text: 'B', correct: false },
              { text: 'C', correct: false },
              { text: 'A B', correct: false }
            ]
          },
          {
            question: 'How many times will "Hello" be printed in:\n\nfor i in range(1, 6, 2):\n    print("Hello")',
            answers: [
              { text: '1', correct: false },
              { text: '3', correct: true },
              { text: '5', correct: false },
              { text: '6', correct: false }
            ]
          },
          {
            question: 'Which loop is guaranteed to execute at least once?',
            answers: [
              { text: 'for', correct: false },
              { text: 'while', correct: false },
              { text: 'do-while', correct: false },
              { text: "Python doesn't have such loop", correct: true }
            ]
          },
          {
            question: 'What does break do in a loop?',
            answers: [
              { text: 'Skips current iteration', correct: false },
              { text: 'Exits the loop', correct: true },
              { text: 'Restarts the loop', correct: false },
              { text: 'Pauses the loop', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\ni = 0\nwhile i < 3:\n    print(i, end=" ")\n    i += 1\nelse:\n    print(0)',
            answers: [
              { text: '0 1 2', correct: false },
              { text: '0 1 2 0', correct: true },
              { text: '1 2 3', correct: false },
              { text: '0 1 2 3', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\ndef func(a, b=2):\n    return a * b\nprint(func(3))',
            answers: [
              { text: '6', correct: true },
              { text: '5', correct: false },
              { text: 'Error', correct: false },
              { text: 'None', correct: false }
            ]
          },
          {
            question: 'What does *args represent in a function definition?',
            answers: [
              { text: 'Mandatory arguments', correct: false },
              { text: 'Keyword arguments', correct: false },
              { text: 'Variable-length non-keyword arguments', correct: true },
              { text: 'Variable-length keyword arguments', correct: false }
            ]
          },
          {
            question: 'Which keyword is used to return a value from a function?',
            answers: [
              { text: 'return', correct: true },
              { text: 'break', correct: false },
              { text: 'yield', correct: false },
              { text: 'exit', correct: false }
            ]
          },
          {
            question: 'What is a lambda function?',
            answers: [
              { text: 'Anonymous function', correct: false },
              { text: 'Function with no name', correct: false },
              { text: 'Function with single expression', correct: false },
              { text: 'All of the above', correct: true }
            ]
          },
          {
            question: 'What is the scope of a variable defined inside a function?',
            answers: [
              { text: 'Global', correct: false },
              { text: 'Local', correct: true },
              { text: 'Both', correct: false },
              { text: 'Depends on declaration', correct: false }
            ]
          },
          {
            question: 'Which is mutable in Python?',
            answers: [
              { text: 'List', correct: true },
              { text: 'Tuple', correct: false },
              { text: 'String', correct: false },
              { text: 'All of the above', correct: false }
            ]
          },
          {
            question: 'What is the output of [1, 2, 3][1:]?',
            answers: [
              { text: '[1]', correct: false },
              { text: '[2]', correct: false },
              { text: '[2, 3]', correct: true },
              { text: '[1, 2, 3]', correct: false }
            ]
          },
          {
            question: 'How do you add an element to a set?',
            answers: [
              { text: 'append()', correct: false },
              { text: 'add()', correct: true },
              { text: 'insert()', correct: false },
              { text: 'extend()', correct: false }
            ]
          },
          {
            question: "What is the output of:\n\nd = {'a': 1, 'b': 2}\nprint(d.get('c', 3))",
            answers: [
              { text: 'None', correct: false },
              { text: 'Error', correct: false },
              { text: '3', correct: true },
              { text: "'c'", correct: false }
            ]
          },
          {
            question: 'Which method removes and returns the last element of a list?',
            answers: [
              { text: 'pop()', correct: true },
              { text: 'remove()', correct: false },
              { text: 'delete()', correct: false },
              { text: 'discard()', correct: false }
            ]
          },
          {
            question: 'What is the correct way to create a class?',
            answers: [
              { text: 'class MyClass:', correct: true },
              { text: 'class MyClass()', correct: false },
              { text: 'class MyClass{}', correct: false },
              { text: 'class MyClass[]', correct: false }
            ]
          },
          {
            question: 'Which is the constructor method in Python?',
            answers: [
              { text: '__init__', correct: true },
              { text: '__new__', correct: false },
              { text: '__create__', correct: false },
              { text: 'constructor', correct: false }
            ]
          },
          {
            question: 'What is inheritance in Python?',
            answers: [
              { text: 'Creating new classes from existing ones', correct: true },
              { text: 'Hiding implementation details', correct: false },
              { text: 'Bundling data with methods', correct: false },
              { text: 'Multiple forms of a function', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\nclass A:\n    def __init__(self):\n        self.x = 1\na = A()\nprint(a.x)',
            answers: [
              { text: '0', correct: false },
              { text: '1', correct: true },
              { text: 'None', correct: false },
              { text: 'Error', correct: false }
            ]
          },
          {
            question: 'What does super() do?',
            answers: [
              { text: 'Calls parent class methods', correct: true },
              { text: 'Creates superclass', correct: false },
              { text: 'Makes class abstract', correct: false },
              { text: 'Initializes all classes', correct: false }
            ]
          },
          {
            question: 'Which mode opens a file for both reading and writing?',
            answers: [
              { text: 'r', correct: false },
              { text: 'w+', correct: true },
              { text: 'a', correct: false },
              { text: 'x', correct: false }
            ]
          },
          {
            question: 'What is the correct way to open a file?',
            answers: [
              { text: 'open("file.txt", "r")', correct: true },
              { text: 'open("file.txt", read)', correct: false },
              { text: 'open("file.txt").read()', correct: false },
              { text: 'fopen("file.txt", "r")', correct: false }
            ]
          },
          {
            question: 'Which method reads the entire file content as a string?',
            answers: [
              { text: 'read()', correct: true },
              { text: 'readline()', correct: false },
              { text: 'readlines()', correct: false },
              { text: 'readall()', correct: false }
            ]
          },
          {
            question: 'What does the with statement do?',
            answers: [
              { text: 'Opens file without closing', correct: false },
              { text: 'Automatically closes file', correct: true },
              { text: 'Only opens for writing', correct: false },
              { text: 'Handles binary files', correct: false }
            ]
          },
          {
            question: 'How to check if a file exists?',
            answers: [
              { text: 'os.path.exists()', correct: true },
              { text: 'file.exists()', correct: false },
              { text: 'path.exists()', correct: false },
              { text: 'exists.file()', correct: false }
            ]
          },
          {
            question: 'What is the correct try-except block?',
            answers: [
              {
                text: `try:
            # code
        except:
            # handle`,
                correct: true
              },
              {
                text: `try:
            # code
        catch:
            # handle`,
                correct: false
              },
              {
                text: `try:
            # code
        exception:
            # handle`,
                correct: false
              },
              {
                text: `try:
            # code
        if_error:
            # handle`,
                correct: false
              }
            ]
          },
          {
            question: 'Which exception is raised for division by zero?',
            answers: [
              { text: 'ValueError', correct: false },
              { text: 'ArithmeticError', correct: false },
              { text: 'ZeroDivisionError', correct: true },
              { text: 'MathError', correct: false }
            ]
          },
          {
            question: 'What does finally block do?',
            answers: [
              { text: 'Executes if no exception', correct: false },
              { text: 'Executes always', correct: true },
              { text: 'Executes if exception occurs', correct: false },
              { text: 'None of the above', correct: false }
            ]
          },
          {
            question: 'How to raise an exception manually?',
            answers: [
              { text: 'throw', correct: false },
              { text: 'raise', correct: true },
              { text: 'except', correct: false },
              { text: 'error', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\ntry:\n    print(1/0)\nexcept ZeroDivisionError:\n    print("A")\nexcept:\n    print("B")\nelse:\n    print("C")\nfinally:\n    print("D")',
            answers: [
              { text: 'A D', correct: true },
              { text: 'B D', correct: false },
              { text: 'C D', correct: false },
              { text: 'A C D', correct: false }
            ]
          },
          {
            question: 'How to import a module named "mymodule"?',
            answers: [
              { text: 'include mymodule', correct: false },
              { text: 'import mymodule', correct: true },
              { text: 'require mymodule', correct: false },
              { text: 'using mymodule', correct: false }
            ]
          },
          {
            question: 'What is __name__ when a Python file is run directly?',
            answers: [
              { text: '__main__', correct: true },
              { text: 'main', correct: false },
              { text: 'filename', correct: false },
              { text: 'None', correct: false }
            ]
          },
          {
            question: 'Which module is for mathematical operations?',
            answers: [
              { text: 'math', correct: true },
              { text: 'calc', correct: false },
              { text: 'numpy', correct: false },
              { text: 'random', correct: false }
            ]
          },
          {
            question: 'How to install external packages?',
            answers: [
              { text: 'pip', correct: true },
              { text: 'import', correct: false },
              { text: 'install', correct: false },
              { text: 'download', correct: false }
            ]
          },
          {
            question: 'What does from module import * do?',
            answers: [
              { text: 'Imports all names from module', correct: true },
              { text: 'Imports module itself', correct: false },
              { text: 'Imports only functions', correct: false },
              { text: 'Imports nothing', correct: false }
            ]
          },
          {
            question: 'What is a generator in Python?',
            answers: [
              { text: 'Function with yield', correct: true },
              { text: 'Function with return', correct: false },
              { text: 'Function with break', correct: false },
              { text: 'Function with pass', correct: false }
            ]
          },
          {
            question: 'What is the purpose of __str__ method?',
            answers: [
              { text: 'String representation of object', correct: true },
              { text: 'Object initialization', correct: false },
              { text: 'Object comparison', correct: false },
              { text: 'Object deletion', correct: false }
            ]
          },
          {
            question: 'Which decorator is used for class methods?',
            answers: [
              { text: '@staticmethod', correct: false },
              { text: '@classmethod', correct: true },
              { text: '@method', correct: false },
              { text: '@function', correct: false }
            ]
          },
          {
            question: 'What does list comprehension do?',
            answers: [
              { text: 'Creates lists concisely', correct: false },
              { text: 'Makes lists readable', correct: false },
              { text: 'Both a and b', correct: true },
              { text: 'None of the above', correct: false }
            ]
          },
          {
            question: 'What is the output of:\n\nnums = [1, 2, 3]\nprint([x * 2 for x in nums])',
            answers: [
              { text: '[2, 4, 6]', correct: true },
              { text: '[1, 2, 3, 1, 2, 3]', correct: false },
              { text: '[1, 4, 9]', correct: false },
              { text: 'Error', correct: false }
            ]
          },
          
      








        {
            question: 'What is the output of print(2 ** 3)?',
            answers: [
                { text: '6', correct: false },
                { text: '8', correct: true },
                { text: '9', correct: false },
                { text: '5', correct: false }
            ]
        },
        {
            question: 'Which keyword is used to define a function?',
            answers: [
                { text: 'define', correct: false },
                { text: 'def', correct: true },
                { text: 'function', correct: false },
                { text: 'fun', correct: false }
            ]
        },

        {
            question: 'Which operator is used for modulus (remainder)?',
            answers: [
                { text: '//', correct: false },
                { text: '%', correct: true },
                { text: '**', correct: false },
                { text: '/', correct: false }
            ]
        },
        {
            question: 'Which one is immutable?',
            answers: [
                { text: 'list', correct: false },
                { text: 'dict', correct: false },
                { text: 'tuple', correct: true },
                { text: 'set', correct: false }
            ]
        },
        {
            question: 'What is the output of bool(0)?',
            answers: [
                { text: 'True', correct: false },
                { text: 'False', correct: true },
                { text: '0', correct: false },
                { text: '1', correct: false }
            ]
        },
        {
            question: 'Which data type is created when you enclose data in {}?',
            answers: [
                { text: 'list', correct: false },
                { text: 'tuple', correct: false },
                { text: 'dictionary', correct: true },
                { text: 'string', correct: false }
            ]
        },
        {
            question: 'How do you start a comment in Python?',
            answers: [
                { text: '//', correct: false },
                { text: '*', correct: false },
                { text: '#', correct: true },
                { text: '--', correct: false }
            ]
        },
        {
            question: 'Which method is used to add an element to a list?',
            answers: [
                { text: 'push()', correct: false },
                { text: 'add()', correct: false },
                { text: 'insert()', correct: false },
                { text: 'append()', correct: true }
            ]
        },
        {
            question: 'Which keyword is used to create a loop in Python?',
            answers: [
                { text: 'loop', correct: false },
                { text: 'iterate', correct: false },
                { text: 'for', correct: true },
                { text: 'while', correct: true }
            ]
        },
        {
            question: 'What is the index of \'e\' in "Hello"?',
            answers: [
                { text: '1', correct: true },
                { text: '0', correct: false },
                { text: '2', correct: false },
                { text: '4', correct: false }
            ]
        },
        {
            question: 'How to get the length of a list?',
            answers: [
                { text: 'size(list)', correct: false },
                { text: 'len(list)', correct: true },
                { text: 'length(list)', correct: false },
                { text: 'count(list)', correct: false }
            ]
        },
        {
            question: 'Which keyword is used to exit a loop?',
            answers: [
                { text: 'skip', correct: false },
                { text: 'continue', correct: false },
                { text: 'break', correct: true },
                { text: 'pass', correct: false }
            ]
        },
        {
            question: 'Which method removes all items from a list?',
            answers: [
                { text: 'clear()', correct: true },
                { text: 'remove()', correct: false },
                { text: 'delete()', correct: false },
                { text: 'pop()', correct: false }
            ]
        },
        {
            question: 'What is slicing in Python?',
            answers: [
                { text: 'Copying full list', correct: false },
                { text: 'Copying part of a list', correct: true },
                { text: 'Removing items', correct: false },
                { text: 'Sorting list', correct: false }
            ]
        },
        {
            question: 'How to create an empty dictionary?',
            answers: [
                { text: '[]', correct: false },
                { text: '()', correct: false },
                { text: '{}', correct: true },
                { text: 'dict()', correct: true }
            ]
        },
        {
            question: 'Which one is a valid variable name?',
            answers: [
                { text: '1variable', correct: false },
                { text: 'variable_1', correct: true },
                { text: 'variable-1', correct: false },
                { text: 'variable 1', correct: false }
            ]
        },
        {
            question: 'What does input() function return?',
            answers: [
                { text: 'int', correct: false },
                { text: 'float', correct: false },
                { text: 'str', correct: true },
                { text: 'bool', correct: false }
            ]
        },
        {
            question: 'What is the output of "5" + "6"?',
            answers: [
                { text: '11', correct: false },
                { text: '56', correct: true },
                { text: '5 6', correct: false },
                { text: 'Error', correct: false }
            ]
        },
        {
            question: 'What keyword is used inside a function to return data?',
            answers: [
                { text: 'break', correct: false },
                { text: 'return', correct: true },
                { text: 'pass', correct: false },
                { text: 'continue', correct: false }
            ]
        },
        {
            question: 'What is the correct way to define a class in Python?',
            answers: [
                { text: 'function class:', correct: false },
                { text: 'class MyClass:', correct: true },
                { text: 'define class MyClass', correct: false },
                { text: 'create MyClass:', correct: false }
            ]
        },
        {
            question: 'What is Inheritance in Python?',
            answers: [
                { text: 'Copying a function', correct: false },
                { text: 'Copying a class properties', correct: true },
                { text: 'Deleting classes', correct: false },
                { text: 'Repeating a function', correct: false }
            ]
        },
        {
            question: 'Which method is called when an object is created?',
            answers: [
                { text: 'start', correct: false },
                { text: 'create', correct: false },
                { text: 'init', correct: false },
                { text: '__init__', correct: true }
            ]
        },
        {
            question: 'What is the output of bool([])?',
            answers: [
                { text: 'True', correct: false },
                { text: 'False', correct: true },
                { text: 'Error', correct: false },
                { text: 'None', correct: false }
            ]
        },
        {
            question: 'What is an example of a conditional operator?',
            answers: [
                { text: '=', correct: false },
                { text: '==', correct: true },
                { text: '!=', correct: true },
                { text: 'All of these', correct: false }
            ]
        },
        {
            question: 'What is pass keyword used for?',
            answers: [
                { text: 'exit program', correct: false },
                { text: 'skip block', correct: true },
                { text: 'break loop', correct: false },
                { text: 'create function', correct: false }
            ]
        },
        {
            question: 'Which loop is guaranteed to execute at least once?',
            answers: [
                { text: 'for', correct: false },
                { text: 'while', correct: false },
                { text: 'do-while', correct: false },
                { text: 'None (Python doesn\'t have do-while)', correct: true }
            ]
        },
        {
            question: 'What is the output of 2 == 2.0?',
            answers: [
                { text: 'True', correct: true },
                { text: 'False', correct: false },
                { text: 'Error', correct: false },
                { text: 'None', correct: false }
            ]
        },
        {
            question: 'How do you write an infinite loop?',
            answers: [
                { text: 'while True:', correct: true },
                { text: 'for i in True:', correct: false },
                { text: 'while(1==0):', correct: false },
                { text: 'for i in range(0):', correct: false }
            ]
        },
        {
            question: 'How to define a function with no arguments?',
            answers: [
                { text: 'def func():', correct: true },
                { text: 'def func:', correct: false },
                { text: 'def func[]:', correct: false },
                { text: 'func{}', correct: false }
            ]
        },
        {
            question: 'How do you open a file for writing?',
            answers: [
                { text: '\'r\'', correct: false },
                { text: '\'w\'', correct: true },
                { text: '\'a\'', correct: false },
                { text: '\'x\'', correct: false }
            ]
        },
        {
            question: 'What module is used for regular expressions?',
            answers: [
                { text: 'os', correct: false },
                { text: 'math', correct: false },
                { text: 're', correct: true },
                { text: 'regex', correct: false }
            ]
        },
        {
            question: 'What is the extension of a Python file?',
            answers: [
                { text: '.py', correct: true },
                { text: '.pt', correct: false },
                { text: '.pyt', correct: false },
                { text: '.txt', correct: false }
            ]
        },
        {
            question: 'Which function returns random numbers?',
            answers: [
                { text: 'math.random()', correct: false },
                { text: 'random()', correct: false },
                { text: 'random.randint()', correct: true },
                { text: 'randint.random()', correct: false }
            ]
        },
        {
            question: 'Which library is used for data analysis?',
            answers: [
                { text: 'numpy', correct: false },
                { text: 'pandas', correct: true },
                { text: 'math', correct: false },
                { text: 'scipy', correct: false }
            ]
        },
        {
            question: 'What is the output of 5 // 2?',
            answers: [
                { text: '2.5', correct: false },
                { text: '2', correct: true },
                { text: '3', correct: false },
                { text: '5', correct: false }
            ]
        },
        {
            question: 'What is the output of len("python")?',
            answers: [
                { text: '5', correct: false },
                { text: '6', correct: true },
                { text: '7', correct: false },
                { text: '8', correct: false }
            ]
        },
        {
            question: 'What method adds a key-value pair to a dictionary?',
            answers: [
                { text: 'add()', correct: false },
                { text: 'append()', correct: false },
                { text: 'update()', correct: true },
                { text: 'insert()', correct: false }
            ]
        },
        {
            question: 'What does open("file.txt", "r") do?',
            answers: [
                { text: 'Open file for writing', correct: false },
                { text: 'Open file for reading', correct: true },
                { text: 'Create new file', correct: false },
                { text: 'Append file', correct: false }
            ]
        },
        {
            question: 'Which keyword is used for anonymous function?',
            answers: [
                { text: 'def', correct: false },
                { text: 'lambda', correct: true },
                { text: 'func', correct: false },
                { text: 'return', correct: false }
            ]
        },
        {
            question: 'Which loop would you use for known number of iterations?',
            answers: [
                { text: 'for', correct: true },
                { text: 'while', correct: false },
                { text: 'do-while', correct: false },
                { text: 'forever', correct: false }
            ]
        },
        {
            question: 'How to add multiple elements to list?',
            answers: [
                { text: 'add()', correct: false },
                { text: 'append()', correct: false },
                { text: 'extend()', correct: true },
                { text: 'insert()', correct: false }
            ]
        },
        {
            question: 'What is the correct file mode to read & write?',
            answers: [
                { text: '\'w\'', correct: false },
                { text: '\'rw\'', correct: false },
                { text: '\'r+\'', correct: true },
                { text: '\'a+\'', correct: false }
            ]
        },
        {
            question: 'int("5") will return:',
            answers: [
                { text: '5', correct: true },
                { text: '"5"', correct: false },
                { text: 'Error', correct: false },
                { text: 'None', correct: false }
            ]
        },
        {
            question: 'Which is a correct tuple?',
            answers: [
                { text: '(1, 2, 3)', correct: true },
                { text: '[1, 2, 3]', correct: false },
                { text: '{1, 2, 3}', correct: false },
                { text: '1, 2, 3', correct: false }
            ]
        },
        {
            question: 'What is returned by range(5)?',
            answers: [
                { text: 'List [0-4]', correct: false },
                { text: 'List [1-5]', correct: false },
                { text: 'Range object', correct: true },
                { text: 'Set', correct: false }
            ]
        },
        {
            question: 'What will min([2, 4, 6, 1]) return?',
            answers: [
                { text: '2', correct: false },
                { text: '1', correct: true },
                { text: '4', correct: false },
                { text: '6', correct: false }
            ]
        },
        {
            question: 'Which is NOT a valid keyword in Python?',
            answers: [
                { text: 'pass', correct: false },
                { text: 'eval', correct: true },
                { text: 'def', correct: false },
                { text: 'as', correct: false }
            ]
        },
        {
            question: 'Which symbol is used for exponentiation?',
            answers: [
                { text: '^', correct: false },
                { text: '**', correct: true },
                { text: '//', correct: false },
                { text: '%', correct: false }
            ]
        },
        {
            question: 'What is the data type of [1,2,3]?',
            answers: [
                { text: 'set', correct: false },
                { text: 'dict', correct: false },
                { text: 'list', correct: true },
                { text: 'tuple', correct: false }
            ]
        },
        {
            question: 'Which operator is used to concatenate strings?',
            answers: [
                { text: '+', correct: true },
                { text: '*', correct: false },
                { text: '&', correct: false },
                { text: '%', correct: false }
            ]
        },
        {
            question: 'Which one is a Boolean value?',
            answers: [
                { text: '1', correct: false },
                { text: '0', correct: false },
                { text: 'True', correct: true },
                { text: '\'True\'', correct: false }
            ]
        },
        {
            question: 'What is the use of del keyword?',
            answers: [
                { text: 'Delete object', correct: true },
                { text: 'Add object', correct: false },
                { text: 'Print object', correct: false },
                { text: 'Modify object', correct: false }
            ]
        },
        {
            question: 'Python lists are:',
            answers: [
                { text: 'Ordered', correct: true },
                { text: 'Unordered', correct: false },
                { text: 'Immutable', correct: false },
                { text: 'Sorted', correct: false }
            ]
        },
        {
            question: 'Which function gives the absolute value?',
            answers: [
                { text: 'abs()', correct: true },
                { text: 'fabs()', correct: false },
                { text: 'absolute()', correct: false },
                { text: 'math.abs()', correct: false }
            ]
        },
        {
            question: 'Python set elements are:',
            answers: [
                { text: 'Ordered', correct: false },
                { text: 'Unordered', correct: true },
                { text: 'Duplicate', correct: false },
                { text: 'Both a and b', correct: false }
            ]
        },
        {
            question: 'What is default return of a function if no return?',
            answers: [
                { text: 'None', correct: true },
                { text: '0', correct: false },
                { text: 'Error', correct: false },
                { text: 'True', correct: false }
            ]
        },
        {
            question: 'Python is:',
            answers: [
                { text: 'Compiled', correct: false },
                { text: 'Interpreted', correct: true },
                { text: 'Both compiled and interpreted', correct: false },
                { text: 'Neither', correct: false }
            ]
        },
    














        {
            question: 'Which method is used to add an element to the end of a list?',
            answers: [
                { text: '.push()', correct: false },
                { text: '.append()', correct: true },
                { text: '.insert()', correct: false },
                { text: '.add()', correct: false }
            ],
            explanation: 'The `.append()` method adds an element to the end of a list. `.push()` is used in JavaScript, not Python. `.insert()` adds at a specific position.',
            hint: 'It starts with "a" and is specific to Python lists.'
        },
        {
            question: 'What does the `range(3, 8, 2)` function return?',
            answers: [
                { text: '[3, 5, 7]', correct: true },
                { text: '[3, 4, 5, 6, 7, 8]', correct: false },
                { text: '[3, 8, 2]', correct: false },
                { text: '[2, 3, 4, 5, 6, 7, 8]', correct: false }
            ],
            explanation: '`range(start, stop, step)` generates numbers starting from 3, up to but not including 8, incrementing by 2 each time (3, 5, 7).',
            hint: 'The third argument is the step value.'
        },
        {
            question: 'How do you create a virtual environment in Python?',
            answers: [
                { text: 'python create venv', correct: false },
                { text: 'python -m venv myenv', correct: true },
                { text: 'pip install virtualenv', correct: false },
                { text: 'python virtual env', correct: false }
            ],
            explanation: 'The correct command is `python -m venv myenv` which creates a virtual environment named "myenv". This is the standard way in Python 3+.',
            hint: 'It uses the `-m` flag with a module name.'
        },
        {
            question: 'What is the purpose of `__init__` in a Python class?',
            answers: [
                { text: 'To initialize the class definition', correct: false },
                { text: 'To create class documentation', correct: false },
                { text: 'To initialize new object instances', correct: true },
                { text: 'To import required modules', correct: false }
            ],
            explanation: 'The `__init__` method is called when a new instance of a class is created. It initializes the attributes of the class.',
            hint: 'It\'s called automatically when creating new objects.'
        },
        {
            question: 'Which of these is NOT a valid Python variable name?',
            answers: [
                { text: 'my_var', correct: false },
                { text: '_var', correct: false },
                { text: '3var', correct: true },
                { text: 'var3', correct: false }
            ],
            explanation: 'Variable names cannot start with a number in Python. `3var` is invalid while the others are valid variable names.',
            hint: 'Python variables cannot start with this character.'
        },
        {
            question: 'What does the `//` operator do in Python?',
            answers: [
                { text: 'Integer division', correct: true },
                { text: 'Floor division', correct: true },
                { text: 'Comment syntax', correct: false },
                { text: 'Exponentiation', correct: false }
            ],
            explanation: 'The `//` operator performs floor division (integer division) in Python, returning the largest integer less than or equal to the division result.',
            hint: 'It\'s related to division but returns an integer.'
        },
        {
            question: 'Which module is used for working with dates in Python?',
            answers: [
                { text: 'time', correct: false },
                { text: 'datetime', correct: true },
                { text: 'calendar', correct: false },
                { text: 'dateutils', correct: false }
            ],
            explanation: 'The `datetime` module provides classes for manipulating dates and times. While other modules exist, `datetime` is the primary one.',
            hint: 'The name combines "date" and "time".'
        },
        {
            question: 'What is the result of `"hello".upper()`?',
            answers: [
                { text: '"HELLO"', correct: true },
                { text: '"Hello"', correct: false },
                { text: '"hello"', correct: false },
                { text: 'Error', correct: false }
            ],
            explanation: 'The `.upper()` string method converts all characters in a string to uppercase, returning "HELLO" in this case.',
            hint: 'Think about what "upper" suggests.'
        },
        {
            question: 'How do you open a file for reading in Python?',
            answers: [
                { text: 'open("file.txt", "r")', correct: true },
                { text: 'open("file.txt", "read")', correct: false },
                { text: 'open("file.txt")', correct: true },
                { text: 'open("file.txt", "w")', correct: false }
            ],
            explanation: 'Both `open("file.txt", "r")` and `open("file.txt")` work as the default mode is "r" (read). "w" would open for writing.',
            hint: 'The default mode is for reading.'
        },
        {
            question: 'What does the `pass` statement do in Python?',
            answers: [
                { text: 'Terminates the program', correct: false },
                { text: 'Skips to the next iteration in a loop', correct: false },
                { text: 'Does nothing (a null operation)', correct: true },
                { text: 'Passes arguments to a function', correct: false }
            ],
            explanation: '`pass` is a null operation - it does nothing but serves as a placeholder where syntactically some code is required.',
            hint: 'It\'s often used as a placeholder.'
        },
        {
            question: 'Which of these is immutable in Python?',
            answers: [
                { text: 'List', correct: false },
                { text: 'Dictionary', correct: false },
                { text: 'Tuple', correct: true },
                { text: 'Set', correct: false }
            ],
            explanation: 'Tuples are immutable (cannot be changed after creation), while lists, dictionaries and sets are mutable.',
            hint: 'It uses parentheses instead of square brackets.'
        },
        {
            question: 'What is the purpose of `if __name__ == "__main__":`?',
            answers: [
                { text: 'To define the main class', correct: false },
                { text: 'To check if the script is being run directly', correct: true },
                { text: 'To import the main module', correct: false },
                { text: 'To declare the main function', correct: false }
            ],
            explanation: 'This idiom checks if the script is being run directly (not imported) and is commonly used to execute code only when the script is run directly.',
            hint: 'It helps determine how the script is being executed.'
        },
        {
            question: 'Which method would you use to remove a key from a dictionary?',
            answers: [
                { text: '.remove()', correct: false },
                { text: '.delete()', correct: false },
                { text: '.pop()', correct: true },
                { text: '.discard()', correct: false }
            ],
            explanation: 'The `.pop()` method removes a key from a dictionary and returns its value. `.remove()` is for lists, `.discard()` is for sets.',
            hint: 'It both removes and returns the value.'
        },
        {
            question: 'What does `"hello"[1:4]` return?',
            answers: [
                { text: '"hel"', correct: false },
                { text: '"ell"', correct: true },
                { text: '"ello"', correct: false },
                { text: '"ell"', correct: true }
            ],
            explanation: 'String slicing returns characters from index 1 up to but not including index 4 ("e", "l", "l"). Note there are two identical correct answers here (a typo in the options).',
            hint: 'Remember Python uses 0-based indexing.'
        },
        {
            question: 'Which decorator is used to define a class method?',
            answers: [
                { text: '@staticmethod', correct: false },
                { text: '@classmethod', correct: true },
                { text: '@method', correct: false },
                { text: '@instancemethod', correct: false }
            ],
            explanation: 'The `@classmethod` decorator is used to define a method that receives the class as implicit first argument (cls) rather than the instance (self).',
            hint: 'It starts with "@class".'
        },
        {
            question: 'What is the output of `bool("False")`?',
            answers: [
                { text: 'False', correct: false },
                { text: 'True', correct: true },
                { text: 'Error', correct: false },
                { text: 'None', correct: false }
            ],
            explanation: 'Any non-empty string is considered True in Python, even if it contains the word "False". Only empty strings are False.',
            hint: 'Consider how Python evaluates strings as booleans.'
        },
        {
            question: 'Which module would you use for regular expressions?',
            answers: [
                { text: 'regex', correct: false },
                { text: 're', correct: true },
                { text: 'regexp', correct: false },
                { text: 'pyre', correct: false }
            ],
            explanation: 'The `re` module provides regular expression matching operations similar to those found in Perl. It\'s Python\'s built-in regex module.',
            hint: 'It\'s a two-letter abbreviation.'
        },
        {
            question: 'What does `sys.argv` contain?',
            answers: [
                { text: 'Command-line arguments', correct: true },
                { text: 'System environment variables', correct: false },
                { text: 'Python version information', correct: false },
                { text: 'Installed packages list', correct: false }
            ],
            explanation: '`sys.argv` is a list in Python that contains the command-line arguments passed to the script, with `sys.argv[0]` being the script name.',
            hint: 'It\'s related to how you run the script from command line.'
        },
        {
            question: 'How do you create a set in Python?',
            answers: [
                { text: '{}', correct: false },
                { text: 'set()', correct: true },
                { text: '[]', correct: false },
                { text: '()', correct: false }
            ],
            explanation: 'While `{}` creates an empty dictionary, `set()` creates an empty set. For non-empty sets, you can use `{1, 2, 3}` syntax.',
            hint: 'Empty curly braces create a different data structure.'
        },

        {
            question: 'What is the output of `[x**2 for x in range(5)]`?',
            answers: [
                { text: '[0, 1, 4, 9, 16]', correct: true },
                { text: '[1, 4, 9, 16, 25]', correct: false },
                { text: '[0, 1, 4, 9, 16, 25]', correct: false },
                { text: 'Error', correct: false }
            ],
            explanation: 'This list comprehension squares each number from 0 to 4 (range(5) goes from 0 to 4). The result is [0, 1, 4, 9, 16].',
            hint: 'Remember range(5) starts at 0 and stops before 5.'
        },
        {
            question: 'Which method removes all items from a dictionary?',
            answers: [
                { text: '.removeall()', correct: false },
                { text: '.clear()', correct: true },
                { text: '.empty()', correct: false },
                { text: '.delete()', correct: false }
            ],
            explanation: 'The .clear() method removes all key-value pairs from a dictionary, leaving it empty.',
            hint: 'Think of emptying/cleaning the dictionary.'
        },
        {
            question: 'What does the `@property` decorator do?',
            answers: [
                { text: 'Marks a function as static', correct: false },
                { text: 'Converts a method to a read-only attribute', correct: true },
                { text: 'Creates a class property', correct: false },
                { text: 'Imports external properties', correct: false }
            ],
            explanation: 'The @property decorator allows you to define methods that can be accessed like attributes, providing getter functionality.',
            hint: 'It helps implement getters in Python classes.'
        },
        {
            question: 'Which operator has the highest precedence in Python?',
            answers: [
                { text: '** (exponentiation)', correct: true },
                { text: '* (multiplication)', correct: false },
                { text: '+ (addition)', correct: false },
                { text: '== (comparison)', correct: false }
            ],
            explanation: 'Exponentiation has the highest precedence, followed by multiplication/division, then addition/subtraction, then comparison operators.',
            hint: 'Think about mathematical operation order.'
        },
        {
            question: 'How do you create a generator function?',
            answers: [
                { text: 'Using the generator keyword', correct: false },
                { text: 'Using yield instead of return', correct: true },
                { text: 'Using the @generator decorator', correct: false },
                { text: 'Using gen() syntax', correct: false }
            ],
            explanation: 'Generator functions use the yield keyword to return values one at a time, maintaining their state between calls.',
            hint: 'It involves replacing a common keyword with another.'
        },
        {
            question: 'What is the purpose of `__str__` method?',
            answers: [
                { text: 'String conversion for printing', correct: true },
                { text: 'String comparison', correct: false },
                { text: 'String formatting', correct: false },
                { text: 'String encryption', correct: false }
            ],
            explanation: 'The `__str__` method provides the "informal" string representation of an object, used by print() and str().',
            hint: 'Think about how objects are displayed as strings.'
        },
        {
            question: 'Which module provides support for weak references?',
            answers: [
                { text: 'weakref', correct: true },
                { text: 'reference', correct: false },
                { text: 'weak', correct: false },
                { text: 'ptr', correct: false }
            ],
            explanation: 'The weakref module allows references to objects without preventing their garbage collection.',
            hint: 'The name combines "weak" and "reference".'
        },
        {
            question: 'What does `"Hello".isalpha()` return?',
            answers: [
                { text: 'True', correct: true },
                { text: 'False', correct: false },
                { text: 'Error', correct: false },
                { text: 'None', correct: false }
            ],
            explanation: 'isalpha() returns True if all characters in the string are alphabetic and there is at least one character.',
            hint: 'Check if all characters are letters.'
        },
        {
            question: 'Which function creates an enumeration?',
            answers: [
                { text: 'enum()', correct: false },
                { text: 'Enum()', correct: false },
                { text: 'enumerate()', correct: false },
                { text: 'enum.Enum()', correct: true }
            ],
            explanation: 'The enum.Enum class is used to create enumeration types in Python (from the enum module).',
            hint: 'It comes from the enum module.'
        },
        {
            question: 'What is the output of `round(3.14159, 2)`?',
            answers: [
                { text: '3.14', correct: true },
                { text: '3.141', correct: false },
                { text: '3.142', correct: false },
                { text: '3.1', correct: false }
            ],
            explanation: 'The round() function with 2 as the second argument rounds to 2 decimal places, giving 3.14.',
            hint: 'It rounds to the specified number of decimals.'
        },
        {
            question: 'Which of these is a context manager protocol method?',
            answers: [
                { text: '__enter__', correct: true },
                { text: '__start__', correct: false },
                { text: '__begin__', correct: false },
                { text: '__open__', correct: false }
            ],
            explanation: 'The context manager protocol consists of `__enter__` and `__exit__` methods, used with the `with` statement.',
            hint: 'Think about what happens when entering a context.'
        },
        {
            question: 'What does `math.isclose()` do?',
            answers: [
                { text: 'Checks if numbers are exactly equal', correct: false },
                { text: 'Checks if numbers are approximately equal', correct: true },
                { text: 'Closes a math module session', correct: false },
                { text: 'Checks if a number is close to zero', correct: false }
            ],
            explanation: 'math.isclose() checks if two numbers are approximately equal, accounting for floating-point imprecision.',
            hint: 'It helps with floating-point comparisons.'
        },
{
            question: 'What is `collections.defaultdict` used for?',
            answers: [
                { text: 'Creating dictionaries with default values', correct: true },
                { text: 'Default dictionary sorting', correct: false },
                { text: 'Dictionary compression', correct: false },
                { text: 'Default dictionary views', correct: false }
            ],
            explanation: 'defaultdict provides default values for missing keys, avoiding KeyError exceptions.',
            hint: 'It helps handle missing keys elegantly.'
        },
        {
            question: 'How do you make an asynchronous HTTP request?',
            answers: [
                { text: 'Using urllib.request', correct: false },
                { text: 'Using aiohttp', correct: true },
                { text: 'Using sync_request', correct: false },
                { text: 'Using http.async', correct: false }
            ],
            explanation: 'The aiohttp library is commonly used for making asynchronous HTTP requests in Python.',
            hint: 'Look for a library with "async" in its name.'
        },
        {
            question: 'What does `frozenset()` create?',
            answers: [
                { text: 'A mutable set', correct: false },
                { text: 'An immutable set', correct: true },
                { text: 'A frozen list', correct: false },
                { text: 'A dictionary key', correct: false }
            ],
            explanation: 'frozenset() creates an immutable set that can be used as a dictionary key or element of another set.',
            hint: 'Think about the opposite of a regular set.'
        },
        {
            question: 'Which decorator caches function results?',
            answers: [
                { text: '@cache', correct: false },
                { text: '@lru_cache', correct: true },
                { text: '@memoize', correct: false },
                { text: '@remember', correct: false }
            ],
            explanation: 'functools.lru_cache decorator memorizes function calls to avoid repeated calculations.',
            hint: 'It stands for "Least Recently Used Cache".'
        },
        {
            question: 'What is the purpose of `__slots__`?',
            answers: [
                { text: 'To limit attribute creation', correct: true },
                { text: 'To create time slots', correct: false },
                { text: 'To allocate memory slots', correct: false },
                { text: 'To define class slots', correct: false }
            ],
            explanation: '__slots__ optimizes memory usage by preventing dynamic attribute creation in class instances.',
            hint: 'It helps with memory optimization.'
        },
        {
            question: 'Which function measures code execution time?',
            answers: [
                { text: 'time.measure()', correct: false },
                { text: 'timeit.timeit()', correct: true },
                { text: 'timer.run()', correct: false },
                { text: 'clock.check()', correct: false }
            ],
            explanation: 'timeit.timeit() is designed to measure the execution time of small code snippets accurately.',
            hint: 'The module name suggests its purpose.'
        },
        {
            question: 'What does `sys.getsizeof()` return?',
            answers: [
                { text: 'The number of elements', correct: false },
                { text: 'The memory size in bytes', correct: true },
                { text: 'The object hash', correct: false },
                { text: 'The object type size', correct: false }
            ],
            explanation: 'sys.getsizeof() returns the memory consumption of an object in bytes, not the length or element count.',
            hint: 'It measures memory usage.'
        },

        {
            question: 'What is the purpose of the `__annotations__` attribute in Python?',
            answers: [
                { text: 'To store type hints', correct: true },
                { text: 'To document function parameters', correct: false },
                { text: 'To annotate code comments', correct: false },
                { text: 'To mark deprecated functions', correct: false }
            ],
            explanation: 'The `__annotations__` attribute stores type hints that can be accessed at runtime, added in Python 3.0 as part of PEP 3107.',
            hint: 'Related to type checking and modern Python features'
        },
        {
            question: 'Which Python 3.8 feature allows assignment in expressions?',
            answers: [
                { text: 'Arrow operators', correct: false },
                { text: 'Walrus operator (:=)', correct: true },
                { text: 'Assignment expressions', correct: true },
                { text: 'Let statements', correct: false }
            ],
            explanation: 'The walrus operator (:=) introduced in Python 3.8 (PEP 572) allows assignment within expressions while evaluating the assigned value.',
            hint: 'Named after an animal due to its appearance'
        },
        {
            question: 'What does `@dataclass` automatically generate for a class?',
            answers: [
                { text: 'Database connection', correct: false },
                { text: 'Boilerplate methods like __init__ and __repr__', correct: true },
                { text: 'Class documentation', correct: false },
                { text: 'Type checking', correct: false }
            ],
            explanation: 'The @dataclass decorator (Python 3.7+) automatically generates special methods like __init__(), __repr__(), and __eq__() based on class attributes.',
            hint: 'Reduces repetitive code for simple classes'
        },
        {
            question: 'Which protocol enables structural subtyping in Python?',
            answers: [
                { text: 'ABC (Abstract Base Classes)', correct: false },
                { text: 'Protocol (typing.Protocol)', correct: true },
                { text: 'Interface', correct: false },
                { text: 'Trait', correct: false }
            ],
            explanation: 'typing.Protocol (PEP 544) enables structural subtyping (duck typing) for static type checking, allowing compatibility based on structure rather than explicit inheritance.',
            hint: 'Introduced for better type system support'
        },
        {
            question: 'What is the purpose of `__post_init__` in a dataclass?',
            answers: [
                { text: 'To run code after __init__', correct: true },
                { text: 'To initialize class variables', correct: false },
                { text: 'To post-process data', correct: false },
                { text: 'To validate class definitions', correct: false }
            ],
            explanation: '__post_init__ is called automatically after the generated __init__ in dataclasses, useful for validation or derived fields.',
            hint: 'Executes after initialization'
        },
        {
            question: 'Which Python 3.10 feature simplifies union type syntax?',
            answers: [
                { text: 'X | Y instead of Union[X, Y]', correct: true },
                { text: 'X or Y instead of Union[X, Y]', correct: false },
                { text: 'X ∪ Y instead of Union[X, Y]', correct: false },
                { text: 'X + Y instead of Union[X, Y]', correct: false }
            ],
            explanation: 'Python 3.10 introduced X | Y as cleaner syntax for Union types (PEP 604), replacing typing.Union[X, Y].',
            hint: 'Uses a common mathematical operator'
        },
        {
            question: 'What does `match` (structural pattern matching) replace from other languages?',
            answers: [
                { text: 'if-else chains', correct: true },
                { text: 'try-except blocks', correct: false },
                { text: 'for loops', correct: false },
                { text: 'while loops', correct: false }
            ],
            explanation: 'The match statement (Python 3.10+) provides pattern matching similar to switch/case but more powerful, often replacing complex if-elif-else chains.',
            hint: 'Introduced in Python 3.10 as a new keyword'
        },
        {
            question: 'Which Python 3.9 feature merges dictionaries with | operator?',
            answers: [
                { text: 'Dict concatenation', correct: false },
                { text: 'Dict union', correct: true },
                { text: 'Dict addition', correct: false },
                { text: 'Dict merging', correct: false }
            ],
            explanation: 'Python 3.9 added dict union (PEP 584) allowing d1 | d2 to merge dictionaries, with | operator also working for set-like operations.',
            hint: 'Similar to set union operation'
        },
        {
            question: 'Which tool checks for type consistency without running code?',
            answers: [
                { text: 'pylint', correct: false },
                { text: 'mypy', correct: true },
                { text: 'flake8', correct: false },
                { text: 'black', correct: false }
            ],
            explanation: 'mypy is a static type checker that analyzes type hints without executing code, catching type inconsistencies early.',
            hint: 'Starts with "my" and works with type hints'
        },
        {
            question: 'What is the purpose of `@functools.cached_property`?',
            answers: [
                { text: 'To cache function results', correct: false },
                { text: 'To cache property computations', correct: true },
                { text: 'To cache class methods', correct: false },
                { text: 'To cache instance attributes', correct: false }
            ],
            explanation: '@cached_property (Python 3.8+) caches the result of a property method after first access, similar to @property but with caching.',
            hint: 'Combines property and caching functionality'
        },
        {
            question: 'Which PEP introduced positional-only parameters?',
            answers: [
                { text: 'PEP 570', correct: true },
                { text: 'PEP 484', correct: false },
                { text: 'PEP 3107', correct: false },
                { text: 'PEP 8', correct: false }
            ],
            explanation: 'PEP 570 (Python 3.8) introduced the / syntax for positional-only parameters, enforcing that certain parameters must be passed positionally.',
            hint: 'Look for the PEP about parameter syntax'
        },
        {
            question: 'What does `asyncio.run()` properly manage?',
            answers: [
                { text: 'Database connections', correct: false },
                { text: 'Async event loops', correct: true },
                { text: 'Thread pools', correct: false },
                { text: 'Memory allocation', correct: false }
            ],
            explanation: 'asyncio.run() (Python 3.7+) properly creates/closes an event loop, running async code and cleaning up resources.',
            hint: 'Core async function for running coroutines'
        },
             {
            question: 'What does `@typing.overload` allow?',
            answers: [
                { text: 'Function overloading', correct: true },
                { text: 'Method overriding', correct: false },
                { text: 'Operator overloading', correct: false },
                { text: 'Class inheritance', correct: false }
            ],
            explanation: '@overload allows defining multiple function signatures for type checkers while requiring a single implementation at runtime.',
            hint: 'Used for type checking multiple signatures'
        },
        {
            question: 'Which Python 3.12 feature improves f-strings?',
            answers: [
                { text: 'f-string debugging', correct: false },
                { text: 'Multi-line f-strings', correct: false },
                { text: 'f-string expressions', correct: false },
                { text: 'f-string grammar formalization', correct: true }
            ],
            explanation: 'Python 3.12 formally specified f-string grammar (PEP 701), lifting previous restrictions and allowing reuse of quotes.',
            hint: 'About making f-strings more flexible'
        },
        {
            question: 'What is the purpose of `@contextlib.contextmanager`?',
            answers: [
                { text: 'To create context managers', correct: true },
                { text: 'To manage resources', correct: false },
                { text: 'To handle exceptions', correct: false },
                { text: 'To decorate classes', correct: false }
            ],
            explanation: 'This decorator helps create context managers using generator functions with a single yield, simplifying the context manager protocol.',
            hint: 'Turns generators into context managers'
        },
        {
            question: 'Which Python 3.11 feature reduces exception overhead?',
            answers: [
                { text: 'Zero-cost exceptions', correct: false },
                { text: 'Exception groups', correct: false },
                { text: 'Faster tracebacks', correct: false },
                { text: 'Zero-cost try/except', correct: true }
            ],
            explanation: 'Python 3.11 made try/except blocks faster when no exception occurs (PEP 659), reducing the overhead of using exceptions for control flow.',
            hint: 'About performance improvement in exception handling'
        }
    
    


          ];
          
        // Add more questions following the same format
        // {
        //     question: 'Question text',
        //     answers: [
        //         { text: 'Option 1', correct: false },
        //         { text: 'Option 2', correct: true },
        //         // etc.
        //     ],
        //     explanation: 'Detailed explanation...',
        //     hint: 'Helpful hint...'
        // }
    

    // Quiz Variables
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 15;
    let quizStartTime;
    let userAnswers = [];
    let hintsUsed = 0;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        toggleIcon.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
        toggleText.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    hintBtn.addEventListener('click', showHint);
    reviewBtn.addEventListener('click', reviewAnswers);

    // Start Quiz Function
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        hintsUsed = 0;
        userAnswers = [];
        quizStartTime = new Date().getTime();
        
        startScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        resultsScreen.classList.add('hide');
        
        totalQuestionsElement.textContent = questions.length;
        currentScoreElement.textContent = score;
        
        showQuestion();
    }

    // Show Current Question
    function showQuestion() {
        // Reset state
        nextBtn.disabled = true;
        hintBtn.disabled = false;
        explanationElement.style.display = 'none';
        
        // Set timer
        timeLeft = 15;
        timeLeftElement.textContent = timeLeft;
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
        
        // Update progress
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        
        // Get current question
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        
        // Clear previous options
        optionsElement.innerHTML = '';
        
        // Create new options
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.innerHTML = answer.text;
            button.addEventListener('click', () => selectAnswer(answer.correct, button, index));
            optionsElement.appendChild(button);
        });
        
        // Add animation
        questionElement.classList.remove('fade-in');
        void questionElement.offsetWidth; // Trigger reflow
        questionElement.classList.add('fade-in');
    }

    // Timer Function
    function updateTimer() {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeLeftElement.textContent = '0';
            autoRevealAnswer();
        }
    }

    // Select Answer Function
    function selectAnswer(isCorrect, selectedButton, answerIndex) {
        clearInterval(timer);
        
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
            option.classList.add('disabled');
        });
        
        // Record user answer
        userAnswers.push({
            questionIndex: currentQuestionIndex,
            answerIndex: answerIndex,
            isCorrect: isCorrect,
            timeSpent: 15 - timeLeft
        });
        
        // Highlight selected answer
        if (isCorrect) {
            selectedButton.classList.add('correct');
            score++;
            currentScoreElement.textContent = score;
        } else {
            selectedButton.classList.add('incorrect');
            // Highlight correct answer
            options.forEach(option => {
                const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
                if (option.textContent === correctAnswer.text) {
                    option.classList.add('correct');
                }
            });
        }
        
        // Show explanation
        explanationText.innerHTML = questions[currentQuestionIndex].explanation;
        explanationElement.style.display = 'block';
        
        // Enable next button
        nextBtn.disabled = false;
    }

    // Auto Reveal Answer When Time Runs Out
    function autoRevealAnswer() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
            option.classList.add('disabled');
        });
        
        // Find and highlight correct answer
        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
        options.forEach(option => {
            if (option.textContent === correctAnswer.text) {
                option.classList.add('correct');
            }
        });
        
        // Record unanswered question
        userAnswers.push({
            questionIndex: currentQuestionIndex,
            answerIndex: -1, // -1 indicates no answer
            isCorrect: false,
            timeSpent: 15
        });
        
        // Show explanation
        explanationText.innerHTML = questions[currentQuestionIndex].explanation;
        explanationElement.style.display = 'block';
        
        // Enable next button
        nextBtn.disabled = false;
    }

    // Show Hint Function
    function showHint() {
        hintBtn.disabled = true;
        hintsUsed++;
        
        const currentQuestion = questions[currentQuestionIndex];
        alert(`Hint: ${currentQuestion.hint}`);
    }

    // Next Question Function
    function nextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // Show Results Function
    function showResults() {
        clearInterval(timer);
        
        // Calculate total time spent
        const totalTime = Math.floor((new Date().getTime() - quizStartTime) / 1000);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timeSpentElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Calculate percentage
        const percentage = Math.round((score / questions.length) * 100);
        percentageElement.textContent = percentage;
        scoreElement.textContent = score;
        totalElement.textContent = questions.length;
        
        // Set feedback based on score
        let feedbackText = '';
        let feedbackClass = '';
        
        if (percentage >= 90) {
            feedbackText = "Excellent! You're a Python expert!";
            feedbackClass = "excellent";
        } else if (percentage >= 70) {
            feedbackText = "Good job! You know Python well!";
            feedbackClass = "good";
        } else if (percentage >= 50) {
            feedbackText = "Not bad! Keep practicing!";
            feedbackClass = "good";
        } else {
            feedbackText = "Keep studying! You'll get better!";
            feedbackClass = "poor";
        }
        
        feedbackElement.textContent = feedbackText;
        feedbackElement.className = `feedback ${feedbackClass}`;
        
        // Show results screen
        quizScreen.classList.add('hide');
        resultsScreen.classList.remove('hide');
    }

    // Review Answers Function
    function reviewAnswers() {
        // This would show a detailed review of all questions with correct/incorrect answers
        alert("Review feature would show each question with your answer and the correct answer.");
        // In a full implementation, this would navigate to a review screen
    }
});

