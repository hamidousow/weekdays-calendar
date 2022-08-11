const calendar = document.getElementById('calendar');
const weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const fullDate = document.querySelectorAll('.full-date');
let countDay = 0;

const dateObject = new Date();
const day = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();

// const dDay = new Date();

function createDays() {
    let dayLink = document.createElement('a');
    dayLink.classList.add('calendar__day');
    calendar.append(dayLink);
}

function initDate() {
    for(let i = 0; i < fullDate.length; i++) {        
        fullDate[i].innerText = (day + countDay) + '/' + (month + 1) + '/' + year;
        ++countDay;
    }
}

for(let i = 0; i < weekDays.length; i++) {
    createDays();  
}

initDate();

// console.log(dDay.toLocaleDateString('fr'));