function addSticker() {
    let title = document.querySelector('.title').value;
    let content = document.querySelector('.content').value;
    let stickerList = document.getElementById('sticker-list');

    if (title && content) {
        createNote();
        reset();
    }

    function createNote() {
        let li = document.createElement('LI');
        li.className = 'note-content';

        let a = document.createElement('A');
        a.className = 'button';
        a.innerHTML = 'x';

        a.addEventListener('click', ()=>{
            li.remove();
			console.log(li);
        });

        let h = document.createElement('H2');
        h.innerHTML = title;

        let hr = document.createElement('hr');

        let p = document.createElement('p');
        p.innerHTML = content;

        li.appendChild(a);
        li.appendChild(h);
        li.appendChild(hr);
        li.appendChild(p);

        stickerList.appendChild(li);
    }

    function reset() {
        document.querySelector('.title').value = '';
        document.querySelector('.content').value = '';
    }
}