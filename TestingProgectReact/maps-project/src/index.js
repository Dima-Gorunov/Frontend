import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// функция фильтрации по выбранному диапазону
function filterCourses(courses, requiredRange) {

    if (requiredRange[0] === null) {
        requiredRange[0] = 0
    }
    if (requiredRange[1] === null) {
        requiredRange[1] = Infinity
    }
    for (let i in courses) {
        if (courses[i].prices[0] === null) {
            courses[i].prices[0] = 0
        }
        if (courses[i].prices[1] === null) {
            courses[i].prices[1] = Infinity
        }
    }

    console.log(requiredRange)
    console.log("before:")
    console.log(courses)

    console.log("after filter")

    if (requiredRange[0] === 0 && requiredRange[1] === Infinity) {
        return courses
    }
    if (requiredRange[1] === Infinity) {
        return courses.filter(e => e.prices[0] >= requiredRange[0]
            || e.prices[1] >= requiredRange[0]
        )
    } else {
        if (requiredRange[1] !== Infinity) {
            return courses.filter(e => e.prices[0] >= requiredRange[0] && e.prices[0] <= requiredRange[1]
                || e.prices[1] >= requiredRange[0] && e.prices[1] < requiredRange[1] && e.prices[0] >= requiredRange[0] && e.prices[0] <= requiredRange[1]
                || e.prices[0] >= requiredRange[0] && e.prices[1] >= requiredRange[1] && e.prices[1] >= requiredRange[0] && e.prices[1] < requiredRange[1] && e.prices[0] >= requiredRange[0] && e.prices[0] <= requiredRange[1]
                || e.prices[0] === 0 && e.prices[1] === Infinity && e.prices[0] >= requiredRange[0] && e.prices[1] >= requiredRange[1] && e.prices[1] >= requiredRange[0] && e.prices[1] < requiredRange[1] && e.prices[0] >= requiredRange[0] && e.prices[0] <= requiredRange[1]
                || e.prices[0] <= requiredRange[1] && e.prices[1] === Infinity
                || e.prices[0] <= requiredRange[0] && e.prices[1] >= requiredRange[1]
            )
        }
    }
    return []
}

//функция сортировки по цене
function sortPrice(courses) {
    // тут можно было только по первой или только по второй
    // но так вроде и по первой и по второй +- ровно отсортировал
    return courses.sort((a, b) => (a.prices[0] - b.prices[0]) || (a.prices[1] - b.prices[1]))
}

console.log(filterCourses(courses, [1000, Infinity]));

console.log(sortPrice(courses))

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
