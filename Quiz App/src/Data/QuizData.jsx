import React from 'react'

const QuizData = [
    
    {
        question: "What will `console.log(typeof NaN)` return in JavaScript?",
        options: [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to prevent the modification of a variable in JavaScript?",
        options: [
            "let",
            "const",
            "var",
            "static"
        ],
        answer: 1
    },
    {
        question: "Which function is used to execute a piece of JavaScript code after a specified delay?",
        options: [
            "setTimeout()",
            "setInterval()",
            "delay()",
            "timeout()"
        ],
        answer: 0
    },
    {
        question: "Which JavaScript array method is used to create a new array with elements that pass a certain test?",
        options: [
            "map()",
            "filter()",
            "forEach()",
            "reduce()"
        ],
        answer: 1
    },


    {
        question: "What does the `useEffect` hook do in React?",
        options: [
            "Handles state updates",
            "Performs side effects in function components",
            "Replaces Redux",
            "Modifies the DOM directly"
        ],
        answer: 1
    },
    {
        question: "Which of the following is used to pass data from a parent to a child component in React?",
        options: [
            "State",
            "Props",
            "Context API",
            "Redux"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of React Router?",
        options: [
            "To handle navigation in a React app",
            "To manage component state",
            "To fetch data from APIs",
            "To optimize component rendering"
        ],
        answer: 0
    }
];

export default QuizData;
