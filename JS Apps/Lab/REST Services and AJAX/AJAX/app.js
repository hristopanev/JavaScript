(function () {
    const repostList = document.getElementById('repos-list');
    const statusChecker = {
        isSuccess: (status) => status === 200,
    };

    const parseRepo = ({html_url, full_name}) => {
        return {link: html_url, name: full_name};
    };

    const toDomElement = ({name, link}) => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.href = link;
        linkItem.innerHTML = name;
        listItem.appendChild(linkItem);
        return listItem
    }

    const handleResponse = function () {
        if (this.readyState < 4) {
            return;
        }

        if (!statusChecker.isSuccess(this.status)){
            return;
        }

        JSON.parse(this.response)
            .map(parseRepo)
            .map(toDomElement)
            .forEach(el => {
                repostList.appendChild(el);
            })
    };

    const handleClick = (ev) => {

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = handleResponse;
        xhr.open("GET",
            "https://api.github.com/users/testnakov/repos", true);
        xhr.send();

        ev.preventDefault();
        return false;
    };

    document.getElementById('btn-send')
        .addEventListener('click', handleClick)
}());