function toggle() {

    let button = document.querySelector('.button');
    let element = document.getElementById('extra');

    if (element.style.display === 'none'){
        element.style.display = 'block';
        button.textContent = 'Less';
    }else {
        element.style.display = 'none';
        button.textContent = 'More';
    }
}