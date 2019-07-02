function addProduct() {

    let product = document.querySelector('input[type="text"]');
    let price = document.querySelector('input[type="number"]');

    if (product.value !== '' && price.value !== ''){
        let statPrice = document.querySelector('input[type="number"]').value;

        let productList = document.getElementById('product-list');
        let tr = document.createElement('tr');
        let tdProduct = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdProduct.textContent = product.value;
        tdPrice.textContent = price.value;
        tr.appendChild(tdProduct);
        tr.appendChild(tdPrice);
        productList.appendChild(tr);

        let totalPrice = document.querySelector("#bill > tfoot > tr > td:nth-child(2)").innerHTML;
        let tableTotalPrice = document.querySelector("#bill > tfoot > tr > td:nth-child(2)");
        currentPrice = +totalPrice + +statPrice;

        tableTotalPrice.textContent = currentPrice;
    }
    product.value = '';
    price.value = '';
}