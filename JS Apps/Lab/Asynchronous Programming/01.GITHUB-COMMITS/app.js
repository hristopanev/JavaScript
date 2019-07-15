function loadCommits() {
    // Try it with Fetch API
    let userName = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let contentDiv = document.getElementById('commits');

    contentDiv.innerHTML = 'Loading...';
    fetch(`https://api.github.com/repos/${userName}/${repo}/commits`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response);
            }
            return response.json();
        })
        .then(data => {
            contentDiv.innerHTML = '';
            let messages = data.map((item) => {
                return item.commit.message;
            });

            for (const key of messages) {
                contentDiv.innerHTML += `<h1>${key}<h1>`
            }

            // for (const key in messages) {
            //     if (messages.hasOwnProperty(key)) {
            //         const  message = messages[key];
            //         contentDiv.innerHTML += `<h1>${message}<h1>`
            //     }
            // }
        })
        .catch(err => {
            contentDiv.innerHTML = 'not exist';
            console.log("Custom Error", err)
        })
}