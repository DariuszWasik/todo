import { allTodosArr } from "./todo";
import { createTodoCard, container } from "./DOM-todoCard";
import { format } from "date-fns";
import { add } from "date-fns";
import { isBefore } from "date-fns";
import { isAfter } from "date-fns";
import { giveTodoCardButtonsFunctionality } from "./todoCardActions";



const allBtn = document.querySelector('.all')
const todayBtn = document.querySelector('.today')
const importantBtn = document.querySelector('.important')
const weekBtn = document.querySelector('.this-week')
const overdueBtn = document.querySelector('.overdue')

const mainHeader = document.querySelector('.main-header')


export { giveNavigationButtonsFunc, displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue }

function giveNavigationButtonsFunc(){
    console.log(allTodosArr, 'from naviButton')
      allBtn.addEventListener('click', () => {
        displayAllByDates();
        console.log(allBtn.textContent.trim())
        mainHeader.textContent = allBtn.textContent.trim()
    });
    todayBtn.addEventListener('click', () => {
        displayTodayTasks();
        mainHeader.textContent = todayBtn.textContent.trim()
    });
    importantBtn.addEventListener('click', () => {
        displayImportant();
        mainHeader.textContent = importantBtn.textContent.trim();
    });
    weekBtn.addEventListener('click', () => {
        displayWeek();
        mainHeader.textContent = weekBtn.textContent.trim();
    })
    overdueBtn.addEventListener('click', () => {
        displayOverdue();
        mainHeader.textContent = overdueBtn.textContent.trim()
    })
}



function displayAllByDates() {
    // make a copy so the orginal allTodosArr stays unchanged
    const copy = allTodosArr.slice()
    copy.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    console.log(allTodosArr, 'posortowane allTodosArr', copy, 'copy posortowane');
    container.innerHTML =''
    copy.forEach(el => createTodoCard(el))
    giveTodoCardButtonsFunctionality()
}


function displayTodayTasks() {
    console.log(allTodosArr, format(new Date(), 'eee, dd MMM yyy'))
    // make a copy so the orginal allTodosArr stays unchanged
    const copy = allTodosArr.slice();
    const filtered = copy.filter(a => a.dueDate == format(new Date(), 'eee, dd MMM yyy'));
    console.log(filtered)
    container.innerHTML =''
    filtered.forEach(el => createTodoCard(el))
    giveTodoCardButtonsFunctionality()
}


function displayImportant(){
    const filtered = allTodosArr.filter(a => a.priority == 'high');
    container.innerHTML =''
    filtered.forEach(el => createTodoCard(el))
    giveTodoCardButtonsFunctionality();
}

function displayWeek() {
    const filtered = []
    allTodosArr.filter(a => {
        if ((isBefore(new Date(a.dueDate), add(new Date(), {days: 8}))) && (isAfter(new Date(a.dueDate), add(new Date(), {days: -1})))) {
            filtered.push(a)
        }})
        console.log(allTodosArr)
        container.innerHTML =''
        filtered.forEach(el => createTodoCard(el))
        giveTodoCardButtonsFunctionality();
    }
    
function displayOverdue() {
    const filtered = []
    allTodosArr.filter(a => {
        if ((isBefore(new Date(a.dueDate), add(new Date(), {days: -1})))) {
            filtered.push(a)
        }})
        container.innerHTML =''
        filtered.forEach(el => createTodoCard(el))
        giveTodoCardButtonsFunctionality()
}