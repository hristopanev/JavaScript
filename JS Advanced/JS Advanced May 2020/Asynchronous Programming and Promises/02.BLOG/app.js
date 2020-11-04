const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com'
const loadPostsBtn = document.getElementById("btnLoadPosts");
const postsSelectEl = document.getElementById("posts");
const viewPostsBtnEl = document.getElementById("btnViewPost");
const postTittleEl = document.getElementById("post-title");
const postBodyEl = document.getElementById("post-body");
const postCommentUlEl = document.getElementById("post-comments");

function ffetch(url, options) {
    options = options || {};

    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve({
                        json: () => Promise.resolve(JSON.parse(request.responseText))
                    });
                    return;
                    
                }
                reject(new Error(request.status));
            }
        }
        request.open(options.method || 'GET', url);
        request.send(options.body);
    });
}


function loadPosts() {
   ffetch(`${BASE_URL}/posts.json`).then(res => res.json())
    .then(posts => {
        Object.entries(posts).forEach(([key, value]) => {
            const o = document.createElement('option');
            o.value = key;
            o.textContent = value.title;
            postsSelectEl.appendChild(o);
        })
    });
}


function attachEvents() {
    loadPostsBtn.addEventListener('click', loadPosts)
}

attachEvents();

// https://blog-apps-c12bf.firebaseio.com/