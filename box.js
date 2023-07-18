// LOAD HOME PAGE

function loadPage() {
    const box = document.getElementById('box');

    fetch('home.html')
        .then(response => response.text())
        .then(html => {
            box.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
    });
}

loadPage();

function loadPost(element) {
    const id = element.id;
    const link = `./posts/post-${id}.html`

    fetch(link)
        .then(response => response.text())
        .then(html => {
            box.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
    });
}

