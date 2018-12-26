function addItem() {
    let list = document.createElement("ul");
    let firstLi = document.createElement("li");
    firstLi.textContent = "Peter";
    list.appendChild(firstLi);
    let secondLi = document.createElement("li");
    secondLi.innerHTML = "<b>Maria</b>";
    list.appendChild(secondLi);
    document.body.appendChild(list);

}