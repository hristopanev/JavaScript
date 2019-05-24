function solve() {
    let searchBtn = document.getElementById('searchBtn');

    var input, filter, table, tr, td, i, txtValue;
    table = document.getElementsByClassName("container");
    tr = document.getElementsByTagName("tr");

    searchBtn.addEventListener('click', function () {
        input = document.getElementById("searchField");
        filter = input.value.toUpperCase();
        for (i = 2; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            if (td) {
                for (let j = 0; j < td.length; j++) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].classList.add('select');
                    } else {
                    }
                }
            }
        }
        input.value = "";
    })
}