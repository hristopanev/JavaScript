function solve() {


    let coursesPrice = {
        'JS-Fundamentals': 170,
        'JS-Advanced': 180,
        'JS-Applications': 190,
        'JS-Web': 490
    };

    let sum = 0;
    let courses = [];

    let fundamentals = document.querySelectorAll('input')[0];
    let advanced = document.querySelectorAll('input')[1];
    let app = document.querySelectorAll('input')[2];
    let web = document.querySelectorAll('input')[3];

    let onside = document.querySelectorAll('input')[4];
    let online = document.querySelectorAll('input')[5];

    let ul = document.querySelectorAll('.courseBody ul')[1];

    let btn = document.querySelector('button');

    btn.addEventListener('click', function () {

        if (fundamentals.checked && advanced.checked) {
            coursesPrice['JS-Advanced'] *= 0.9;
        }

        if (fundamentals.checked && advanced.checked && app.checked){
            coursesPrice['JS-Fundamentals'] *= 0.94;
            coursesPrice['JS-Advanced'] *= 0.94;
            coursesPrice['JS-Applications'] *= 0.94;
        }

        if (online.checked) {
            coursesPrice['JS-Fundamentals'] *= 0.94;
            coursesPrice['JS-Advanced'] *= 0.94;
            coursesPrice['JS-Applications'] *= 0.94;
            coursesPrice['JS-Web'] *= 0.94;
        }

        if (fundamentals.checked) {
            courses.push('JS-Fundamentals');
            sum += coursesPrice['JS-Fundamentals'];
        }

        if (advanced.checked) {
            courses.push('JS-Advanced');
            sum += coursesPrice['JS-Advanced'];
        }

        if (app.checked) {
            courses.push('JS-Applications');
            sum += coursesPrice['JS-Applications'];
        }

        if (web.checked) {
            courses.push('JS-Web');
            sum += coursesPrice['JS-Web'];
        }

        if (courses.length === 4){
            courses.push('HTML and CSS')
        }

        for (let i = 0; i > courses.length; i++){
            let li = document.createElement('li');
            li.textContent = courses[i];
            ul.appendChild(li);
        }

        document.querySelector('.courseFoot p').textContent = `Cost: ${Math.floor(sum).toFixed(2)} BGN`

    })
}